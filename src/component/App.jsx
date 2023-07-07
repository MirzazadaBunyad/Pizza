import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import Order from "./Order";
import { useState } from "react";

const data = {
  size: {
    xs: "Mini, 15sm",
    sm: "Small, 23sm",
    md: "Medium, 30sm",
    lg: "Large, 35sm",
    ny: "New York Style, 40sm",
  },
  pizza: [
    {
      id: 1,
      name: "Amerikan Hot",
      image: "american-hot.png",
      price: { xs: 5.5, sm: 9, md: 14, lg: 19 },
      ingr: "Pizza Sauce, Mozzarella Cheese, Pepperoni and Jalapeno Peppers",
    },
    {
      id: 2,
      name: "Qril Çiken Parmezan",
      image: "Grill-Çiken-Parmezan.png",
      price: { xs: 5.5, sm: 11, md: 17, lg: 21 },
      ingr: "Garlic Parmesan Sauce, Grilled Chicken, Ham, Tomato, Mozzarella Cheese, Jalapeno Pepper",
    },
    {
      id: 3,
      name: "Acılı Çiken Ranç",
      image: "chicken_ranch.jpg",
      price: { xs: 5.5, sm: 11, md: 16, lg: 22 },
      ingr: "Ranch Sauce, Chicken, Mushrooms, Jalapeno Peppers, Fresh Diced Tomatoes and Mozzarella Cheese",
    },
    {
      id: 4,
      name: "Karnaval",
      image: "Karnaval.jpg",
      price: { sm: 9, md: 14, lg: 19 },
      ingr: "Pizza Sauce, Mushrooms, Black Olives, Pepperoni, Mozzarella",
    },
    {
      id: 5,
      name: "NY Style Marqarita",
      image: "New-York-Style-Margarita.jpg",
      price: { ny: 20 },
      ingr: "Pizza Sauce, Mozzarella, Tomato, Oregano",
    },
    {
      id: 6,
      name: "NY Style Qril Çiken",
      image: "New-York-Style-Grill-Chiken.jpg",
      price: { ny: 26 },
      ingr: "Pizza Sauce, Grilled Chicken, Mozzarella Cheese, Tomatoes",
    },
    {
      id: 7,
      name: "NY Style Pepperoni",
      image: "New-York-Style-Pepperoni.jpg",
      price: { ny: 23 },
      ingr: "Pizza Sauce, Pepperoni, Mozzarella",
    },
    {
      id: 8,
      name: "Çiken Ranç",
      image: "chicken_ranch.jpg",
      price: { xs: 5.5, sm: 10, md: 16, lg: 21 },
      ingr: "Grilled Chicken, Tomatoes, Ranch Sauce, Mozzarella Cheese",
    },
    {
      id: 9,
      name: "Papa Miks",
      image: "papamiks-sayt.png",
      price: { lg: 20 },
      ingr: "Chicken BBQ, Hot&Spicy, Margarita, Classic Pepperoni",
    },
  ],
};

function App() {
  const [modal, setModal] = useState(false);
  const [order, setOrder] = useState([]);

  function orderAdd(id, olcu, eded) {
    const addPizza = order.find(
      (item) => item.pid === id && item.size === olcu);

    let basketL = JSON.parse(localStorage.getItem("basketL")) || [];

    if (addPizza) {
      orderUpd(addPizza.id, addPizza.quant + eded);
    } else {
      const newOrder = { id: order.length, pid: id, size: olcu, quant: eded };
      setOrder([...order, newOrder]);
    }

    setModal(true);

    basketL.push({ olcu: olcu, eded: eded })
    localStorage.setItem("basketL", JSON.stringify(basketL));
  }

  function orderDel(id) {
    setOrder(order.filter((i) => i.id !== id));

    let basketL = JSON.parse(localStorage.getItem("basketL")) || [];
    basketL = basketL.filter((item) => item.id !== id);
    localStorage.setItem("basketL", JSON.stringify(basketL));
  }

  function orderUpd(id, eded) {
    if (eded) {
      let newOrder = order.map((i) => {
        if (i.id === id) {
          i.quant = eded;
        }
        return i;
      });
      setOrder(newOrder);
    } else orderDel(id);
  }

  return (
    <div>
      <Header setModal={setModal} order={order} />
      <Main data={data} orderAdd={orderAdd} />
      <Footer />
      <Order order={order} data={data} orderUpd={orderUpd} orderDel={orderDel} show={modal} onHide={() => setModal(false)} />
    </div>
  );
}

export default App;
