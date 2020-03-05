import styled from "styled-components";

const StylesHeader = styled.div`
    background-color: ${props => props.theme.header.default.background};
    border-bottom: 1px solid ${props => props.theme.header.default.borderColor};
    padding: 10px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
`;

export default StylesHeader;
