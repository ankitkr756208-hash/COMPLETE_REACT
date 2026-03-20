import React, { useReducer } from 'react'

const counterReducer = (state, action) => {
  switch (action.type) {
    case 'increment':
        return {count: state.count + 1};
    case 'decrement':
        return {count: state.count - 1};
    case 'IncreaseBy10':
        return {count: state.count + 10};
    case 'reset':
        return {count: 0};
    default:
        return state;
  }
}
const Index = () => {
    const [state, dispatch] = useReducer(counterReducer, {count: 0});
  return (
    <div>
        <h1>count={state.count}</h1>
        <button onClick={() => dispatch({type: 'increment'})}>Increase</button>
        <button onClick={() => dispatch({type: 'decrement'})}>Decrease</button>
        <button onClick={() => dispatch({type: 'IncreaseBy10'})}>Increase By 10</button>
        <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
    </div>
  )
}

export default Index;