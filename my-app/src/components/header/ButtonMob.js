import React from 'react';

export default class ButtonMob extends React.Component {

    constructor() {
        super();
        this.state = {
            visNav: 'flex'
        }
    }

    /*Fará a função de toggle*/
    clickMe(){
        if(this.state.visNav === 'flex'){
            this.setState({visNav: 'none'});
        }
        else{
            this.setState({visNav: 'flex'});
        }
        document.querySelector(".nav").style.display = this.state.visNav;
    }

    render() {
        return ( 
            <div className="buttonMob" onClick={this.clickMe.bind(this)}>
                <img src='/img/botao.png' alt='botão mobile' width='40' height='40'/>
                <h1 id='logoMob'>
                    Vinicius
                </h1>    
            </div>
            
        );
    }
}