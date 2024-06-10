// import { create } from 'zustand';

// export type UserDetails = {
//   name: string;
//   age: number | null;
//   gender: string;
//   email: string;
//   address: string;
//   job: string;
//   ownDiagnosis: string[];
//   healthBarriers: string[]
// }

// type MedicalHistoryEntry = {
//   history: string[];
// }

// type MedicationStatus = {
//   status: string;
// }

// type StoreState = {
//   userDetails: UserDetails;
//   medicalHistory: MedicalHistoryEntry[];
//   medicationStatus: MedicationStatus[];
// }

// export const useStore = createStore<UserDetails>((set) => ({
//   // userDetails: {
//     name: "Ali AL-Kahatni",
//     age: null,
//     gender: 'M',
//     email: '',
//     address: 'Riyadh',
//     job: 'Accountant',
//     ownDiagnosis: ['Influenza', 'Gastroenteritis', 'Eczema'],
//     healthBarriers: ['fear of insulin', 'fear of insulin']
  // },
  // medicalHistory: [],
  // medicationStatus: [],
// }));

// export default useStore;

import { createStore } from 'zustand/vanilla'

type MedicationState = {
  name: string,
  status: string,
  dosage: string,
  frequency: string,
  physician: string,
  startDate: string,
  endDate: string
}

type MedicalHistory = {
  name: string,
  description: string,
}

export type UserState = {
  name: string;
  age: number | null;
  gender: string;
  email: string;
  phone: string
  address: string;
  job: string;
  ownDiagnosis: string[];
  healthBarriers: string[];
  medication: MedicationState[];
  medicalHistory: MedicalHistory[]
  }


export type UserStore = UserState

const medication = {
    name: 'medication name',
    status: 'Active',
    dosage: '25 mg',
    frequency: 'Once Daily',
    physician: 'Dr. Johnson',
    startDate: '3/10/2024',
    endDate: '7/12/2024'
}

const medicalHistory = {name:'Chronic Disease', description:'Diabetes, Hybertension, Asthma, Neurological Disorder'}

export const initUserStore = (): UserState => {
  return { 
    name: 'Ali AL-Kahatni',
    age: 38,
    gender: 'M',
    email: 'michelle.rivera@example.com',
    phone: '(239) 555-0108',
    address: 'Riyadh',
    job: 'Accountant',
    ownDiagnosis: ['Influenza', 'Gastroenteritis', 'Eczema'],
    healthBarriers: ['fear of insulin'],
    medication: [medication],
    medicalHistory: [medicalHistory]
   }
}

export const defaultInitState: UserState = {
  name: "",
  age: null,
  gender: '',
  phone: '',
  email: '',
  address: '',
  job: '',
  ownDiagnosis: [],
  healthBarriers: [],
  medication: [],
  medicalHistory: []
}

export const createUserStore = (
  initState: UserState = defaultInitState,
) => {
  return createStore<UserStore>()((set) => ({
    ...initState
  }))
}