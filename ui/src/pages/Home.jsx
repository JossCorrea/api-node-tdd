//Lista de todas as mulheres maravilhosas

import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/home-personalidade/logo-white.png';
import iconFacebook from '../img/home-personalidade/icon-facebook.png';
import iconTwitter from '../img/home-personalidade/icon-twitter.png';
import iconInstagram from '../img/home-personalidade/icon-instagram.png';
import iconLinkedin from '../img/home-personalidade/icon-linkedin.png';


const Home = (props) => {
    return (
    <>
        <nav className="navegacao">
            <div classNameName="navegacao__box container">
                <Link className="navegacao__logo" to="/">
                    <img src={logo} alt="Logo M de Maravilhosa"/>
                </Link>
                <div className="navegacao__itens" id="menuResponsivo">
                    <div className="navegacao__nav">
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="http://www.reprograma.com.br/" target="_blank"> {"Conheça a {reprograma}"}</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="navegacao__redes-sociais">
                        <Link to="https://www.facebook.com/ReprogramaBr/" target="_blank">
                            <img src={iconFacebook} alt="Íconde do Facebook"/>
                        </Link>
                        <Link to="https://twitter.com/ReprogramaBr" target="_blank">
                            <img src={iconTwitter} alt="Ícone do Twitter"/>
                        </Link>
                        <Link to="https://www.instagram.com/reprogramabr/" target="_blank">
                            <img src={iconInstagram} alt="Ícone do Instagram"/>
                        </Link>
                        <Link to="https://www.linkedin.com/company/reprogramabr/" target="_blank">
                            <img src={iconLinkedin} alt="Ícone do LinkedIn"/>
                        </Link>
                    </div>
                </div>
            </div>
    </nav>

    <header className="header">
        <div className="container">
            <div className="principal">
                <h1 className="principal__titulo">Você conhece as mulheres que mudaram o mundo?</h1>
                <h2 className="principal__sub">Conheça as mulheres que fizeram a diferença no mundo, nas mais variadas áreas de conhecimento e cultura.</h2>
                <a className="principal__btn btn btn_roxo" href="#mulheres-maravilhosas">Quero Conhecer</a>
            </div>
        </div>
    </header>

    <main>
        <section className="maravilhosas container" id="mulheres-maravilhosas">

            <h3 className="maravilhosas__titulo">Veja todas as mulheres homenageadas nesse projeto!</h3>
            <div className="maravilhosas__box">

                <div className="maravilhosas__perfil">
                    <a href="./personalidade/ada-lovelace/index.html">
                        <img className="img-responsive" src="./personalidade/ada-lovelace/img/ada-lovelace-perfil.png" alt="Foto da Ada Lovelace"/>
                        <p> Ada Lovelace</p>
                    </a>
                </div>
                
                {/* <!-- Ava Duvernay -->
                <div className="maravilhosas__perfil">
                    <a href="personalidade/ava-duvernay/index.html" >
                        <img className="img-responsive" src="personalidade/ava-duvernay/img/ava-duvernay-perfil.jpg" alt="Foto Ava Duvernay Perfil" className="maravilhosas__perfil">
                        <p>Ava Duvernay</p>
                    </a>
                </div>

                <!-- Carol Shaw -->
                <div className="maravilhosas__perfil">
                    <a href="./Personalidade/Carol Shaw/index.html" target="blank">
                        <img className="img-responsive" src="img/carol shaw.jfif">
                        <p>Carol Shaw</p>
                    </a>
                </div>

                <!-- Chelsea Manning -->
                <div className="maravilhosas__perfil">
                    <a href="personalidade/chelsea-manning/index.html">
                        <img className="img-responsive" src="img/home-personalidade-chelsea-manning.jpg" alt="chelsea manning photo">
                        <p>Chelsea Manning</p>
                    </a>
                </div>

                <!--  -->
                <div className="maravilhosas__perfil">
                    <a href=>
                        <p> </p>
                    </a>
                </div>

                <!--daniela andrade-->
                <div className="maravilhosas__perfil">
                    <a href="personalidade/daniela-andrade/index.html" target="blank">
                        <img className="img-responsive" src="img/home-personalidade/Daniela-Andrade-home.png" alt="Foto de Daniela Andrade">
                        <p>Daniela Andrade</p>
                    </a>
                </div>

                <!-- Dilma Rousseff -->
                <div className="maravilhosas__perfil">
                    <a href="personalidade/dilma-rousseff/index.html" target="blank">
                        <img className="img-responsive" src="./img/home-personalidade/dilma-rousseff-perfil.png" alt="Dilma Rousseff" />
                        <p>Dilma Rousseff</p>
                    </a>
                </div>

                <!-- Dorina Nowill -->
                <div className="maravilhosas__perfil">
                    <a href="personalidade/dorina-nowill/index.html" target="_blank">
                        <img className="img-responsive" src="personalidade/dorina-nowill/img/foto dorina.jpg" alt="foto em preto e branco da dorina nowill sorrindo"> 
                        <p> Dorina Nowill</p>
                    </a>
                </div>

                <!-- Elza Soares -->
                <div className="maravilhosas__perfil">
                    <a href="./personalidade/elza-soares/index.html">
                        <img className="img-responsive" src="personalidade/elza-soares/img/elza-soares-perfil.jpg" alt="">
                        <p>Elza Soares</p>
                    </a>
                </div>

                <!-- Formiga -->
                <div className="maravilhosas__perfil">
                    <a href="Personalidade/formiga/index.html">
                        <img className="img-responsive" src="Personalidade/formiga/img/formiga.jpeg" alt="Foto da Formiga">
                        <p>Formiga</p>
                    </a>
                </div>

                <!-- Frida Kahlo -->
                <div className="maravilhosas__perfil">
                    <a href ="personalidade/frida-kahlo/index.html">
                        <img className="img-responsive" src="./personalidade/frida-kahlo/img/frida-kahlo-perfil.jpg" alt="Frida Kahlo Perfil" >
                        <p>Frida Kahlo</p>
                    </a>
                </div>

                <!-- Grace Hopper -->
                <div className="maravilhosas__perfil">
                    <a href="personalidade/grace-hopper/index.html">
                        <img src="img/home-personalidade/grace-hopper.jpg" alt="Grace Hopper" className="img-responsive">
                        <p>Grace Hopper</p>
                    </a>
                </div>

                <!-- Ingrid Silva -->
                <div className="maravilhosas__perfil">
                    <a href="personalidade/Ingrid/ingrid.html">
                        <img className="img-responsive" src="img/ingrid-perfil.jpg">
                        <p>Ingrid Silva</p>
                    </a>
                </div>



                <!-- Jocelia Fonseca -->
                <div className="maravilhosas__perfil">
                    <a href="personalidade/jocelia fonseca/index.html">
                        <img className="img-responsive" src="img/home-personalidade/jocelia-3.jpg" alt="Jocelia Fonseca">
                        <p>Jocelia Fonseca</p>
                    </a>
                </div>

                <!-- Lizzo -->
                <div className="maravilhosas__perfil">
                    <a href="personalidade/Lizzo/index.html">
                        <img className="img-responsive" src="img/lizzo1.jpg" alt="Cantora Lizzo">
                        <p>Lizzo</p>
                    </a>
                </div>

                <!-- Lydia Garcia -->
                <div className="maravilhosas__perfil">
                    <a href="./personalidade/Lydia Garcia/index.html"  >
                        <img className="img-responsive" src="./img/lydia-garcia-home.jpg" alt="Lydia Gracia em foto pb"> >
                        <p>Lydia Garcia</p>
                    </a>
                </div>

                <!-- Mãe Stella de Oxóssi -->
                <div className="maravilhosas__perfil">
                    <a href="personalidade/MaeStella/index.html">
                        <img className="img-responsive" src="./personalidade/MaeStella/img/stella.jpeg">
                        <p>Mâe Stella de Oxóssi</p>
                    </a>
                </div>

                <!-- Malala Yousafzai -->
                <div className="maravilhosas__perfil">
                    <a href="./personalidade/malala-yousafzai/index.html" target="_blank">
                        <img className="img-responsive" src="img/home-malala-yousafzai/Malala_Yousafzai.jpg.jpg" alt="Foto Malala Yousafzai">
                        <p>Malala Yousafzai</p>
                    </a>
                </div>

                <!-- Margaret Hamilton -->
                <div className="maravilhosas__perfil">
                    <a >
                        <img>
                        <p></p>
                    </a>
                </div>

                <!-- Mariah Barcellos -->
                <div className="maravilhosas__perfil">
                    <a href="Personalidade/mariah-barcellos/index.html">
                        <img className="img-responsive" src="Personalidade/mariah-barcellos/img/Mariah Barcellos.png">
                        <p>Mariah Barcellos</p>
                    </a>
                </div>

                <!-- Michelle Obama -->
                <div className="maravilhosas__perfil">
                    <a>
                        <img>
                        <p></p>
                    </a>
                </div>

                <!-- Nathalia Arcuri -->
                <div className="maravilhosas__perfil">       
                    <a href="personalidade/nathalia-arcuri/index.html">
                        <img className="img-responsive" src="img/home-personalidade/nathalia-arcuri.jpeg" alt="Nathalia Arcuri">
                    </a>
                </div>

                <!-- Nina Simone primeiro adecionar a imagem na pasta da personalidade com nome de cada fato para facilitar
                na div sempre entra className, href é colocar link, para colocar link é CTrl  espaço -->
                <div className="maravilhosas__perfil">
                    <a href="./personalidade/nini-silva/index.html">
                        <img className="img-responsive" src="personalidade/nini-silva/img/Nina- Silva- Perfil.jpeg">
                        <p> Nina Silva</p>
                    </a>
                </div>

                <!-- Oprah Winfrey -->
                <div className="maravilhosas__perfil">
                    <a href="personalidade/oprah-winfrey/index.html">
                        <img src="img/home-personalidade/oprah-winfrey.jpg" alt="Foto da Oprah Winfrey" className="img-responsive">
                        <p>Oprah Winfrey</p>
                    </a>
                </div>

                <!-- Preta Rara -->
                <div className="maravilhosas__perfil">
                    <a href="./personalidade/preta-rara/index.html">
                        <img className="img-responsive" src="img/home-personalidade/preta-rara-home-210x210px.jpg" alt="Preta Rara pousa para uma fotografia">
                        <p>Preta Rara</p>
                    </a>
                </div>

                <!-- Queen Latifah -->
                <div className="maravilhosas__perfil">
                    <a href="personalidade/queen-latifah/index.html">
                        <img className= "img-responsive" src="img/home-personalidade/queen-perfil.jpg" alt="Foto perfil Queen Latifah">
                        <p>Queen Latifah</p>
                    </a>
                </div>

                <!-- Rosa Parks -->
                <div className="maravilhosas__perfil">
                    <a href="personalidade/index.html">
                        <img className="img-responsive" src="personalidade/img/Rosa-parks-onibus.jpeg">
                        <p>Rosa Park</p>
                    </a>
                </div>

                <!-- Silvia Federici -->
                <div className="maravilhosas__perfil">
                    <a href="../T9-projeto-1-m-de-maravilhosa/personalidade/silvia-federici/index.html">
                        <img className="img-responsive" src="img/home-personalidade/silvia.jpg" alt="Silvia Federici">
                        <p>Silvia Federici</p>
                    </a>
                </div>

                <!-- Sonia Guimarães -->
                <div className="maravilhosas__perfil">
                    <a href="personalidade/sonia-guimaraes/index.html">
                        <img className="img-responsive" src="img/home-personalidade/sonia-foto.png"/>
                        <p>Sonia Guimarães</p>
                    </a>
                </div>

                <!--  Viola Davis -->
                <div className="maravilhosas__perfil">
                    <a href="personalidade/viola-davis/index.html">
                        <img className="img-responsive"src="./img/home-personalidade/viola-davis-home.jpg" size="200px"/>
                        <p>Viola Davis</p>
                    </a>*/}
            </div> 
        </section>
    </main>

    </>
    )
}
export default Home;