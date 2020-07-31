import React from 'react';
import LogoImportado from '../../assets/img/Logo.png';
import './Menu.css';
//import ButtonLink from './components/ButtonLink';
import Button from '../Button';


function Menu(){
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={LogoImportado} alt="Logo"/>
            </a>
            <Button className="ButtonLink" href="/">Novo vídeo</Button>
        </nav>
    );
}

export default Menu; //exportação para poder usar em outros lugares