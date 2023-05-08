import { useState } from "react"
import Products from "./components/Products"
import {products} from "./mock/product.json"
import Header from "./components/Header"
import Filters from "./components/Filters"

const App = () => {


  const [filters, setFilters] = useState({
    category: "all",
    minPrice: 0,
  })

  const filterProducts = (products) => {
    return products.filter(product => {
      return(
        product.price >= filters.minPrice && (
          filters.category === 'all' ||
          product.category === filters.category
        )
      )
    })
  }

  const filteredProducts = filterProducts(products)



  return (
   <>
    <Header/>
    <Filters/>
    <Products products={filteredProducts}/>
   </>
  )
}

export default App