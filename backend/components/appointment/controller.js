const asyncHandler = require('express-async-handler');
const db = require('../../database/sequelize'); 
const Appointment = db.appoinment

const getAppointments = asyncHandler(async (req, res) => {
  const appointments = await Appointment.findAll();
  res.status(200).json(appointments);
})

const addAppointments = (asyncHandler(async (req, res) => {
  const newAppointment = req.body;
  await Appointment.create(newAppointment);
  res.status(201).send('Created successfully.');
}));

const getAppointmentsTicket = asyncHandler(async (req, res) => {
  const appointmentId = req.params.id;
  const appointment = await Appointment.findByPk(appointmentId);
  if (!appointment) {
    res.status(404).json('No record with given id: ' + appointmentId);
  } else {
    res.send(appointment);
  }
})

const deleteAppointments =  asyncHandler(async (req, res) => {
  const appointmentId = req.params.id;
  const affectedRows = await Appointment.destroy({ where: { id: appointmentId } });
  if (affectedRows === 0) {
    res.status(404).json('No record with given id: ' + appointmentId);
  } else {
    res.send('Deleted successfully.');
  }
});
  const editAppointments = asyncHandler(async (req, res) => {
  const appointmentId = req.params.id;
  const updatedAppointment = req.body;
  const [affectedRows] = await Appointment.update(updatedAppointment, { where: { id: appointmentId } });
  if (affectedRows === 0) {
    res.status(404).json('No record with given id: ' + appointmentId);
  } else {
    res.send('Updated successfully.');
  }
});

const updateIsConfirm = asyncHandler(async (req, res) => {
  const appointmentId = req.params.id;

  const appointment = await Appointment.findByPk(appointmentId);

  if (!appointment) {
    res.status(404).json('No record with given id: ' + appointmentId);
  } else {
    appointment.isConfirm = true;
    await appointment.save();

    res.send('isConfirm status updated successfully.');
  }
});

module.exports = {
    getAppointments,
    getAppointments,
    getAppointmentsTicket,
    deleteAppointments,
    addAppointments,
    editAppointments,
    updateIsConfirm,
}

