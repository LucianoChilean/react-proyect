import { ProductCard } from '../components'
import '../styles/custom-styles.css';
import { useShoppingCart } from '../hooks/useShoppingCart';
import { products } from '../data/products';



export const ShoppingPage = () => {

    const { onProductCountChange, shoppingCart } = useShoppingCart();

    return (
        <div >
            <h1>Shopping Store</h1>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>


                {
                    products.map(product => (

                        <ProductCard
                            key={product.id}
                            product={product}
                            className='bg-dark text-white'
                            onChange={onProductCountChange}
                            value={shoppingCart[product.id]?.count || 0}
                        >
                            <ProductCard.Image className='custom-image' />
                            <ProductCard.Title className='text-bold<' />
                            <ProductCard.Buttons className='custom-buttons' />

                        </ProductCard>

                        /* 
                        // Otra forma de usar pattern style
                        <ProductCard
                            key={product.id}
                            product={product}
                            className='bg-dark text-white'
                        >
                            <ProductImage className='custom-image' />
                            <ProductTitle className='text-bold<' />
                            <ProductButtons className='custom-buttons' />

                        </ProductCard> */

                    ))
                }


            </div>

            <div className='shopping-cart'>

                {
                    Object.entries(shoppingCart).map(([key, product]) => (
                        <ProductCard
                            key={key}
                            product={product}
                            className='bg-dark text-white'
                            style={{ width: '100px' }}
                            onChange={onProductCountChange}
                            value={product.count}
                        >
                            <ProductCard.Image className='custom-image' />
                            <ProductCard.Buttons
                                className='custom-buttons'
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center'
                                }}
                            />

                        </ProductCard>
                    ))
                }


            </div>
        </div>
    )
}
