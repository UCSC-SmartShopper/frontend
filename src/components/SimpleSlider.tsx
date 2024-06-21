import React, { forwardRef, useImperativeHandle, useRef } from "react";
import Slider from "react-slick";

import { Box } from "@chakra-ui/react";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

export interface SliderMethods {
  next: () => void;
  previous: () => void;
}

interface Props {
  children: React.ReactNode;
  config?: any;
}

const SimpleSlider = forwardRef(({ children, config }: Props, ref) => {
  const sliderRef = useRef<Slider | null>(null);

  useImperativeHandle(ref, () => ({
    next() {
      sliderRef.current?.slickNext();
    },
    previous() {
      sliderRef.current?.slickPrev();
    },
  }));

  const settings = config || {
    dots: true,
    arrows: false,
    pauseOnHover: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 1200,
  };

  return (
    <Box paddingBottom={10} bg="background">
      <Slider ref={sliderRef} {...settings}>
        {children}
      </Slider>
    </Box>
  );
});

export default SimpleSlider;
