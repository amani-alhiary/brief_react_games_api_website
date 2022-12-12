import { useState } from "react";
import axios from 'axios';
import "./Styles/AddComment.scss";

const ReplyComment = ({gameDetails, post_id }) => {
  const {
    id,
    name,
    description,
    released,
    rating,
    platforms,
    stores,
    publishers,
    genres,
    clip,
 
  } = gameDetails;


  // const game_id =game_id;
  const [formErrors, setFormErrors] = useState({});
  const [data, setData] = useState({
    reply_comment: "",
      game_id: id,
      user_id: sessionStorage.getItem('id'),
      post_id:post_id.id
  })

  console.log(post_id.id);

  // const user_id= sessionStorage.getItem('id');

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
    setFormErrors(validate(data));

}

const submitForm = (e) => {
    e.preventDefault();

    console.log(data);

    axios.post('http://localhost/ApiRedux/replies.php', data)

        .then((result) => {
          
         window.open(`/games/details/${id}`,"_self")
     

        console.log(result);
    
      
        })


}


const validate = (values) => {
  const errors = {};
  if (!values.camment) {
      errors.camment = "camment is required";
  } 


  return errors;
};



  return (
    <div className="add-comment">
      <div className="profile-pic"></div>
      <form onSubmit={submitForm} >
        <input type='hidden' name="game_id" value={id}></input>
        <input type='hidden' name="user_id" value={sessionStorage.getItem('id')}></input>
        <input type='hidden' name="post_id" value={post_id}></input>


        
      <textarea
        className="comment-input"
        placeholder="Add a comment"
        onChange={handleChange}
        name="reply_comment"
      />
      <div className="send-btn-container">
        <div className="profile-pic"></div>
        <button type="submit" className="add-btn">
          send
        </button>
      </div>
      </form>
    </div>
  );
};

export default ReplyComment;
