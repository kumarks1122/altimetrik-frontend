// CustomerTable.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCustomers, selectCustomers } from '../../reducer/customerSlice';

function CustomerTable() {
  const dispatch = useDispatch();
  const customers = useSelector(selectCustomers);

  useEffect(() => {
    dispatch(fetchCustomers());
  }, [dispatch]);

  return (
    <div>
      <h2>Customer List</h2>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th>Name</th>
            <th>DOB</th>
            <th>Email</th>
            <th>Adhar Number</th>
            <th>Registration Date</th>
            <th>Assigned Mobile Number</th>
          </tr>
        </thead>
        <tbody>
          {customers.map(customer => (
            <tr key={customer.id}>
              <td>{customer.name}</td>
              <td>{customer.DOB}</td>
              <td>{customer.email}</td>
              <td>{customer.adhar_number}</td>
              <td>{customer.registration_date}</td>
              <td>{customer.assigned_mobile_number}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const tableStyle = {
  borderCollapse: 'collapse',
  width: '100%',
};

export default CustomerTable;
