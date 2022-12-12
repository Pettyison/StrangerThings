const COHORT = "2211-ftb-et-web-ft";

const FetchPosts = async (setPost) => {
  fetch(`https://strangers-things.herokuapp.com/api/${COHORT}/posts`)
    .then((response) => response.json())
    .then((result) => {
      setPost(result.data.posts);
    })
    .catch(console.error);
};

export default FetchPosts;
