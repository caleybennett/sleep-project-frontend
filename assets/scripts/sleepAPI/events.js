const api = require('./api.js')
const ui = require('./ui.js')
const getFormField = require('../../../lib/get-form-fields')
const getSleepsTemplate = require('../templates/sleeps-listing.handlebars')
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
  $('.clear-sleeps').show()
  api.getSleeps()
    .then(ui.getSleepsSuccess)
    .catch(ui.failure)
}

const onClearSleeps = (event) => {
  event.preventDefault()
  ui.clearSleeps()
}

const onCreateSleep = event => {
  event.preventDefault()

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
  api.updateSleep(formData, sleepid)
    .then(function (sleepdata) {
      onGetSleeps(event)
    })
    .then(ui.updateSleep)
    .catch(console.error)
}

const onShowAccountInfo = event => {
  $('.account-info').show()
  $('.account-info-btn').hide()
}

const onHideAccountInfo = event => {
  $('.account-info').hide()
  $('.account-info-btn').show()
}
const sleepByDate = []

const oneSleep = (formData, data) => {
  if (formData === data.date) {
    sleepByDate.push(sleepByDate)
    console.log(sleepByDate)
  }
}
// want to show a nights sleep by
let formData
const data = ui.getOneSleepData

const onShowSleep = event => {
  event.preventDefault()

  const sleepdata = event.target
  formData = getFormField(sleepdata)

  console.log(data)

  // console.log('get one success is working!')
  // console.log('data is:', data)
  // console.log('formData is', formData)
  //
  // if (formData === data.date) {
  //   const showSleepsHtml = getSleepsTemplate({ sleeps: data.sleeps })
  //   $('.content').html(showSleepsHtml)
  // }
  // make a get request to the api to get all the sleeps
  api.getSleeps()
    .then(ui.getOneSleep)
    .then(console.log('get sleeps works'))
    .then(oneSleep(formData, data))
    .catch(ui.failure)
  // console.log(formData)
  console.log(sleepByDate)
}

const addHandlers = event => {
  $('.get-sleeps').on('click', onGetSleeps)
  $('.create-sleep').on('submit', onCreateSleep)
  $('.content').on('click', '.delete', onDeleteSleep)
  $('.content').on('submit', '.update-sleep', onUpdateSleep)
  $('.account-info-btn').on('click', onShowAccountInfo)
  $('.account-info-hide').on('click', onHideAccountInfo)
  $('.clear-sleeps').on('click', onClearSleeps)
  $('.get-sleeps-bydate').on('submit', onShowSleep)
}

module.exports = {
  addHandlers,
  formData
}
