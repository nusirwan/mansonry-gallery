import styled, { createGlobalStyle } from 'styled-components';

// disable scrollbar if modal showing
export const OverFlowHidden = createGlobalStyle`
    body {
        overflow: hidden;
    }
`

export const Wrap = styled.div`
	display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
	height: 100%;
`
Wrap.displayName = 'Wrap';

export const Backdrop = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba( 0, 0, 0, 0.8 );
`
Backdrop.displayName = 'Backdrop';

export const LightboxStyle = styled.div`
    display: inline-flex;
	position: relative;
	height: 80vh;
	max-width: 80vw;
`
LightboxStyle.displayName = 'LightboxStyle';
