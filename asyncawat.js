const posts = [];
let lastActivityTime = null;

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function createPost(post) {
  await delay(1000);
  posts.push(post);
}

async function updateLastUserActivityTime() {
  await delay(1000);
  lastActivityTime = new Date().toLocaleTimeString();
}

async function deleteLastPost() {
  await delay(1000);
  if (posts.length > 0) {
    const deletedPost = posts.pop();
    return deletedPost;
  } else {
    throw new Error('ERROR: No posts to delete');
  }
}

async function processPostOperations() {
  try {
    await createPost('Post 1');
    await updateLastUserActivityTime();

    if (posts.length > 0) {
      console.log('Posts:', posts);
      console.log('Last Activity Time:', lastActivityTime);
    }

    const deletedPost = await deleteLastPost();
    console.log('Deleted Post:', deletedPost);
    console.log('New Posts:', posts);
  } catch (error) {
    console.log(error.message);
  }
}

processPostOperations();
