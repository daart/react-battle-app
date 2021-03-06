import React from 'react';
import PropTypes from 'prop-types';

import PlayerPreview from './PlayerPreview';

let Profile = (props) => {
	let info = props.info;

	return (
		<PlayerPreview 
			avatar={ info.avatar_url } 
			userName={ info.login } >
			
			<ul className="space-list-items">
				{ info.name && <li>{ info.name }</li> }
				{ info.location && <li>{ info.location }</li> }
				{ info.company && <li>{ info.company }</li> }
				<li>Followers: { info.followers }</li>
				<li>Following: { info.following }</li>
				<li>Public Repos: { info.public_repos }</li>
				{ info.blog && <li><a href={ info.blog }>{ info.blog }</a></li> }

			</ul>
		</PlayerPreview>
	)
};

Profile.propTypes = {
	info: PropTypes.object.isRequred,
}

export default Profile;

