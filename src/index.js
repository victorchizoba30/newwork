import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './components/Card/Card.css';
import App from './container/app'
import 'tachyons';
// import Footer from '../components/SearchBox/footer';
// import Cardist from './CardList';
// import * as serviceWorker from '../serviceWorker';


ReactDOM.render(
    <div className='maincard'>
        <App />
        {/* <Footer /> */}
    </div>,
    document.getElementById('root')
 );

// serviceWorker.register();


//url for the project
//https://robofriends-ssr.jothamardel.vercel.app/