import React, { Component, Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader';

import IMAGES from './_DATA.json';

import GlobalStyle from './base-styles/globalStyle';
import Container from './components/Container';
import Gallery from './components/Gallery';
import Lightbox from './components/Lightbox';

class App extends Component {
	previousLocation = this.props.location;

	componentWillUpdate( nextProps ) {
		let { location } = this.props;

		// set previousLocation if props.location is not Lightbox
		if ( nextProps.history.action !== 'POP' &&
			( ! location.state || ! location.state.lightbox )
		) {
			this.previousLocation = this.props.location;
		}
	}

	render() {
		let { location } = this.props;

		let isLightbox = !! (
			location.state &&
			location.state.lightbox &&
			this.previousLocation !== location
		); // not initial render

		return (
			<Fragment>
				<GlobalStyle />
				<Container>
					<Switch location={ isLightbox ? this.previousLocation : location }>
						<Route
							exact
							path="/"
							render={ props =>
								<Gallery { ...props } images={ IMAGES } />
							}
						/>
					</Switch>
					{ isLightbox
						? <Route
							path="/images/:id"
							render={ props =>
								<Lightbox { ...props } images={ IMAGES } />
							}
						/>
						: null
					}
				</Container>
			</Fragment>
		);
	}
}

export default hot( module )( App );
