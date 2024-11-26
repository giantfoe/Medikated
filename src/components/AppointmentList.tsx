import React, { useEffect, useState } from 'react';
import { firestoreService } from '../services/firestore';
import { Appointment } from '../types/models';

export const AppointmentList = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  useEffect(() => {
    const loadAppointments = async () => {
      const patientId = 'current-user-id'; // You'll get this from auth
      const data = await firestoreService.getPatientAppointments(patientId);
      setAppointments(data);
    };

    loadAppointments();
  }, []);

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Your Appointments</h2>
      {appointments.map(appointment => (
        <div 
          key={appointment.id} 
          className="p-4 border rounded-md shadow-sm"
        >
          <p>Date: {appointment.dateTime.toLocaleString()}</p>
          <p>Status: {appointment.status}</p>
          {appointment.symptoms && <p>Symptoms: {appointment.symptoms}</p>}
        </div>
      ))}
    </div>
  );
}; 