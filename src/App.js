import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader';

import IMAGES from './_DATA.json';

import GlobalStyle from './base-styles/globalStyle';
import Container from './components/Container';
import Gallery from './components/Gallery';
import Lightbox from './components/Lightbox';

const App = () => {
	return (
		<Fragment>
			<GlobalStyle />
			<Container>
				<Switch>
					<Route
						exact
						path="/"
						render={ props =>
							<Gallery { ...props } images={ IMAGES } />
						}
					/>
					<Route
						path="/images/:id"
						render={ props =>
							<Lightbox { ...props } images={ IMAGES } />
						}
					/>
				</Switch>
			</Container>
		</Fragment>
	);
};

export default hot( module )( App );
