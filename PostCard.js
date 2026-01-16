import React from 'react';
import './PostCard.css';

export default function PostCard({ title, body }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p className="body">{body}</p>
    </div>
  );
}
