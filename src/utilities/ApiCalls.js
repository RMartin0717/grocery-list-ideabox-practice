const postItem = (newItem) => {
  return fetch(('http://localhost:3001/items'), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newItem)
  })
}

export { postItem }
