const api = require('./api.js')
const ui = require('./ui.js')
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
  console.log('on get sleeps is running')

  api.getSleeps()
    .then(console.log('get sleep api is running'))
    .then(ui.getSleepsSuccess)
    .catch(ui.getSleepsFailure)
}

const addHandlers = event => {
  $('.get-sleeps').on('click', onGetSleeps)
}

module.exports = {
  addHandlers
}
