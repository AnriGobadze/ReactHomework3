import './App.css'

function App() {
  const product = {
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    title: "Scented Candle",
    description: "A soothing scented candle for relaxation and mood enhancement.",
    price: 19.99
  }

  return (
    <div className="card">
      <img src={product.image} alt="Product" />
      <div className="card-info">
        <h4>{product.title}</h4>
        <p>{product.description}</p>
        <p><strong>Price:</strong> ${product.price}</p>
        <button className="btn">Add to Cart</button>
      </div>
    </div>
  )
}

export default App
