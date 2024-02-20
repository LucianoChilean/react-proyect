import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components'
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
                            initialValues={{
                                count: 4,
                                maxCount: 10
                            }}
                        >
                            {
                                ({ reset, isMaxCountReached, maxCount, increaseBy, count }) => (
                                    <>
                                        <ProductImage className='custom-image' />
                                        <ProductTitle className='text-bold<' />
                                        <ProductButtons className='custom-buttons' />
                                        <button onClick={reset}>Reset</button>
                                        <button onClick={() => increaseBy(-2)}>-2</button>
                                        {
                                            (!isMaxCountReached && <button onClick={() => increaseBy(+2)}>+2</button>)
                                        }
                                        <span>{count} - {maxCount}</span>
                                    </>
                                )
                            }


                        </ProductCard>

                    ))
                }


            </div>


            <div className='shopping-cart'>

                {
                    /* Object.entries(shoppingCart).map(([key, product]) => (
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
                     )) */
                }


            </div>
        </div>
    )
}
