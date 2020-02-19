import React from 'react';
import BlogSection from '../components/BlogSection'
import Header from '../components/Header'
import TeamList from '../components/TeamList'
import Footer from '../components/Footer'
import SignUpSection from '../components/SignUpSection'

const Main = () => {
    return ( 
        <>
            <Header/>
            <BlogSection/>
            <SignUpSection/>
            {/* <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScWiA1mMXKMVKENLq2XgZipbz6gQT2qTlBm0PhDiaQNEAgB3A/viewform?embedded=true" width="640" height="922" frameborder="0" marginheight="0" marginwidth="0">Ładuję…</iframe> */}
            <TeamList/>
            <Footer/>
        </>
     );
}
 
export default Main;