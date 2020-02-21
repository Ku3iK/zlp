import React from 'react';
import styled from 'styled-components'
import ckziuLogo from '../img/ckziu-logo.png'
import img from '../img/headerBackground.svg'
import Button from './Button'
import facebookIcon from '../img/facebookIcon.svg'
import twitchkIcon from '../img/twitchIcon.svg'
import instagramIcon from '../img/instagramIcon.svg'
import button from '../helpers/signUpButtonActivity'

const Header = () => {
    const headerValue = {
        date: '20 Marca 2020',
    };
    return (
        <div>
        <HeaderSection>
            <div>
                <h3>{headerValue.date}</h3>
                <h1>ZLP</h1>
                <h3>Zbąszyneckie Lan Party</h3>
            </div>
            <div>
                <div className="logo"><img src={ckziuLogo} alt="Logo szkoły CKZiU Zbąszynek"/></div>
                <div className="aboutUs">
                    <p>ZLP 2020! W tym roku zawodnicy będą rywalizować w Counter-Strike Global Offensive o tytuł najlepszej drużyny w szkole. Turniej jest organizowany dla uczniów CKZiU Zbąszynek i odbędzie się podczas Wagarów CKZiU - 20 Marca 2020. Jeśli chcesz zagrać kliknij śmiało w przycisk poniżej i dołącz do nas.</p>
                </div>
                <div className="joinUs">
                    <Button><a onClick={button.nonActiveFunction} href={button.href}>Zapisz swoją drużynę</a></Button>
                </div>
            </div>
            <div></div>
            <div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </HeaderSection>
        <Wrapper>
            <div>
                <div><h2>Sprawdz nasze social media !</h2></div>
                <div>
                    <a href="https://www.instagram.com/wagaryzst/"><img src={instagramIcon} alt="Ikona instagrama i link do profilu"/></a>
                    <a href="https://www.facebook.com/ckziuzbaszynek/"><img src={facebookIcon} alt="Ikona facebooka i link do profilu"/></a>
                    <a href="https://www.twitch.tv/zlp_zbaszynek"><img src={twitchkIcon} alt="Ikona twitcha i link do platformy"/></a>
                </div>
            </div>
            <div>
                <div>
                    <p>Zapraszamy Cię do podjęcia nauki w Naszej szkole. CKZiU Zbąszynek to szkoła z tradycjami istniejąca już od ponad 60 lat. Rozwijaj swoje pasje w praktyce! Wybierz kierunek i dołącz do nas!</p>
                </div>
                <div><Button isYellow><a href="https://ckziu.zbaszynek.pl/">Strona szkoły</a></Button></div>
            </div>
        </Wrapper>
        </div>
     );
}
 
export default Header;

const HeaderSection = styled.div`
    border-right: 10px solid black;
    border-left: 10px solid black;
    position: relative;
    display: flex;
    width: 100%;
    overflow: hidden;
    justify-content: space-between;
    padding: 0 12rem;
    @media (max-width: 1950px) {
        padding: 0 5rem; 
    }
    @media (max-width: 1024px) {
        background-color: #ffd829;
        flex-direction: column;
        padding: 0 1rem; 
    }
    & > div {
        /* flex-grow: 1; */
        align-self: center;
        width: 100%;
    }
    & > div:nth-child(1){
        display: flex;
        flex-direction: column;
        align-content: flex-start;
        font-style: italic;
        padding: 40px 0;
        flex-grow: 0;
        /* max-width: 800px; */
        width: auto;
        @media (max-width: 940px) {
                padding: 0;
        }
        h1 {
            font-size: 20rem;
            @media (max-width: 1600px) {
                font-size: 18rem;
            }
            @media (max-width: 1300px) {
                font-size: 17rem;
            }
            @media (max-width: 1250px) {
                font-size: 15rem;
            }
            @media (max-width: 1130px) {
                font-size: 14rem;
            }
            @media (max-width: 1035px) {
                font-size: 12rem;
            }
            @media (max-width: 420px) {
                font-size: 9rem;
            }
            @media (max-width: 320px) {
                font-size: 9em;
            }
        }
        h3 {
            font-size: 3.5rem;
            font-weight: 300;
            @media (max-width: 1600px) {
                font-size: 3rem;
            }
            @media (max-width: 1300px) {
                font-size: 2.9rem;
            }
            @media (max-width: 1250px) {
                font-size: 2.6rem;
            }
            @media (max-width: 1130px) {
                font-size: 2.4rem;
            }
            @media (max-width: 1035px) {
                font-size: 2rem;
            }
            @media (max-width: 420px) {
                font-size: 1.6rem;
            }
            @media (max-width: 375px) {
                font-size: 1.5rem;
            }
        }
        h3:first-child {
            transform: translateY(90%);
        }
        h3:last-child{
            transform: translateY(-90%);
        }
    }
    & > div:nth-child(2){
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        padding: 20px 0;
        max-width: 600px;
        @media (max-width: 1600px) {
            padding: 70px 20px;
        }
        @media (max-width: 1424px) {
            padding: 70px 20px;
            max-width: 500px;
        }
        @media (max-width: 1130px) {
            padding: 50px 20px;
            max-width: 400px;
        }
        @media (max-width: 1024px) {
            padding: 0;  
            max-width: 80%;   
        }
        @media (max-width: 500px){
            max-width: 100%;
        }
        div {
            display: flex;
            flex-direction: column;
            flex-grow: 1;
            align-self: flex-end;
            @media (max-width: 940px) {
                align-self: center;
            }
        }
        .logo, .aboutUs, .joinUs {
            padding: 50px;
            @media (max-width: 1600px) {
                padding: 2rem;
            }
            @media (max-width: 1130px) {
                padding: 3rem 0;
            }
            @media (max-width: 940px) {
                padding: 2rem;
            }
            @media (max-width: 320px) {
                padding: 1rem;
            }
        }
        .aboutUs {
            @media (max-width: 1130px) {
                padding: 1rem 0;
            }
        }
        .logo {
            @media (max-width: 1024px) {
                display: none;
            }
        }
        & > div p {
            /* width: 70%; */
            /* font-size: 1.5rem; */
            text-align: center;
            align-self: flex-end;
            /* @media (max-width: 1600px) {
                font-size: 1.2rem;
            }
            @media (max-width: 1250px) {
                font-size: 1rem;
            }
            @media (max-width: 940px) {
                width: 100%;
                max-width: 600px;
                font-size: 1.1rem;
                line-height: 1.7rem;
                letter-spacing: 1px;
            } */
            box-sizing: border-box;
                /* text-align: left; */
                font-size: 1.2rem;
                line-height: 1.8rem;
                letter-spacing: 1px;
                /* text-align: justify; */
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
        img {
            width: 400px;
            @media (max-width: 1600px) {
                width: 300px;
            }
            @media (max-width: 1024px) {
                display: none;
            }
        }

        & > div:last-child  {
            p {
                width: 100%;
            }
        }
    }
    & > div:nth-child(3){
        position: absolute;
        background-image: url(${img});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        /* width: 80%; */
        /* height: 700px; */
        top: 0;
        right: -15%;
        bottom: 0;
        z-index: -1;
        @media (max-width: 1464px) {
            width: 100%;
            right: -5%;
        }
        @media (max-width: 1230px) {
            right: -2%;
        }
        @media (max-width: 940px) {
            display: none;
        }
    }
    & > div:nth-child(4){
        position: absolute;
        display: flex;
        justify-content: space-between;
        width: 130px;
        top: 5%;
        right: 3%;
        & > div {
            width: 30px;
            height: 30px;
            background-color: white;
            @media (max-width: 1130px) {
                width: 25px;
                height: 25px;
            }
            @media (max-width: 1035px) {
                width: 20px;
                height: 20px;
            }
        }
        @media (max-width: 1300px) {
            right: 1%;
        }
        @media (max-width: 1130px) {
            right: 2%;
            width: 100px;
        }
        @media (max-width: 1035px) {
            display: none;
        }
    }
`;

const Wrapper = styled.div`
    display: flex;
    @media (max-width: 940px) {
        border-top: 10px solid black;
    }
    @media (max-width: 400px) {
        flex-direction: column;        
    }
    @media (max-width: 768px) {
        padding-bottom: 1rem;
    }
    & > div {
        
        flex-grow: 1;
        width: 50%;
        @media (max-width: 940px) {
            width: auto;
        }
    }
    & > div:nth-child(1){
       
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #ffd829;
        padding: 1rem 0;
        @media (max-width: 940px) {
            width: 60px;
            background-color: white;
        }
        @media (max-width: 400px) {
            width: 100%;
            height: 90px;
        }
        div {
            display: flex;
            justify-content: space-around;
            width: 100%;
            margin: 15px auto;
            @media (max-width: 940px) {
                margin: 0;
            }
        }
        & > div:last-child {
            
            width: 350px;
            @media (max-width: 940px) {
                width: auto;
                display: flex;
                flex-direction: column;
            }
            @media (max-width: 400px) {
                flex-direction: row;
                width: 100%;
                max-width: 300px;
                padding: 0;
            }
        }
        a {
            display: flex;
            transition: .3s;
            border: 4px solid transparent;
            padding: 8px 12px;
            /* border-radius: 5px; */
            
        }
        img {
            width: 50px;
            @media (max-width: 940px) {
                width: 40px;
                /* padding: .5rem 2rem; */
            }
        }
        a:hover {
            @media (min-width: 1024px) {
                border-bottom: 4px solid black;
            }
        }
        h2{
            font-size: 2.1rem;
            font-weight: 500;
            @media (max-width: 1200px) {
                font-size: 1.8rem;
            }
            @media (max-width: 940px) {
                display: none;
            }
        }
    }
    & > div:nth-child(2){
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        padding: 3rem;
        border-left: 10px solid black;
        @media (max-width: 940px) {
            border-left: none;
        }
        @media (max-width: 505px) {
            padding: 3rem 1.5rem 3rem 2rem;
        }
        @media (max-width: 400px) {
            padding: 1rem 1.5rem 3rem 2rem;
        }
        & > div:first-child {
            align-self: flex-start;
            width: 100%;
            max-width: 600px;
            > p{
                box-sizing: border-box;
                text-align: left;
                font-size: 1.2rem;
                line-height: 1.8rem;
                letter-spacing: 1px;
                text-align: justify;
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
        & > div:last-child {
            align-self: flex-start; 
            padding: 20px 0 0 0;
        }
    }
`;