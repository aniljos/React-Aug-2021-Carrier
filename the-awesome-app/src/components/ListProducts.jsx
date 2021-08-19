import React, {Component, PureComponent} from 'react';
import axios from 'axios';
import './ListProducts.css';
import EditProduct from './EditProduct';

class ListProducts extends PureComponent{

    state = {
        data: [],
        selectedProduct: null
    };
    url = "http://localhost:9000/products";

    constructor(props){
        super(props);
        console.log("[ListProducts constructor]");
    }

    componentDidMount(){

        console.log("[ListProducts componentDidMount]");
        this.fetch();
       
    }

    async fetch(){
        try {
           
            const response = await axios.get(this.url);
            console.log(response);
            this.setState({
                data: response.data
            });

        } catch (error) {
            
            console.log("error", error);
        }
    }

    delete = async (id) => {

        try {

            await axios.delete(this.url + "/" + id);
            //this.fetch();
            //alert("Deleted");
            const data = [...this.state.data];
            const index = data.findIndex(item => item.id === id);
            if(index != -1){
                data.splice(index, 1);
                this.setState({
                    data
                });
            }


        } catch (error) {
            alert("Failed to delete");
        }
    }

    edit = (product) => {

        this.setState({
            selectedProduct: product
        })
    }

   
    renderProducts(){

        return this.state.data.map((item , index) => {

            return (
                <div className="product" key={index}>
                    <p>ID: {item.id}</p>
                    <p>{item.name}</p>
                    <p>{item.description}</p>
                    <p>Price: {item.price}</p>
                    <div>
                        <button className="btn btn-danger" onClick={() => {this.delete(item.id)}}>Delete</button>&nbsp;
                        <button className="btn btn-primary"
                                        onClick={() => {this.edit(item)}}>Edit</button>
                    </div>
                </div>
            )
        })
    }
    render(){

        console.log("[ListProducts render]");
        return (
            <div>
                <h3>Products</h3>
                <div style={{display: 'flex', flexFlow: 'row wrap', justifyContent: 'center'}}>
                    {this.renderProducts()}
                </div>

                <div>
                   {this.state.selectedProduct !== null ? 
                            <EditProduct product={this.state.selectedProduct} /> : null }
                </div>
            </div>
        )
    }

    // shouldComponentUpdate(nextProps, nextState){
    //     console.log("[ListProducts shouldComponentUpdate]");
    //     return true;
    // }
    componentDidUpdate(){
        console.log("[ListProducts componentDidUpdate]");
    }

    componentWillUnmount(){
        console.log("[ListProducts componentWillUnmount]");
    }

}
export default ListProducts;