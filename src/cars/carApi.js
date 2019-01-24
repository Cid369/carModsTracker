const apiUrl = 'http://localhost:4741'

export const handleErrors = res => {
  if (res.ok) {
    return res
  } else  {
    throw new Error('Recieved status in 400 or 500 range.')
  }
}

export const carCreate = (inputData) => {
  return fetch(apiUrl + '/cars', {
    method: 'POST',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    contentType: 'application/json',
    data: JSON.stringify(inputData)
  })
}

export const getCar = (inputData) => {
  return fetch(apiUrl + '/cars', {
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    contentType: 'application/json',
    data: JSON.stringify(inputData)
  })
}

export const deleteCar = (id) => {
  return fetch(apiUrl + `/cars/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

export const updateCar = (inputData, id) => {
  return fetch(apiUrl + `/characters/${id}`, {
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    contentType: 'application/json',
    data: JSON.stringify(inputData)
  })
}
