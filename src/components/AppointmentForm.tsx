import React, { useState } from 'react';
import { firestoreService } from '../services/firestore';

export const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    doctorId: '',
    dateTime: '',
    symptoms: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await firestoreService.createAppointment({
        ...formData,
        patientId: 'current-user-id', // You'll get this from auth
        status: 'pending',
        dateTime: new Date(formData.dateTime)
      });
      alert('Appointment booked successfully!');
    } catch (error) {
      console.error('Error booking appointment:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium">Select Doctor</label>
        <select
          value={formData.doctorId}
          onChange={(e) => setFormData({...formData, doctorId: e.target.value})}
          className="mt-1 block w-full rounded-md border-gray-300"
          required
        >
          <option value="">Select a doctor</option>
          {/* You'll populate this with doctors from Firestore */}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium">Date & Time</label>
        <input
          type="datetime-local"
          value={formData.dateTime}
          onChange={(e) => setFormData({...formData, dateTime: e.target.value})}
          className="mt-1 block w-full rounded-md border-gray-300"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Symptoms</label>
        <textarea
          value={formData.symptoms}
          onChange={(e) => setFormData({...formData, symptoms: e.target.value})}
          className="mt-1 block w-full rounded-md border-gray-300"
          rows={3}
        />
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        Book Appointment
      </button>
    </form>
  );
}; 