import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ReactSwipe from 'react-swipe';
import SwipeIndicators from './SwipeIndicators';
import SwipeContainer from './SwipeContainer';

const useStyles = makeStyles((theme) => ({
  root: {

  },
  pane: {
    background: 'green',
    height: 400
  }
}));


export default function Swipe(props) {
  const classes = useStyles();
  let reactSwipeEl;
  
  let [currentPos, setCurrentPos] = React.useState(0);

  //console.log('currentPos', currentPos);

  const handlePos = pos => {
    setCurrentPos(pos);
  }


  const swipe = React.useMemo(() => (
    <>
      <ReactSwipe
        className="carousel"
        swipeOptions={{
          continuous: false,
          callback: () => handlePos(reactSwipeEl.getPos())
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
    <div className={classes.root}>
      
      {swipe}
      <SwipeIndicators panes={3} paneActive={currentPos} />

      {
        /*
        <SwipeContainer handlePos={handlePos} />

        <button onClick={() => reactSwipeEl.next()}>Next</button>
        <button onClick={() => reactSwipeEl.prev()}>Previous</button>
        */
      }
    </div>
  )
}



