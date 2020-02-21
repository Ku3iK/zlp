import React from 'react';
import styled from 'styled-components'
import schoolLogo from '../img/ckziu-logo.png'
import Button from '../components/Button'

const Footer = () => {
    return ( 
        <FooterWrapper>
            <img src={schoolLogo} alt="Logo szkoły"/>
            <h2>ZLP Zbąszynek</h2>
            <Button><a href="mailto:zlp@zstzbaszynek.pl">zlp@zstzbaszynek.pl</a></Button>
            <p>Stronę wykonali: Mikołaj Zienkowicz i Jakub Kaczmarek 2020 ©</p>
        </FooterWrapper>
    );
}
 
export default Footer;

const FooterWrapper = styled.div`
    border-left: 10px solid black;   
    position: relative;
    width: 100%;
    background-color: #ffd829;
    padding: 4rem 0 1rem;
    margin-top: 10rem;
    & img {
        position: absolute;
        top: 0;
        left: 50%;
        width: 400px;
        transform: translate(-50%, -40%);
        @media(max-width: 475px) {
            width: 300px;
        }
        @media(max-width: 375px) {
            width: 250px;
        }
    }
    & h2 {
        padding: 1.3rem;
    }
    & a {
        text-decoration: none;
        color: #000;
    }
    & > p {
        padding: 1rem;
    }
`;