import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../features/productSlice";
import { useNavigate } from "react-router-dom";

function ProductForm() {

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");
    const [category, setCategory] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {

        e.preventDefault();

        if (!title || !price || !image || !category) {
            alert("Please fill all fields");
            return;
        }

        dispatch(addProduct({ title, price, image, category }));

        navigate("/");

    }

    return (

        <div className="container mt-4">

            <h2>Add Product</h2>

            <form onSubmit={handleSubmit}>

                <input
                    className="form-control mb-2"
                    placeholder="Product Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <input
                    className="form-control mb-2"
                    placeholder="Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />

                <input
                    className="form-control mb-2"
                    placeholder="Image URL"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                />

                <select
                    className="form-control mb-2"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                >
                    <option value="">Select Category</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Fashion">Fashion</option>
                    <option value="Food">Food</option>
                    <option value="Books">Books</option>
                </select>
                <button className="btn btn-primary">
                    Add Product
                </button>
            </form>
        </div>
    )
}
export default ProductForm;
