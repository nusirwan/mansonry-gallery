import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader';

import GlobalStyle from './base-styles/globalStyle';
import Container from './components/Container';

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
							<h1 { ...props }>Mansonry Gallery</h1>
						}
					/>
				</Switch>
			</Container>
		</Fragment>
	);
};

export default hot( module )( App );
