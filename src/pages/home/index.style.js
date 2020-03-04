import styled from "styled-components";

const StylesHomePage = styled.div`
    padding: 40px 0;
    min-height: 80vh;
    width: 100%;
    display: block;
    .home--page {
        &__header {
            overflow: auto;
            white-space: nowrap;
        }
        &__ingredients--list {
            margin: 20px 0;
            border-top: 1px solid #ddd;
            border-bottom: 1px solid #ddd;
            padding-top: 15px;
            padding-bottom: 5px;
            display: flex;
            width: 100%;
            justify-content: space-between;
            align-items: center;
        }
        &__ingredients--scroll {
            overflow: auto;
            white-space: nowrap;
            display: inline-block;
            width: calc(100% - 120px);
            margin-bottom: 10px;
        }

        &__ingredients--button {
            display: inline-block;
            margin-bottom: 10px;
            width: 120px;
            button {
                font-weight: bold;
                font-size: 14px;
                padding: 10px 0;
                text-align: center;
                cursor: pointer;
                display: block;
                border: 0;
                width: 100%;
                height: 100%;
                outline: none;
                transition: all 0.3s ease-in;
                &:hover {
                    opacity: 0.7;
                    transition: all 0.3s ease-in;
                }
            }
        }
    }
`;

export default StylesHomePage;
