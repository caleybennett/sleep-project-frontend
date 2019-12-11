'use strict'

const store = require('../store')

const onSuccess = message => {
  $('.user-message')
    .removeClass('failure')
    .addClass('success')
    .html(message)
  $('form').trigger('reset')
}

const onFailure = message => {
  $('.user-message')
    .removeClass('success')
    .addClass('failure')
    .text(message)
  $('form').trigger('reset')
}

const onSignupSuccess = () => {
  onSuccess('You successfully signed up! Now, sign in!')
}

const onSignupFailure = () => {
  onFailure('Oh nooooo, something went wrong! Please try again.')
}

const onSigninSuccess = responseData => {
  store.user = responseData.user
  onSuccess('You successfully signed in!')
  $('.after-auth').show()
  $('.before-auth').hide()
}

const onSigninFailure = () => {
  onFailure('Oh nooooo, something went wrong! Please try again.')
}

const onChangePasswordSuccess = () => {
  onSuccess('You successfully changed your password')
}

const onChangePasswordFailure = () => {
  onFailure('Oh nooooo, something went wrong! Please try again.')
}

const onSignOutSuccess = () => {
  onSuccess('You successfully signed out')
  store.user = {}
  $('.after-auth').hide()
  $('.before-auth').show()
}

const onSignOutFailure = () => {
  onFailure('Oh nooooo, something went wrong! Please try again.')
}

module.exports = {
  onSignupSuccess,
  onSignupFailure,
  onSigninSuccess,
  onSigninFailure,
  onChangePasswordFailure,
  onChangePasswordSuccess,
  onSignOutSuccess,
  onSignOutFailure
}
