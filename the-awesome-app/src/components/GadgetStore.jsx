import React, { useEffect, useState } from 'react';
import axios from 'axios';

// state = {
//     searchKey: "",
//     data: []
// }
// this.setState({});

// const arr = useState(""); // arr: [state, setState]
// const [searchKey, setSearchKey] = useState("");

function GadgetStore(){

    console.log("In GadgetStore component");
    
    const [searchKey, setSearchKey] = useState("");
    const [products, setProducts] = useState([]);

    

    //invoked for every render
    // useEffect(() => {
    //     console.log("in the use effect..")
    // })

    //invoked only once
    useEffect(() => {
        console.log("in the use effect(componentDidMount)..")

        fetch();

        // invoked only once
        return ()=> {
            console.log("in the use effect(componentWillUnmount)..")
        }
    }, [])

    //invoked only multiple times
    useEffect(() => {
        console.log("in the use effect(componentDidUpdate for products)..", products);

    }, [products])


    async function fetch(){

        try {
            const response = await axios.get("http://localhost:9000/products");
            setProducts(response.data);

        } catch (error) {
            console.log(error);
        }

    }

    function change(evt){
        setSearchKey(evt.target.value);
    }

    return (
        <div>
            <h4>Gadget Store</h4>
            <div>
                <input className="form-control" 
                        type="search" placeholder="Search" value={searchKey} onChange={change}/>
            </div>
            <div className="alert alert-primary">
                Searhing for {searchKey}
            </div>
        </div>
    )
}


export default GadgetStore;