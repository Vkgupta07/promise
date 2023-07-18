const posts = [];
let lastActivityTime = null;

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);
      resolve();
    }, 1000);
  });
}

function updateLastUserActivityTime() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      lastActivityTime = new Date().toLocaleTimeString();
      resolve();
    }, 1000);
  });
}

function deleteLastPost() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (posts.length > 0) {
        const deletedPost = posts.pop();
        resolve(deletedPost);
      } else {
        reject('ERROR: No posts to delete');
      }
    }, 1000);
  });
}

createPost('Post 1')
  .then(() => updateLastUserActivityTime())
  .then(() => {
    if (posts.length > 0) {
      console.log('Posts:', posts);
      console.log('Last Activity Time:', lastActivityTime);
    }
    return deleteLastPost();
  })
  .then((deletedPost) => {
    console.log('Deleted Post:', deletedPost);
    console.log('New Posts:', posts);
  })
  .catch((errorMessage) => console.log(errorMessage));
