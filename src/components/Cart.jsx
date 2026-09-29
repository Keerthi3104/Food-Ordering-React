import { Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";

export default function Cart({ cart, onIncrease, onDecrease, onRemove }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <aside className="cart-panel">
      <div className="cart-title-row">
        <div>
          <p className="eyebrow">YOUR ORDER</p>
          <h2>
            Cart <span>({cart.reduce((s, i) => s + i.quantity, 0)})</span>
          </h2>
        </div>
        <div className="cart-icon">
          <ShoppingBag size={20} />
        </div>
      </div>

      {cart.length === 0 ? (
        <div className="empty-cart">
          <div className="empty-cart-icon">
            <ShoppingBag size={28} />
          </div>
          <h3>Your cart is empty</h3>
          <p>Add your favorite food and it will appear here.</p>
        </div>
      ) : (
        <>
          <div className="cart-list">
            {cart.map((item) => (
              <div className="cart-item" key={item.id}>
                <img src={item.image} alt={item.name} />
                <div className="cart-item-main">
                  <div className="cart-item-heading">
                    <h4>{item.name}</h4>
                    <button
                      className="icon-btn delete"
                      onClick={() => onRemove(item.id)}
                      aria-label={`Remove ${item.name}`}
                    >
                      <Trash2 size={15} />
                    </button>
                  </div>
                  <p>₹{item.price}</p>
                  <div className="qty">
                    <button onClick={() => onDecrease(item.id)}>
                      <Minus size={13} />
                    </button>
                    <span>{item.quantity}</span>
                    <button onClick={() => onIncrease(item.id)}>
                      <Plus size={13} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <div>
              <span>Subtotal</span>
              <strong>₹{total}</strong>
            </div>
            <div>
              <span>Delivery</span>
              <strong className="free">FREE</strong>
            </div>
            <div className="total-row">
              <span>Total</span>
              <strong>₹{total}</strong>
            </div>
            <button className="checkout">
              Order Now <span>→</span>
            </button>
          </div>
        </>
      )}
    </aside>
  );
}
