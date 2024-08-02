import { useEffect, useState, useRef } from 'react';
import './App.css';

function App() {
    const values = ['IT', 'Brand', 'Media', 'Tech', 'Production', 'Influencers', 'Talent Management'];
    let index = 0;
    const [currentvalue, setCurrentvalue] = useState(values[0]);
    const [videoSize, setVideoSize] = useState({ width: '120%', height: '100%' });
    const arrowRef = useRef(null);

    useEffect(() => {
        const span = document.getElementsByClassName("navbarbox-left-span");

        const intervalId = setInterval(() => {
            if (index === values.length) {
                index = -1;
            }
            index++;
            setCurrentvalue(values[index]);
        }, 1000);

        return () => clearInterval(intervalId);
    }, [setCurrentvalue]);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const newWidth = 120 + scrollTop * 0.1; // Adjust multiplier as needed
            const newHeight = 100 + scrollTop * 0.1; // Adjust multiplier as needed

            setVideoSize({
                width: `${newWidth}%`,
                height: `${newHeight}%`
            });
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const handleMouseMove = (event) => {
            const arrow = arrowRef.current;
            if (!arrow) return;

            const { clientX: x, clientY: y } = event;

            const centerX = window.innerWidth / 2;
            const centerY = window.innerHeight / 2;

            const angle = Math.atan2(y - centerY, x - centerX);
            const radius = 100; // Radius of the circular path

            const arrowX = centerX + radius * Math.cos(angle) - arrow.clientWidth / 2;
            const arrowY = centerY + radius * Math.sin(angle) - arrow.clientHeight / 2;

            arrow.style.transform = `translate(${arrowX}px, ${arrowY}px) rotate(${angle}rad)`;
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <>
            <div className='firstcontainer'>

                {/*This is navbar section*/}
                <div className='navbarbox'>
                    <h2 className='navbarbox-left'>Schbang.<span className='navbarbox-left-span'>{currentvalue}</span></h2>

                    <nav className='navbarbox-right'>
                        <ul>
                            <li>Work</li>
                            <li>Solutions</li>
                            <li>About</li>
                            <li>Resources</li>
                            <li>Careers</li>
                        </ul>

                        <button className='navbarbox-btn'>Contact Us</button>
                    </nav>
                </div>

                {/*navbar section ends here */}

                {/*this is "your creative media section" */}

                <div className='creative-section'>
                    <h1>Your Creative, Media & Technology <span>Transformation Partner</span></h1>
                </div>

                {/*this is "your creative media section ends here" */}

                {/*video section starts here where video is moving up */}

                <div className='main-section'>
                    <div className='video'>
                        <iframe
                            src="https://player.vimeo.com/video/865485976?background=1"
                            frameBorder="0"
                            allow="autoplay; fullscreen; picture-in-picture"
                            style={{ width: videoSize.width, height: videoSize.height }}
                        ></iframe>
                    </div>
                    {/*video section end here */}

                    {/*this is the array moving circle section */}

                    <div className='arraw-section'>
                        <h3>What Defines us</h3>
                        <h2>We’re brand builders at heart, creators by design, tech enthusiasts in practice, and integrated at our core.</h2>
                        <p>We're on a mission to take the very best of Indian creative talent to the world. Driven by a ferocious hunger to create tangible impact for your business, we work with in-house specialists, industry partners and technology leaders to push the boundaries of creativity and put your brand on the global stage.</p>

                        <img className='img1' src="https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/646c6bb7c939a9d0173be0eb_bg%20pattern-01-p-2600.png" alt="" />
                        <img ref={arrowRef} className='img2' src="https://www.svgrepo.com/show/116213/left-direction.svg" alt="" />
                        <button className='btn'>Dive Into Our Culture</button>
                    </div>

                    {/*here arraow section is over */}

                    {/*after the arrow seciion the photo image section start*/}


                    <div className='image'>
                        <img src="https://cdn.prod.website-files.com/64117da520cdfb7ab62144a5/655da6aed14f9d6e2cd82f61_coffeeverse%20WEBSITE%20CS-01-p-1600.png" alt="" />

                    </div>

                    <div className='animation-box'>
                        <div className='box1'>
                            <h2>Brand Solution</h2>
                            <p>We provide customised solutions to meet partner needs. We understand the objectives and requirements to develop strategies & create holistic consumer experiences and fully serve clients.</p>

                        </div>
                        <div className='box2'>
                            <h2>Tech Solution</h2>
                            <p>We optimise People, Processes and Technology. Map processes, align to objectives and maximise team efficiency with tech to improve the customer experience.</p>

                        </div>
                        <div className='box3'>
                            <h2>Media Solution</h2>
                            <p>Drive results through strategic, audiance-aligned ad placement across channels using the right messaging at the optimal time.</p>

                        </div>
                        <div className='box4'>
                            <h2>Research Solution</h2>
                            <p>We provide specialised market research for businesses using qualitative and quantitative methods. We integrate market research with our services to connect research, strategy and implementation.</p>

                        </div>
                        <div className='box5'>
                            <h2>Film & Photography</h2>
                            <p>Schbang Motion Pictures, Global Content Hub and Schbang 808 produce and launch high-quality ad films, rapid video content and branded audio.</p>

                        </div>


                    </div>


                    {/*this is company logo moving from left to right or right left direction*/}

                    <div className='company-box'>
                        <div className='company-upperbox'>
                            <img className='company-img1' src="https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/6470a43f9be7214cf9de3678_Xiaomi_logo_(2021-).svg-p-500.webp" alt="" />

                            <img className='company-img2' src="https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/6470a49c3f6ba1683142721c_rio%20sanitary%20pads-02%20-%20Archana%20Goyal-p-500.webp" alt="" />

                            <img className='company-img3' src="https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/6470a4c4041bb767ea0590c6_jio-logo%20(1)-p-500.webp" alt="" />

                            <img className='company-img4' src="https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/6470a5033f6ba168314307c3_Logo%202-p-500.png" alt="" />

                            <img className='company-img5' src="https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/6470a5ded3b6b46a21c8201e_Fixit-Logo%20(1)-p-500.webp" alt="" />



                        </div>

                        <div className='company-lowerbox'>
                            <img className='company-img6' src="https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/6470a570dac066179044655b_fevicreate_logo_png-01%20-%20Prajna%20Anchan%20(1)-p-500.webp" alt="" />

                            <img className='company-img7' src="https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/6470a57ea93d52282ec5f982_Cordelia-p-500.png" alt="" />

                            <img className='company-img8' src="https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/6470a5936194e83c48e76c9b_date%20crown%20logo-p-500.webp" alt="" />

                            <img className='company-img9' src="https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/6470a5aaa1ed9ddfeb688754_Dhampur%20Logo%20Asset%203%402x%20-%20Alankrit%20Johri%20(1)-p-500.webp" alt="" />

                            <img className='company-img10' src="https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/6481c0de324e32f8eb2ef61d_mia-01-p-500.png" alt="" />

                        </div>

                    </div>

                    {/*this is the text section of like new letter after the company logo movies*/}

                    <div className='newsection'>

                        <h2>Trending Now</h2>
                        <div className='uppernews'>
                            <button>Press Release</button>

                            <div className='uppernews-section'>
                                <h2>Schbang appoints Jitto George as Executive Vice President - Media Solutions</h2>
                                <p>3 Minutes</p>
                            </div>

                        </div>

                        <div className='lowernews'>
                            <button>Press Release</button>
                            <div className='lowernews-section'>
                                <h2>Britannia forays into the Metaverse with the launch of ‘Britannia Coffeeverse’</h2>
                                <p>2.5 Minutes</p>

                            </div>

                        </div>

                    </div>

                    {/*this is technology logo section*/}

                    <div className='techsection'>
                        <div className='node'>
                            <img src="https://cdn.prod.website-files.com/64117da520cdfb7ab62144a5/64d8f1f21fab27b222a10911_nodejs-1-logo-p-500.png" alt="" />
                            <h2>Node.Js</h2>
                            <p>Building & deploy web apps, APIs, and other software solutions with scalability & high performance at the core. </p>

                        </div>

                        <div className='ondc'>
                            <img src="https://cdn.prod.website-files.com/64117da520cdfb7ab62144a5/648075665ea350dc691d1497_2%20(Large)-p-500.png" alt="" />
                            <h2>ONDC Partner</h2>
                            <p>Complete e-commerce solutions to meet your business goals.</p>

                        </div>

                        <div className='google'>
                            <img src="https://cdn.prod.website-files.com/64117da520cdfb7ab62144a5/6480757a6410b57715391921_1%20(Large)-p-500.png" alt="" />
                            <h2>Google Premium Partner</h2>
                            <p>Leverage the power of Google Ads to scale your business.</p>
                        </div>

                        <div className='zoho'>
                            <img src="https://cdn.prod.website-files.com/64117da520cdfb7ab62144a5/6483768cc3d75ee3ac3fc879_Zoho%20Partner%20Updated.png" alt="" />
                            <h2>Zoho Premium Partner</h2>
                            <p>Design and implement integrated business architectures and digital transformation solutions.</p>

                        </div>

                        <div className='moengage'>
                            <img src="https://cdn.prod.website-files.com/64117da520cdfb7ab62144a5/64807591e6895ba2a0e984d3_4%20(Large)-p-500.png" alt="" />
                            <h2>MoEngage Partner</h2>
                            <p>Leverage the marketing automation platform to boost customer engagement and retention.</p>
                        </div>

                        <div className='adobe'>
                            <img src="https://cdn.prod.website-files.com/64117da520cdfb7ab62144a5/6480759dd647777427305c00_5%20(Large)-p-500.png" alt="" />
                            <h2>Adobe Solution Partner</h2>
                            <p>Develop sophisticated and personalised solutions for enterprises with deeper consumer understanding and built-in analytics.</p>
                        </div>

                        <div className='shopify'>
                            <img src="https://cdn.prod.website-files.com/64117da520cdfb7ab62144a5/648075bda17e7f2920f7c4e2_7%20(Large)-p-500.png" alt="" />
                            <h2>Shopify Partner</h2>
                            <p>Build robust and effective online stores with the leading e-commerce platform.</p>


                        </div>

                    </div>

                    {/*this is the last button section*/}

                    <div className='btn-section'>
                        <button className='btn1'>India:<span>01:36 PM</span></button>
                        <button className='btn2'>London:<span>09:07 AM</span></button>
                        <button className='btn3'>Dubai:<span>12:07 PM</span></button>
                        <button className='btn4'>Amsterdam:<span>10:08 AM</span></button>
                    </div>
                </div>

                <div className='end'>
                    <h1>Schbang</h1>
                    <div className='end-line'>
                        <div className='img'>
                            <img  className='img-img1' src="https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/6465257e5cc570c9ff8fd0f8_icons8-linkedin-50.webp" alt="" />
                            <img className='img-img2' src="https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/646524fd1df829c5242be968_icons8-instagram-50.webp" alt="" />
                            <img className='img-img3' src="https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/646524a30d7e98dd5c2e0280_icons8-youtube-50%20(1).webp" alt="" />
                            <img className='img-img4' src="https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/646524362a6cedd5e606bccc_icons8-facebook-50%20(1).webp" alt="" />
                        </div>
                        <nav className='end-line-nav'>
                            <ul>
                                <li>About</li>
                                <li>Contect</li>
                                <li>Case Studies</li>
                                <li>Blog</li>
                                <li>Privacy</li>
                            </ul>
                        </nav>

                        <p>Prodly Created in india All Right Reserved, All Wrong Reversed.</p>
                    </div>

                </div>
            </div>
        </>
    );
}

export default App;
