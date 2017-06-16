import React from 'react';
import PropTypes from 'prop-types';
import Profile from './Profile';

let Player = (props) => {
	return (
		<div className="column">
			<h1 className="l_partisipant-header">{ props.label }</h1>
			<h3 style={{ textAlign: 'center' }}>Score : { props.score }</h3>

			<Profile info={ props.profile }></Profile>

		</div>
	)
};

Player.propTypes = {
	label: PropTypes.string.isRequired,
	score: PropTypes.number.isRequired,
	profile: PropTypes.object.isRequired
}

export default Player;

