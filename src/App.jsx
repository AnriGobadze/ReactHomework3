import './App.css'
import Card from './components/card/Card'
import Navbar from './components/navBar/Navbar'

function App() {
  let  cardInfo = {
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    title: "Scented Candle",
    description: "A soothing scented candle for relaxation and mood enhancement.",
    price: 19.99
  }


  return (
    <>
    <Navbar/>
    <Card info={cardInfo}/>
    </>

  )
}

export default App
