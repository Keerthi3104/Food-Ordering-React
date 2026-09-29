import { Plus, Star } from "lucide-react";

export default function FoodCard({ food, onAdd }) {
  return (
    <article className="food-card">
      <div className="food-image-wrap">
        <img src={food.image} alt={food.name} className="food-image" />
        <span className="food-badge">{food.category}</span>
      </div>

      <div className="food-card-body">
        <div className="rating">
          <Star size={14} fill="currentColor" />
          {food.rating}
        </div>

        <h3>{food.name}</h3>

        <div className="food-card-bottom">
          <strong>₹{food.price}</strong>
          <button
            className="add-btn"
            onClick={() => onAdd(food)}
            aria-label={`Add ${food.name} to cart`}
          >
            <Plus size={18} />
            Add
          </button>
        </div>
      </div>
    </article>
  );
}
