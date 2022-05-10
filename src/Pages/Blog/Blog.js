import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='container my-4 '>
            <h2 className='text-center heading'><u>Question And Answer</u></h2>
            <div className='w-75 mx-auto'>
                <div className='my-4'>
                    <h3>Question-1: Difference between javascript and nodejs .</h3>
                    <p><strong>Ans:</strong> Javascript is a programing language and nodejs is a javascript library. We use nodeJs in server side scripting. Javascript can run only in browser and used in the client side. In the other hand nodejs runs outside of browser. It handles server side script.</p>
                </div>
                <div className='my-4'>
                    <h3>Question-1:  When should you use nodejs and when should you use mongodb ?</h3>
                    <p><strong>Ans:</strong> Nodejs is a javascript framework for server side scripting. It uses for api building and many other operations in server side. In the other hand mongo db is a database. It uses for store data in a storage that can be access from anywhere. MOngodb allows to store multiple data in database and mongodb is a nosql based databased.</p>
                </div>
                <div className='my-4'>
                    <h3>Question-1:Differences between sql and nosql .</h3>
                    <p><strong>Ans:</strong> Sql used in relational database management system. It is structured and can be stored in tables Its schemas are static and it uses to design complex queries. And NoSQL is used for non relational database system. It uses Json data to store information .</p>
                </div>
                <div className='my-4'>
                    <h3>Question-1: What is the purpose of jwt and how does it work ?</h3>
                    <p><strong>Ans:</strong> Jwt is used for authorization. We uses Jwt to secure api or server from malicious users. At first when users tries to login the server creates a jwt for user with secret and send it to browser. Then the server checks the jwt token. If the token matches the user can authenticate .</p>
                </div>

            </div>
        </div>
    );
};

export default Blog;