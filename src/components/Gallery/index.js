import React from 'react';
import { Link } from 'react-router-dom';

import { Image, ImageFrame, Wrap } from './styles.js';

function Gallery( { images } ) {
	return (
		<Wrap>
			{ images.map( item => (
				<Link
					key={ item.id }
					to={ {
						pathname: `/images/${ item.id }`,
						// this is the trick!
						state: { modal: true },
					} }
				>
					<ImageFrame>
						<Image
							src={ `${process.env.PUBLIC_URL}/images/${ item.id }.jpg` }
							alt={ item.title }
						/>
					</ImageFrame>
				</Link>
			) ) }
		</Wrap>
	);
}

export default Gallery;
