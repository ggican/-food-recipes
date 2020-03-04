import styled from "styled-components";

const StyleLabel = styled.div`
    display: inline-block;
    padding: 10px 12px;
    margin-right: 10px;
    border: 1px solid #ddd;
    border-radius: 8px;
    .label {
        display: flex;
        justify-content: space-between;
        align-items: center;
        &__text {
            font-size: 12px;
        }
        &__close {
            margin-left: 16px;
            padding: 7px;
            border-radius: 8px;
            border: 1px solid #ddd;
            outline: none;
            cursor: pointer;
        }
    }
`;

export default StyleLabel;
