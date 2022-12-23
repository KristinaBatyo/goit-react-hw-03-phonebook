import styled from '@emotion/styled';

export const PhonebookContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 400px;
    margin: 0 auto;
    padding: 20px;
    `;

export const PhonebookForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-bottom: 20px;
`;

export const PhonebookLabel = styled.label`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    margin-bottom: 10px;
`;

export const PhonebookInput = styled.input`
    width: 100%;
    padding: 5px;
    border: 1px solid #000;
    border-radius: 5px;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
    &:focus {
        outline: none;
    }
`;

export const PhonebookButton = styled.button`
    width: 100px;
    padding: 5px;
    height: 30px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
    border: none;
    cursor: pointer;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover,
    &:focus {
        background-color: #f5f5f5;
        transform: scale(1.03);
        outline: none;
`;

export const PhonebookTitle = styled.h2`
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 20px;
`;
