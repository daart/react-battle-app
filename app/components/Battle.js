import React from 'react';
import { Link } from 'react-router-dom';

import PlayerInput from './PlayerInput';
import PlayerPreview from './PlayerPreview';

class Battle extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			playerOneName: '',
			playerTwoName: '',
			playerOneImage: null,
			playerTwoImage: null
		}
		
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleReset = this.handleReset.bind(this);
	}

	handleSubmit(id, userName) {
		this.setState(() => {
			let newState = {};
			newState[id + 'Name'] = userName;
			newState[id + 'Image'] = 'https://github.com/' + userName + '.png?size=250';

			return newState;
		});
	}

	handleReset(id) {
		this.setState(() => {
			let newState = {};
			newState[id + 'Name'] = '';
			newState[id + 'Image'] = null;

			return newState;
		});
	}

	render() {
		let match = this.props.match;
		let playerOneName = this.state.playerOneName;
		let playerTwoName = this.state.playerTwoName;
		let playerOneImage = this.state.playerOneImage;
		let playerTwoImage = this.state.playerTwoImage;

		return (
			<div className="l_battlefield">
				<div className="row">

					{!playerOneName && 
						<PlayerInput 
							id="playerOne" 
							label="Player One" 
							onSubmit={ this.handleSubmit } 
						/>
					}

					{ playerOneImage !== null && 
						<PlayerPreview 
							avatar={ playerOneImage }
							userName={ playerOneName } >
							
								<button
									className="reset"
									onClick={ this.handleSubmit.bind(null, 'playerOne') }	
								>
									Reset
								</button>

						</PlayerPreview>
					}

					{!playerTwoName && 
						<PlayerInput 
							id="playerTwo" 
							label="Player Two" 
							onSubmit={ this.handleSubmit } 
						/>
					}

					{ playerTwoImage !== null && 
						<PlayerPreview 
							avatar={ playerTwoImage }
							userName={ playerTwoName } >

								<button
									className="reset"
									onClick={ this.handleSubmit.bind(null, 'playerTwo') }	
								>
									Reset
								</button>
							
						</PlayerPreview>
					}
				</div>

				{ playerOneImage && playerTwoImage && 
					<Link 
						className="btn"
						to={{
							pathname: match.url + '/results',
							search: `?playerOneName=` + playerOneName + `&playerTwoName=` + playerTwoName
						}}>
							Battle
					</Link>
				}

			</div>
		)
	}
}

export default Battle;