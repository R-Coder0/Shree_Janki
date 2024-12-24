import React from 'react';
import './Modal.css'; // Make sure to create corresponding CSS for styling

const Modal = ({ post, closeModal }) => {
  // Check if `post` is defined and contains the required properties
  if (!post || !post.title || !post.image || !post.content) {
    return null; // Return nothing if `post` is not properly defined
  }

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>{post.title}</h2>
        <img src={post.image} alt={post.title} style={{ width: '100%', height: 'auto' }} />
        <p>{post.content}</p>
        <button onClick={closeModal}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
