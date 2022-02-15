import React from 'react';
import {Data, Lists} from "./style";
import menu_list1 from '../../assest/menu-list1.png'
import menu_list2 from '../../assest/menu-list2.png'


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
                <img src={menu_list1}/>
            </Lists>
            <Lists>
                <img src={menu_list2}/>
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
        </>
    )
        ;
}

export default About;