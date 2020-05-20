import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ReactSwipe from 'react-swipe';


const useStyles = makeStyles((theme) => ({
  root: {

  },
  pane: {
    background: 'green',
    height: 400
  }
}));


export default function SwipeContainer(props) {
  const classes = useStyles();
  let reactSwipeEl;
  let swipe2;

  const swipe = React.useMemo(() => (
    <>
      <ReactSwipe
        className="carousel"
        swipeOptions={{
          continuous: false,
          callback: () => props.handlePos(reactSwipeEl.getPos())
        }}
        ref={el => (reactSwipeEl = el)}
      >
        <div className={classes.pane}>PANE 1</div>
        <div className={classes.pane}>PANE 2</div>
        <div className={classes.pane}>PANE 3</div>
      </ReactSwipe>
      <button onClick={() => reactSwipeEl.next()}>Next</button>
      <button onClick={() => reactSwipeEl.prev()}>Previous</button>
    </>
  ), []);

  return (
    <div>
      {swipe}
    </div>
  )
}


