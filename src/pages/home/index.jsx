import React from 'react';
import {
    Homes, Navbar, SectionFour, SectionThree, SectionTwo
} from "./style";
import logo from '../../assest/logo.png'
import image1 from '../../assest/image-1.png'
import image2 from '../../assest/image-2.png'
import menu1 from '../../assest/menu-1.png'
import menu2 from '../../assest/menu-2.png'
import burger1 from '../../assest/burger-1.png'
import burger2 from '../../assest/burger-2.png'
import burger3 from '../../assest/burger-3.png'

function Home() {
    return (<>
        <Navbar>
            <img src={logo}/>
            <nav>
                <li><a href='#'>about</a></li>
                <li><a href='#'>features</a></li>
                <li><a href='#'>how to use</a></li>
                <li><a href='#'>download</a></li>
            </nav>
        </Navbar>
        <Homes>
            <div className='text'>
                <p className='logo'>
                    Momentum <br/>
                </p>
                <p className='launch'>
                    Launch your product
                    — and savor the momentum.
                </p>
                <button>
                    Get the App
                </button>
            </div>
            <img className='image-1' src={image1}/>
        </Homes>
        <SectionTwo>
            <p className='title'>
                Aenean Consectetur Porta <br/>
                <span>
                        Nullam quis risus eget urna
                        mollis ornare vel eu leo.
                    </span>
            </p>
            <img src={image2}/>
        </SectionTwo>
        <SectionThree>

            <p className='titlee'>
                Aenean Consectetur <br/>
                <span className='text-1'>
            Cay sociis nato
            que penatibus et
        </span> <br/>
                <span className='text-2'>
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Suspendisse varius enim
            in eros elementum tristique.
        </span>
            </p>
            <img src={menu1}/>
        </SectionThree>
        <SectionThree>
            <img src={menu2}/>
            <p className='titlee'>
                ConsectUltricies <br/>
                <span className='text-1'>
             Amet Ipsum
        </span> <br/>
                <span className='text-2'>
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Suspendisse varius enim
            in eros elementum tristique.
        </span>
            </p>

        </SectionThree>
        <SectionThree>

            <p className='titlee'>
                Aenean Consectetur Porta <br/>
                <span className='text-1'>
           Magna Porta Sit Bibendum
        </span> <br/>
                <span className='text-2'>
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Suspendisse varius enim
            in eros elementum tristique.
        </span>
            </p>
            <img src={menu1}/>
        </SectionThree>
        <SectionFour>
            <div className='card'>
                <img src={burger1}/>
                <p className='title-4'>
                    Activity Notifications
                </p>
                <p className='details'>
                    Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit.
                    Suspendisse varius enim in
                    eros elementum tristique.
                </p>
            </div>
            <div className='card'>
                <img src={burger2}/>
                <p className='title-4'>
                    custom timing
                </p>
                <p className='details'>
                    Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit.
                    Suspendisse varius enim in
                    eros elementum tristique.
                </p>
            </div>
            <div className='card'>
                <img src={burger3}/>
                <p className='title-4'>
                    mobile optimized
                </p>
                <p className='details'>
                    Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit.
                    Suspendisse varius enim in
                    eros elementum tristique.
                </p>
            </div>
        </SectionFour>
    </>);
}


export default Home;