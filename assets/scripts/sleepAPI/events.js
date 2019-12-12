const api = require('./api.js')
const ui = require('./ui.js')
const getFormField = require('../../../lib/get-form-fields')
// example from auth api
// const onSignUp = function (event) {
//   event.preventDefault()
//   const form = event.target
//   const formData = getFormField(form)
//
//   api.signUp(formData)
//     .then(ui.onSignupSuccess)
//     .catch(ui.onSignupFailure)
// }
// a function to get all the sleeps
const onGetSleeps = event => {
  event.preventDefault()

  api.getSleeps()
    .then(ui.getSleepsSuccess)
    .catch(ui.failure)
}

const onCreateSleep = event => {
  event.preventDefault()
  console.log('the button works!')

  const form = event.target
  console.log(event.target.value)
  const formData = getFormField(form)

  api.createSleep(formData)
    .then(ui.createSleepSuccess)
    .catch(ui.failure)
}

const onDeleteSleep = event => {
  event.preventDefault()

  const sleepdata = $(event.target).data('id')
  console.log(sleepdata)
  api.deleteSleep(sleepdata)
    .then(function (sleepdata) {
      onGetSleeps(event)
    })
}

const onUpdateSleep = event => {
  event.preventDefault()

  const sleepdata = event.target
  const formData = getFormField(sleepdata)
  const sleepid = $(event.target).data('id')
  console.log('sleep data is ', sleepdata)
  console.log('sleepid is ', sleepid)
  console.log('form data is ', formData)
  api.updateSleep(formData, sleepid)
    .then(function (sleepdata) {
      onGetSleeps(event)
    })
    .catch(console.error)
}

const addHandlers = event => {
  $('.get-sleeps').on('click', onGetSleeps)
  $('.create-sleep').on('submit', onCreateSleep)
  $('.content').on('click', '.delete', onDeleteSleep)
  $('.content').on('submit', '.update-sleep', onUpdateSleep)
}

module.exports = {
  addHandlers
}
