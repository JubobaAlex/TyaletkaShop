import { useState } from "react";
import './Order.css'

const Order = ()  => {
    const [inputValue , setInputValue] = useState('')
    const [inputValueTwo, setInputValueTwo] = useState('');

    const hardleClick = ():void => {
        if(inputValue.trim() === '' || inputValueTwo.trim() === '') {
            alert("Вы не указали адрес или номер")
        }
        else {
            alert('Ожидайте заказ, мы позвоним!')
        }
    }
    return(
        <div>
          <h3>Укажите ваш адрес: <input value={inputValue} type="text" id='myInputone' onChange={(e) => setInputValue(e.target.value)}></input></h3>
                <h3>Укажите ваш номер телефона: <input value={inputValueTwo} type="number" id='myInputtwo' onChange={(y) => setInputValueTwo(y.target.value)}></input></h3>
                <div className='orderButtonDiv'>
              <button  className='orderButton' onClick={hardleClick} >Заказать</button>
              <a className="orderBack" href="/">Назад</a>
                </div>   
        </div>
    )
}
export default Order;