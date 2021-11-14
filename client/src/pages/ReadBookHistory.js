

import React from 'react';
import { Link } from 'react-router-dom';

import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';

import { GiTrophy } from "react-icons/gi"

import NavIcons from "../components/NavIcons";

function ReadBookHistory() {
  const { data } = useQuery(QUERY_USER);
  let user;
  let totalPoints = 0;

  if (data) {
    user = data.user;
    console.log(user)
    for (let i = 0; i < user.readBooks.length; i++) {
      totalPoints += user.readBooks[i].points ;
  }
}

  return (
    <>
      <div className="container my-1">
        <Link to="/">← Back to Home</Link>

        {user ? (
          <>
            <h2>
              {user.firstName} {user.lastName}'s Completed Bookshelf
            </h2>
            <h2>ReaderScore™: {totalPoints}</h2>
            {user.readBooks.map((readBook) => (
              <div key={readBook._id} className="my-2">
                <div className="row">
                  <div className="col-sm-4"></div>
                    <div className="category-card">
                    <Link to={`/books/${readBook.bookId}`}>
                      <p>{readBook.name}
                        < br />
                        {readBook.author}</p>
                    </Link>
                    <div className="points">
                      <span>{readBook.points} points</span>
                      <i className="points-icon"><GiTrophy /></i>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </>
        ) : null}
        <NavIcons />
      </div>
    </>
  );
}

export default ReadBookHistory;