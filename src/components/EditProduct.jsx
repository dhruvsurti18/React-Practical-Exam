import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { updateProduct } from "../features/productSlice"
import { useNavigate, useParams } from "react-router-dom"

function EditProduct() {
    const { id } = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const products = useSelector(state => state.products.items)
    const product = products.find(p => p.id == id)
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [image, setImage] = useState("")
    const [category, setCategory] = useState("")
    useEffect(() => {
        if (product) {
            setTitle(product.title)
            setPrice(product.price)
            setImage(product.image)
            setCategory(product.category)
        }
    }, [product])
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(updateProduct({
            id,
            product: { title, price, image, category }
        }))

        navigate("/")
    }
    return (
        <div className="container mt-4">
            <h2>Edit Product</h2>
            <form onSubmit={handleSubmit}>
                <input
                    className="form-control mb-2"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <input
                    className="form-control mb-2"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
                <input
                    className="form-control mb-2"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                />
                <select
                    className="form-control mb-2"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                >
                    <option>Electronics</option>
                    <option>Fashion</option>
                    <option>Food</option>
                    <option>Books</option>
                </select>
                <button className="btn btn-success">
                    Update Product
                </button>
            </form>
        </div>
    )
}
export default EditProduct
