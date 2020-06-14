import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import {
    MDBView,
    MDBContainer,
    MDBCarousel,
    MDBCarouselCaption,
    MDBCarouselInner,
    MDBCarouselItem,
    MDBMask,
    MDBCol,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle, MDBCardText, MDBBtn, MDBCard,
    MDBTooltip, MDBCardFooter, MDBIcon, MDBRow, MDBCardHeader

} from 'mdbreact';
import '../css/CallToActionIntro.css';
import '../css/index.css'

class Landing extends React.Component {
    state = {
        collapsed: false
    };

    handleTogglerClick = () => {
        const { collapsed } = this.state;
        this.setState({
            collapsed: !collapsed
        });
    };

    render() {
        const { collapsed } = this.state;
        const navStyle = { marginTop: '4rem' };
        const overlay = (
            <div
                id='sidenav-overlay'
                style={{ backgroundColor: 'transparent' }}
                onClick={this.handleTogglerClick}
            />
        );
        return (
            <Router>
                <div className="bg">
                    <MDBContainer>
                        <MDBCarousel
                            activeItem={1}
                            length={3}
                            showControls={true}
                            showIndicators={true}
                            className="z-depth-1">
                            <MDBCarouselInner>
                                <MDBCarouselItem itemId="1">
                                    <MDBView>
                                        <img
                                            className="d-block w-100"
                                            src="https://s1.1zoom.me/b5050/65/328106-alexfas01_1920x1080.jpg"
                                            alt="CALL OF DUTY: BLACK OPS"
                                        />
                                        <MDBMask overlay="black-light" />
                                    </MDBView>
                                    <MDBCarouselCaption>
                                        <h3 className="h3-responsive">CALL OF DUTY: BLACK OPS</h3>
                                    </MDBCarouselCaption>
                                </MDBCarouselItem>
                                <MDBCarouselItem itemId="2">
                                    <MDBView>
                                        <img
                                            className="d-block w-100"
                                            src="https://cdn.suwalls.com/wallpapers/games/need-for-speed-rivals-28204-1920x1080.jpg"
                                            alt="First slide"
                                        />
                                        <MDBMask overlay="black-light" />
                                    </MDBView>
                                    <MDBCarouselCaption>
                                        <h3 className="h3-responsive">NEED FOR SPEED</h3>
                                    </MDBCarouselCaption>
                                </MDBCarouselItem>
                                <MDBCarouselItem itemId="3">
                                    <MDBView>
                                        <img
                                            className="d-block w-100"
                                            src="https://wallpaperaccess.com/full/875246.jpg"
                                            alt="First slide"
                                        />
                                        <MDBMask overlay="black-light" />
                                    </MDBView>
                                    <MDBCarouselCaption>
                                        <h3 className="h3-responsive">PUBG</h3>
                                    </MDBCarouselCaption>
                                </MDBCarouselItem>
                            </MDBCarouselInner>
                        </MDBCarousel>
                    </MDBContainer>
                    {/*end of carousel*/}

                    <section className="text-center my-5">
                        <h2 className="h1-responsive font-weight-bold text-center my-5 " >
                            LATEST RELEASES
                        </h2>
                        <MDBRow>
                            <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
                        <MDBCard style={{ width: "22rem", marginTop: "1rem", marginLeft: "10rem" }}>
                            <MDBCardHeader color="deep-orange lighten-1">2020 Releases</MDBCardHeader>
                            <MDBView cascade>
                                <MDBCardImage
                                    hover
                                    overlay='white-slight'
                                    className='card-img-top'
                                    src='https://desperadosgame.com/wp-content/uploads/2019/08/04_city_marketplace.jpg'
                                    alt='Card cap'
                                />
                            </MDBView>
                            <MDBCardBody>
                                <MDBCardTitle>Desperados III </MDBCardTitle>
                                <MDBCardText>
                                    With supporting text below as a natural lead-in to additional
                                    content.
                                </MDBCardText>
                                <MDBBtn color="deep-orange" href="https://desperadosgame.com/">GET IT NOW</MDBBtn>
                            </MDBCardBody>
                        </MDBCard>
                            </MDBCol>
                            <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
                                <MDBCard style={{ width: "22rem", marginTop: "1rem", marginLeft: "10rem" }}>
                                    <MDBCardHeader color="deep-orange lighten-1">2020 Releases</MDBCardHeader>
                                    <MDBView cascade>
                                        <MDBCardImage
                                            hover
                                            overlay='white-slight'
                                            className='card-img-top'
                                            src='https://steamcdn-a.akamaihd.net/steam/apps/598550/ss_c60dfaf2a92e46320354bce0d7fdf3a40da2c796.1920x1080.jpg?t=1589522899'
                                            alt='Card cap'
                                        />
                                    </MDBView>
                                    <MDBCardBody>
                                        <MDBCardTitle>Huntdown</MDBCardTitle>
                                        <MDBCardText>
                                            With supporting text below as a natural lead-in to additional
                                            content.
                                        </MDBCardText>
                                        <MDBBtn color="deep-orange" href="https://huntdown.com/">GET IT NOW</MDBBtn>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                            <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
                                <MDBCard style={{ width: "22rem", marginTop: "1rem", marginLeft: "10rem" }}>
                                    <MDBCardHeader color="deep-orange lighten-1">2020 Releases</MDBCardHeader>
                                    <MDBView cascade>
                                        <MDBCardImage
                                            hover
                                            overlay='white-slight'
                                            className='card-img-top'
                                            src='https://3er1viui9wo30pkxh1v2nh4w-wpengine.netdna-ssl.com/wp-content/uploads/prod/sites/68/2020/05/Hero_1920x1080.png'
                                            alt='Card cap'
                                        />
                                    </MDBView>
                                    <MDBCardBody>
                                        <MDBCardTitle>Minecraft Dungeons</MDBCardTitle>
                                        <MDBCardText>
                                            With supporting text below as a natural lead-in to additional
                                            content.
                                        </MDBCardText>
                                        <MDBBtn color="deep-orange" href="https://www.xbox.com/en-US/games/minecraft-dungeons">GET IT NOW</MDBBtn>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                    </MDBRow>

                    </section>

                        <section className="text-center my-5">
                            <h2 className="h1-responsive font-weight-bold text-center my-5">
                                MOST PLAYED
                            </h2>
                            <MDBRow>
                                <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
                                    <MDBCard style={{ width: "22rem", marginTop: "1rem", marginLeft: "10rem" }}>
                                        <MDBCardHeader color="deep-orange lighten-1">2020 Releases</MDBCardHeader>
                                        <MDBView cascade>
                                            <MDBCardImage
                                                hover
                                                overlay='white-slight'
                                                className='card-img-top'
                                                src='https://wallpaperaccess.com/full/255714.jpg'
                                                alt='Card cap'
                                            />
                                        </MDBView>
                                        <MDBCardBody>
                                            <MDBCardTitle>Fortnite </MDBCardTitle>
                                            <MDBCardText>
                                                With supporting text below as a natural lead-in to additional
                                                content.
                                            </MDBCardText>
                                            <MDBBtn color="deep-orange" href="https://www.epicgames.com/fortnite/en-US/chapter2">GET IT NOW</MDBBtn>
                                        </MDBCardBody>
                                    </MDBCard>
                                </MDBCol>
                                <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
                                    <MDBCard style={{ width: "22rem", marginTop: "1rem", marginLeft: "10rem" }}>
                                        <MDBCardHeader color="deep-orange lighten-1">2020 Releases</MDBCardHeader>
                                        <MDBView cascade>
                                            <MDBCardImage
                                                hover
                                                overlay='white-slight'
                                                className='card-img-top'
                                                src='https://images3.alphacoders.com/101/thumb-1920-1018513.jpg'
                                                alt='Card cap'
                                            />
                                        </MDBView>
                                        <MDBCardBody>
                                            <MDBCardTitle>Call of Duty:Modern Warfare</MDBCardTitle>
                                            <MDBCardText>
                                                With supporting text below as a natural lead-in to additional
                                                content.
                                            </MDBCardText>
                                            <MDBBtn color="deep-orange" href = "https://www.callofduty.com/au/en/modernwarfare/buy">GET IT NOW</MDBBtn>
                                        </MDBCardBody>
                                    </MDBCard>
                                </MDBCol>
                                <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
                                    <MDBCard style={{ width: "22rem", marginTop: "1rem", marginLeft: "10rem" }}>
                                        <MDBCardHeader color="deep-orange lighten-1">2020 Releases</MDBCardHeader>
                                        <MDBView cascade>
                                            <MDBCardImage
                                                hover
                                                overlay='white-slight'
                                                className='card-img-top'
                                                src='https://images.alphacoders.com/983/thumb-1920-983650.jpg'
                                                alt='Card cap'
                                            />
                                        </MDBView>
                                        <MDBCardBody>
                                            <MDBCardTitle>Moratl Kombat 11</MDBCardTitle>
                                            <MDBCardText>
                                                With supporting text below as a natural lead-in to additional
                                                content.
                                            </MDBCardText>
                                            <MDBBtn color="deep-orange" href="https://www.mortalkombat.com/">GET IT NOW</MDBBtn>
                                        </MDBCardBody>
                                    </MDBCard>
                                </MDBCol>
                            </MDBRow>


                        </section>

                    <section className="text-center my-5">
                        <h2 className="h1-responsive font-weight-bold text-center my-5">
                            COMING SOON
                        </h2>
                        <MDBRow>
                            <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
                                <MDBCard style={{ width: "22rem", marginTop: "1rem", marginLeft: "10rem" }}>
                                    <MDBCardHeader color="deep-orange lighten-1">2020 Releases</MDBCardHeader>
                                    <MDBView cascade>
                                        <MDBCardImage
                                            hover
                                            overlay='white-slight'
                                            className='card-img-top'
                                            src='https://www.xboxwallpapers.net/1920x1080/colt-canyon.jpg'
                                            alt='Card cap'
                                        />
                                    </MDBView>
                                    <MDBCardBody>
                                        <MDBCardTitle>Colt Canyon </MDBCardTitle>
                                        <MDBCardText>
                                            With supporting text below as a natural lead-in to additional
                                            content.
                                        </MDBCardText>
                                        <MDBBtn color="deep-orange" href="https://colt-canyon.com/" >Watch Trailer</MDBBtn>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                            <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
                                <MDBCard style={{ width: "22rem", marginTop: "1rem", marginLeft: "10rem" }}>
                                    <MDBCardHeader color="deep-orange lighten-1">2020 Releases</MDBCardHeader>
                                    <MDBView cascade>
                                        <MDBCardImage
                                            hover
                                            overlay='white-slight'
                                            className='card-img-top'
                                            src='https://images.hdqwalls.com/download/disintegration-2020-4k-3n-1920x1080.jpg'
                                            alt='Card cap'
                                        />
                                    </MDBView>
                                    <MDBCardBody>
                                        <MDBCardTitle>Disintegration</MDBCardTitle>
                                        <MDBCardText>
                                            With supporting text below as a natural lead-in to additional
                                            content.
                                        </MDBCardText>
                                        <MDBBtn color="deep-orange" href="https://www.disintegrationgame.com/">Watch Trailer</MDBBtn>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                            <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
                                <MDBCard style={{ width: "22rem", marginTop: "1rem", marginLeft: "10rem" }}>
                                    <MDBCardHeader color="deep-orange lighten-1">2020 Releases</MDBCardHeader>
                                    <MDBView cascade>
                                        <MDBCardImage
                                            hover
                                            overlay='white-slight'
                                            className='card-img-top'
                                            src='https://cdn.wallpapersafari.com/78/75/QXO6t7.jpg'
                                            alt='Card cap'
                                        />
                                    </MDBView>
                                    <MDBCardBody>
                                        <MDBCardTitle>Paper Mario</MDBCardTitle>
                                        <MDBCardText>
                                            With supporting text below as a natural lead-in to additional
                                            content.
                                        </MDBCardText>
                                        <MDBBtn color="deep-orange" href="https://papermario.nintendo.com/">Watch Trailer</MDBBtn>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                        </MDBRow>


                    </section>


                    <br/>
                    <br/>
                    <br/>
                    <br/>

                </div>
            </Router>

        );
    }
}

export default Landing;