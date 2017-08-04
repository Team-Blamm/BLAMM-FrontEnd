import React, {Component} from 'react';
import CartCard from './CartCard';
import '../../styles/Cart.css';

const fakeCart = {
  "cart": [
    {
      "title": "Batman",
      "price": "800",
      "img_src": "https://static.comicvine.com/uploads/original/11111/111112793/3031477-nealadamsbatman.jpg",
      "hours": 2
    },
    {
      "title": "Megatron",
      "price": "50",
      "img_src": "https://vignette1.wikia.nocookie.net/xaviertv/images/7/7f/Megatron.jpg/revision/latest?cb=20110701190508",
      "hours": 4
    }
  ]
}


class CartPage extends Component {
  constructor() {
    super();
    this.state = {
      cartCardsMap: [],
      subtotal: 0,
      tax: 0,
      total: 0,
    }
  }

  componentDidMount(){
    const cartCardsMap = fakeCart.cart.map((item) => {
      return (
      <CartCard key={item.title} data={item}/>
      )
    });
    this.setState({
      cartCardsMap: cartCardsMap
    })

  };

  render() {

    return (
      <div className="cartStyle">
        <div>
          <h2>My cart</h2>{this.props.children}
        </div>
        {/* left: wrapper for CartCards */}
        <div className="cartCardsStyle">
          {this.state.cartCardsMap}
        </div>
        {/* right: wrapper for Checkout */}
        <div className="checkoutStyle">
          <div>
            Individual subtotals [passed from CartCards]
          </div>
          <div>
            Subtotal [sum]
          </div>
          <div>
            Plus tax [whatever]
          </div>
          <div>
            Total [sum of sums]
          </div>
          <div>
            <button>Checkout</button>
          </div>
        </div>
      </div>
    );
  }
}

export default CartPage;
