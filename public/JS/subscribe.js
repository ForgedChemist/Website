function subscribe(e) {
    e.preventDefault(); // Prevent the default form submission
    const db = firebase.firestore();
    const postsCollection = db.collection('subscribers');

    // Get the values from the input fields
    const email = document.getElementById('fpEmail').value;


    // Add a new document with the input values
    postsCollection.add({
        Email: email
    }).then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });
}