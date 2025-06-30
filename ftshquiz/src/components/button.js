import React from 'react';
import './button.css';

export default function Button({ label, onClick, type = 'neutral' }) {
  return (
    <button className={`btn btn-${type}`} onClick={onClick}>
      {label}
    </button>
  );
}
