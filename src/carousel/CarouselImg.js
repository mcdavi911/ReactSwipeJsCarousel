import React from 'react'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme, props) => ({
  root: props => ({
    height: '100%',
    width: '100%',
    backgroundImage: `url(${props.img})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  }),
  
}));


export default function CarouselImg(props) {
  const classes = useStyles(props);

  return (
    <div className={classes.root}>
      {props.children}
    </div>
  )
}
