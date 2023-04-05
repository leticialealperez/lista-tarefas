import styled from 'styled-components';

const Container = styled.div<React.CSSProperties>`
	display: ${(props) => props.display};
	align-items: ${(props) => props.alignItems};
	flex-direction: ${(props) => props.flexDirection};
`;

export default Container;
