function getAllPosts() { //1. create function to get all posts
    fetch('https://jsonplaceholder.typicode.com/posts') //2. get all posts fron JSON Placeholder
        .then(res => res.json()) //3. create a response to get posts
        .then(data => allPosts(data)) //4. call a function to display all posts 
}

function allPosts(posts) { //5. create function to get posts data
    const section = document.getElementById('allPosts'); //6.call from html file to make a connection
    for (const post of posts) { //7. run for loop to get all posts
        const postDiv = document.createElement('div'); //8. create 'div' to keep post data
        postDiv.style.backgroundColor = 'lightblue'; //9. do some styling for the 'div'
        postDiv.style.padding = '15px';
        postDiv.style.margin = '10px';
        postDiv.style.borderRadius = '10px';
        postDiv.innerHTML = `  
        <h4>UserId : ${post.id}</h4>
        <h5>Post Title : ${post.title}</h5>
        <p>Post Description : ${post.body}</p>
        ` //10. create some inner html with dynamic value from the post for the new 'div'
        section.appendChild(postDiv); //11. append new div to make all posts visible 
    }
}

getAllPosts() //12. call the 1st function and display all posts automatically
