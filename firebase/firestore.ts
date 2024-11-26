import firestore from '@react-native-firebase/firestore';

export interface Appointment {
  id: string;
  doctorName: string;
  appointmentType: string;
  datetime: Date;
  status: 'upcoming' | 'completed' | 'cancelled';
}

export interface Medication {
  id: string;
  name: string;
  dosage: string;
  instructions: string;
  schedule: {
    time: string;
    taken: boolean;
  }[];
}

export const fetchUpcomingAppointments = async (userId: string) => {
  const snapshot = await firestore()
    .collection('appointments')
    .where('userId', '==', userId)
    .where('status', '==', 'upcoming')
    .orderBy('datetime')
    .limit(5)
    .get();

  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  })) as Appointment[];
};

export const fetchTodaysMedications = async (userId: string) => {
  const snapshot = await firestore()
    .collection('medications')
    .where('userId', '==', userId)
    .where('active', '==', true)
    .get();

  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  })) as Medication[];
}; 