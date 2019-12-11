'use strict'
const api = require('./api')
const ui = require('./ui')
const getFormField = require('../../../lib/get-form-fields')

// a function to let a user sign up
const onSignUp = function (event) {
  event.preventDefault()
  console.log('on sign up works!')
  const form = event.target
  const formData = getFormField(form)

  api.signUp(formData)
    .then(ui.onSignupSuccess)
    .catch(ui.onSignupFailure)
}

const addHandlers = event => {
  $('.sign-up').on('submit', onSignUp)
  // $('#sign-in').on('submit', onSignIn)
  // $('#change-password').on('submit', onChangePassword)
  // $('#sign-out').on('submit', onSignOut)
}

module.exports = {
  addHandlers
}
