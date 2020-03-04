import styled from "styled-components";

const StyleIngredients = styled.a`
    display: inline-block;
    padding: 10px 16px;
    background-color: #fff;
    min-width: 150px;
    margin-bottom: 16px;
    cursor: pointer;
    border-radius: 8px;
    transition: all 0.3s ease-in;
    border: 1px solid #f2f2f2;
    margin-right: 12px;

    ${({ isRecipes }) =>
        isRecipes &&
        `
        border-radius: 0;
        display: block;
        width: 100%;
        border-top: 1px solid #ddd;
        border-left: none;
        border-right: none;
        border-bottom: none;
        margin-bottom: 0;
        cursor: default;
   `}

    &:hover {
        transition: all 0.3s ease-in;
        background-color: #fafafa;
    }

    ${({ isDisabled }) =>
        isDisabled &&
        `
        background-color: rgba(220, 87, 87, 0.25098039215686274);
        cursor: default;
        &:hover {
            background-color: rgba(220, 87, 87, 0.25098039215686274);
        }
   `}

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
            &__exp {
                color: red;
            }
        }
    }
`;

export default StyleIngredients;
