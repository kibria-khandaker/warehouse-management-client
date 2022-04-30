import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Home.css';

const BannerSlide = ({ fruits }) => {
    // console.log(fruits);
    return (
        <Carousel>
            {
                fruits.map(fruit => (
                    <Carousel.Item
                        key={fruit._id}
                        style={{ backgroundImage: `url(${fruit.img})` }}
                        className='sliderBgImg myBrandBgColor' >
                        <Carousel.Caption>
                            <h3 className=' text-uppercase'> {fruit.name} </h3>
                            <p>{fruit.shortDesc}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))
            }
        </Carousel>
    );
};

export default BannerSlide;