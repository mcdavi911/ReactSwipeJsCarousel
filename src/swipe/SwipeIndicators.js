import React from 'react';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
  root: {
    padding: 20,
    display: 'flex',
    justifyContent: 'space-around',
    '& div': {
      padding: 12
    }

  },
  indicator: props => ({
    background: 'yellow',
    backgroundColor: props.active && 'red',
    margin: 10
  }),
  test: {
    background: 'pink'
  }
}));


export default function SwipeIndicators(props) {
  const classes = useStyles(props);

  console.log('props here', props.paneActive);

  return (
    <div className={classes.root}>
      {Array.from(Array(props.panes), (e, idx) => (
        <div
          key={idx}
          className={props.paneActive === idx ? classes.test : ''}
        >
          {props.panes}
        </div>
      ))}
      
    </div>
  )
}

