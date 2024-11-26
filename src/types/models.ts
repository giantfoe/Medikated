export interface Doctor {
    id: string;
    name: string;
    specialization: string;
    availability: {
      [key: string]: TimeSlot[]; // days of week
    };
    rating?: number;
    consultationFee: number;
  }
  
  export interface Patient {
    id: string;
    name: string;
    email: string;
    phone: string;
    medicalHistory?: string[];
  }
  
  export interface Appointment {
    id: string;
    doctorId: string;
    patientId: string;
    dateTime: Date;
    status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
    symptoms?: string;
    notes?: string;
  }