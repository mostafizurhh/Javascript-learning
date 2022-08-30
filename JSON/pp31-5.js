/***************************JSON Placeholder**************************/
const showComments = () => {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => displayComment(data.slice(0, 5)))
}

const displayComment = (comments) => {
    console.log(comments);
    const commentContainer = document.getElementById('showComment');
    commentContainer.innerHTML = '';
    comments.forEach(comment => {
        const commentDiv = document.createElement('div');
        commentDiv.innerHTML = `
        <div class="comment" onclick="displayComments(${comment.id})">
            <h3>ID: ${comment.id}</h3>
            <h4>Name: ${comment.name}</h4>
            <h5>Comment: ${comment.body}</h5>
        </div>
        `
        commentContainer.appendChild(commentDiv);
    });
}

const displayComments = (id) => {
    console.log(id);
    const url = `https://jsonplaceholder.typicode.com/posts?id=${id}`
    fetch(url)
        .then(res => res.json())
        .then(data => viewPost(data))
}

const viewPost = (posts) => {
    console.log(posts);
    const commentContainer = document.getElementById('displayComment');
    commentContainer.innerHTML = ``;
    posts.forEach(post => {
        const commentDiv = document.createElement('div');
        commentDiv.innerHTML = `
            <div class="newdiv">
                <h3>ID: ${post.id}</h3>
                <h5>Comment: ${post.body}</h5>
            </div> 
               `
        commentContainer.appendChild(commentDiv);
    });
}

// showComments()