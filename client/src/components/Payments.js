import React, {Component} from 'react';
import StripeCheckout from 'react-stripe-checkout';

class Payments extends Component {
    render() {
        return(
            <StripeCheckout 
            name = "Prop-Sys"
            description="50 cents for 5 credits"
            amount={50}
            token={token => console.log(token)}
            stripeKey={process.env.REACT_APP_STRIPE_KEY}
            >
            <button className="btn">
            Add Credits
            </button>
            </StripeCheckout>
        );
    }
}

export default Payments;
