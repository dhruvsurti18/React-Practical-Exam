import { useDispatch } from "react-redux"
import { deleteProduct } from "../features/productSlice"
import { Link } from "react-router-dom"
function ProductItem({ product }) {
    const dispatch = useDispatch()
    return (
        <div className="col-md-4">
            <div className="card mb-3">
                <img src={product.image} className="card-img-top" />
                <div className="card-body">
                    <h5>{product.title}</h5>
                    <p>Rs {product.price}</p>
                    <p>{product.category}</p>
                    <Link
                        to={`/edit/${product.id}`}
                        className="btn btn-warning me-2"
                    >
                        Edit
                    </Link>
                    <button
                        className="btn btn-danger"
                        onClick={() => dispatch(deleteProduct(product.id))}
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    )
}
export default ProductItem
