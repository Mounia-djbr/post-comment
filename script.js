/*const postList = document.getElementById('post-list');
const postContent = document.getElementById('post-content');
const postButton = document.getElementById('post-button');

postButton.addEventListener('click', () => {
  const content = postContent.value;
  if (content.trim() === '') {
    alert('Post content cannot be empty');
    return;
  }

  fetch('http://localhost:3000/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ content })
  })
  .then(response => response.json())
  .then(data => {
    console.log(data.message);
    postContent.value = '';
    loadPosts();
  })
  .catch(error => {
    console.error('Error:', error);
  });
});

function loadPosts() {
  fetch('http://localhost:3000/posts')
    .then(response => response.json())
    .then(posts => {
      postList.innerHTML = '';
      posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.className = 'post';
        postElement.textContent = post.content;
        postList.appendChild(postElement);
      });
    })
    .catch(error => {
      console.error('Error:', error);
    });
}


loadPosts();
*/

document.addEventListener('DOMContentLoaded', () => {
    const commentButton = document.querySelector('.comment-button');
    const commentInput = document.querySelector('.comment-input');
    const commentsContainer = document.querySelector('.comments');
  
    commentButton.addEventListener('click', () => {
      const commentText = commentInput.value;
      if (commentText.trim() === '') {
        return;
      }
  
      const comment = createCommentElement(commentText);
      commentsContainer.appendChild(comment);
  
      // Clear the input field
      commentInput.value = '';
    });
  
    // Delete comment
    commentsContainer.addEventListener('click', (event) => {
      if (event.target.classList.contains('delete-button')) {
        event.target.parentElement.remove();
      }
    });
  });
  
  function createCommentElement(text) {
    const commentElement = document.createElement('div');
    commentElement.className = 'comment';
  
    const commentText = document.createElement('span');
    commentText.className = 'comment-text';
    commentText.textContent = text;
  
    const deleteButton = document.createElement('span');
    deleteButton.className = 'delete-button';
    deleteButton.textContent = 'Delete';
  
    commentElement.appendChild(commentText);
    commentElement.appendChild(deleteButton);
  
    return commentElement;
  }
  