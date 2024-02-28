import React, { useState } from 'react'
 
function SearchForm() {
    const productList = ["blue pant"
        , "black pant"
        , "blue shirt"
        , "black shoes"
        , "brown shoes"
        , "white pant"
        , "white shoes"
        , "red shirt"
        ];
    const [products, setProducts] = useState(productList);
    const [searchVal, setSearchVal] = useState("");

    function handleSearchClick() {
        if (searchVal === "") 
        {
            setProducts(productList); 
            return; 
        }
        const filterBySearch = productList.filter((item) => {
            if (item.toLowerCase().includes(searchVal.toLowerCase())) { 
                return item; 
            }
        })
        setProducts(filterBySearch);
    }
    const mystyle = {
        marginLeft: "200px",
        marginTop: "25px",
        fontWeight: "700"
    };
 
    return (
        <div className='bg-danger-subtle'>
            <div style={mystyle}>
                <input className="my-2" type="search" placeholder="Search here" onChange={e => setSearchVal(e.target.value)} />
                <button className="btn btn-primary mx-2" onClick={handleSearchClick}>Search</button>
            </div>
            <div className='container my-4'>
                {products.map((product) => {
                    return (
                        <div style={mystyle}>{product}</div>
                    )
                })
                }
            </div>
        </div>
        
    );
}
 
export default SearchForm;