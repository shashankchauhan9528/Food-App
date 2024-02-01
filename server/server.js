var express = require('express');
var path = require('path');
var cors = require('cors');

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use("/images", express.static(path.join(__dirname, "../images")));

app.get("/", (req, res) => {
  // console.log(path.join(__dirname, "../public"));
  const foodData = [
    {
      name: "Boiled Egg",
      price: 10,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      // image: "/images/egg.png",
      // image: "/images/egg.png",
      image: "https://www.istockphoto.com/photo/mobile-phones-premium-png-digital-devices-for-mockup-gm1449090516-486379718?utm_campaign=srp_photos_top&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fpng&utm_medium=affiliate&utm_source=unsplash&utm_term=png%3A%3A%3A",

      type: "breakfast",
    },
    {
      name: "RAMEN",
      price: 25,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      image: "/images/ramen.png",
      type: "lunch",
    },
    {
      name: "GRILLED CHICKEN",
      price: 45,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      image: "/images/chicken.png",
      type: "dinner",
    },
    {
      name: "CAKE",
      price: 18,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      image: "/images/cake.png",
      type: "breakfast",
    },
    {
      name: "BURGER",
      price: 23,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      image: "/images/burger.png",
      type: "lunch",
    },
    {
      name: "PANCAKE",
      price: 25,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      image: "/images/pancake.png",
      type: "dinner",
    },
  ];

  res.json(foodData);
});

app.get('/', function (req, res) {
  res.send("server started");
});

app.listen(9000);




