import React from 'react';
import TeamCard from '../components/TeamCard'
import styled from 'styled-components'

const TeamList = () => {
    const teams = [
        {
            shortTeamName: 'FY',
            fullTeamName: 'Forever Young',
            player1: 'Maksymilian Golon',
            player2: 'Dawid Seifert',
            player3: 'Szymon Woźniak',
            player4: 'Maciej Kubiak',
            player5: 'Adam Piórkowski',
            class: '4M',
        },
        {
            shortTeamName: 'ZGR',
            fullTeamName: 'ZGRAJA',
            player1: 'Adrian Piasecki',
            player2: 'Jakub Małecki',
            player3: 'Piotr Sołtysik',
            player4: 'Łukasz Kasperowicz',
            player5: 'Filip Baszuro',
            class: '1EM',
        },
        {
            shortTeamName: 'KPG',
            fullTeamName: 'KPG Squad',
            player1: 'Maciej Gołek',
            player2: 'Marcin Muszyński',
            player3: 'Szymon Kuriata',
            player4: 'Kacper Kozłowski',
            player5: 'Bartosz Miszta',
            class: '3IM1',
        },
        {
            shortTeamName: 'QTPR',
            fullTeamName: 'QuietPanther',
            player1: 'Mikołaj Hoffman',
            player2: 'Mikołaj Łysakowski',
            player3: 'Jakub Malak',
            player4: 'Adam Koczorowski',
            player5: 'Mateusz Narożny',
            class: '1B',
        },
        {
            shortTeamName: 'DREYE',
            fullTeamName: `Dragon'Eye`,
            player1: 'Martin Urbański',
            player2: 'Marcin Feliksiak',
            player3: 'Kamil Opic',
            player4: 'Mikołaj Furman',
            player5: 'Jakub Urbański' ,
            class: '4M',
        },
        {
            shortTeamName: `BLANT`,
            fullTeamName: 'Drużyna z przypadku',
            player1: 'Jakub  Konieczek',
            player2: 'Filip Kaczmarek',
            player3: 'Juliusz Friedrich',
            player4: 'Mateusz Grychta',
            player5: 'Kacper Nowicki' ,
            class: '2IA',
        },
        {
            shortTeamName: `420`,
            fullTeamName: '5gietawiadro',
            player1: 'Kamil Małycha',
            player2: 'Łukasz Grąs',
            player3: 'Paweł Józefiak',
            player4: 'Szymon Zienkowicz',
            player5: 'Mikołaj Kwiatkowski' ,
            class: '1EM',
        },
        {
            shortTeamName: `R&R`,
            fullTeamName: 'Radian Riders',
            player1: 'Nikodem Karman',
            player2: 'Jakub Skrzek',
            player3: 'Maciej Jachwitz',
            player4: 'Aleksander Tkaczyk',
            player5: 'Julian Hryniewicz' ,
            class: '1MA',
        },
        {
            shortTeamName: 'A.MAR',
            fullTeamName: `AMARENKA`,
            player1: 'Paweł Wansorra',
            player2: 'Sebastian Piter',
            player3: 'Marcin Karcz',
            player4: 'Damian Slośnik',
            player5: 'Mateusz Żołnierczakiewicz' ,
            class: '3IM1',
        },
        {
            shortTeamName: '.DLR.',
            fullTeamName: `Dealer.`,
            player1: 'Miłosz  Szarłata',
            player2: 'Kuba Sitak',
            player3: 'Jakub Mirek',
            player4: 'Filip Majewski',
            player5: 'Michał Kozłowski' ,
            class: '2EM',
        },
        {
            shortTeamName: 'PiS',
            fullTeamName: `Psycha is sitting`,
            player1: 'Seweryn  Sawicki',
            player2: 'Albert Kowzan',
            player3: 'Igor Urbanek',
            player4: 'Szymon Matusiak',
            player5: 'Tymoteusz Brzoski' ,
            class: '2IA',
        },
        {
            shortTeamName: 'R&A',
            fullTeamName: `Radian Academy`,
            player1: 'Szymon  Nawracała',
            player2: 'Witold Krukowski',
            player3: 'Bartosz Zieliński',
            player4: 'Marcel Aksamit',
            player5: 'Oskar Winiarz' ,
            class: 'IMA',
        },
    ]
    return ( 
        <>
            <TeamsTitle><h2>Drużyny</h2></TeamsTitle>
            <Section>
                {teams.lenght !== 0 ? null : <p>Drużyny pojawią się po zakończeniu zapisów.</p>}
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