//Function to send submitted stories to database
   // let story = user submitted story;
    //story gets sent to database after submit button is clicked.
    //a thank you message is displayed

//Access submitted stories via an archive
    //stories will be displayed by title in a container
    //on click of title, the story gets displayed
    curl -X 'GET' \
    'https://openlibrary.org/subjects/Paranormal.json?details=true' \
    -H 'accept: application/json'