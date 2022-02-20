import React, { Component } from 'react';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import TestimonialBox from './TestimonialBox';
import data from './TestimonialData';

class Testimonials extends Component {
  static renderTestimonials() {
    return data.map((item, i) => {
      const activeValue = i === 0 ? 1 : 0;
      return (
        <TestimonialBox
          key={`testimonial-key-${i}`}
          name={item.name}
          text={item.text}
          active={activeValue}
        />);
    });
  }

  static renderSliders() {
    return data.map((slider, i) => (
      <li
        data-target="#quote-carousel"
        data-slide-to={i}
        className={i === 0 ? 'active' : undefined}
        key={`sliders-key-${i}`}
      />
    ));
  }

  render() {
    const testimonials = Testimonials.renderTestimonials();
    const sliders = Testimonials.renderSliders();
    return (
      <section className="testimonials-section" id="testimonials">
        <div className="container">
          <div className="row testimonials-row">
            <div
              className="col-md-1"
              data-target="#quote-carousel"
              data-slide="prev"
              style={{ cursor: 'pointer' }}
            >
              <KeyboardArrowLeft
                style={{ fontSize: '35px' }}
              />
            </div>
            <div className="col-md-10">
              <div className="carousel slide" data-ride="carousel" id="quote-carousel" data-pause="hover">
                <ol className="carousel-indicators">
                  {sliders}
                </ol>
                <div className="carousel-inner">
                  {testimonials}
                </div>
              </div>
            </div>
            <div
              className="col-md-1"
              data-target="#quote-carousel"
              data-slide="next"
              style={{ cursor: 'pointer' }}
            >
              <KeyboardArrowRight
                style={{ fontSize: '35px' }}
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Testimonials;
