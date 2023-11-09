// src/Gallery.js
import React, { useState, useEffect } from 'react';
import './Gallery.css';

function Gallery() {
  const [percentage, setPercentage] = useState(0);
  const [mouseDownAt, setMouseDownAt] = useState(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (mouseDownAt === null) return;

      const mouseDelta = mouseDownAt - e.clientX;
      const maxDelta = window.innerWidth / 2;
      const scrollSpeed = 0.02; // Adjust this factor to control scroll speed
      const nextPercentageUnconstrained = percentage + (mouseDelta / maxDelta) * 100 * scrollSpeed;
      const nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);

      setPercentage(nextPercentage);
    };

    const handleMouseUp = () => {
      setMouseDownAt(null);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [mouseDownAt, percentage]);

  const handleMouseDown = (e) => {
    setMouseDownAt(e.clientX);
  };
  const imageStyle = {
    objectPosition: `${100 + percentage}% center`,
    transition: 'object-position 1.2s forwards',
  };

  return (
    <div
      className="image-track"
      onMouseDown={handleMouseDown}
      style={{ transform: `translate(${percentage}%, -50%)` }}
    >
      <img
        className="image"
        src="https://images.unsplash.com/photo-1524781289445-ddf8f5695861?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        alt=""
        draggable="false"
        style = {imageStyle}
      />
      <img
        className="image"
        src="https://images.unsplash.com/photo-1524781289445-ddf8f5695861?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        alt=""
        draggable="false"
        style = {imageStyle}
      />
      <img
        className="image"
        src="https://images.unsplash.com/photo-1524781289445-ddf8f5695861?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        alt=""
        draggable="false"
        style = {imageStyle}
      />
      <img
        className="image"
        src="https://images.unsplash.com/photo-1524781289445-ddf8f5695861?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        alt=""
        draggable="false"
        style = {imageStyle}
      />
      <img
        className="image"
        src="https://images.unsplash.com/photo-1524781289445-ddf8f5695861?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        alt=""
        draggable="false"
        style = {imageStyle}
      />
      <img
        className="image"
        src="https://images.unsplash.com/photo-1524781289445-ddf8f5695861?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        alt=""
        draggable="false"
        style = {imageStyle}
      />
      
    </div>
  );
}

export default Gallery;
