import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';

// state = {
//     searchKey: "",
//     data: []
// }
// this.setState({});

// const arr = useState(""); // arr: [state, setState]
// const [searchKey, setSearchKey] = useState("");



function GadgetStore() {

    console.log("In GadgetStore component");

    const [searchKey, setSearchKey] = useState("");
    const [products, setProducts] = useState([]);
    const allProducts = useRef([]);


    //invoked for every render
    // useEffect(() => {
    //     console.log("in the use effect..")
    // })


    //invoked only once
    useEffect(() => {
        console.log("in the use effect(componentDidMount)..")

        fetch();

        // invoked only once
        return () => {
            console.log("in the use effect(componentWillUnmount)..")
        }
    }, [])

    //invoked only multiple times
    useEffect(() => {
        console.log("in the use effect(componentDidUpdate for products)..", products);

    }, [products])

   

    
    async function fetch() {

        try {
            const response = await axios.get("http://localhost:9000/products");

            setProducts(response.data);
            allProducts.current = response.data;

        } catch (error) {
            console.log(error);
        }

    }

    function change(evt) {
        setSearchKey(evt.target.value);

        
    }

 

    function renderProducts() {

        const productsView =  products.map((item, index) => {
            return (
                <div className="col" key={index} >
                    <div className="card border-warning" >
                        <div className="card-body text-success">
                            <h5 className="card-title">{item.name}</h5>
                            <p className="card-text">{item.description}</p>
                            <p className="card-text text-primary">INR {item.price}</p>
                            <button href="#" className="btn btn-primary">Add To Cart</button>
                        </div>
                    </div>
                </div>
            );
        })
        return (
            <div className="row row-cols-1 row-cols-md-2 g-4">
                {productsView}
            </div>
        )
    }

    return (
        <div>
            <h4>Gadget Store</h4>
            <div>
                <input className="form-control"
                    type="search" placeholder="Search" value={searchKey} onChange={change} />
            </div>
            {searchKey ?
            <div className="alert alert-primary">
                Searhing for {searchKey}
            </div> : null}
           
        </div>
    )
}


export default GadgetStore;