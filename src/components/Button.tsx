import styled from 'styled-components';

const Button = styled.button`
	width: 50%;
	padding: 24px;
	font-weight: 700;
	background: ${(props) => props.theme.colors.secondary};
	color: ${(props) => props.theme.colors.textColor ?? '#ffff'};
	border-radius: ${(props) => props.theme.borderRadius.sm};
	margin: 12px 0 84px;
	border: none;
	cursor: pointer;
	font-size: ${(props) => props.theme.fontsSizes.md};
	transition: filter 0.2s;

	&:hover {
		filter: brightness(0.9);
	}

	@media (max-width: 800px) {
		width: 80%;
	}
`;

export default Button;
