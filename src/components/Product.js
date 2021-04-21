
import React, {useState, useEffect} from 'react';
import  * as ProductService from "../services/product.service";

const Product = () => {

    const [state, setstate] = useState([])

    useEffect(()=>{
        const getProducts = async () =>{
            const taskFromServer = await ProductService.getProducts();
            setstate(taskFromServer);
        }
        getProducts();
    },[]);

    return (
        <div className="container">
            <table className="table">
                <thead>
                    <tr>
                        <td>
                            Id
                        </td>
                        <td>
                            Product Name
                        </td>
                        <td>
                            Price
                        </td>
                    </tr>
                </thead>
                <tbody>
           {
               state.map((product) => (
                    <tr key={product.id}>
                        <td>
                            {product.id}
                        </td>
                        <td>
                            {product.productName}
                        </td>
                        <td>
                            {product.price}
                        </td>
                    </tr>
               ))
           }
            </tbody>
           </table>
        </div>
    );
}

export default Product;