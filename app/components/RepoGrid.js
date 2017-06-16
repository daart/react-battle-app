import React from 'react';
import PropTypes from 'prop-types';

const RepoGrid = (props) => {
	return (
		<div className="popular-list__wrapper">
			<ul className="popular-list">
				{ props.repos.map((el, index) => {
					return (
						<li key={el.name} className="popular-item">
							<div className="popular-rank">
								# {index + 1}
							</div>

							<ul className="space-list-items">
								<li>
									<img 
										className="avatar"
										src={ el.owner.avatar_url } 
										alt={ 'Avatar for ' + el.owner.login }
									/>
								</li>
								<li>
									<a href={ el.html_url } >{ el.name }</a>
								</li>
								<li>
									@{ el.owner.login }
								</li>
								<li>
									{ el.stargazers_count } Starrrz
								</li>
							</ul>
						</li>
					);
				}) }
			</ul>
		</div>
	)
}

RepoGrid.propTypes = {
	repos: PropTypes.array.isRequired
}

export default RepoGrid;