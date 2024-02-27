
import React, { Component } from 'react';
// import axios from 'axios';

class Data extends Component {
    render() {
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
}

export default Data;