import React from 'react';
import './App.css';
import './Shop.css';
import Product from './Product.js';

function Shop() {

  return (
    <div className="shop">
      <div className="shop__mask"></div>
      
      <div className="shop__filterBar">

      </div>

      <div className="shop__container">
        <div className="shop__sidePanel">
          <div className="shop__panelTopTrending">
            <h2>Kiemelt termékek</h2>
            <p>Termék1</p>
            <p>Termék2</p>
            <p>Termék3</p>
            <p>Termék4</p>
          </div>
        </div>

        <div className="shop__page">
          <div className="shop__row">
            <Product
              id="123"
              title="Test Item 1"
              price={1000}
              rating={1}
              image="https://wordstream-files-prod.s3.amazonaws.com/s3fs-public/styles/simple_image/public/images/media/images/amazon-seo-product-images.jpg?RTG4A4jxOolNLZ63fSqHL5uboAaRwXU6&itok=XSbikWqd"
            />
            <Product
              id="456456"
              title="Test Item 1"
              price={1000}
              rating={5}
              image="https://wordstream-files-prod.s3.amazonaws.com/s3fs-public/styles/simple_image/public/images/media/images/amazon-seo-product-images.jpg?RTG4A4jxOolNLZ63fSqHL5uboAaRwXU6&itok=XSbikWqd"
            />
            <Product
              id="454456"
              title="Test Item 1"
              price={1000}
              rating={1}
              image="https://wordstream-files-prod.s3.amazonaws.com/s3fs-public/styles/simple_image/public/images/media/images/amazon-seo-product-images.jpg?RTG4A4jxOolNLZ63fSqHL5uboAaRwXU6&itok=XSbikWqd"
            />
            <Product
              id="345645"
              title="Test Item 1"
              price={1000}
              rating={1}
              image="https://wordstream-files-prod.s3.amazonaws.com/s3fs-public/styles/simple_image/public/images/media/images/amazon-seo-product-images.jpg?RTG4A4jxOolNLZ63fSqHL5uboAaRwXU6&itok=XSbikWqd"
            />
            <Product
              id="1231"
              title="Test Item 1"
              price={1000}
              rating={1}
              image="https://wordstream-files-prod.s3.amazonaws.com/s3fs-public/styles/simple_image/public/images/media/images/amazon-seo-product-images.jpg?RTG4A4jxOolNLZ63fSqHL5uboAaRwXU6&itok=XSbikWqd"
            />
          </div>
          <div className="shop__row">
          <Product
              id="34534"
              title="Test Item 1"
              price={1000}
              rating={1}
              image="https://wordstream-files-prod.s3.amazonaws.com/s3fs-public/styles/simple_image/public/images/media/images/amazon-seo-product-images.jpg?RTG4A4jxOolNLZ63fSqHL5uboAaRwXU6&itok=XSbikWqd"
            />
            <Product
              id="567563"
              title="Test Item 1"
              price={1000}
              rating={1}
              image="https://wordstream-files-prod.s3.amazonaws.com/s3fs-public/styles/simple_image/public/images/media/images/amazon-seo-product-images.jpg?RTG4A4jxOolNLZ63fSqHL5uboAaRwXU6&itok=XSbikWqd"
            />
            <Product
              id="345"
              title="Test Item 1"
              price={1000}
              rating={1}
              image="https://wordstream-files-prod.s3.amazonaws.com/s3fs-public/styles/simple_image/public/images/media/images/amazon-seo-product-images.jpg?RTG4A4jxOolNLZ63fSqHL5uboAaRwXU6&itok=XSbikWqd"
            />
            <Product
              id="6578978"
              title="Test Item 1"
              price={1000}
              rating={1}
              image="https://wordstream-files-prod.s3.amazonaws.com/s3fs-public/styles/simple_image/public/images/media/images/amazon-seo-product-images.jpg?RTG4A4jxOolNLZ63fSqHL5uboAaRwXU6&itok=XSbikWqd"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;
