const api = require('./api.js')
const ui = require('./ui.js')
const getFormField = require('../../../lib/get-form-fields')
const getSleepsTemplate = require('../templates/sleeps-listing.handlebars')
// const store = require('../store.js')
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
  // console.log(event.target.value)
  const formData = getFormField(form)

  api.createSleep(formData)
    .then(ui.createSleepSuccess)
    .catch(ui.failure)
}

const onDeleteSleep = event => {
  event.preventDefault()

  const sleepdata = $(event.target).data('id')
  api.deleteSleep(sleepdata)
    .then(function () {
      onGetSleeps(event)
    })
    .then($('.user-message').text('You deleted a sleep'))
    .catch(ui.failure)
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
    .catch(ui.failure)
}

const onShowAccountInfo = event => {
  $('.account-info').show()
  $('.account-info-btn').hide()
}

const onHideAccountInfo = event => {
  $('.account-info').hide()
  $('.account-info-btn').show()
}
// const sleepByDate = []
//
// const oneSleep = (formData, data) => {
//   if (formData === data.date) {
//     sleepByDate.push(sleepByDate)
//     console.log(sleepByDate)
//   }
// }
// want to show a nights sleep by
// let formData
// const data = ui.getOneSleepData
//
// const sleepByDate = []

const onShowSleep = event => {
  event.preventDefault()
  $('.clear-sleeps').show()
  const sleepdata = event.target
  const formData = getFormField(sleepdata)
  // console.log(formData)
  // const data = store.sleeps
  // console.log(data)

  const showSleep = sleep => {
    return sleep.date === formData.sleep.date
  }
  //

  api.getSleeps()
    .then((res) => {
      // console.log('api is making the request. formData is', formData)
      const results = res.sleeps.filter(showSleep)
      return results
    })
    .then((results) => {
      if (results.length !== 0) {
        const showSleepsHtml = getSleepsTemplate({ sleeps: results })
        $('.content').html(showSleepsHtml)
      } else if (results.length < 1) {
        $('.user-message').text('That date doesnt exsist!!')
      }
      // console.log('results  is', results)
    })
    .catch(ui.failure)
}
//
// const onAverageSleep = event => {
//   event.preventDefault()
//   const sleepdata = event.target
//   const formData = getFormField(sleepdata)
//   const data = store.sleeps
//   const avgSleep = sleep => {
//     return sleep.date === formData.sleep.date
//     }
// }

const addHandlers = event => {
  $('.get-sleeps').on('click', onGetSleeps)
  $('.create-sleep').on('submit', onCreateSleep)
  $('.content').on('click', '.delete', onDeleteSleep)
  $('.content').on('submit', '.update-sleep', onUpdateSleep)
  $('.account-info-btn').on('click', onShowAccountInfo)
  $('.account-info-hide').on('click', onHideAccountInfo)
  $('.clear-sleeps').on('click', onClearSleeps)
  $('.get-sleeps-bydate').on('submit', onShowSleep)
  // $('.avg-sleeps').on('submit', onAverageSleep)
}

module.exports = {
  addHandlers
}
