import React, { Component } from 'react';
import './products.css';
import Background from '../../components/background/background';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

class ProductsPage extends Component {

  componentDidMount() {
    document.title = 'Products | Whalesper Technology Inc.';

  }

  render() {
    const { productName } = this.props;
    return <div>
      <Background
        src={require('../../assets/tyler-franta-589346-unsplash.jpg')}
      />
      <div className='Image-overlay'>
        <h1 className='Title-primary Text-white Text-center'>
          {productName ? `Oops, couldn't find the name ${productName}` : 'When innovation meets technology'}
        </h1>
      </div>
      <div className='App-content'>
        {productName ? <h2 className="Title-secondary Text-center">
          {'That\'s a nice name...but we didn\'t make it'}
        </h2> : null}
        {productName ? <p className="Body Text-center Opacity-50">
          If you were looking for our products, maybe you meant one of these:
        </p> : null}
        <div className='App-card-wrapper'>
          <Link to='/products/whalesper' className='App-card-container Whalesper'>
            <div className='App-card'>
              <img className='App-phone Whalesper' alt='whalesper' src={require('../../assets/whalesper-phone.png')} />
            </div>
            <div className='App-card-text-container'>
              <h1 className='Title-primary Text-white noselect No-margin Whalesper-title-smaller'>Whalesper</h1>
              <p className='Body Text-white Opacity-50 noselect No-margin'>Our first product</p>
            </div>
          </Link>
          <Link to='/products/iit' className='App-card-container iit'>
            <div className='App-card-right'>
              <img className='App-phone App-phone-right iit' alt='iit' src={require('../../assets/iit-phone.png')} />
            </div>

            <div className='App-card-text-container Left'>
              <div className="App-card-title-wrapper">
                <img className='App-card-icon' alt='iit logo' src={require('../../assets/iit@3x.svg')} />
                <h1 className='Title-primary Text-white noselect No-margin'> iit</h1>
              </div>
              <p className='Body Text-white Opacity-50 noselect No-margin'>On its way ;)</p>
            </div>
          </Link>
        </div>
      </div>
    </div>;
  }

}

ProductsPage.propTypes = {
  productName: PropTypes.string,
};

export default ProductsPage;
