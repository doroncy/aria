import React, { Component } from 'react';
import Slider from 'react-slick';
import style from './gallery.scss';


class LeftNavButton extends React.Component {
  render() {
    return <div className="gallery-icons SVGIcon icon-arrow_left" {...this.props}></div>
  }
}

class RightNavButton extends React.Component {
  render() {
    return <div className="gallery-icons SVGIcon icon-arrow_right" {...this.props}></div>
  }
}

export default class Gallery extends Component {
  constructor(props) {
    super();

    this.galleryIndex = 0;
    this.sliderSettings = {
      dots: false,
      arrows: true,
      autoplay: false,
      initialSlide:0,
      infinite: true,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 1,
      nextArrow: RightNavButton,
      prevArrow: LeftNavButton,
      afterChange: this.changeImage
    };

    this.changeImage = this.changeImage.bind(this);
  }

  changeImage(index) {
    if (!!this.onImageChange) {
      this.onImageChange(index+1);
    } else {
      this.galleryIndex = index;
      this.props.onImageChange(index+1);
    }
  }

  render() {
    let galleryImages = this.props.galleryImages.map((image, index)=> {

      let isActive = index === this.galleryIndex || index ===  this.props.galleryIndex ? 'active' : '';
      return (
        <div className={`gallery-item ${isActive}`} key={index}>
          <div className="pos-relative gallery-item-img-wrap">
            <img src={image} alt=""/>
            <div className="dark-layer show-for-medium" onClick={this.changeImage.bind(this, index)}></div>
          </div>
        </div>
      );
    });

    return(
      <div className="gallery-images-wrap">
        <div className="row">
          <div className="small-9 medium-10 columns small-centered pos-relative">
            <Slider {...this.sliderSettings} onImageChange={this.props.onImageChange} className="show-for-medium">
              {galleryImages}
            </Slider>
            <Slider {...this.sliderSettings} slidesToShow="1" onImageChange={this.props.onImageChange} className="hide-for-medium">
              {galleryImages}
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}
