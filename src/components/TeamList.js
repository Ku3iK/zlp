import React from 'react';
import TeamCard from '../components/TeamCard'
import styled from 'styled-components'

const TeamList = () => {
    const teams = [
        // {
        //     shortTeamName: 'ZLP',
        //     fullTeamName: 'Zbąszyneckie Lan Party',
        //     player1: 'Mikołaj Zienkowicz',
        //     player2: 'Mikołaj Zienkowicz',
        //     player3: 'Mikołaj Zienkowicz',
        //     player4: 'Mikołaj Zienkowicz',
        //     player5: 'Mikołaj Zienkowicz',
        //     player6: 'Mikołaj Zienkowicz',
        //     class: '3IM1',
        // },
        // {
        //     shortTeamName: 'ZLP',
        //     fullTeamName: 'Zbąszyneckie Lan Party',
        //     player1: 'Mikołaj Zienkowicz',
        //     player2: 'Mikołaj Zienkowicz',
        //     player3: 'Mikołaj Zienkowicz',
        //     player4: 'Mikołaj Zienkowicz',
        //     player5: 'Mikołaj Zienkowicz',
        //     player6: 'Mikołaj Zienkowicz',
        //     class: '3IM1',
        // },
        // {
        //     shortTeamName: 'ZLP',
        //     fullTeamName: 'Zbąszyneckie Lan Party',
        //     player1: 'Mikołaj Zienkowicz',
        //     player2: 'Mikołaj Zienkowicz',
        //     player3: 'Mikołaj Zienkowicz',
        //     player4: 'Mikołaj Zienkowicz',
        //     player5: 'Mikołaj Zienkowicz',
        //     player6: 'Mikołaj Zienkowicz',
        //     class: '3IM1',
        // },
        // {
        //     shortTeamName: 'ZLP',
        //     fullTeamName: 'Zbąszyneckie Lan Party',
        //     player1: 'Mikołaj Zienkowicz',
        //     player2: 'Mikołaj Zienkowicz',
        //     player3: 'Mikołaj Zienkowicz',
        //     player4: 'Mikołaj Zienkowicz',
        //     player5: 'Mikołaj Zienkowicz',
        //     player6: 'Mikołaj Zienkowicz',
        //     class: '3IM1',
        // },
        // {
        //     shortTeamName: 'ZLP',
        //     fullTeamName: 'Zbąszyneckie Lan Party',
        //     player1: 'Mikołaj Zienkowicz',
        //     player2: 'Mikołaj Zienkowicz',
        //     player3: 'Mikołaj Zienkowicz',
        //     player4: 'Mikołaj Zienkowicz',
        //     player5: 'Mikołaj Zienkowicz',
        //     player6: 'Mikołaj Zienkowicz',
        //     class: '3IM1',
        // },
    ]
    return ( 
        <>
            <TeamsTitle><h2>Drużyny</h2></TeamsTitle>
            <Section>
                {teams === [] ? null : <p>Drużyny pojawią się po zakończeniu zapisów.</p>}
                {teams.map((el, index) => <TeamCard key={index} content={el}/>)}
            </Section>
        </>
     );
}
 
export default TeamList;

const TeamsTitle = styled.div`
    position: relative;
    width: 100%;
    height: 80px;
    margin: 0 0 10rem;
    background-color: #ffd829;
    padding: 2rem;
    @media(max-width: 1024px) {
        margin: 0 0 5rem;
    }
    @media(max-width: 500px) {
        height: 60px;
    }
    & h2 {
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translate(-50%, 50%);
        font-size: 3.5rem;
    }
`;

const Section = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    max-width: 1400px;
    margin: 0 auto;
    overflow: hidden;
    > p {
        font-size: 1.5rem;
        font-weight: 700;
    }
`;