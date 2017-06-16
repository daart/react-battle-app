import React from 'react';
import PropTypes from 'prop-types';

class PlayerInput extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			userName: ''
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);

	}

	handleSubmit(event) {
		event.preventDefault();

		this.props.onSubmit( this.props.id, this.state.userName )
	}

	handleChange(event) {
		let inputVal = event.target.value;

		this.setState(() => {
			return {
				userName: inputVal
			}
		});
	}

	render() {
		return (
			<div className="player_profile">
				<form className="column" onSubmit={ this.handleSubmit }>
					<label className="profile_header" htmlFor="userName" >
						{ this.props.label }
					</label>

					<input 
						id='userName'
						placeholder="github username" 
						type="text" 
						autoComplete="off" 
						value={ this.state.userName }	
						onChange={ this.handleChange }
					/>

					<button 
						type="submit" 
						className="btn btn-default"
						disabled={ !this.state.userName }
					>
						Submit 
					</button>
				</form>
			</div>
		);
	}
}

PlayerInput.propTypes = {
	id: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	onSubmit: PropTypes.func.isRequired
}

export default PlayerInput;