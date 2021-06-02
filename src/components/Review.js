import React, { useState, useEffect } from "react";
import axios from "axios";
import { navigate, Link } from "@reach/router";

const Review = (props) => {
  const [review, setReview] = useState([]);

  useEffect(() => {
    axios
      .get("http://18.117.145.31/review/" + props.review_id)
      .then((res) => {
        console.log(res.data);
        setReview(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  const submitHandler = (e) => {
    e.preventDefault();

    axios
      .post("http://18.117.145.31/review/" + props.review_id)
      .then((res) => {
        console.log(res.data);
        setReview(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <label for="textarea">Leave a review: </label>
      <textarea
        id="textarea"
        cols="95"
        rows="10"
        placeholder="Leave your review here..."
      ></textarea>
      <br />
      <div className="container">
        {review.map((review, index) => (
          <div key={index}>
            <h3>{review.review}</h3>
            <h5>Reviewed By: {review.creator}</h5>
          </div>
        ))}
      </div>
      <div className="invButtons">
        <button onSubmit={submitHandler} className="submitBtn">
          Submit Review
        </button>
        <button onClick={() => navigate("/index")} className="homeBtn">
          Return To All Sneakers
        </button>
      </div>
    </div>
  );
};

export default Review;
