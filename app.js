const http = new easyHTTP;

const data = {
    title: 'Custom Post',
    body: 'This is custom post'
};

//// GET

http.get('https://jsonplaceholder.typicode.com/posts', function (err, posts) {
    if (err) {
        console.log(err);
    } else {
        console.log(posts);
    } 
});

//// POST
http.post('https://jsonplaceholder.typicode.com/posts', data, function (err, post) {
    if(err) {
        console.log(err);
    } else {
        console.log(post);
    }
});

////PUT (update post)
http.put('https://jsonplaceholder.typicode.com/posts/1', data, function(err, post){
    if(err) {
        console.log(err);
    } else {
        console.log(post);
    }

});

////DELETE
http.delete('https://jsonplaceholder.typicode.com/posts/1', function (err, response) {
    if (err) {
        console.log(err);
    } else {
        console.log(response);
    } 
});