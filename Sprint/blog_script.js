// Blog JavaScript //

//Add an event listener to the "Post Button" //

document.getElementById("btn-post").addEventListener('click', function () {
// step 2 get the comment from the textarea //
  
const newComment = document.getElementById('new-comment').value;

// step 3 create a new paragraph element for the comment //

const commentContainer = document.getElementById('comment-container');
const commentElement = document.createElement('p'); 
commentElement.innerText = newComment;

// Step 4 Append the comment to the comment container //

commentContainer.appendChild(commentElement);

//Clear the text area after posting the comment//
document.getElementById('new-comment').value = "";
});

// Loader button script//

const loadButton = 
  document.getElementById('btn-post');
const loader = 
  document.getElementById('loader');
 const demoform = 
  document.getElementById('my-form');
  
 loadButton.addEventListener('click', () => {
  //disable the button
  // and prevent further clicks
  loadButton.disabled = true;
  loader.style.display = 'inline-block';

  setTimeout(() => {
//restore the button state
//after the operation is done
    loadButton.disabled = false;
    loader.style.display = 'none';
    demoform.reset ();
  }, 2000);
 }); 







