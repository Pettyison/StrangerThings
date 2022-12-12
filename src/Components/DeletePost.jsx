const COHORT = "2211-ftb-et-web-ft";

export const DeletePost = async (authorId, postId) => {
  try {
    const response = await fetch(
      `https://strangers-things.herokuapp.com/api/${COHORT}/posts/${postId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authorId}`,
        },
      }
    );
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.error(error);
  }
};
