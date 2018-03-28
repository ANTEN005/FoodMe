import React, {Component} from 'react';
import {Carousel} from 'react-bootstrap';
import './FeedPage.css';

export default class CarouselShower extends Component{

    render(){

        return (
            <Carousel className="carousel">
                <Carousel.Item>
                    <img alt="" className="Image" src="/assets/food3.jpg"/>
                    <Carousel.Caption>
                        <h3>Find new Recipes!</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img alt="" className="Image" src="/assets/food6.jpg" />
                    <Carousel.Caption>
                        <h3>Share pictures with your friends!</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img alt="" className="Image" src="/assets/food7.jpg"/>
                    <Carousel.Caption>
                        <h3>All on one site!</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        );
    }
}