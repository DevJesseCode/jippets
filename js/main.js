const searchEl = document.querySelector("#search")
const filtersEl = document.querySelector(".filter-container")
const jippetsContainer = document.querySelector(".jippets-container")
SnippetManager.search("number").map(result => result.name)

function createJippetCard(jippet) {
  const jip = document.createElement("div")
  jip.className = "jippet"
  jip.id = jippet.id
  
  jip.innerHTML =
`<p class="name">${jippet.name}</p>
<div class="keywords-container">
  ${
    jippet.keywords.map(kw => `<span class="keyword">${kw}</span>`)
    .join("\n")
  }
</div>
<p class="description">${jippet.description}</p>
<div class="code-header">
  <div class="action-buttons">
    <button data-id="${jippet.id}" class="copy-button">Copy</button>
  </div>
  <div class="languages">
    ${
      jippet.languages.map(lang => `<span style="--lang: '${lang}'"><img src="./assets/icons/${lang.toLowerCase()}.svg" alt="${lang}"></span>`)
      .join("\n")
    }
  </div>
</div>
<hr>
<div class="code-container">
  <div class="code">
    <pre>${jippet.content}</pre>
  </div>
</div>`
  
  return jip
}

function searchCallback(query) {
  jippetsContainer.innerHTML = ""
  
  for (const result of SnippetManager.search(query)) {
    jippetsContainer.appendChild(createJippetCard(result))
  }
}

function animateFilters({ target }) {
  if (filtersEl.contains(target) || target === searchEl) {
    filtersEl.classList.add("open")
  } else {
    filtersEl.classList.remove("open")
  }
}

searchEl.addEventListener("focus", function() {
  this.parentElement.classList.add("inuse")
  filtersEl.classList.add("open")
})
searchEl.addEventListener("blur", function() {
  !this.value && this.parentElement.classList.remove("inuse")
})
searchEl.addEventListener("input", function () {
  searchCallback(this.value)
})
document.addEventListener("click", animateFilters)