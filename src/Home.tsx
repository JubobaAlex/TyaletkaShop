import './Home.css'
const Home = () => {
    return(
        <div>
          <div className='main'>
          <div className='status'>
            <div className='card'>
              <img className='imgTovar' src={'./img/tovar1.png'} alt="" height={180} width={200} />
              <div className='tovar'>Туалетная бумага FAMILIA PLUS Белая</div>
              <div className='cena'>551₽/уп</div>
              <div className='btn-keeper'>
            <a  className="btn" href="/order">Заказать</a>
          </div>
            </div>
          </div>
          <div className='status'>
            <div className='card'>
              <img className='imgTovar' src={'./img/tovar2.png'} height={180} width={200} alt="" />
              <div className='tovar'>Туалетная бумага Luscan</div>
              <div className='cena'>1014₽/уп</div>
              <div className='btn-keeper'>
            <a  className="btn" href="/order">Заказать</a>
          </div>
            </div>
          </div>
          <div className='status'>
            <div className='card'>
              <img className='imgTovar' src={'./img/tovar3.png'} height={180} width={200} alt="" />
              <div className='tovar'>Туалетная бумага Laima Deluxe</div>
              <div className='cena'>1043₽/уп</div>
              <div className='btn-keeper'>
            <a  className="btn" href="/order">Заказать</a>
          </div>
            </div>
          </div>
          <div className='status'>
            <div className='card'>
              <img className='imgTovar' src={'./img/tovar4.png'} height={180} width={200} alt="" />
              <div className='tovar'>Туалетная бумага Papia Bali Flower </div>
              <div className='cena'>1295₽/уп</div>
              <div className='btn-keeper'>
            <a  className="btn" href="/order">Заказать</a>
          </div>
            </div>
          </div>
       </div>
       </div>
    )
}
export default Home