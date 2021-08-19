import React, {Component} from 'react';


// <EditProduct product={this.state.selectedProduct}/>
class EditProduct extends Component{

    state = {
        current: {}
    }

    constructor(props){
        super(props);

        this.state.current = this.props.product;
    }

    // static getDerivedStateFromProps(nextProps, currentState){
        
    //     if(nextProps.product.id !== currentState.current.id){
    //         //return the updated state
    //         return {
    //             current: nextProps.product
    //         }
    //     }
    //     else{
    //         // no updated/change state
    //         return null;
    //     }

    // }

    change =(evt) => {

        const value = evt.target.value;
        const propName = evt.target.name;

        const product = {...this.state.current};
        product[propName] = value;

        this.setState({
            current: product
        });
    }
    changePrice =(evt) => {

        const value = evt.target.value;

        const product = {...this.state.current};
        product.price = value ? parseFloat(value): 0;

        this.setState({
            current: product
        });
    }

    save = () => {
        if(this.props.onSave){
            this.props.onSave(this.state.current)
        }
    }
    cancel = () => {
        if(this.props.onCancel){
            this.props.onCancel("Updated cancelled");
        }
    }
    
    render(){

        const {current} = this.state;

        return(
            <div>
                <h4>Edit Product: {current.id}</h4>
                <div>
                    <label>Name</label>
                    <input type="text" className="form-control" name="name" value={current.name} onChange={this.change}/>
                </div>
                <div>
                    <label>Desc</label>
                    <input className="form-control" name="description" value={current.description} onChange={this.change}/>
                </div>
                <div>
                    <label>Price</label>
                    <input type="number" className="form-control" value={current.price} 
                                                                    onChange={this.changePrice}/>
                </div>
                <div>
                    <button className="btn btn-success" onClick={this.save}>Save</button>&nbsp;
                    <button className="btn btn-warning" onClick={this.cancel}>Cancel</button>
                </div>
                
            </div>
        );
    }

}


export default EditProduct;