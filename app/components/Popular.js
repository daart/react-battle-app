import React from 'react';

import SelectLanguage from './SelectLanguage';
import RepoGrid from './RepoGrid';
import Loading from './Loading';
import api from '../utils/api';

class Popular extends React.Component {
	constructor(props) {
		super(props);

		this.updateLanguage = this.updateLanguage.bind(this);

		this.state = {
			selectedLang: 'All',
			repos: null
		};
	}
	
	componentDidMount() {
		this.updateLanguage( this.state.selectedLang );
	}

	render() {

		return (
			<div>
				<SelectLanguage 
					updateLanguage={ this.updateLanguage }
					selectedLang={ this.state.selectedLang } 
				/>
				
				{ !this.state.repos ? <Loading text="Fetching " speed={100} /> : <RepoGrid repos={ this.state.repos } /> }
				
			</div>
		)
	}

	updateLanguage(lang) {
		this.setState(() => {
			return {
				selectedLang: lang,
				repos: null
			}
		});

		api.fetchPopularRepos( lang )
			.then((repos) => {
				this.setState(() => {
					return {
						repos: repos
					}
				});
			});
	}
}

export default Popular;