import React, { useEffect, useRef, useState } from 'react';

// Carausel component import
import 'pure-react-carousel/dist/react-carousel.es.css';
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  Dot,
  Image,
} from 'pure-react-carousel';

// Icon import from Feather icon
import { ChevronLeft, ChevronRight } from 'react-feather';

// Stylesheet import
import classes from './Media.module.css';

//! Post Placeholder image
import PlaceholderImg1 from '../../../Assets/PlaceholderImages/1.jpg';
import PlaceholderImg2 from '../../../Assets/PlaceholderImages/2.jpg';
import PlaceholderImg3 from '../../../Assets/PlaceholderImages/7.jpg';

const images = [
  { url: PlaceholderImg1 },
  { url: PlaceholderImg2 },
  { url: PlaceholderImg3 },
];

function Media({ initialSlide = 0, onClickImage, setInitialSlide }) {
  const ref = useRef(null);
  const [mediaWidth, setMediaWidth] = useState(0);

  useEffect(() => {
    setMediaWidth(ref.current.offsetWidth);
  }, []);

  // Active Image index
  const [curSlide, setCurSlide] = useState(initialSlide);

  // Next slide handler
  const nextSlideHandler = () => {
    setCurSlide(curSlide + 1);
  };

  // Previous Slide Handler

  const prevSlideHandler = () => {
    setCurSlide(curSlide - 1);
  };

  // Dot Click Handler
  const dotClickHandler = (e) => {
    setCurSlide(+e.target.dataset.index);
  };

  // Setting initial slide for media popup
  const onImageClickHandler = () => {
    onClickImage();
    setInitialSlide(curSlide);
    console.log(curSlide);
  };

  return (
    <div className={classes.carouselContainer} ref={ref}>
      <CarouselProvider
        naturalSlideWidth={mediaWidth}
        naturalSlideHeight={mediaWidth * (2 / 3)}
        totalSlides={images.length}
      >
        <Slider>
          {images.map((media, index) => (
            <Slide index={index} key={media.url} className={classes.slide}>
              <Image
                onClick={onImageClickHandler}
                src={media.url}
                className={`${classes.image} ${
                  index === curSlide && classes.imageActive
                }`}
              />
            </Slide>
          ))}
        </Slider>
        {curSlide !== 0 && (
          <ButtonBack
            className={`${classes.btn} ${classes.btnBack}`}
            onClick={prevSlideHandler}
          >
            <ChevronLeft className={classes.chevron} />
          </ButtonBack>
        )}
        {curSlide !== images.length - 1 && (
          <ButtonNext
            className={`${classes.btn} ${classes.btnNext}`}
            onClick={nextSlideHandler}
          >
            <ChevronRight className={classes.chevron} />
          </ButtonNext>
        )}
        <div className={classes.dotContainer}>
          {images.map((_, index) => (
            <Dot
              slide={index}
              key={index}
              className={`${classes.dot} ${
                index === curSlide && classes.dotActive
              }`}
              onClick={dotClickHandler}
              data-index={index}
            />
          ))}
        </div>
      </CarouselProvider>
    </div>
  );
}

export default Media;
