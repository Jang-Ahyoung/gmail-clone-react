import { createSlice } from '@reduxjs/toolkit';

export const mailSlice = createSlice({
  name: 'mail',
  initialState: {
    sendMessageIsOpen: false,
  },
  reducers: {
    openMessageIsOpen: state => {
      state.sendMessageIsOpen = true;
    },
    closeMessageIsOpen: state => {
      state.sendMessageIsOpen = false;
    },
  },
});

export const { openMessageIsOpen, closeMessageIsOpen } = mailSlice.actions;

export const selectsendMessageIsOpen = state => state.mail.sendMessageIsOpen;

export default mailSlice.reducer;
