'use strict';

require('../configure.js')

const Response = require('../robot/response')

module.exports.morning = (event, context, callback) => {
  const response = new Response(process.env.SCHEDULE_POST_CHANNEL)
  response.send(__('schedules.morning.message'))
}
