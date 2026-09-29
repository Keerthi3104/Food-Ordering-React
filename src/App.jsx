import { useMemo, useState } from "react";
import { ArrowRight, Search, ShoppingBag, Utensils } from "lucide-react";
import { foods } from "./data/foods";
import FoodCard from "./components/FoodCard";
import Cart from "./components/Cart";

export default function App() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [cart, setCart] = useState([]);

  const categories = [
    "All",
    "Burgers",
    "Pizza",
    "Sides",
    "Rice",
    "Pasta",
    "Desserts",
    "Drinks",
  ];

  const filteredFoods = useMemo(() => {
    const term = search.trim().toLowerCase();

    return foods.filter((food) => {
      const matchesSearch =
        !term ||
        food.name.toLowerCase().includes(term) ||
        food.category.toLowerCase().includes(term);

      const matchesCategory =
        activeCategory === "All" || food.category === activeCategory;

      return matchesSearch && matchesCategory;
    });
  }, [search, activeCategory]);

  function addToCart(food) {
    setCart((current) => {
      const exists = current.find((item) => item.id === food.id);

      if (exists) {
        return current.map((item) =>
          item.id === food.id ? { ...item, quantity: item.quantity + 1 } : item,
        );
      }

      return [...current, { ...food, quantity: 1 }];
    });
  }

  function increaseQuantity(id) {
    setCart((current) =>
      current.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  }

  function decreaseQuantity(id) {
    setCart((current) =>
      current
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
        )
        .filter((item) => item.quantity > 0),
    );
  }

  function removeFromCart(id) {
    setCart((current) => current.filter((item) => item.id !== id));
  }

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="site-shell">
      <header className="navbar">
        <a href="#" className="brand" aria-label="Flame and Crust home">
          <span className="brand-mark">
            <Utensils size={19} />
          </span>
          <span>
            <b>CRUNCHY</b>
            <small>& MUNCHY</small>
          </span>
        </a>

        <nav className="desktop-nav">
          <a href="#home">Home</a>
          <a href="#menu">Menu</a>
          <a href="#popular">Popular</a>
          <a href="#about">About</a>
        </nav>

        <a href="#cart" className="nav-order">
          <ShoppingBag size={17} />
          <span>Cart</span>
          <b>{cartCount}</b>
        </a>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <p className="hero-kicker">HOT • FRESH • MADE FOR YOU</p>
            <h1>
              PIZZA <span>&</span>
              <br />
              BURGER
            </h1>
            <p className="hero-copy">
              Big flavors, fresh ingredients and comfort food made to brighten
              your day.
            </p>
            <a className="hero-btn" href="#menu">
              Order Now <ArrowRight size={18} />
            </a>
          </div>

          <div className="hero-visual">
            <div className="hero-glow" />
            <img
              src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1200&q=90"
              alt="Fresh cheeseburger"
            />
            <div className="pizza-peek">
              <img
                src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=700&q=90"
                alt="Fresh pizza"
              />
            </div>
            <span className="floating-note note-one">100% FRESH</span>
            <span className="floating-note note-two">CHEESY</span>
          </div>
        </section>

        <section className="fresh-strip">
          <div>
            <p className="eyebrow">OUR PROMISE</p>
            <h2>
              FRESH, HOT & <span>DELICIOUS.</span>
            </h2>
            <p>
              Prepared fresh with quality ingredients and served with a little
              extra love.
            </p>
          </div>
          <a href="#menu">
            Explore Menu <ArrowRight size={17} />
          </a>
        </section>

        <section className="popular" id="popular">
          <div className="section-heading">
            <div>
              <p className="eyebrow">CUSTOMER FAVORITES</p>
              <h2>Popular picks</h2>
            </div>
            <div className="dots">
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
            </div>
          </div>

          <div className="mini-grid">
            {foods.slice(0, 4).map((food) => (
              <button
                key={food.id}
                className="mini-card"
                onClick={() => addToCart(food)}
              >
                <img src={food.image} alt={food.name} />
                <span>{food.category}</span>
                <h3>{food.name}</h3>
                <strong>₹{food.price} +</strong>
              </button>
            ))}
          </div>
        </section>

        <section className="menu-section" id="menu">
          <div className="menu-top">
            <div>
              <p className="eyebrow">FULL MENU</p>
              <h2>Choose your craving</h2>
              <p>Search, explore and add your favorites to the cart.</p>
            </div>

            <label className="search">
              <Search size={18} />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search food..."
              />
            </label>
          </div>

          <div className="category-row">
            {categories.map((category) => (
              <button
                key={category}
                className={activeCategory === category ? "active" : ""}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="order-layout">
            <div className="food-grid">
              {filteredFoods.length ? (
                filteredFoods.map((food) => (
                  <FoodCard key={food.id} food={food} onAdd={addToCart} />
                ))
              ) : (
                <div className="no-results">
                  <span>🍽️</span>
                  <h3>No food found</h3>
                  <p>Try another food name or category.</p>
                </div>
              )}
            </div>

            <div id="cart">
              <Cart
                cart={cart}
                onIncrease={increaseQuantity}
                onDecrease={decreaseQuantity}
                onRemove={removeFromCart}
              />
            </div>
          </div>
        </section>
      </main>

      <footer id="about">
        <div>
          <div className="brand footer-brand">
            <span className="brand-mark">
              <Utensils size={19} />
            </span>
            <span>
              <b>CRUNCHY</b>
              <small>& MUNCHY</small>
            </span>
          </div>
          <p>Fresh food. Bold flavors. Good mood.</p>
        </div>
        <p>© 2026 Crunchy & Munchy. Frontend demo project.</p>
      </footer>
    </div>
  );
}
