'use strict'
const config = require('../config')
const store = require('../store')

const getSleeps = () => {
  return $.ajax({
    url: config.apiUrl + 'sleeps/',
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

module.exports = {
  getSleeps
}
