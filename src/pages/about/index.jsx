import React from 'react';
import {Data, Footer, Lists, LogoCompany} from "./style";
import menu_list1 from '../../assest/menu-list1.png'
import menu_list2 from '../../assest/menu-list2.png'
import logoCompany from '../../assest/logo-compny.png'
import bgImage from '../../assest/background.png'
import logotip from '../../assest/logotip.png'

function About() {
    return (
        <>
            <Data>
                <p className='data'>
                    +12k <br/>
                    <span>
                       Nibh Elit Tristique
                   </span>
                </p>
                <p className='data'>
                    84 <br/>
                    <span>
                  Aenean Condimentum
                   </span>
                </p>
                <p className='data'>
                    3,07 <br/>
                    <span>
                       Quam Inceptos
                   </span>
                </p>
                <p className='data'>
                    24h <br/>
                    <span>
Ullamcorper
                   </span>
                </p>
            </Data>
            <Lists>
                <div className='list'>
                <span>
                    Aenean Consectetur Porta
                </span> <br/>
                    <p className='title-5'>
                        Sem Risus Elit Vestibulum
                    </p>
                    <p className='lorem'>
                        Nulla vitae elit libero, a
                        pharetra augue.
                        Duis mollis, est non commodo
                        luctus,
                        nisi erat porttitor ligula, eget
                        lacinia odio sem nec elit. Cras
                        mattis consectetur purus sit
                        amet fermentum.
                        Donec id elit non mi porta
                        gravida at
                        eget metus. Etiam porta sem
                        malesuada magna mollis euismod.
                    </p>

                </div>
                <img className='hello-again' src={menu_list1}/>
            </Lists>
            <Lists>
                <img className='hello-again' src={menu_list2}/>
                <div className='list'>

                <span>
                    Aenean Consectetur Porta
                </span> <br/>
                    <p className='title-5'>
                        Parturient Tortor
                    </p>
                    <p className='lorem'>
                        Nulla vitae elit libero, a
                        pharetra augue.
                        Duis mollis, est non commodo
                        luctus,
                        nisi erat porttitor ligula, eget
                        lacinia odio sem nec elit. Cras
                        mattis consectetur purus sit
                        amet fermentum.
                        Donec id elit non mi porta
                        gravida at
                        eget metus. Etiam porta sem
                        malesuada magna mollis euismod.
                    </p>

                </div>

            </Lists>
            <LogoCompany>
                <img src={logoCompany} className='logo'/>
                <img src={bgImage} className='bgImage'/>

                <div className='bg-Images'>
                    <p>Ready to get started?</p>
                    <button id='download'>
                        download now
                    </button>
                    <button>
                        get in touch
                    </button>
                </div>
            </LogoCompany>
            <Footer>
                <p className='get'>
                    Get updates from Ruchard <br/>
                    <span>
        New course alerts, discounts and free lessons
    </span>
                </p>
                <input id='text' type="text"/>
                <button>
                    Subscribe
                </button> <br/>
                <img src={logotip}/>
                <nav>
                    <li><a href='#'>email</a></li>
                    <li><a href='#'>instagram</a></li>
                    <li><a href='#'>facebook</a></li>
                    <li><a href='#'>twitter</a></li>
                    <li><a href='#'>image license info</a></li>
                    <li><a href='#'>made by abdullo nasrullaev</a></li>
                </nav>
            </Footer>
        </>
    )
        ;
}

export default About;