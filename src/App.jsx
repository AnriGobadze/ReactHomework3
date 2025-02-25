import './App.css'
import Card from './components/card/Card'
import Navbar from './components/navBar/Navbar'

function App() {

  let navbar = {
    name: "Anri Gobadze",
    founderOf: "Virtual Assistant",
    list1: "Services and Pricing",
    list2: "About",
    list3: "Contact"

  }



  return (
    <>
    <Navbar info={navbar}/>
    <Card/>
    </>

  )
}

export default App
