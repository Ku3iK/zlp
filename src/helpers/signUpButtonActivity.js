const button = {
    href: 'https://docs.google.com/forms/d/e/1FAIpQLScWiA1mMXKMVKENLq2XgZipbz6gQT2qTlBm0PhDiaQNEAgB3A/viewform?usp=sf_link',
    nonActiveFunction: e => {
        e.preventDefault();
        alert('Zapisy będą dostępne od piątku (21.02.2020)');
    }
}
export default button;