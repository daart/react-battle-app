const axios = require('axios');
const id = 'dc75e8ba0e67c38b1ca1';
const secret = 'ea3c0df48d6a349e7e3ba439af16d8e1643216d4';
const params = '?client_id=' + id + '&client_secret=' + secret;

let getProfile = (userName) => {
	let query = 'https://api.github.com/users/' + userName + params;
	return axios.get(query)
		.then((user) => {
			return user.data
		});
}

let getRepos = (userName) => {
	return axios.get('https://api.github.com/users/' + userName + '/repos' + params + '&per_page=100')
		.then((user) => {
			return user.data
		});
}

let getStarCount = (repos) => {
	return repos.reduce((prev, next) => {
		return prev + next.stargazers_count;
	}, 0);
}

let calculateScore = (profile, repos) => {
	let followers = profile.followers;
	let totalStars = getStarCount(repos);

	return (followers * 3) + totalStars;
}

let handleError = (error) => {
	console.warn(error);
	return null;
}

let getUserData = (player) => {
	return axios.all([
			getProfile(player),
			getRepos(player)
		]).then((data) => {
			let profile = data[0];
			let repos = data[1];

			return {
				profile,
				score: calculateScore(profile, repos)
			}
		});
}

let sortPlayers = (players) => {
	return players.sort((p1, p2) => {
		return p1.score - p2.score;
	})
}

module.exports = {
	battle: (players) => {
		return axios.all(players.map(getUserData))
			.then(sortPlayers)
			.catch(handleError)
	},

	fetchPopularRepos: (language) => {
		const encodedURI = window.encodeURI('https://api.github.com/search/repositories?q=stars:>1+language:' + language + '&sort=stars&order=desc&type=Repositories');

		return axios.get(encodedURI)
			.then((res) => {
				return res.data.items;
			});
	}
};
