import apiUrl from '../apiConfig'

export const handleErrors = res => {
  if (res.ok) {
    return res
  } else  {
    throw new Error('Recieved status in 400 or 500 range.')
  }
}

export const carCreate = (inputData, user) => {
  return fetch(apiUrl + '/create', {
    method: 'POST',
    headers: {
      contentType: 'application/json',
      Authorization: `Token token=${user.token}`
    },
    data: JSON.stringify(inputData)
  })
}

export const getCar = (user) => {
  console.log(user)
  return fetch(apiUrl + '/cars', {
    method: 'GET',
    headers: {
      Authorization: `Token token=${user.token}`
    },
    contentType: 'application/json',
    data: JSON.stringify()
  })
}

export const deleteCar = (id) => {
  return fetch(apiUrl + `/cars/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Token token=${user.token}`
    }
  })
}

export const updateCar = (inputData, id) => {
  return fetch(apiUrl + `/cars/${id}`, {
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${user.token}`
    },
    contentType: 'application/json',
    data: JSON.stringify(inputData)
  })
}
