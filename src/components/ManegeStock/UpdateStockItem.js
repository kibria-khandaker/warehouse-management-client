import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useParams } from 'react-router-dom';
import useSingleProductDetails from '../../hooks/useSingleProductDetails';

const UpdateStockItem = () => {

    const { id } = useParams();
    const [product, setProduct] = useSingleProductDetails(id);
    const { _id, name, category, supplier, price, inStock, quality, img, shortDesc } = product;
    
    //------------  Stock Add with inputted value ( new value + old value = total value )
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)

        const url = `http://localhost:5000/inventory/${id}`
        fetch(url, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));
    };

    //------------ Stock Reduce one by One stockReduce
    const handelStockReduce = () => {
        
    };



    return (
        <div className='container'>
            <div className="row">
                <div className="col-auto col-md-10 col-lg-7 mx-auto py-5">
                    <div className="row px-3">
                        {/* xxxxxxxxxxxx   */}
                        <div className='my-5 px-0 mx-0'>
                            <div className='d-flex flex-column flex-md-row justify-content-between'>
                                <Link
                                    className='mb-3 bg-success px-2 py-1 rounded-3 text-white text-decoration-none'
                                    to={'/ManageInventories'}> Manage Inventories
                                </Link>
                                <button
                                    onClick={() => handelStockReduce()}
                                    className='mb-3 bg-success px-2 py-1 rounded-3 text-white border-0'>
                                    Delivered xxx
                                </button>
                            </div>
                            <div>
                                <form onSubmit={handleSubmit(onSubmit)} className='row mx-0'>
                                    {product?.inStock && <input className=" border col-md-8" defaultValue={product?.inStock} placeholder='inStock' type="number" {...register("inStock")} />}
                                    <input className=" border-0 bg-success text-white col-md-4" type="submit" value=' Restock the items' />
                                </form>
                            </div>
                        </div>
                        {/* xxxxxxxxxxxx  */}
                        <div className='col-12 rounded-3 mb-4'
                            style={{
                                paddingTop: '200px',
                                backgroundImage: `url(${img})`,
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover',
                            }}>
                        </div>
                        <div className='col-12'>

                            <div className='my-5'>
                                <p>Product ID : <span className=' text-success'> {id}</span> </p>

                                <div className='d-md-flex justify-content-between'>
                                    <p>Product Name : <span className=' text-success'>{name}</span></p>
                                    <p> Supplier : <span className=' text-success'>{supplier}</span> </p>
                                </div>
                                <div className='d-md-flex justify-content-between'>
                                    <p>Price : <span className=' text-success'>{price}</span> </p>
                                    {/* inStock Reduce onClick one by one  */}
                                    <p>Available In Stock :
                                        <span className=' text-success'>
                                            {inStock}
                                        </span>
                                    </p>
                                </div>
                                <div className='d-md-flex justify-content-between'>
                                    <p> Quality : <span className=' text-success'> {quality} </span> </p>
                                    <p> Stock Type : <spam className=' text-success'> {category} </spam> </p>
                                </div>
                            </div>



                            <p className='my-5 pt-3'> <b> Description : </b> {shortDesc}</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default UpdateStockItem;