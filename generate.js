// apps
const apps = [
  [
    "name": "Test",
    "author": "9gr",
    "url": "#",
    "thumb": "https://assets.scratch.mit.edu/get_image/.%2E/b76fe3a2a3e7e5cb21da6b98ffe3af85.png"
   ]
]

// generate
for (let i = 0; i < apps.length; i++) {
    document.body.innerHTML += `<div class="item-container" data-location="${apps[i].url}">
      <div class="item-container-image-align">
        <center>
         <img src="${apps[i].thumb}"></img>
        </center>
      </div>
      <div class="item-container-text-wrapper"><a>${apps[i].name}</a><br><a>by ${apps[i].author}</a></div>
    </div>`
}
