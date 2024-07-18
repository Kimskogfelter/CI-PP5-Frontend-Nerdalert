import React, { useState } from "react";
import { Link } from "react-router-dom";

import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

import styles from "../../styles/CommentCreateEditForm.module.css";
import Avatar from "../../components/Avatar";
import { axiosRes } from "../../api/axiosDefaults";
import { Rating } from 'react-simple-star-rating';


function CommentCreateForm(props) {
  const { post, setPost, setComments, profileImage, profile_id, } = props;
  const [content, setContent] = useState("");
  const [starRating, setStarRating ] = useState(0);
  
  

  const handleChange = (event) => {

    setContent(event.target.value);
  };

  const handleStarRating = (rate) => {
  // const fixedRateNumbers = fixRateNumbers(rate)
   setStarRating(rate / 20); 
    
  };

  

  const handleSubmit = async (event) => {
    
    event.preventDefault();
    try {
     
    
      const { data } = await axiosRes.post("comments/", {
        content,
        post,
        starRating,
       
      });
      
      setComments((prevComments) => ({
        ...prevComments,
        results: [data, ...prevComments.results],
      }));
    
      setPost((prevPost) => ({
        results: [
          {
            ...prevPost.results[0],
            comments_count: prevPost.results[0].comments_count + 1,
          },
        ],
      }));
      setContent("");
      setStarRating(0); // Reset the rating state
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Form className="mt-2" onSubmit={handleSubmit}>
      <Form.Group>
        <InputGroup>
          <Link to={`/profiles/${profile_id}`}>
            <Avatar src={profileImage} />
          </Link>
          <Form.Control
            className={styles.Form}
            placeholder="my comment..."
            as="textarea"
            value={content}
            onChange={handleChange}
            rows={2}
          />
        </InputGroup>
      </Form.Group>
      <Rating
        onClick={handleStarRating}
        value={starRating}
        
      />
      <button
        className={`${styles.Button} btn d-block ml-auto`}
        disabled={!content.trim() || starRating === 0} // Disable the button until both content and rating are provided
        type="submit"
      >
        Post
      </button>
    </Form>
  );
}

export default CommentCreateForm;
