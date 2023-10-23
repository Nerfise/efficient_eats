
const express  = require('express')
const { 
  addAppointments, 
  getAppointments, 
  deleteAppointments, 
  editAppointments, 
  getAppointmentsTicket,
  updateIsConfirm, 
} = require('./controller')

const router = express.Router()

router.route('/').get(getAppointments).post(addAppointments)

router.route('/:id').delete(deleteAppointments).put(editAppointments).get(getAppointmentsTicket).get(getAppointments)

router.put('/:id/confirm', updateIsConfirm);

module.exports = router
