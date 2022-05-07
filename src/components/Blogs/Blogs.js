import React from 'react';
import { Table } from 'react-bootstrap';
import useStockproduct from '../../hooks/useStockproduct';
import horizontallyImg from '../../images/horizontallyImg.png';
import jwtImg from '../../images/jwtImg.jpg';
import MongoDBImg from '../../images/MongoDBImg.jpg';
import nodejsImg from '../../images/nodejsImg.jpg';
import verticallyImg from '../../images/verticallyImg.png';

const Blogs = () => {
    // const [fruits, setFruits] = useStockproduct();
    return (

        <div className=' container mx-auto px-0 py-5 mt-5'>

            <div className='row'>
                <div className="col-8 mx-auto">
                    <h4 className='text-success fw-bold' > 1) Question : 
                        <span className='fw-normal' >
                             Difference between <code>javascript</code> and <code>nodejs</code> ?
                        </span>
                    </h4>
                    <h5 className='text-success fw-normal' > # Answer :</h5>
                    <Table striped bordered hover  >
                        <thead>
                            <tr className=' text-center'>
                                <th> no </th>
                                <th> JavaScript </th>
                                <th> Node JS </th>
                            </tr>
                        </thead>
                        <tbody>

                            <tr>
                                <td> 1 </td>
                                <td> JavaScript is a programming language traditionally run in browsers JavaScript Engine </td>
                                <td> Node JS is create an running environment server side for a JavaScript. Or node-js help to JavaScript run in backend  </td>
                            </tr>
                            <tr>
                                <td> 2 </td>
                                <td> JavaScript is basically applied for the client Side activity for individual web applications. </td>
                                <td> Node.js is basically used for running any operating system for the non-blocking operation.you can say is a server-side </td>
                            </tr>
                            <tr>
                                <td> 3 </td>
                                <td> JavaScript is a  lightweight, cross-platform scripting language, that's applied to make dynamic HTML view with interactive effects on a webpage. </td>
                                <td> Node.js  represents a list of objects and methods accessible to JavaScript code when run in the V8 engine </td>
                            </tr>
                            <tr>
                                <td> 4 </td>
                                <td> JavaScript is very easy to write, almost all browser created environment for running JavaScript. </td>
                                <td> Node.js is written in the C++, and provides V8 engine base that helps developers to run the written program of javascript in any browser environment. </td>
                            </tr>
                            <tr>
                                <td> 5 </td>
                                <td> JavaScript Frameworks Vue JS, Angular, Ember JS, BackBoneJS, Meteor.JS, Gatsby JS, Svelte JS. </td>
                                <td> Node.JS Frameworks Express, Lodash, Hapi, Express, Koa,  Sails,  Meteor,  Derby,  Total,  Adonis,  etc. </td>
                            </tr>
                            <tr>
                                <td> 6 </td>
                                <td>JavaScript library Name are ( jQuery, React, D3.js, Underscore, Lodash, Algolia Places, Anime.js, Animate On Scroll ) etc.. </td>
                                <td> Node.JS  library Name are ( Cors, CORS is a node, Passport, Multer, Axios , Morgan) etc.. </td>
                            </tr>

                        </tbody>
                    </Table>
                </div>
            </div>
            
            <div className='row pt-5 mt-5'>
                <div className="col-8 mx-auto">
                    <h4 className='text-success fw-bold' >  2) Question :
                        <span className='fw-normal' >
                            When should you use <code>nodejs</code> and when should you use <code>mongodb ?</code>
                        </span>
                    </h4>
                    <h5 className='text-success fw-normal' > # Answer : </h5>
                    <Table striped bordered hover >
                        <thead>
                            <tr className=' text-center'>
                                <th> Node JS </th>
                                <th> MongoDB </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='text-center'>
                                <td c>
                                    in need make real-time web applications then Node js is the good choice for
                                    Backend Development as it has all above features which is very
                                    great in delivering excellent performance. JavaScript is powerful most
                                    popular programming language But when need to work in server or backend then need to use Node-Js.
                                    The event-driven architecture of Node. js makes it a perfect choice
                                    for microservice, being fast, highly scalable, and easy to maintain
                                </td>
                                <td>
                                    if we need to collection , modification, and deletion of data for any web/apps or
                                    any applications then need data-processing operations, So we need to a database system.
                                    have mere name for the service's and MongoDB is one of them  <br />
                                    MongoDB high Performance Levels, high Speed and higher Availability, Simplicity.
                                    Easy environment and Quick Set-up. Flexibility. Sharding. Scalability.
                                    it's faster and its ability to handle large amount's of unstructured data when it comes to speed.
                                    it's a world most popular NoSQL database where it's come in a variety of types
                                    including document databases, key-values databases, wide-column stores, and graph databases.

                                    JavaScript single-threaded programming language and easy to work with MongoDB Database.

                                </td>
                            </tr>
                            <tr className=' text-center'>
                                <td> <img className='w-100' src={nodejsImg} alt="" /> </td>
                                <td> <img className='w-100' src={MongoDBImg} alt="" /> </td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>

            <div className='row pt-5 mt-5'>
                <div className="col-8 mx-auto">
                    <h4 className='text-success fw-bold' > 3) Question :
                        <span className='fw-normal' >
                            Differences between <code>sql</code> and <code>nosql</code> databases ?
                        </span>
                    </h4>
                    <h5 className='text-success fw-normal' > # Answer : <span className='fw-normal' ></span>  </h5>
                    <Table striped bordered hover >
                        <thead>
                            <tr className=' text-center'>
                                <th>-</th>
                                <th>  SQL  </th>
                                <th> NoSQL </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td> 1 </td>
                                <td> SQL or the Structured Query Language is the most popular programming language, it's the relational or distributed database system </td>
                                <td> NoSQL has higher scalability than other database management systems, it's the  Non-relational or distributed database system </td>
                            </tr>
                            <tr>
                                <td> 2 </td>
                                <td>used to communicate with databases for storage, deletion, updation, insertion and retrieval of data.</td>
                                <td> used for a software to retrieve, store and manage scalability of databases </td>
                            </tr>
                            <tr>
                                <td> 3 </td>
                                <td>Provide High-Performance Capabilities</td>
                                <td>Perform queries on the database</td>
                            </tr>
                            <tr>
                                <td> 4 </td>
                                <td> SQL databases support Structured Query Languages, Supports table based data type. </td>
                                <td> NonSQL does not have any declarative query language, Supports document oriented, graph databases, key value pair-based </td>
                            </tr>
                            <tr>
                                <td> 5 </td>
                                <td>
                                    Vertically Scalable
                                    <img className='w-100' src={verticallyImg} alt="" />
                                </td>
                                <td>
                                    Horizontally scalable
                                    <img className='w-100' src={horizontallyImg} alt="" />
                                </td>
                            </tr>
                            <tr>
                                <td> 6 </td>
                                <td> Follow ACID( Atomic, Consistent, Isolation, and Durability) property </td>
                                <td> Follow CAP(consistency, availability, partition tolerance) </td>
                            </tr>
                            <tr>
                                <td> 7 </td>
                                <td> Best Features is ( Secure,Cross Platform Support, Free ) </td>
                                <td> Best Features is ( High Performance, Flexible ,  Easy to use )  </td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>

            <div className="row pt-5 mt-5">
                <div className="col-8 mx-auto ">
                    <h4 className='text-success fw-bold' > 4) Question :
                        <span className='fw-normal' >
                            What is the purpose of <code>jwt</code> and how does it work
                        </span>
                    </h4>
                    <h5 className='text-success fw-normal' > # Answer : <span className='fw-normal' ></span>  </h5>
                    <img className='w-100 d-flex justify-content-center' src={jwtImg} alt="" />
                    <p>
                        <b>JWT, or JSON Web Token</b>,
                        JWT is also a popular way to authenticate/authorize of users access verify . <br />

                        JWT is make a security our API links and  make a security our user vs applications/web system,
                        JWT collection User information and send it to server with JWT encrypt code And try to match it with User Verification token and information , if matched user information and JWT Token then allow access API and Allow to  others secret accessible link. And it's confirm of real user by digitally signature and So the JWT confection and verified and trusted. <br />

                        JWT authentication is a token- based stateless authentication system.
                        It's popularly applied as a client- side- based stateless session,
                        this means the server does not possess to fully depend on a data store (or) database to deliver session data.
                    </p>
                </div>
            </div>  
                 
        </div>

    );
};

export default Blogs;