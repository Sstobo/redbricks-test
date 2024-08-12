import { create } from 'zustand'

export const useStore = create((set) => ({
  formSubmissionList: [],
  setFormSubmissionList: (formSubmissionList) => set({ formSubmissionList })    
}))