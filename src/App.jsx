import './App.css'
import Section1 from './components/section/Section1'
import Navbar from './components/navBar/Navbar'
import Bottom from './components/bottom/Bottom'






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
    <Section1/>
    <Bottom/>
    
    </>

  )
}

export default App
