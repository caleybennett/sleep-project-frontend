'use strict'

const getSleepsTemplate = require('../templates/sleeps-listing.handlebars')
const events = require('./events')

const getSleepsSuccess = (data) => {
  console.log('get sleeps success is working!')
  console.log('data is:', data)
  const showSleepsHtml = getSleepsTemplate({ sleeps: data.sleeps })
  $('.content').html(showSleepsHtml)
  $('.get-sleeps').hide()
}

const createSleepSuccess = () => {
  $('.user-message').text('you logged your sleep')
  $('form').trigger('reset')
}

const clearSleeps = () => {
  $('.content').empty()
  $('.clear-sleeps').hide()
  $('.get-sleeps').show()
}

const updateSleep = () => {
  $('form').trigger('reset')
  $('.user-message').text('you updated your sleep')
}

const failure = () => {
  $('.content').text('yikes.. something went wrong')
}

let getOneSleepData

const getOneSleep = (data) => {
  data = getOneSleepData
  // console.log('get one success is working!')
  // console.log('data is:', data)
  // console.log('formData is', formData)
  //
  // if (formData === data.date) {
  //   const showSleepsHtml = getSleepsTemplate({ sleeps: data.sleeps })
  //   $('.content').html(showSleepsHtml)
  // }
}

module.exports = {
  getSleepsSuccess,
  createSleepSuccess,
  failure,
  clearSleeps,
  updateSleep,
  getOneSleep
}
