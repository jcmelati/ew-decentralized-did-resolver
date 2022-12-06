import styled from 'styled-components'

export const StyledForm = styled.form`
    margin: 20px auto;
    width: 100%;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 4px;

    label {
        display: block;
        margin-bottom: 10px;
    }

    input {
        width: 60%;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 4px;
    }

    button {
        margin-top: 20px;
        padding: 10px 20px;
        background-color: #333;
        color: #fff;
        border: none;
        border-radius: 4px;
    }
`

export const TextArea = styled.textarea`
    width: 100%;
    height: 500px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 4px;
    resize: none;
`
