'use strict'
const authEvents = require('./authAPI/events.js')
const sleepEvents = require('./sleepAPI/events.js')
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  authEvents.addHandlers()
  sleepEvents.addHandlers()

  // your JS code goes here
})
