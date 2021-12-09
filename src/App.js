import './App.css';
import {useDispatch, useSelector} from "react-redux";

function App() {
  const dispatch = useDispatch()
  const cash = useSelector(state => state.cash)
  console.log(cash)

  const addCash = (cash) => {
    return dispatch({type: 'ADD_CASH', payload: cash})
  }

  const getCash = (cash) => {
    return dispatch({type: 'GET_CASH', payload: cash})
  }

  return (
    <div className='app'>
      <div style={{display: 'flex'}}>
        <div style={{fontSize:'3rem'}}>{cash}</div>
        <button onClick={() => addCash(Number(prompt()))}>Пополнить счет</button>
        <button onClick={() => getCash(Number(prompt()))}>Снять со счета</button>
      </div>
    </div>
  );
}

export default App;
