import "./App.css";
import ProductPrice from "./ProductPrice";

function App() {
  return (
    <div className="container">
      <h1>Fancy Florist</h1>
      <div className="card-container">
        <ProductPrice
          name="Congratulations Bouquet"
          description="The perfect bouquet for a celebration such as a birthday or graduation."
          price={70}
          image="https://images.unsplash.com/photo-1610507121140-78606d4e5220?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
        />
        <ProductPrice
          name="Apology Bouquet"
          description="You need something extra when you know you messed up."
          price={150}
          image="https://images.unsplash.com/photo-1487530811176-3780de880c2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80"
        />
        <ProductPrice
          name="Wedding Bouquet"
          description="Beautiful collection of flowers to turn heads on your special day!"
          price={200}
          image="https://images.unsplash.com/photo-1593470792503-936d5f070e31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        />
      </div>
    </div>
  );
}

export default App;
