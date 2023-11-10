const {postsArray} = require("../data/posts");

const jsonPosts = JSON.stringify(postsArray);

function index (req, res) {

    res.format({
    text: () => {
      res.type("text").send("Hello World!");
    },
    html: () => {
        const html = [`<h1>Posts</h1>`];
        
        html.push("<ul>");
        
        for (const post of postsArray) {
        html.push(`<li>
            <h3>${post.titolo}</h3>
            <p>${post.contenuto}</p>
            <img src="/img/${post.immagine}" alt="" style="width: 100px">
        </li>`);
        }
        
        html.push("</ul>");
        
        res.send(html.join(""));
    }, 
    json: () => {
      res.type("json").send(jsonPosts);
    },
    default: () => {
      res.status(406).send("Not Acceptable");
    },
  })
}

module.exports = {
  index,
}