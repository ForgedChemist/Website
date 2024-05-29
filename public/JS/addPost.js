/*document.addEventListener('DOMContentLoaded', event => {

 const app = firebase.app();
    const db = firebase.firestore();
    const post = db.collection('Blogs').doc('firstblog');

    post.onSnapshot(doc => {
        const data = doc.data();
        document.write(data.Title + `<br>`);
        document.write(data.content + `<br>`);


    })
});
*/


function updatePost(e, docId) {
    e.preventDefault(); // Prevent the default form submission
    const db = firebase.firestore();
    const postsCollection = db.collection('Blogs');

    // Get the values from the input fields
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    // Update the document with the input values
    postsCollection.doc(docId).update({
        Title: title,
        content: content
    }).then(() => {
        console.log("Document updated");
    })
    .catch((error) => {
        console.error("Error updating document: ", error);
    });
}

function addPost(e) {
    e.preventDefault(); // Prevent the default form submission
    const db = firebase.firestore();
    const postsCollection = db.collection('Blogs');

    // Get the values from the input fields
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    // Add a new document with the input values
    postsCollection.add({
        Title: title,
        content: content
    }).then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });
}


function displayPosts() {
    const db = firebase.firestore();
    const postsCollection = db.collection('Blogs');

    // Get all documents in the collection
    postsCollection.get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());

            // Create HTML elements for each post
            const postElement = document.createElement('div');
            const titleElement = document.createElement('h2');
            const contentElement = document.createElement('p');

            // Set the text of the elements to the data from the document
            titleElement.textContent = doc.data().Title;
            contentElement.textContent = doc.data().content;

            // Append the title and content to the post element
            postElement.appendChild(titleElement);
            postElement.appendChild(contentElement);

            // Append the post element to the container
            document.getElementById('posts-container').appendChild(postElement);
        });
    });
    window.onload = displayPosts;
}