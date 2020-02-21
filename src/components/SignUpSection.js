import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import button from '../helpers/signUpButtonActivity'

const SignUpSection = () => {
    return ( 
        <SignUpSectionWrapper>
            <div>
                <h2>Zapisy!</h2>
                <p>Serdecznie zapraszamy uczniów CKZiU w Zbąszynku do wzięcia udziału w turnieju Counter-Strike: Global Offensive. Jeśli chcesz zagrać śmiało kliknij w przycisk poniżej i dołącz do nas.</p>
                <Button><a onClick={button.nonActiveFunction} href={button.href}>Zapisz swoją drużynę</a></Button>
            </div>
        </SignUpSectionWrapper>
     );
}
 
export default SignUpSection;

const SignUpSectionWrapper = styled.section`
    background-color: #ffd829;
    border-top: 10px solid black;
    & > div {
        max-width: 700px;
        margin: 0 auto;
        padding: 2rem 1rem 0;
        h2 {
            font-size: 3.5rem;
        }
        & > p {
            max-width: 800px;
            margin: 0 auto;
            font-size: 1rem;
            font-weight: 300;
            padding: 2rem 0;
            text-align: center;
            @media (max-width: 1600px) {
                width: 70%;
            }
            @media (max-width: 1024px) {
                width: 80%;
            }
            @media (max-width: 640px) {
                width: 95%;
            }
            @media (max-width: 480px) {
                width: 100%;
            }
                font-size: 1.2rem;
                line-height: 1.8rem;
                letter-spacing: 1px;
                @media (max-width: 680px) {
                    letter-spacing: 0px;
                }
                @media (max-width: 620px) {
                    font-size: 1.1rem;
                }
                @media (max-width: 585px) {
                    line-height: 1.6rem;
                }
        }
    }
`;