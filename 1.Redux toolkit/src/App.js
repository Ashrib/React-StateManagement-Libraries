import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { increment , decrement, incByAmount} from './redux/slices/count';

function App() {

  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch();
  return (
    <div>
      {count}
      <button 
       onClick={()=> dispatch(increment())}>
        Increment
       </button>
       <button 
       onClick={()=> dispatch(decrement())}>
        Decrement
       </button>
       <button 
       onClick={()=> dispatch(incByAmount(5))}>
        increment by amount
       </button>
    </div>
  );
}

export default App;
