import React, {useState} from "react";
import { useMutation } from '@apollo/client';
import { Link } from "react-router-dom";
import { pluralize } from "../../utils/helpers"
import { useStoreContext } from "../../utils/GlobalState";
import {GiTrophy} from "react-icons/gi"
import { ADD_READBOOK } from "../../utils/mutations";
import swal from 'sweetalert';


function BookItem({item}) {
  const [state, dispatch] = useStoreContext();
  const [disabled, setDisabled] = useState(false)

  const {
    name,
    _id,
    points,
    author,
  } = item;

  const [addReadBook, { error }] = useMutation(ADD_READBOOK);

  const addedAlert = () => {
    swal("Congrats!", ", This book has been added to your completed bookshelf", "success");
  }

  const handleButtonClick = async () => {

    try {
      const data = await addReadBook({
        variables: { bookId: _id, name: name, points: points, author: author },
      
      });
    } catch (err) {
      console.error(err);
    }

    setDisabled(true);
    addedAlert();
  };

  return (
    <div className="category-card">
      <Link to={`/books/${_id}`}>
        <p>{name}< br/> {author}</p>
        
      </Link>
      <div className="points">
        <span>{points} points</span>
        <i className="points-icon" ><GiTrophy /></i>
        
      </div>
      <button disabled={disabled} onClick={handleButtonClick}>Add to Bookshelf</button>
    </div>
  );
}

export default BookItem;
