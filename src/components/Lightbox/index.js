import React, { Component } from 'react';

import { Image } from '../Gallery/styles.js';

import {
	Backdrop,
	LightboxStyle,
	OverFlowHidden,
	Wrap,
} from './styles.js';

class Lightbox extends Component {
	state = {
		imageSelected: {},
	}

	componentWillMount() {
		let image = this.props.images[
			parseInt( this.props.match.params.id, 10 ) -1
		];

		// if ( !image ) return null;
		this.setState( {
			imageSelected: image,
		} )
	}

	render() {
		return (
			<Wrap>
				<OverFlowHidden />
				<Backdrop />
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
