var div = document.getElementsByClassName("row")[0]

var apps = [
  {
    name: "ScratchSuite",
    repository: "scratchsuite/scratchsuite.github.io",
    owner: "ScratchSuite",
    url: "//scratchsuite.github.io",
    tags: ["beta"]
  },
  {
    name: "Frontend",
    repository: "scratchsuite/frontend",
    owner: "ScratchSuite",
    url: "//scratchsuite.github.io/frontend",
    tags: ["beta"]
  },
  {
    name: "Backend",
    repository: "scratchsuite/Backend",
    owner: "FunctionalMetatable",
    url: "//scratchsuite.github.io/backend",
    tags: ["beta", "upptime"]
  },
  {
    name: "Scratch 1.0 Forums",
    repository: "scratchsuite/Backend",
    owner: "Andrew Sun",
    url: "//scratcharchive.asun.co/forums/",
    tags: ["Forums", "Old"],
    ownerPage: "//asun.co"
  },
];

var tagSettings = {
  beta: {
    color: "#ffa500"
  }
}
for (let i=0;i<apps.length;i++) {
  var app = apps[i];
  // Create the div
  
  data = `
  <div class="col" id="app-${app.name}">
  <a href="${app.url}">
  <h4>${app.name}</h4>
  <a>by <a href="${app.ownerPage || "https://scratchsuite.github.io"}">${app.owner}</a></a>
  </a>
  <br>
  </div>
  `

  div.innerHTML += data

  app.div = document.getElementById(`app-${app.name}`)
  // Add the tags

  for (let tagI=0;tagI<app.tags.length;tagI++) {
    var tag = document.createElement("span");
    tag.setAttribute("class", "tag")
    tag.style.borderColor = "#FFF"
    tag.innerText = app.tags[tagI]
    var settings = tagSettings[app.tags[tagI]]
    if (settings && settings.color) tag.style.backgroundColor = settings.color
    
    app.div.appendChild(tag)
    if (app.tags.length >=2) app.div.innerHTML += "⠀⠀"
  }

  // create <br> el
  app.div.appendChild(document.createElement("br"))

  // create an anchor element for the br to work
  ph=document.createElement("p");
  ph.innerText="​"
  ph.setAttribute("class", "app-div-whitespace-border")
  app.div.appendChild(ph)
}
