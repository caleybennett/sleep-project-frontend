'use strict'

const getSleepsTemplate = require('../templates/sleeps-listing.handlebars')

const getSleepsSuccess = (data) => {
  console.log('get sleeps success is working!')
  console.log('data is:', data)
  const showSleepsHtml = getSleepsTemplate({ sleeps: data.sleeps })
  $('.content').html(showSleepsHtml)
}

const getSleepsFailure = () => {
  console.log('yikes something went wrong')
}
module.exports = {
  getSleepsSuccess,
  getSleepsFailure
}
