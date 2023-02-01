import { useEffect, useState } from "react"
import { useNavigate } from "react-router"
import axios from "axios"

export default function AddProduct() {
    const navigate = useNavigate()
    const [product, setProduct] = useState({
        name: '',
        price: '',
        stock: '',
        description: '',
    })
    const onChangeHandled = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setProduct({ ...product, [name]: value })
    }
    return (
        <div>
            <h1>Add Product</h1>
            <input
                type='text'
                name="name"
                value={product.name}
                onChange={onChangeHandled}
            />
            <br />
            <input
                type='text'
                name="price"
                value={product.price}
                onChange={onChangeHandled}
            />
            <br />
            <input
                type='text'
                name="stock"
                value={product.stock}
                onChange={onChangeHandled}
            />
            <br />
            <input
                type='text'
                name="description"
                value={product.description}
                onChange={onChangeHandled}
            />
            <br />
            <button type="button" className="btn btn-outline-primary" onClick={() => {

                axios.post('http://localhost:3001/products', product)
                navigate('/')
            }}>Add</button>
        </div>
    )
}