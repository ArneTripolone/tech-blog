/*
//allows you to get values from a form and use it with validation. https://www.youtube.com/watch?v=P-jKHhr6YxI 
document.getElementById("blogsubmit").addEventListener("click", function() { 
    Array.from(document.querySelectorAll('#blogpost input'))
        .reduce((acc, input) => 
         ({ ...acc, [input.id]: input.value}), {});
    });
*/

//document.getElementById("blogsubmit").addEventListener("click", function() {
//alert("Hello World!");
//});

/*
var blogpost = [document.getElementById("title" && "content")];

let fillData = () => {
    let ele = document.getElementById('container');

    let node = document.createTextNode(value.blogpost);
    ele.appendChild(node);
}
*/

var submit = document.getElementById("blogsubmit");

submit.onclick = function () {
    var title = document.getElementById("title").value;
    var content = document.getElementById("content").value;

    console.log(title, content);
};

fetch('/api/user/blogpost', {
  method: 'POST',
  headers: {
    'content-type': 'application/json'
  },
  body: JSON.stringify({
    title,
    content,
  })
})
.then(function (blog) {
  return blog.json()
})
.then(function (blog) {
  console.log('got results', blog)
})