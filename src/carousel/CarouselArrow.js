import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme, props) => ({
  root: props => ({
    display: 'flex',
    position: 'absolute',
    top: '50%',
    //...{...props.direction === 'right' ? `right: 25px` : `left: 25px`},
    [props.direction]: 25,
    height: 50,
    width: 50,
    justifyContent: 'center',
    background: 'white',
    borderRadius: '50%',
    cursor: 'pointer',
    alignItems: 'center',
    transition: 'transform ease-in 0.1s'
  })
}));


export default function CarouselArrow(props) {
  const classes = useStyles(props);

  return (
    <div
      onClick={props.handleClick}
      className={classes.root}
    >
      {props.direction === 'right' ? '>' : '<'}
    </div>
  )
}

/*
  {props.direction === 'right' ? <img src={rightArrow} /> : <img src={leftArrow} />}
*/


/*

display: flex;
position: absolute;
top: 50%;
${direction === 'right' ? `right: 25px` : `left: 25px`};
height: 50px;
width: 50px;
justify-content: center;
background: white;
border-radius: 50%;
cursor: pointer;
align-items: center;
transition: transform ease-in 0.1s;
&:hover {
  transform: scale(1.1);
}
img {
  transform: translateX(${direction === 'left' ? '-2' : '2'}px);
  &:focus {
    outline: 0;
  }
}
`}

*/