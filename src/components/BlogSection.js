import React from 'react';
import BlogPost from './BlogPost';
import styled from 'styled-components';
import button from '../helpers/signUpButtonActivity'


const BlogSection = () => {
    const posts = [
        {
            title: 'Ruszyły zapisy!',
            content: <p>Jeśli chcesz wziąć udział w turnieju, kliknij przycisk poniżej, a następnie wypełnij formularz zgłoszeniowy. W ciągu 24 godzin od rejestracji powinieneś dostać wiadomość z potwierdzeniem na maila podanego w formularzu, w przypadku gdy taka wiadomość do Ciebie nie dotrze, prosimy o kontakt z organizatorami. Czekamy an wasze zgłoszenia i do zobaczenia na turnieju!</p>,
            date: '21.02.2020',
            id: 2,
            button: <a onClick={button.nonActiveFunction} href={button.href}>Zapisz swoją drużynę</a>
        },
        {
            title: 'Termin zapisów',
            content: <p>Zapisy rozpoczną się w piątek 21 lutego o 16:00 i potrwają do dnia 4 marca do godziny 16:00. Zapraszamy do zabawy 5 osobowe drużyny. Serdecznie zapraszamy wszystkich uczniów CKZiU do wzięcia udziału w turnieju.</p>,
            date: '19.02.2020',
            id: 1,
            button: <a onClick={button.nonActiveFunction} href={button.href}>Zapisz swoją drużynę</a>
        },
        {
            title: 'Regulamin',
            content: 
                <ul>
                    <li><span>1.</span>  Udział w turnieju jest jednoznaczny z akceptacją niniejszego regulaminu.</li>
                    <li><span>2.</span>  Zakaz obrażania, wyzywania przeciwników.</li>
                    <li><span>3.</span>  Dostępna ilość miejsc jest ograniczona do 16 drużyn.</li>
                    <li><span>4.</span>  Każdy gracz jest zobowiązany do używania tagu drużyny wprowadzonego w formularzu zgłoszeniowym oraz konta steam, do którego podał link.</li>
                    <li><span>5.</span>  Strony wybieramy poprzez rundę nożową.</li>
                    <li><span>6.</span>  Mapę wybieramy poprzez banowanie.</li>
                    <li><span>7.</span>  Mapy w puli turniejowej to: Dust II, Nuke, Mirage, Inferno, Cache, Overpass, Train.</li>
                    <li><span>8.</span>  Drużyna, która pierwsza zdobędzie szesnastą rundę, wygrywa mecz.</li>
                    <li><span>9.</span>  Jakiekolwiek próby oszukiwania podczas rozgrywki kończą się całkowitą dyskwalifikacją.</li>
                    <li><span>10.</span>  Każda drużyna ma 10 minut na przygotowanie swoich stanowisk do gier i wejście na serwer.</li>
                    <li><span>11.</span>  W przypadku wystąpienia problemów technicznych z winy organizatora podczas trwania meczu może zostać przywrócona runda, która jako ostatnia została rozegrana w całości.</li>
                    <li><span>12.</span>  Drużyna musi posiadać 5 graczy, w razie nieobecności któregoś z nich należy niezwłocznie uprzedzić organizatorów i podać zawodnika na zastępstwo.</li>
                    <li><span>13.</span>  Gracze uczestniczący w rozgrywkach powinni przestrzegać wymienionych powyżej zasad w każdym momencie.</li>
                </ul>,
            date: '19.02.2020',
            id: 0,
        },
        {
            title: 'Aplikacja ZLP',
            content: <p>Stworzyliśmy aplikację mobilną na smartfony i tablety z oprogramowaniem Android. Serdecznie zapraszamy do pobrania: https://play.google.com/store/apps/details?id=com.kfeliszewski.zlp</p>,
            date: '10.03.2020',
            id: 1,
            button: <a onClick={button.nonActiveFunction} href={button.href}>Zapisz swoją drużynę</a>
        },
        {
            title: 'Przedłużone zapisy !',
            content: <p>Zostały ostanie 4 wolne miejsca ! Dlatego zapisy zostaną przedłużone do wtorku 17.03.</p>,
            date: '10.03.2020',
            id: 1,
            button: <a onClick={button.nonActiveFunction} href={button.href}>Zapisz swoją drużynę</a>
        },
    ];
    return ( 
        <Section>
            <h2>Aktualności</h2>
            {posts.map(el => <BlogPost key={el.id} content={el}/>)}
        </Section>
     );
}
 
export default BlogSection;

const Section = styled.section`
    position: relative;
    h2 {
        font-size: 3.5rem;
        position: absolute;
        top: 0;
        left: 25%;
        transform: translate(-50%,-50%);
        z-index: 100;
        @media (max-width: 768px) {
            left: 50%;
            font-size: 3rem;
        }
    }
`;