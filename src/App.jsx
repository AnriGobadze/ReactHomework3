import './App.css'

function App() {
  let cardInfo = {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_ZlMsMErAZ7-AYNDTKMV4_MnxnYbR68c5Xq7Wbep_e4fuvVLvD_V930eag3SwR4lQn2E&usqp=CAU",
    firstname: "Anri",
    Lastname: "Gobadze"
  }



  return (
    <>
      <div className="card">
        <img src={cardInfo.image} alt="there is no image"/>
        <h4>{cardInfo.firstname}</h4>
        <h5>{cardInfo.Lastname}</h5>
      </div>
    </>
  )
}

export default App
