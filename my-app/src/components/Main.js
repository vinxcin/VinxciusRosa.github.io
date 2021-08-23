import React from 'react';
import Home from './main/Home';
import Sobre from './main/Sobre';

export default class Main extends React.Component {

    render() {
        return ( 
            <div className="main">
                <Home/>
                <Sobre/>
            </div>
        )
    }
}