import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../features/productSlice";
import ProductItem from "./ProductItem";

function ProductList() {

    const dispatch = useDispatch()
    const products = useSelector(state => state.products.items)

    const [search, setSearch] = useState("")
    const [category, setCategory] = useState("")
    const [sort, setSort] = useState("")

    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch])

    let filteredProducts = [...products]

    if (search) {
        filteredProducts = filteredProducts.filter(p =>
            p.title.toLowerCase().includes(search.toLowerCase())
        )
    }

    if (category) {
        filteredProducts = filteredProducts.filter(p =>
            p.category === category
        )
    }

    if (sort === "low") {
        filteredProducts.sort((a, b) => a.price - b.price)
    }

    if (sort === "high") {
        filteredProducts.sort((a, b) => b.price - a.price)
    }

    return (

        <div className="container mt-4">

            <h2>Products</h2>

            <input
                className="form-control mb-3"
                placeholder="Search Product"
                onChange={(e) => setSearch(e.target.value)}
            />

            <select
                className="form-control mb-3"
                onChange={(e) => setCategory(e.target.value)}
            >

                <option value="">All Categories</option>
                <option value="Electronics">Electronics</option>
                <option value="Fashion">Fashion</option>
                <option value="Food">Food</option>
                <option value="Books">Books</option>

            </select>

            <select
                className="form-control mb-3"
                onChange={(e) => setSort(e.target.value)}
            >

                <option value="">Sort by Price</option>
                <option value="low">Low to High</option>
                <option value="high">High to Low</option>

            </select>

            <div className="row">

                {filteredProducts.map(product => (
                    <ProductItem key={product.id} product={product} />
                ))}

            </div>

        </div>

    )

}

export default ProductList
