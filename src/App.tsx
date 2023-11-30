import Alert from "./components/Alert";
import Button from "./components/Button/Button";
import ListGroup from "./components/ListGroup";
import { useState } from "react";
import "./App.css";
import { FaCalendarAlt } from "react-icons/fa";
import Like from "./components/Like";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import ExpandableText from "./components/ExpandableText";
import Form from "./components/Form";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  const [cartItems, setCartItems] = useState(["Product1", "Product2"]);

  //Updating State exercise 1:
  // const [game, setGame] = useState({
  //   id: 1,
  //   player: {
  //     name: "John",
  //   },
  // });

  // const handleClick = () => {
  //   setGame({...game, player: {...game.player, name: 'Bob'}})
  // }

  //Updating state exercise 2: adding toppings to a pizza
  // const [pizza, setPizza] = useState({
  //   name: "Spicy Pepperoni",
  //   toppings: ["Mushroom"],
  // });

  // const handleClick = () => {
  //   setPizza({ ...pizza, toppings: [...pizza.toppings, "Cheese"] });
  // };

  //Updating state exercise 3: Changing the item of id: 1's quantity
  // const [cart, setCart] = useState({
  //   discount: 0.1,
  //   items: [
  //     { id: 1, title: "Product 1", quantity: 1 },
  //     { id: 2, title: "Product 2", quantity: 2 },
  //   ],
  // });

  // const handleClick = () => {
  //   setCart({
  //     ...cart,
  //     items: cart.items.map((item) =>
  //       item.id === 1 ? { ...item, quantity: item.quantity + 1 } : item
  //     ),
  //   });
  // };

  let items = ["New York", "San Francisco", "Tokyo"];

  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>My alert</Alert>
      )}
      <Button color="primary" onClick={() => setAlertVisibility(true)}>
        My Button
      </Button>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={function (item: string): void {
          throw new Error("Function not implemented.");
        }}
      />
      <FaCalendarAlt color="red" size="40" />
      <Like onClick={() => console.log("clicked")} />
      <NavBar cartItemsCount={cartItems.length} />
      <Cart cartItems={cartItems} onClear={() => setCartItems([])} />
      <ExpandableText maxChars={10}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi vel
        dolores maiores ipsa, nemo minima odio velit voluptatem? Omnis ipsam
        nostrum sed sapiente tempora placeat voluptas aliquam sit minus, nisi
        obcaecati dolores doloribus velit dolore assumenda, nemo harum iure?
        Earum, consequatur nemo unde quo eveniet veritatis error, rem porro
        explicabo mollitia soluta nisi necessitatibus sunt id harum excepturi
        architecto cum eligendi vel quibusdam vero! Reprehenderit eligendi
        voluptas, ex ab vel cupiditate iste maxime architecto. Assumenda facere,
        pariatur soluta dignissimos esse itaque. Voluptatem minima est non,
        fugiat magnam natus officia voluptatibus accusamus inventore, assumenda
        cum doloribus provident expedita, quis optio ullam?
      </ExpandableText>
      <Form />
    </div>
  );
}

export default App;
