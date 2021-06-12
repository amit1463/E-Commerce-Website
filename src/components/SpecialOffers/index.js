import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';

const Heading = () => {
  return (
    <div class="spec ">
      <h3>Special Offers</h3>
      <div class="ser-t">
        <b></b>
        <span><i></i></span>
        <b class="line"></b>
      </div>
    </div>
  );
}

const ItemWidget = (props) => {
  const [productCount, setState] = useState(0);
  const [ratingCount, setRating] = useState(2);

  const {
    title,
    image,
    mrp,
    discountedPrice,
    rating,
    quantity,
  } = props;


  useEffect(() => {
    console.log('Rendered');
  });

  useEffect(() => {
    console.log('Rendered due to productCount change');
    setTimeout(() => {
      console.log('Successful');
    }, 3000);
    // fn1
    // fn2
    // fn3
  }, [productCount]);

  useEffect(() => {
    console.log('Rendered due to ratingCount change');
    return () => { console.log('Cleanup before ratingCount rerenders');};
  }, [ratingCount]);


  useEffect(() => {
    console.log('Mounted');
    return () => { console.log('Unmount');};
  }, []);

  console.log('Rendering');

  const handleAddToCart = () => {
    if (quantity > productCount) {
      setState(s => s + 1);
    }
  }

  return (
    <div class="col-md-3 pro-1">
        <div class="col-m">
          <a href="#" data-toggle="modal" data-target="#myModal18" class="offer-img">
            <img src={image} class="img-responsive" alt="" />
          </a>
          <div class="mid-1">
            <div class="women">
              <h6><a href="single.html"> {title}</a></h6>
            </div>
            <div class="mid-2">
              <p><label>{mrp}</label><em class="item_price">{discountedPrice}</em></p>
              <span onClick={() => setRating(ratingCount + 1)}>Rating: {ratingCount}</span>
              <div class="block">
                <div class="starbox small ghosting"> </div>
              </div>
              <div class="clearfix"></div>
            </div>
            <div class="add">
              <button class={`btn my-cart-btn my-cart-b ${quantity === 0 ? 'disabled': ''}`} data-id="1" data-name="product 1"
                data-summary="summary 1" data-price="4.50" data-quantity="1" onClick={handleAddToCart}
                data-image="images/of17.png">{quantity === 0 ? 'Out of stock' : productCount ? `Added (${productCount})` : 'Add to Cart'}</button>
            </div>
          </div>
        </div>
      </div>
  )
}

const SpecialOffers = () => {

  const [widgets, setWidget] = useState({});

const loadMore = () => {
  const newWidgets = {
      results: [{
        "title": "New Clips(1 pack)",
        "mrp": "$12.00",
        "discounted_price": "$6.00",
        "image": "images/of20.png",
        "quantity": 4
    }],
    "moreAvailable": false,
  };
  setWidget(oldState => {
    return {
      ...oldState,
      results: [...oldState.results, ...newWidgets.results],
      moreAvailable: newWidgets.moreAvailable,
    }
  });
}

useEffect(() => {
  fetch('https://run.mocky.io/v3/0ec53a06-6ef3-41c9-80a4-418304521c17')
    .then((res) => res.json())
    .then(res => setWidget(res));
}, []);

  const renderItems = (items) => {
    return (
      <>
        <div className='text-center row p-4'>Demand: {widgets.demand}</div>
        {
          items.map((item, i) => {
            return (
              <ItemWidget
                key={item.id} 
                image={item.image}
                mrp={item.mrp}
                discountedPrice={item.discounted_price}
                title={item.title}
                quantity={item.quantity}
              />
            )
          })
        }
        <div className='text-center'>
          {
            widgets.moreAvailable ? (
              <span onClick={loadMore}>Load more</span>
            ) : null
          }
        </div>
      </>
    )
  };


  return (
    <div>
      <div class="product">
        <div class="container">
          <Heading />
          <div class="con-w3l">
            {renderItems(widgets.results || [])}
            <div class="clearfix"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SpecialOffers;