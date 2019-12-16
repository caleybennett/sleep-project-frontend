'use strict'

const getSleepsTemplate = require('../templates/sleeps-listing.handlebars')
// const store = require('../store.js')

// .then((results) => {
//   if (results.length !== 0) {
//     const showSleepsHtml = getSleepsTemplate({ sleeps: results })
//     $('.content').html(showSleepsHtml)
//   } else if (results.length < 1) {
//     $('.user-message').text('That date doesnt exsist!!')
//   }

const getSleepsSuccess = (data) => {
//  console.log('get sleeps success is working!')
  // console.log('data is:', data)
  // const showSleepsHtml = getSleepsTemplate({ sleeps: data.sleeps })
  if (data.sleeps.length !== 0) {
    const showSleepsHtml = getSleepsTemplate({ sleeps: data.sleeps })
    //    console.log('sleeps is not empty')
    $('.content').html(showSleepsHtml)
    $('.get-sleeps').hide()
    $('.content').show()
  } else if (data.sleeps.length < 1) {
    // console.log('sleeps is empty')
    $('.user-message').text('No recorded sleeps, please enter a sleep!')
    $('.content').hide()
    $('.clear-sleeps').hide()
    $('.get-sleeps').show()
  }
  // $('.content').html(showSleepsHtml)
  //
  // store.sleeps = data.sleeps
  // console.log('store.sleep is', store.sleeps)
  // console.log('data.sleep is', data.sleeps)
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
  $('.user-message').text('yikes.. something went wrong')
}

// let getOneSleepData
//
// const getOneSleep = (data) => {
//   data = getOneSleepData
//   // console.log('get one success is working!')
//   // console.log('data is:', data)
//   // console.log('formData is', formData)
//   //
//   // if (formData === data.date) {
//   //   const showSleepsHtml = getSleepsTemplate({ sleeps: data.sleeps })
//   //   $('.content').html(showSleepsHtml)
//   // }
// }

module.exports = {
  getSleepsSuccess,
  createSleepSuccess,
  failure,
  clearSleeps,
  updateSleep
  // getOneSleep
}
