import { Link } from "react-router-dom";
import LinkButton from "../../ui/LinkButton";
import Button from "../../ui/Button";

const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function Cart() {
  const cart = fakeCart;

  return (
    <div>
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>
      {/* {to} from LinkButton has been dynamically set to "/menu" */}
      <h2>Your cart, %NAME%</h2>

      <div>
        <Button type="primary" to="/order/new">
          Order pizzas
        </Button>
        {/* Button is actually a link designed as a button using the reuseable Button component */}

        {/* <Link to="/order/new">Order pizzas</Link> */}
        {/* Link was commented out because it was converted to reuseable button called Button */}
        <button>Clear cart</button>
      </div>
    </div>
  );
}

export default Cart;
