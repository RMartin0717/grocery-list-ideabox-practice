const postItem = (newItem) => {
  return fetch(('http://localhost:3001/items'), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newItem)
  })
  .then(response => {
      if(!response.ok) {
        throw new Error('Unable to reach server data')
      } else {
        return response.json()
      }
    })
}

const getItems = () => {
  return fetch('http://localhost:3001/items')
  .then(response => {
    if(!response.ok) {
      throw new Error('Unable to retrieve server data')
    } else {
      return response.json()
    }
  })
}

export { getItems, postItem }
