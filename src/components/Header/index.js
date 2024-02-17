import React from 'react';

export default function Header({ companyName, userName }) {
  return (
    <header>
      <h1>{companyName}</h1>
      <p>Welcome, {userName}</p>
    </header>
  );
}
