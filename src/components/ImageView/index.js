import React from 'react';

import { Image } from '../Gallery/styles';

const ImageView = ( { images, match } ) => {
	let image = images[ parseInt( match.params.id, 10 ) -1 ];

	if ( ! image ) return <div>Image not found</div>;

	return (
		<div>
			<h1>{ image.title }</h1>
			<Image
				src={ `${ process.env.PUBLIC_URL }/images/${ image.id }.jpg` }
				alt={ image.title }
			/>
		</div>
	);
}

export default ImageView;
