import React from 'react'; 

export default class Fetch extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        products: []
      };
    }
  
    componentDidMount() {
      fetch("http://localhost:3000/api/products/myproducts/nimit05")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              products: result.products
            });
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }
  
    render() {
      const { error, isLoaded, products } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
          <ul>
            {products.map(product => (
              <li key={product.name}>
                {product.refrenceId} , {product.MRP}
              </li>
            ))}
          </ul>
        );
      }
    }
  }