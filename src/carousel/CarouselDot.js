import React from 'react'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme, props) => ({
  root: props => ({
    padding: 10,
    marginRight: 5,
    cursor: 'pointer',
    borderRadius: '50%',
    background: props.active ? 'black' : 'white'
  }),
  
}));


export default function CarouselDots(props) {
  const classes = useStyles(props);

  return (
    <span className={classes.root}></span>
  )
}
