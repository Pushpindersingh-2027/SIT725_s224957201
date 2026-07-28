const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, "public")));

const recipes = [
  {
    name: "Vegetable Pasta",
    category: "Italian",
    time: "30 minutes",
    description:
      "A delicious pasta dish prepared with fresh vegetables and tomato sauce.",
    image:
      "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Paneer Tikka",
    category: "Indian",
    time: "40 minutes",
    description:
      "Marinated paneer pieces grilled with onion, capsicum and Indian spices.",
    image:
      "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Avocado Toast",
    category: "Breakfast",
    time: "15 minutes",
    description:
      "Crispy toast topped with fresh avocado, tomatoes and seasoning.",
    image:
      "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Mango Smoothie",
    category: "Beverage",
    time: "10 minutes",
    description:
      "A refreshing smoothie made with mango, yoghurt and fresh fruit.",
    image:
      "https://images.unsplash.com/photo-1505252585461-04db1eb84625?auto=format&fit=crop&w=800&q=80"
  }
];

app.get("/api/recipes", (req, res) => {
  res.status(200).json({
    statusCode: 200,
    message: "Recipes retrieved successfully",
    data: recipes
  });
});

app.listen(PORT, () => {
  console.log(`Recipe Explorer running at http://localhost:${PORT}`);
});