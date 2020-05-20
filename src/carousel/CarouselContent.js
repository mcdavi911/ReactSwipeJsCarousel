import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme, props) => ({
  root: props => ({
    transform: `translateX(-${props.translate}px)`,
    transition: `transform ease-out ${props.transition}s`,
    height: '100%',
    width: `${props.width}px`,
    display: 'flex',
  }),
  
}));


export default function CarouselContent(props) {
  const classes = useStyles(props);

  return (
    <div className={classes.root}>
      {props.children}
    </div>
  )
}
