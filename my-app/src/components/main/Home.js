import React from 'react';

export default class Home extends React.Component {

    render() {
        return (
            <div id='home'>
                <div className='perfil'>
                    <img src='./img/image-perfil.jpeg'/>
                    <h2>Olá! =) </h2>
                    <h1>Sou o Vinicius Carvalho Rosa,</h1>
                    <p>Cientista de Dados e Pesquisador</p>
                </div>
                <div class="gif">
                    <img src="/img/home1.gif"/>     
                </div>    
            </div>
        );
    }
}