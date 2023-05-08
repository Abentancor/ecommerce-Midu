import{AddToCartIcon} from './icon.jsx'


const Products = ({products}) => {
  return (
    <main>
        <ul>
            {products.map(product => (
                <li key={product.id}>
                    <img src={product.thumbnail} alt="product.title" />
                    <div>
                        <h3>{product.title} - $ {product.price}</h3>
                    </div>
                    <div>
                        <button>
                            <AddToCartIcon/>
                        </button>
                    </div>
                </li>
            ))}
        </ul>
    </main>
  )
}

export default Products