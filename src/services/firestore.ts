import { db } from '../config/firebase';
import { 
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
  query,
  where
} from 'firebase/firestore';

export const firestoreService = {
  // Doctors
  async addDoctor(doctorData: Omit<Doctor, 'id'>) {
    const docRef = await addDoc(collection(db, 'doctors'), doctorData);
    return docRef.id;
  },

  async getDoctors() {
    const querySnapshot = await getDocs(collection(db, 'doctors'));
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  },

  // Appointments
  async createAppointment(appointmentData: Omit<Appointment, 'id'>) {
    return addDoc(collection(db, 'appointments'), appointmentData);
  },

  async getPatientAppointments(patientId: string) {
    const q = query(
      collection(db, 'appointments'),
      where('patientId', '==', patientId)
    );
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  }
};