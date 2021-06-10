import React, { useState, useEffect } from "react";
import axios from "axios";
import { navigate } from "@reach/router";

const Review = (props) => {
  const [sneaker, setSneaker] = useState(props.sneaker);
  const [creator, setCreator] = useState("");
  const [sneaker_id, setSneaker_id] = useState("");
  const [review, setReview] = useState("");

  var user_id = window.localStorage.getItem("user_id");
  var shoe_id = window.localStorage.getItem("shoe_id");

  useEffect(() => {
    axios
      .get("http://18.117.145.31/user/")
      .then((res) => {
        console.log(res.data);
        console.log(user_id);
        console.log(shoe_id);
        console.log(review);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const submitHandler = (e) => {
    e.preventDefault();
    axios.post(`http://18.117.145.31/sneaker/add_review/${user_id}/${shoe_id}/`, {
      review,
      creator : user_id,
      sneaker_id : shoe_id
    })
      .then((res) => {
        console.log(res.data);
        console.log(user_id);
        console.log(shoe_id);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
        window.alert("Invalid Review");
      });
  };

  // const addReview = () => {
  //     axios
  //       .post("http://18.117.145.31/sneaker/add_review/" + props.sneaker_id + user_id)
  //       .then((res) => {
  //         console.log(res.data);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <label for="textarea">
          <b>Leave a review: </b>
        </label>
        <textarea
          id="textarea"
          cols="95"
          rows="10"
          onChange={(e) => setReview(e.target.value)}
          placeholder="Leave your review here..."
        ></textarea>
        <br />
        <div className="invButtons">
          <button 
            onClick={() => navigate(`/sneakers/${shoe_id}/`)}
            className="submitBtn">
            Submit Review
          </button>
          <button onClick={() => navigate("/sneakers")} className="homeBtn">
            Return To All Sneakers
          </button>
        </div>
      </form>
      <div>
        <table>
          <thead>
            <th>Review</th>
            <th>Reviewer</th>
          </thead>
          {sneaker.reviews.map((x) => (
            <tbody key={x.id}>
              <tr>
                <td>{x.review}</td>
                <td>{x.creator.first_name}</td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Review;
