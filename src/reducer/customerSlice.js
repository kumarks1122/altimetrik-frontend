import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCustomers = createAsyncThunk('customers/fetchCustomers', async () => {
  const response = await fetch('/customers');
  const data = await response.json();
  return data;
});

export const registerCustomer = createAsyncThunk('customers/registerCustomer', async (customerData) => {
  const response = await fetch('/customers/new', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(customerData),
  });
  const data = await response.json();
  return data;
});

const customerSlice = createSlice({
  name: 'customers',
  initialState: {
    data: [],
    policy: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: {
    [fetchCustomers.pending]: (state) => {
      state.status = 'loading';
    },
    [fetchCustomers.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.data = action.payload;
    },
    [fetchCustomers.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
    [registerCustomer.pending]: (state) => {
      state.status = 'loading';
    },
    [registerCustomer.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.data.push(action.payload);
    },
    [registerCustomer.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
  },
});

export default customerSlice.reducer;

export const selectCustomers = (state) => state.customers.data;
export const selectPolicy = (state) => state.customers.policy;
