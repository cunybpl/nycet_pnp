function displayResults (results, store) {
  const searchResults = document.getElementById('results')
  if (results.length) {
    let resultList = ''
    // Iterate and build result list elements
    for (const n in results) {
      const item = store[results[n].ref]
      resultList += '<li><p><a href="' + item.url + '">' + item.title + '</a></p>'
      resultList += '<p>' + item.content.substring(0, 150) + '...</p></li>'
    }
    searchResults.innerHTML = resultList
    // console.log = resultList
  } else {
    searchResults.innerHTML = 'No results found.'
    // console.log = 'No results found.'
  }
}
  
// Get the query parameter(s)
const params = new URLSearchParams(window.location.search)
const query = params.get('query')

// Perform a search if there is a query
if (query) {
  // Retain the search input in the form when displaying results
  document.getElementById('search-input').setAttribute('value', query)

  const idx = lunr(function () {
    this.ref('id')
    this.field('tags')

    for (const key in window.store) {
      this.add({
        id: key,
        tags: window.store[key].tags,
      })
    }
  })

  // Perform the search
  const results = idx.search(query)
  console.log(results)
  // Update the list with results
  displayResults(results, window.store)
}
  
  
  