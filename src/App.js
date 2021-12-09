import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {addCustomerAction, removeCustomerAction} from "./store/customerReducer";
import {addCashAction, getCashAction} from "./store/cashReducer";
import {fetchCustomers} from "./asyncAction/customers";

function App() {
  const dispatch = useDispatch()
  const cash = useSelector(state => state.cash.cash)
  const customers = useSelector(state => state.customers.customers)


  console.log(cash)

  const addCash = (cash) => {
    return dispatch(addCashAction(cash))
  }

  const getCash = (cash) => {
    return dispatch(getCashAction(cash))
  }

  const addCustomers = (name) => {
    const customers = {
      name,
      id: Date.now()
    }
    dispatch(addCustomerAction(customers))
  }

  const removeCustomer = (customer) => {
    return dispatch(removeCustomerAction(customer.id))
  }

  return (
    <div className='app'>
      <div style={{fontSize:'3rem'}}>{cash}</div>

      <div style={{display: 'flex'}}>
        <button onClick={() => addCash(Number(prompt()))}>Пополнить счет</button>
        <button onClick={() => getCash(Number(prompt()))}>Снять со счета</button>
      </div>

      <div style={{display: 'flex', margin: '10px'}}>
        <button onClick={() => addCustomers(prompt())}>Добавить клиента</button>
        <button onClick={() => removeCustomer()}>Убрать клиента</button>
        <button onClick={() => dispatch(fetchCustomers())}>Получить клиентов из базы</button>

      </div>

        {customers.length > 0 ?
            <div>
              {customers.map((customer, id) =>
                <div
                    onClick={() => removeCustomer(customer)}
                    key={id}
                    style={{fontSize: '2rem', border: '1px solid black', padding: '5px', marginTop:5}}
                >
                  {customer.name}
                </div>
              )}
            </div>
            :
            <div>
              Клиенты отсутствуют!
            </div>
        }
    </div>
  );
}

export default App;
