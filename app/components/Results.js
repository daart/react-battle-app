import React from 'react';
import queryString from 'query-string';
import api from '../utils/api';
import Link from 'react-router-dom';

import PlayerPreview from './PlayerPreview';
import Player from './Player';
import Loading from './Loading';

class Results extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			winner: null,
			loser: null,
			draw: null,
			error: null,
			loading: true
		}
	}

	componentDidMount() {
		let players = queryString.parse(this.props.location.search);

		api.battle([
			players.playerOneName,
			players.playerTwoName
		]).then((results) => {
			if(results === null) {
				return this.setState(() => {
					return {
						error: 'Please make sure that both players exist on a GitHub cuz there was an error!',
						loading: false
					}
				})
			}

			this.setState(() => {
				return {
					error: null,
					winner: results[0],
					loser: results[1],
					loading: false					
				}
			});

			console.log(results);
		});
	}

	render() {
		let { winner, loser, draw, error, loading } = this.state;

		if (loading === true) {
			return <Loading />
		} 
		
		if(error) {
			return (
				<div>
					<p>{error}</p>
					<Link to="/battle">get Back to Battle!</Link>
				</div>			
			)
		}

		return (
			<div className="row">
				<Player 
					label="Winner"
					score={ winner.score }
					profile={ winner.profile }
				/>

				<Player 
					label="Loser"
					score={ loser.score }
					profile={ loser.profile }
				/>

			</div>
		)
	}
}

export default Results;