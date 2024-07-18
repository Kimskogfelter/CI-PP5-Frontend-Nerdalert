import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { axiosRes } from "../../api/axiosDefaults";
import styles from "../../styles/CommentCreateEditForm.module.css";
import { Rating } from 'react-simple-star-rating';

function CommentEditForm(props) {
  const { id, content, setShowEditForm, setComments, starRating } = props;
  const [formContent, setFormContent] = useState(content);
  const [newStarRating, setNewStarRating] = useState(0);

  const handleChange = (event) => {
    setFormContent(event.target.value);
  };

  const handleStarRatingChange = (rate) => {
    setNewStarRating(rate/20); // Update the rating state when a new rating is selected
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      await axiosRes.put(`/comments/${id}/`, {
        content: formContent.trim(),
       starRating: newStarRating, // Include the rating in the submission data
      });
      setComments((prevComments) => ({
        ...prevComments,
        results: prevComments.results.map((comment) => {
          return comment.id === id
            ? {
                ...comment,
                content: formContent.trim(),
                starRating: newStarRating, // Update the rating in the comment
                updated_at: "now",
              }
            : comment;
        }),
      }));
      setShowEditForm(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="pr-1">
        <Form.Control
          className={styles.Form}
          as="textarea"
          value={formContent}
          onChange={handleChange}
          rows={2}
        />
         <Rating
          onClick={handleStarRatingChange}
          initialValue={starRating}
        />
      </Form.Group>
      <div className="text-right">
        <button
          className={styles.Button}
          onClick={() => setShowEditForm(false)}
          type="button"
        >
          cancel
        </button>
        <button
          className={styles.Button}
          disabled={!formContent.trim() || newStarRating === 0} // Disable the button until both content and rating are provided
          type="submit"
        >
          save
        </button>
      </div>
    </Form>
  );
}

export default CommentEditForm;