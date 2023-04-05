import styled from 'styled-components';

const CardStyled = styled.div`
	height: min-content;
	width: 50%;
	background: ${(props) => props.theme.colors.primary};
	color: ${(props) => props.theme.colors.textColor ?? '#ffff'};
	border-radius: 10px;
	margin-bottom: 20px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 24px;

	& > strong,
	small {
		width: 50%;
	}

	& > small {
		text-align: end;
	}

	@media (max-width: 800px) {
		width: 80%;
	}
`;

export default CardStyled;
