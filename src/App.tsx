import Alert from "./components/Alert";
import Button from "./components/Button/Button";
import ListGroup from "./components/ListGroup";
import { useState } from "react";
import "./App.css";
import { FaCalendarAlt } from "react-icons/fa";
import Like from "./components/Like";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
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
    </div>
  );
}

export default App;
