import React from 'react';

const ProductsApi = () => {
    const handleFetchData = async () => {
        try {
            let response = await fetch("https://fakestoreapi.com/products");
            let data = await response.json();
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <button onClick={handleFetchData}>Fetch the data</button>
        </>
    );
}

export default ProductsApi;