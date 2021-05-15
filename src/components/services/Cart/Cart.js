import React, { Component } from "react";
import '../../css/subpages.css';
import Title from "../Title";
import CartColumns from "./CartColumns";
import CartList from "./CartList";
import CartTotals from "./CartTotals";
import { ProductConsumer } from "../../../context";
import EmptyCart from "./EmptyCart";
//import '../../css/subpages.css';

export default class Store extends Component {
  render() {
    return (
      <section>
        <ProductConsumer>
          {value => {
            const { cart } = value;
            if (cart.length > 0) {
              return (
                <React.Fragment>
                  <div className="py-5">
                  <div className = "container title">
                  <Title name="your" title="cart" />
                  </div>
                  <CartColumns />
                  <CartList value={value} />
                  <CartTotals value={value} history={this.props.history} />
                  </div>
                </React.Fragment>
              );
            } else {
              return <EmptyCart />;
            }
          }}
        </ProductConsumer>
      </section>
    );
  }
}
