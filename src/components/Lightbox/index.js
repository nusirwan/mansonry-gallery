import React, { Component } from 'react';

import { Image } from '../Gallery/styles.js';

import {
	Backdrop,
	LightboxStyle,
	OverFlowHidden,
	Wrap,
} from './styles.js';

class Lightbox extends Component {
	state = { imageSelected: {} }

	handleClose = event => {
		event.stopPropagation();
		this.props.history.goBack();
	};

	handleKeyPress = event => {

		// enter key
		if ( event.keyCode === 13 ) {
			event.preventDefault();
		}

		// escape key
		if ( event.keyCode === 27 ) {
			this.handleClose( event );
		}
	};

	componentWillMount() {
		let image = this.props.images[
			parseInt( this.props.match.params.id, 10 ) -1
		];

		// if ( !image ) return null;
		this.setState( { imageSelected: image } )

		document.addEventListener( 'keydown', this.handleKeyPress );
	}

	componentWillUnmount() {
		document.removeEventListener( 'keydown', this.handleKeyPress );
	}

	render() {
		return (
			<Wrap>
				<OverFlowHidden />
				<Backdrop onClick={ this.handleClose } />
				<LightboxStyle>
					<Image
						src={ `${ process.env.PUBLIC_URL }/images/${ this.state.imageSelected.id }.jpg` }
						alt={ this.state.imageSelected.title }
					/>
				</LightboxStyle>
			</Wrap>
		);
	}
}

export default Lightbox;
