import React, {Component} from 'react';
import axios from 'axios';
import './ListProducts.css';

class ListProducts extends Component{

    state = {
        data: []
    };
    async componentDidMount(){

        const url = "http://localhost:9000/products";
        try {
           
            const response = await axios.get(url);
            console.log(response);
            this.setState({
                data: response.data
            });

        } catch (error) {
            
            console.log("error", error);
        }
        
    }
    renderProducts(){

        return this.state.data.map((item , index) => {

            return (
                <div className="product" key={index}>
                    <p>ID: {item.id}</p>
                    <p>{item.name}</p>
                    <p>{item.description}</p>
                    <p>Price: {item.price}</p>
                </div>
            )
        })
    }
    render(){
        return (
            <div>
                <h3>Products</h3>
                <div style={{display: 'flex', flexFlow: 'row wrap', justifyContent: 'center'}}>
                    {this.renderProducts()}
                </div>
            </div>
        )
    }

}
export default ListProducts;