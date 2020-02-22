import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import WebFont from 'webfontloader';

ReactDOM.render(<App />, document.getElementById('root'));

const webFontConfig = {
    google: {
      families: ['Montserrat:300,400,500,700:latin-ext'],
    }
};

WebFont.load(webFontConfig);