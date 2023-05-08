import { useState } from "react"

const Filters = () => {

    const [minPrice, setMinPrice] = useState(0)

    const handleChangeMinPrice = (e) => {
        setMinPrice(e.target.value)
    }


  return (
    <>
        <section>
            <div>
                <label htmlFor="price">Precio</label>
                <input type="range" id="price" min='0' max='10000' onChange={handleChangeMinPrice}/>
                <span>${minPrice}</span>
            </div>
            <div>
                <label htmlFor="category">Categoria</label>
                <select id="category">
                    <option value="all">Todos</option>
                    <option value="laptops">Portatiles</option>
                    <option value="smartphones">Celulares</option>
                </select>
            </div>
        </section>
    </>
  )
}

export default Filters