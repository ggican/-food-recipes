import styled from "styled-components";

const StylesHomePage = styled.div`
    padding: 70px 0;
    min-height: 100vh;
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
        &__date {
            position: fixed;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            width: 100%;
            display: flex;
            height: 100%;
            background: rgba(221, 221, 221, 0.6);
            justify-content: center;
            align-items: center;

            &__box {
                background: #fff;
                border: 1px solid #ddd;
                border-radius: 8px;
                padding: 10px;
                button.save {
                    display: block;
                    width: 100%;
                    padding: 7px;
                    background: #fff;
                    border: none;
                    outline: none;
                    cursor: pointer;
                    font-size: 14px;
                    font-weight: bold;
                    color: #2196f3;
                    transition: all 0.3s ease;
                    &:hover {
                        transition: all 0.3s ease;
                        opacity: 0.6;
                    }
                }
            }
        }
    }
`;

export default StylesHomePage;
