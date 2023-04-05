import styled from 'styled-components';

const Heading = styled.h1`
	margin: 84px 0 24px;
	color: ${(props) => props.theme.colors.textColor};
	font-size: ${(props) => props.theme.fontsSizes.lg};
`;

export default Heading;
