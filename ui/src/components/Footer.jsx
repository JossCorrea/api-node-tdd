import React from 'react';

const Footer = (props) => {
    return (
        <footer className="rodape">
            <div className="rodape__principal">
                <ul className="rodape__navegacao">
                    <li>
                        <a href="index.html">Home</a>
                    </li>
                    <li>
                        <a href="http://www.reprograma.com.br/" target="_blank">Conheça a {reprograma}</a>
                    </li>
                </ul>
                <div className="rodape__logo">
                    <img className="img-responsive" src="img/home-personalidade/logo-white.png" alt="logo M de Maravilhosa"/>
                </div>
                <div className="rodape__redes-sociais">
                    <a href="https://www.facebook.com/ReprogramaBr/" target="_blank">
                        <img src={iconFacebook} alt="Icone do facebook Reprograma"/>
                        <span>/br.mdemaravilhosa</span>
                    </a>
                </div>
            </div>
        <div className="rodape__cc">
            <p>Creative Commons 2020 | Feito com amor por Reprograma</p>
        </div>
        </footer>
    )
}
export default Footer;


