import React from 'react'
import useProductStore from '../../store'


const ShowProducts = () => {
    const { data } = useProductStore();

    console.log(data);
    return (
        <div>
            {Object.keys(data).length !== 0 && data.map((product, index) => (
                <div className='bg-red-500' key={index}>
                    <img src={product.image} alt={product.title} width={50} />
                    <p>{product.title}</p>
                    <p>{product.description}</p>
                    <button>Add to Cart</button>
                    <div />
                </div>
            ))}
        </div>
    );
};

export default ShowProducts;