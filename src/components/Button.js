import React from 'react';
import styled from 'styled-components';

const Button = (props) => {
    return ( 
        <ButtonWrapper>
            <p>{props.children}</p>
            <div className={`buttonBackground ${props.isYellow ? "yellow" : null}`}></div>
        </ButtonWrapper>
     );
}

export default Button;

const ButtonWrapper = styled.button`
    cursor: pointer;
    background-color: transparent;
    color:  black;
    border: none;
    position: relative;
    padding: .8rem 2rem;
    font-size: 1.4rem;
    font-weight: 700;
    border: 1px solid transparent;
    @media (max-width: 768px) {
        padding: 1rem 1.8rem;
        }
    p {
        position: relative;
        z-index: 2;
        /* padding: .8rem 2rem; */
    }
    div.buttonBackground {
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        width: 50%;
        background-color: white;
        z-index: 1;
        transition: transform .5s ease;
        transform-origin: left center;
        &.yellow {
            background-color: #FFD829;
        }
        @media (max-width: 768px) {
            width: 100%;
        }
    }
    &:hover div.buttonBackground {
        @media (min-width: 769px) {
            transform: scaleX(2);
            transform-origin: left center; 
        }
    }
`;
 