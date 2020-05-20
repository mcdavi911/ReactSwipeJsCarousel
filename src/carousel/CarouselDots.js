import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import CarouselDot from './CarouselDot';

const useStyles = makeStyles((theme, props) => ({
  root: props => ({
      position: 'absolute',
      bottom: 25,
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
  }),
}));


export default function CarouselDots(props) {
  const classes = useStyles(props);

  return (
    <div className={classes.root}>
      {props.imgs.map((img, idx) => (
        <CarouselDot key={img} active={props.activeIndex === idx} />
      ))}
    </div>
  )
}
