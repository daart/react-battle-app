import React from 'react';
import PropTypes from 'prop-types';

const SelectLanguage = (props) => {
	const langs = ['All', 'JS', 'Ruby', 'Python', 'Java', 'nodeJS'];

	return (
		<div>
			<nav>
				<ul className="langs">
					{ langs.map((lang, index) => {
						return (
							<li 
								key={`${lang}` + '-' + index}
								style={lang === props.selectedLang ? { color: '#d0021b' }: null }
								onClick={props.updateLanguage.bind(null, lang)} >
								{lang}
							</li>
						)}
					) }
				</ul>
			</nav>
		</div>
	)
};

SelectLanguage.propTypes = {
	selectedLang: PropTypes.string.isRequired,
	updateLanguage: PropTypes.func.isRequired
};

export default SelectLanguage;