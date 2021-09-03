import * as contactAPI from 'services/contact-api';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchContacts = createAsyncThunk(
  'contact/fetchContacts',
  async () => {
    const contacts = await contactAPI.fetchContacts();
    return contacts;
  }
)

export const addContact = createAsyncThunk(
  'contact/addContact',
  async (data) => {
    const contacts = await contactAPI.addContacts(data);
    return contacts;
  }
)

export const deleteContact = createAsyncThunk(
  'contact/deleteContact',
  async (contactId) => {
    await contactAPI.deleteContact(contactId);
    return contactId;
  }
)