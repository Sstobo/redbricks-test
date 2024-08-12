import { create } from 'zustand'

const useStore = create((set) => ({
  formSubmissionList: [],
  setFormSubmissionList: (formSubmissionList) => set({ formSubmissionList })    
}))