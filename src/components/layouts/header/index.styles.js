import styled from "styled-components";

const StylesHeader = styled.div`
    background-color: ${props => props.theme.header.default.background};
    border-bottom: 1px solid ${props => props.theme.header.default.borderColor};
`;

export default StylesHeader;
