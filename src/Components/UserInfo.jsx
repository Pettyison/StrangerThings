import React from "react";

const cohort = "2211-FTB-ET-WEB-FT";

export const UserInfo = (props) => {
  const handleClick = () => {
    fetch(
      `https://strangers-things.herokuapp.com/api/${cohort}/posts/5e8d1bd48829fb0017d2233b`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${}`,
        },
      }
    );
  };

  return (
    <div>
      <div>
        {props.userData && props.userData.posts ? (
          props.userData.posts.map((myPost) => {
            return (
              <div className="myPost" key={myPost._id}>
                <p> {myPost.title}</p>
                <p> {myPost.description}</p>
                <p>Price: {myPost.price}</p>
                <p>Location: {myPost.location}</p>
                <button onClick={handleClick}>Delete</button>
              </div>
            );
          })
        ) : (
          <h2>No posts brother</h2>
        )}
      </div>
      <div>
        {props.userData && props.userData.messages ? (
          props.userData.messages.map((myMessage) => {
            return (
              <div className="myMessage" key={myMessage._id}>
                <p>{myMessage.post.title}</p>
                <p>{myMessage.content}</p>
                <p>From: {myMessage.fromUser.username}</p>
              </div>
            );
          })
        ) : (
          <h2>No messages brother</h2>
        )}
      </div>
    </div>
  );
};
