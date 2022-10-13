import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {
  const dummyProducts = [
    {
      id: 'p1',
      price: 6,
      title: 'My First Book',
      description: 'The first Book I wrote'
    },
    {
      id: 'p2',
      price: 2,
      title: 'My First Book',
      description: 'The Second Book I wrote'
    }
  ]
  // console.log(dummyProducts, ":::: dummyProducts")
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        { dummyProducts.map((item) => {
          return (
            <ProductItem
              key={item.id}
              id={item.id}
              title={item.title}
              price={item.price}
              description={item.descprtion}
            />
          )
        })}        
      </ul>
    </section>
  );
};

export default Products;
