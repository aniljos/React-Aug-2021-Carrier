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

function search() {

    if (searchKey) {

        const filteredProducts = allProducts.current
            .filter(item => item.id == searchKey
                || item.name.toLowerCase().includes(searchKey.toLowerCase()) ||
                item.description.toLowerCase().includes(searchKey.toLowerCase()))
        setProducts(filteredProducts);
    }
}