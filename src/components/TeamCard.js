import React from 'react';
import styled from 'styled-components'

const TeamCard = ({content}) => {
    return ( 
        <Card>
            <div><h2>{content.shortTeamName}</h2></div>
            <h3>{content.fullTeamName}</h3>
            <p>1. {content.player1}</p>
            <p>2. {content.player2}</p>
            <p>3. {content.player3}</p>
            <p>4. {content.player4}</p>
            <p>5. {content.player5}</p>
            <h4>{content.class}</h4>
        </Card>
     );
}
 
export default TeamCard;

const Card = styled.div`
    border-right: 10px solid black;
    position: relative;
    width: 360px;
    background-color: #F1F1F1;
    margin-top: 6rem;
    padding: 0 0 3rem;
    margin: 3rem;
    @media (max-width: 400px) {
        margin: 3rem 1rem;
    }
    & div {
        transform: translateY(-50%);
        background-color: #ffd829;
        width: 70%;
        margin: 0 auto;
        padding: .7rem;
        & h2 {
            font-size: 2.5rem;
        }
    }
    & h3 {
        position: absolute;
        bottom: 0;
        left: 0;
        font-size: 1.8rem;
        transform-origin: top left;
        transform: translateX(-20px) translateY(50%) rotate(-90deg);
        @media (max-width: 400px) {
            font-size: 1.8rem;
            transform: translateX(-15px) translateY(0%) rotate(-90deg);
        }
        @media (max-width: 320px) {
            font-size: 1.5rem;
            transform: translateX(-15px) translateY(-100%) rotate(-90deg)
        }
    }
    & p {
        padding: 1rem;
        font-size: 1.1rem;
    }
    & p:nth-of-type(even){
        font-weight: bold;
    }
    & h4 {
        position: absolute;
        bottom: 0;
        right: 0;
        font-size: 1.5rem;
        background-color: #fff;
        padding: 1rem;
        transform: translate(50%, -50%);
        @media (max-width: 400px) {
            font-size: 1.2rem;
            transform: translate(10%, -20%);
            padding: .7rem;
        }
    }
`;