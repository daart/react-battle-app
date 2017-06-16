import React from 'react';
import PropTypes from 'prop-types';

let styles = {
	textAlign: 'center',
	fontSize: '30px'
};

class Loading extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			text: props.text
		};

	}

	componentDidMount() {
		let stopper = this.props.text + '...';

		this.interval = window.setInterval(() => {
			if(this.state.text === stopper) {
				this.setState(() => {
					return {
						text: this.props.text
					}
				})
			} else {
				this.setState((prevState) => {
					return {
						text: prevState.text + '.'
					}
				})
			}

		}, this.props.speed );
	}

	componentWillUnmount() {
		window.clearInterval(this.interval);
	}

	render() {
		return (
			<div className="loading" style={ styles }>
				{ this.state.text }
			</div>
		)
	}
}

Loading.propTypes = {
	text: PropTypes.string.isRequired,
	speed: PropTypes.number.isRequired
};

Loading.defaultProps = {
	text: 'Loading',
	speed: 300 
};

export default Loading;