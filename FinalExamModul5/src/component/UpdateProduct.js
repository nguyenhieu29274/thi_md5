import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router"
import axios from "axios"
export default function EditProduct() {
    const {id} = useParams()
    console.log(id);
    const navigate = useNavigate()
    const [product, setProduct] = useState({
        name: '',
        price: '',
        stock: '',
        description: '',
    })
    useEffect(() => {
        axios.get(`http://localhost:3001/products/${id}`).then((response)=>{
            setProduct(response.data)
            console.log(response.data);
        })
    }, [])
    const onChangeHandled = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setProduct({ ...product, [name]: value })
    }
    return (
        <div>
            <h1>Edit Student</h1>
            {/* <h3>{student.name}</h3>
            <h3>{student.description}</h3>
            <h3>{student.action}</h3> */}
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
                axios.put(`http://localhost:3001/products/${id}`, product)
                navigate('/')
            }}>Update</button>
        </div >
    )
}