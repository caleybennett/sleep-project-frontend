'use strict'
const config = require('../config')
const store = require('../store')

const getSleeps = () => {
  return $.ajax({
    url: config.apiUrl + '/sleeps/',
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

const createSleep = formData => {
  return $.ajax({
    url: config.apiUrl + '/sleeps/',
    method: 'POST',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data: formData
  })
}

const deleteSleep = function (id) {
  return $.ajax({
    url: config.apiUrl + '/sleeps/' + id,
    method: 'DELETE',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

const updateSleep = function (formData, id) {
  return $.ajax({
    url: config.apiUrl + '/sleeps/' + id,
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data: formData
  })
}

module.exports = {
  getSleeps,
  createSleep,
  deleteSleep,
  updateSleep
}
