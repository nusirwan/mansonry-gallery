import styled from 'styled-components';

export const Wrap = styled.div`
    display: grid;
    grid-template-columns: repeat( 3, 200px );
    gap: 4px;
    columns: 4;
    column-gap: 0;
`
Wrap.displayName = 'Wrap';

export const ImageFrame = styled.div`
	width: 100%;
	height: auto;
`;
ImageFrame.displayName = 'ImageFrame';

export const Image = styled.img`
	max-width: 100%;
	max-height: 100%;
	object-fit: cover;
	object-position: center;
	vertical-align: middle;
`;
Image.displayName = 'Image';
