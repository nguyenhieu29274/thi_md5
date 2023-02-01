import { useEffect, useState } from "react"
import axios from 'axios'
import { useNavigate } from "react-router"

export default function ListProduct() {
    const navigate = useNavigate()
    const [list, setList] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3001/products').then((response)=>{
            setList(response.data)
            // console.log(response);
        })
    }, [])
    const DeleteStudent = (id)=>{
        console.log(id);
        axios.delete(`http://localhost:3001/products/${id}`)
            .then(()=>{
                axios.get('http://localhost:3001/products').then((response)=>{
                    setList(response.data)
                    console.log(1);
                })
            })
    }
    return(
        <div>
            <h1>Danh sách sản phẩm</h1>
            <button type="button" className="btn btn-outline-primary" onClick={()=>{navigate('/add')}}>Thêm sản phẩm</button>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Price</th>
                    <th scope="col">Stock</th>
                    <th scope="col">Description</th>
                </tr>
                </thead>
                <tbody>
                {list.map((item, index) => (
                    <tr key={index}>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                        <td>{item.stock}</td>
                        <td>{item.description}</td>
                        <td><button type="button" className="btn btn-outline-danger" onClick={()=>{DeleteStudent(`${item.id}`)}}>Xoá</button></td>
                        <td><button type="button" className="btn btn-outline-info" onClick={()=>{navigate(`/product/${item.id}`)}} >Cập Nhật</button></td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}