import React, {Component} from 'react';


// <EditProduct product={this.state.selectedProduct}/>
class EditProduct extends Component{

    state = {
        current: {}
    }

    constructor(props){
        super(props);

        this.state.current = this.props.product
    }

    
    render(){

        const {current} = this.state;

        return(
            <div>
                <h4>Edit Product: {current.id}</h4>
                <div>
                    <label>Name</label>
                    <input className="form-control" value={current.name}/>
                </div>
                <div>
                    <label>Desc</label>
                    <input className="form-control" value={current.description}/>
                </div>
                <div>
                    <label>Price</label>
                    <input className="form-control" value={current.price}/>
                </div>
                <div>
                    <button className="btn btn-success">Save</button>&nbsp;
                    <button className="btn btn-warning">Cancel</button>
                </div>
                
            </div>
        );
    }

}


export default EditProduct;