import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import CarouselContent from './CarouselContent';
import CarouselImg from './CarouselImg';
import CarouselArrow from './CarouselArrow';
import CarouselDots from './CarouselDots';

//import Container from '@material-ui/core/Container';
//import Hidden from '@material-ui/core/Hidden';
//import Box from '@material-ui/core/Box';


const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    height: '100vh',
    width: '100vw',
    margin: '0 auto',
    overflow: 'hidden'
  }
}));


export default function Carousel(props) {
  const classes = useStyles();

  const getWidth = () => window.innerWidth;

  const [state, setState] = React.useState({
    activeIndex: 0,
    translate: 0,
    transition: 0.45
  });

  const { translate, transition, activeIndex } = state;


  const nextSlide = () => {
    if (activeIndex === props.imgs.length - 1) {
      return setState({
        ...state,
        translate: 0,
        activeIndex: 0
      })
    }

    setState({
      ...state,
      activeIndex: activeIndex + 1,
      translate: (activeIndex + 1) * getWidth()
    })
  }


  const prevSlide = () => {
    if (activeIndex === 0) {
      return setState({
        ...state,
        translate: (props.imgs.length - 1) * getWidth(),
        activeIndex: props.imgs.length - 1
      })
    }

    setState({
      ...state,
      activeIndex: activeIndex - 1,
      translate: (activeIndex - 1) * getWidth()
    })
  }


  return (
    <div className={classes.root}>
      <CarouselContent
        translate={translate}
        transition={transition}
        width={getWidth() * props.imgs.length}
      >
        {props.imgs.map((img, idx) => (
          <CarouselImg key={img + idx} img={img} />
        ))}
      </CarouselContent>

      <CarouselArrow direction="left" handleClick={prevSlide} />
      <CarouselArrow direction="right" handleClick={prevSlide} />

      <CarouselDots imgs={props.imgs} activeIndex={activeIndex} />
    </div>
  )
}



