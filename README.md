# 🍔 Food Ordering Page

A responsive and interactive food ordering website built using **React.js, JavaScript, HTML, and CSS**. The application provides a user-friendly interface to explore food items, search for dishes, filter by category, and manage a shopping cart with automatic price calculation.

## 🚀 Features

- **Responsive Design:** Works across desktop, tablet, and mobile screens.
- **Food Menu:** Displays food items with images, names, prices, and details.
- **Search Functionality:** Search for food items by name.
- **Category Filtering:** Filter food items based on the selected category.
- **Add to Cart:** Add food items to the shopping cart.
- **Quantity Management:** Increase or decrease item quantities.
- **Remove Items:** Remove food items from the cart.
- **Automatic Price Calculation:** Updates the cart total based on item prices and quantities.
- **Reusable Components:** Uses React components for a clean and maintainable UI.
- **Food Images:** Uses image URLs from Unsplash.

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| HTML5 | Structure of the application using JSX |
| CSS3 | Styling, layout, and responsive design |
| JavaScript (ES6+) | Search, filtering, cart logic, and price calculations |
| React.js | Component-based UI development and state management |
| Vite | Development server and build tool |
| Lucide React | Icons for the user interface |
| Unsplash | Food images |

## 📂 Project Structure

```text
food-ordering-page/
├── public/
├── src/
│   ├── components/
│   │   ├── FoodCard.jsx
│   │   └── Cart.jsx
│   ├── data/
│   │   └── foods.js
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
├── index.html
├── package.json
└── README.md
```

*Note: The structure above represents the intended project organization. Adjust the file names and folders to match your actual repository.*

## ⚙️ Installation and Setup

### Prerequisites

- Node.js
- npm
- Visual Studio Code (recommended)

### Steps to Run the Project

**1. Clone the repository**

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

**2. Navigate to the project folder**

```bash
cd YOUR_PROJECT_FOLDER
```

**3. Install dependencies**

```bash
npm install
```

**4. Start the development server**

```bash
npm run dev
```

**5. Open the local URL**

Open the URL displayed in your terminal, usually:

```text
http://localhost:5173
```

## 🧠 React Concepts Used

- **Components:** Create reusable UI elements such as food cards and the cart.
- **Props:** Pass food data and event handlers between components.
- **useState:** Manage search input and shopping cart data.
- **map():** Render food items dynamically.
- **filter():** Implement search and category filtering.
- **find():** Check whether an item already exists in the cart.
- **reduce():** Calculate the total cart price.
- **useMemo():** Optimize derived filtering calculations, if used in the implementation.

## 🖼️ Image Sources

Food images are sourced from [Unsplash](https://unsplash.com/). Image URLs are stored in the food data file and passed to the reusable food card component for display.

The application uses external image URLs, so an internet connection may be required to load the food images.

## 🎯 Project Objective

The objective of this project is to develop a responsive food ordering interface and gain practical experience in React.js, reusable components, state management, JavaScript array methods, and responsive web design.

## 🔮 Future Enhancements

- User registration and login
- Backend API integration
- Database integration for food items and orders
- Online payment integration
- Order placement and order tracking
- User profile and order history
- Improved loading states and error handling

## 👩‍💻 Developed By

**Keerthika R**

GitHub: [Keerthi3104](https://github.com/Keerthi3104)

