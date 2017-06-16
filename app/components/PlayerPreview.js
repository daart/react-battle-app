import React from 'react';
import PropTypes from 'prop-types';

const PlayerPreview = (props) => {
	return (
		<div className="column">

			<h2 className="userName">@ { props.userName }</h2>
			<img 
				className="avatar"
				src={ props.avatar } 
				alt={ 'Avatar for ' + props.userName }
			/>

			{ props.children }

		</div>
	)
};

PlayerPreview.propTypes = {
	avatar: PropTypes.string.isRequired,
	userName: PropTypes.string.isRequired
};

export default PlayerPreview;

