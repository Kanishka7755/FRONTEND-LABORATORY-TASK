import './App.css';

// Reusable Product Card Component
function ProductCard(props) {
  return (
    <div className="product-card">

      <img src={props.image} alt={props.title} />

      <h2>{props.title}</h2>

      <p>{props.description}</p>

    </div>
  );
}

// Main Component
function App() {
  return (
    <div className="container">

      <h1>Our Products</h1>

      <div className="product-container">

        <ProductCard
          image="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400"
          title="Headphones"
          description="High quality wireless headphones with clear sound."
        />

        <ProductCard
          image="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400"
          title="Smart Watch"
          description="Modern smartwatch with fitness tracking features."
        />

        <ProductCard
          image="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400"
          title="Shoes"
          description="Comfortable and stylish shoes for everyday use."
        />

      </div>

    </div>
  );
}

export default App;