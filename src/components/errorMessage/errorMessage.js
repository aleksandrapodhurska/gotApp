import React from 'react';
import styled from 'styled-components';

const ErrorImg = styled.img`
    width: 100%;
`;

const Term = styled.span`
    font-weight: bold;
`;

const ErrorMessage = () => {
    return(
        <>
            <ErrorImg src={process.env.PUBLIC_URL + './img/error.jpg'} alt="error"></ErrorImg>
            <Term>Something went wrong...</Term>
        </>
    )
}


export default ErrorMessage;