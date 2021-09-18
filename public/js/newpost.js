
//Credit to: https://www.learnwithjason.dev/blog/get-form-values-as-json !

function handleSubmit(event) {
  event.preventDefault();

  const data = new FormData(event.target);

  const value = Object.fromEntries(data.entries());

  console.log({ value });
}

const form = document.querySelector('form');
form.addEventListener('submit', handleSubmit);


/*
fetch("/newpost", {
  method: "POST",
  body: JSON.stringify({
  }),
  headers: { "Content-Type": "application/json" }
})
  .then(function(res) {
    console.log(res);
  })
  .catch(err => console.log(err));
*/




/*
const blogFormHandler = async (event) => {
    event.preventDefault();

var submit = document.getElementById("blogsubmit");

submit.onclick = function () {
    var title = document.getElementById("title").value;
    var content = document.getElementById("content").value;

    console.log(title, content);
};

fetch('/api/user/newpost', {
  method: 'POST',
  headers: {
    'content-type': 'application/json'
  },
  body: JSON.stringify({
    title,
    content
  })
})
.then(function (blog) {
  return blog.json()
})
.then(function (blog) {
  console.log('got results', blog)
})
}

document.querySelector('#blogsubmit').addEventListener('submit', blogFormHandler);
*/

//AskBCS option below:
/*
fetch("/api/user/newpost", {
  method: "GET",
  body: JSON.stringify({
    data
  }),
  headers: { "Content-Type": "application/json" }
})
  .then(function(res) {
    console.log(res);
  })
  .catch(err => console.log(err));
;
*/

//Web Dev Simplified Ideas: https://www.youtube.com/watch?v=cuEtnrL9-H0&t=260s
/*
fetch('/newpost', {
  method: 'POST',
  body: {
    _
  }
}).then(res => {
  res.json()
})
*/
