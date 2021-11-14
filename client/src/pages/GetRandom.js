import React from 'react';
import { Link } from 'react-router-dom';

import { useQuery } from '@apollo/client';
import { QUERY_BOOKS } from '../utils/queries';

import { GiTrophy } from "react-icons/gi"

import NavIcons from "../components/NavIcons";

import spinner from '../assets/spinner.gif';

function GetRandom() {

    const { loading, data } = useQuery(QUERY_BOOKS);
    let books;
    let randomBook

    if (data && data.books) {
        books = data.books
        console.log(data.books)
        randomBook = books[Math.floor(Math.random() * books.length)];
        console.log(randomBook)
    }

    // const populateRandom = async () => {

    //     try {
    //      books = await getBooks();

    //       randomBook = books[Math.floor(Math.random() * books.length)];
    //     }
    //      catch (err) {
    //       console.error(err);
    //     }


    //   };



    // const getBooks = async () => {
    //     if (data) {
    //         // books = data.books;
    //         console.log(data)

    //     } 

    // }

    // const getRandomBook = async () => {
    //     await getBooks()
    //     randomBook = books[Math.floor(Math.random() * books.length)];
    //     console.log(randomBook.name, randomBook.points)
    // }




    return (

        <div className="container my-1">
            <Link to="/">← Back to Home</Link>
            <div className="flex-row">
                <div className="category-card">

                    {data.books.length ? (
                        <div className="flex-row">
                            <div className="category-card">
                                <p>{randomBook.name}
                                    < br />
                                    {randomBook.author}</p>

                                <div className="points">
                                    <span>{randomBook.points} points </span>
                                    <i className="points-icon"><GiTrophy /></i>
                                </div>
                            </div>
                        </div>
):(
    <h3>Please hold!</h3>
  )}
  {loading ? <img src={spinner} alt="loading" /> : null}
</div>
</div>
<NavIcons />
</div>
);
}


      {/* <div className="flex-row">
                                    <div className="category-card">
                                        <p>{randomBook.name}
                                            < br />
                                            {randomBook.author}</p>
                             

                                        <div className="points">
                                            <span>{randomBook.points} points </span>
                                            <i className="points-icon"><GiTrophy /></i>
                                        </div>
                                    </div>
                                </div>
                                <NavIcons />
                            </div> */}

 {/* <div>
       <h2>Hello</h2>
   <NavIcons />
  </div> */}





export default GetRandom;