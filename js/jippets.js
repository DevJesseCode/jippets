const SnippetManager = {
  snippets: [
    {
      id: "__random42",
      name: "randomNumber",
      description: "Returns a random number from `min` to `max`.",
      languages: ["JavaScript"],
      keywords: ["random", "number", "math"],
      content: 
`function randomNumber(min, max) {
  if (typeof min !== "number") return Math.random()
  if (typeof max !== "number") max = min; min = 0
  
  return min + Number((Math.random() * (max - min)).toFixed(0))
}`,
    },
    {
      id: "__randOn007",
      name: "generateRandomString",
      description: "Returns a random string of a given `length` with the option to disallow repetitions with `noRepeat`.",
      languages: ["JavaScript"],
      keywords: ["random", "string", "generate", "unique", "hashing"],
      content: 
`function generateRandomString(length, noRepeat) {
  const c = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789@#$_&-+()*"':;!?,./\\"
  if (noRepeat && length > c.length) {
    throw new Error(\`Unable to generate random string of length $\{length} without repetitions.\`)
  }
  return Array.from({length}, function() {
    const i = Math.floor(Math.random() * c.length)
    return noRepeat ? c.splice(i, 1) : c[i]
  })
}`,
    }
  ],
  search(query) {
    query = query.toLowerCase()
    return this.snippets.filter(snip => snip.name.toLowerCase().includes(query) || snip.keywords.some(key => key.includes(query)))
  },
}