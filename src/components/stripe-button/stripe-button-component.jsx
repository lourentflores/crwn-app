import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51IFinlBW9jhY0DcH1DA1rzkhdWz1m1TPclifAiJME5vKpUuzPByVNGrZUldgiCuOKLef84QUKtAdwywlnu3gXMdi00XzNkpFu6';
  
  const onToken = token => {
    alert('Payment Successful');
  }
  
  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN App'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

export default StripeCheckoutButton