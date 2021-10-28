import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		outline: 0;
	}

	body {
		background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 100%), #0A863E;
		color: white;
		-webkit-font-smoothing: antialiased;
	}

	h1, h2, h3, h4, h5, h6 {
		font-family: 'Poppins', sans-serif;
	}

	body, input, button {
		font-family: 'Roboto', sans-serif;
		font-size: 16px;
	}

	button {
		cursor: pointer;
	}

	input[type='number'] {
    -moz-appearance:textfield;
	}

	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
			-webkit-appearance: none;
	}

	.action-button {
		cursor: pointer;
		border: 0;
		background-color: #c94217;
		font-weight: 700;

		transition: 0.3s;
	}
`;

export const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 40px;
`;
