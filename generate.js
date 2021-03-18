// apps
const apps = Object.values({
  1: {
    "name": "Test",
    "author": "9gr",
    "url": "#",
    "thumb": "https://assets.scratch.mit.edu/get_image/.%2E/b76fe3a2a3e7e5cb21da6b98ffe3af85.png"
  },
  2: {
    "name": "Frontend",
    "author": "<a href='github.com/functionalmetatable/'>FunctionalMetatable</a>",
    "url": "https://scratchsuite.github.io/frontend",
    "thumb": "https://assets.scratch.mit.edu/get_image/.%2E/13b1be7c81e1de0a291d9c9dd081ee43.png"
  }
})

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
