import styled from "styled-components";

const StyleRecipes = styled.div`
    display: block;
    width: 100%;
    margin: 12px 0;
    .recipes {
        border: 1px solid #ddd;
        border-radius: 8px;
        padding-bottom: 10px;
        background: #f7f7f7;
        &__title {
            border-top-left-radius: 8px;
            border-top-right-radius: 8px;

            padding: 16px 16px;
            font-weight: bold;
            font-size: 18px;
        }
        &__list-ingredients {
            border-bottom: 1px solid #ddd;
        }
    }
`;

export default StyleRecipes;
