let posts = JSON.parse(localStorage.getItem("posts")) || [];

displayPosts();

function addPost(){

    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;

    if(title === "" || content === ""){
        alert("Please fill all fields");
        return;
    }

    posts.push({
        title,
        content
    });

    localStorage.setItem("posts", JSON.stringify(posts));

    document.getElementById("title").value = "";
    document.getElementById("content").value = "";

    displayPosts();
}

function displayPosts(){

    const postsDiv = document.getElementById("posts");

    postsDiv.innerHTML = "";

    posts.forEach((post,index)=>{

        postsDiv.innerHTML += `
            <div class="post">
                <h3>${post.title}</h3>
                <p>${post.content}</p>
                <button onclick="deletePost(${index})">
                    Delete
                </button>
            </div>
        `;
    });
}

function deletePost(index){

    posts.splice(index,1);

    localStorage.setItem("posts", JSON.stringify(posts));

    displayPosts();
}