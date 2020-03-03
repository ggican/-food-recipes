import styled from "styled-components";

const StyleIngredients = styled.div`
    display: block;
    width: 100%;
    padding: 10px;
    background-color: #fff;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 3px 10px 5px;
    margin-bottom: 16px;
    cursor: pointer;
    transition: all 0.3s ease-in;
    /* border-radius: 8px; */
    border: 1px solid #f2f2f2;
    &:hover {
        transition: all 0.3s ease-in;
        background-color: #fafafa;
    }
    .ingredients {
        &--box {
            display: flex;
            width: 100%;
            flex-direction: column;
        }
        &__text {
            margin-bottom: 7px;
        }
        &__title {
            font-size: 16px;
            color: #4a4a4a;
            font-weight: 500;
        }
        &__caption {
            font-size: 12.2px;
            font-weight: normal;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.48;
            letter-spacing: 0.4px;
            font-weight: bold;
            color: #717171;
        }
        &__date {
            font-size: 14px;
            color: #4a4a4a;
            font-weight: 500;
        }
    }
`;

export default StyleIngredients;
