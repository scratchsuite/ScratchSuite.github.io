var div = document.getElementsByClassName("row")[0]

var apps = [
  {
    name: "ScratchSuite",
    repository: "scratchsuite/scratchsuite.github.io",
    owner: "ScratchSuite",
    url: "//scratchsuite.github.io"
  },
  {
    name: "Frontend",
    repository: "scratchsuite/frontend",
    owner: "ScratchSuite",
    url: "//scratchsuite.github.io/frontend"
  },
  {
    name: "Backend",
    repository: "scratchsuite/Backend",
    owner: "FunctionalMetatable",
    url: "//scratchsuite.github.io/backend"
  },
  {
    name: "Ocular",
    repository: "jeffalo/ocular",
    owner: "Jeffalo",
    ownerPage: "//jeffalo.net",
    url: "//ocular.jeffalo.net"
  },
  {
    name: "my-ocular",
    repository: "jeffalo/ocular",
    owner: "Jeffalo",
    ownerPage: "//jeffalo.net",
    url: "//my-ocular.jeffalo.net"
  }
];

for (let i=0;i<apps.length;i++) {
  var app = apps[i];
  // Create the div
  
  data = `
  <div class="col" id="app-${app.name}">
  <a href="${app.url}">
  <h4>${app.name}</h4>
  <a>by <a href="${app.ownerPage || "https://scratchsuite.github.io"}">${app.owner}</a></a>
  </a>
  </div>
  `

  div.innerHTML += data
}
