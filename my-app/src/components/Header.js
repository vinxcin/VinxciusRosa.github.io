import React from 'react';
import Nav from './header/Nav'
import ButtonMob from './header/ButtonMob'


export default class Header extends React.Component {

    render() {
        return ( 
            <div className="header">
                <Nav/>
                <ButtonMob />
            </div>
        )
    }
}