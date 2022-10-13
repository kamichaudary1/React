import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store';

import classes from './Counter.module.css';

const Counter = () => {

  const dispatch = useDispatch();
  const counter = useSelector( state => state.count.counter );
  const toggleCounter = useSelector( state => state.count.showCounter)

  const incrementHandler = () => {
    // dispatch({ type: 'increment' });
    dispatch( counterActions.increment() );
  };

  const decrementHandler = () => {
    // dispatch({ type: 'decrement' });
    dispatch( counterActions.decrement() );
  };

  const increaseHandler = () => {
    // dispatch({ 
    //   type: 'increase',
    //   amount: 10
    // });
    dispatch( counterActions.increase(10) );
  };

  const toggleCounterHandler = () => {
    // type: 'toggle'
    dispatch( counterActions.toggleCounter() );
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {       
        toggleCounter && <div className={classes.value}>{counter}</div> 
      }
      <div>
        <button onClick={incrementHandler} className='counter-btn'>increment</button>
        <button onClick={decrementHandler} className='counter-btn'>decrement</button>
        <button onClick={increaseHandler} className='counter-btn'>increaseby</button>

      </div>
      <button onClick={toggleCounterHandler} className='counter-btn'>Toggle Counter</button>
    </main>
  );
};

export default Counter;
