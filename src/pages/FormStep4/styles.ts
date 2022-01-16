import styled from "styled-components";

export const Container = styled.div`

    .error{
        background-color: #ccc;
        color: red;
        border: 1px solid red;
        border-radius: 5px;
        padding: 10px;
        box-shadow: 0px 0px 3px red;
        text-align: center;
        margin-bottom: 10px;
    }
    p {
        font-size: 13px;
        color: #16195C;
    }
    h1 {
        margin: 0;
        padding: 0;
        font-size: 26px;
    }
    hr {
        height: 1px;
        border: 0;
        background-color: #16195C;
        margin: 30px 0;
    }

    label {
        font-size: 13px;
        display: block;
        margin-bottom: 20px;

        input {                
            display: block;
            margin-top: 7px;
            box-sizing: border-box;
            width: 100%;
            padding: 10px 10px;
            border: 2px solid #25CD89;
            border-radius: 10px;
            color: #FFF;
            outline: 0;
            font-size: 15px;
            background-color: #333;
        }
    }

    button {
        background-color: #25CD89;
        color: #FFF;
        font-size: 14px;
        font-weight: bold;
        padding: 10px 40px;
        border: 2px solid #25CD89;
        border-radius: 30px;
        cursor: pointer;
        margin-top: 30px;
        display: block;
        margin-bottom: 30px;        
        &:hover{
            background-color: #fff;
            color: #25CD89;
            border: 2px solid #25CD89;
        }
    }

    .backButton {
        margin-top: 30px;
        font-size: 16px;
        text-decoration: none;
        padding: 10px 40px;
        border: 2px solid #16195C;
        font-weight: bold;
        color: #16195C;
        border-radius: 30px;
        &:hover{
            background-color: #16195C;
            color: #fff;
            border: 2px solid #16195C;
        }
    }
`;