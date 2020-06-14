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

class Category extends React.Component {
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
                    <MDBRow >
                        <MDBCol md='4' >
                            <MDBCard
                                className='card-image'
                                style={{
                                    backgroundImage:
                                        "url('https://cdn.gamedevmarket.net/wp-content/uploads/20191203164239/f1d499f994bfa1160fd22743a1e8d6ec-700x400.jpg')",
                                    marginLeft : "15rem", width:"30rem"
                                }}
                            >
                                <div className='text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4'>
                                    <div>
                                        <MDBCardTitle tag='h3' className='pt-2'>
                                            <strong>Racing</strong>
                                        </MDBCardTitle>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                            Repellat fugiat, laboriosam, voluptatem, optio vero odio nam sit
                                            officia accusamus minus error nisi architecto nulla ipsum
                                            dignissimos. Odit sed qui, dolorum!
                                        </p>
                                        <MDBBtn color='orange'>
                                            <MDBIcon  /> View Games
                                        </MDBBtn>
                                    </div>
                                </div>
                            </MDBCard>
                        </MDBCol>
                        <MDBCol md='4' >
                            <MDBCard
                                className='card-image'
                                style={{
                                    backgroundImage:
                                        "url('https://techfelds.com/wp-content/uploads/2019/12/destroy-all-humans-700x400.jpg')",
                                    marginLeft : "15rem", width:"30rem"
                                }}
                            >
                                <div className='text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4'>
                                    <div>
                                        <MDBCardTitle tag='h3' className='pt-2'>
                                            <strong>Adventure</strong>
                                        </MDBCardTitle>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                            Repellat fugiat, laboriosam, voluptatem, optio vero odio nam sit
                                            officia accusamus minus error nisi architecto nulla ipsum
                                            dignissimos. Odit sed qui, dolorum!
                                        </p>
                                        <MDBBtn color='orange'>
                                            <MDBIcon  /> View Games
                                        </MDBBtn>
                                    </div>
                                </div>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                <MDBRow>
                    <MDBCol md='4' >
                        <MDBCard
                            className='card-image'
                            style={{
                                backgroundImage:
                                    "url('https://cdn1.i-scmp.com/sites/default/files/styles/700x400/public/2015/12/18/just_cause_3_a_new_just_cause_3_a_54644113.jpg?itok=_lRaysqM')",
                                marginLeft : "15rem", width:"30rem"
                            }}
                        >
                            <div className='text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4'>
                                <div>
                                    <MDBCardTitle tag='h3' className='pt-2'>
                                        <strong> Combat </strong>
                                    </MDBCardTitle>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        Repellat fugiat, laboriosam, voluptatem, optio vero odio nam sit
                                        officia accusamus minus error nisi architecto nulla ipsum
                                        dignissimos. Odit sed qui, dolorum!
                                    </p>
                                    <MDBBtn color='orange'>
                                        <MDBIcon  /> View Games
                                    </MDBBtn>
                                </div>
                            </div>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol md='4' >
                        <MDBCard
                            className='card-image'
                            style={{
                                backgroundImage:
                                    "url('https://www.touchtapplay.com/wp-content/uploads/2018/03/PuBG-Mobile-Cheats-Tips.jpg')",
                                marginLeft : "15rem", width:"30rem"
                            }}
                        >
                            <div className='text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4'>
                                <div>
                                    <MDBCardTitle tag='h3' className='pt-2'>
                                        <strong>Survival</strong>
                                    </MDBCardTitle>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        Repellat fugiat, laboriosam, voluptatem, optio vero odio nam sit
                                        officia accusamus minus error nisi architecto nulla ipsum
                                        dignissimos. Odit sed qui, dolorum!
                                    </p>
                                    <MDBBtn color='orange'>
                                        <MDBIcon  /> View Games
                                    </MDBBtn>
                                </div>
                            </div>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
                <br/>
                <br/>
                <br/>
                <br/>
                </section>
                </div>
            </Router>

        );
    }
}

export default Category;