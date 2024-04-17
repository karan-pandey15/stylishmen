'use client'
import React, { useState, useRef, useEffect } from 'react';
import * as faceapi from 'face-api.js';
import './Facedetection.css';

const FaceScanner = () => {
  const videoRef = useRef(null);
  const [skinColor, setSkinColor] = useState(null);
  const [timer, setTimer] = useState(10); // Initial timer value: 10 seconds
  const [errorMessage, setErrorMessage] = useState('');

  const openCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: {} });
      videoRef.current.srcObject = stream;
      await videoRef.current.play();
      startTimer(); // Start the countdown timer
    } catch (err) {
      console.error('Error accessing camera:', err);
    }
  };

  const startTimer = () => {
    const intervalId = setInterval(() => {
      setTimer(prevTimer => {
        if (prevTimer === 0) {
          clearInterval(intervalId); // Stop the timer when it reaches 0
          detectFace(); // Trigger face detection after the timer finishes
        }
        return prevTimer - 1;
      });
    }, 1000); // Update the timer every second
  };

  const detectFace = async () => {
    try {
      await faceapi.nets.tinyFaceDetector.loadFromUri('https://cdn.jsdelivr.net/npm/face-api.js@0.23.1/models');
      await faceapi.nets.faceLandmark68Net.loadFromUri('https://cdn.jsdelivr.net/npm/face-api.js@0.23.1/models');
      await faceapi.nets.faceRecognitionNet.loadFromUri('https://cdn.jsdelivr.net/npm/face-api.js@0.23.1/models');
      await faceapi.nets.faceExpressionNet.loadFromUri('https://cdn.jsdelivr.net/npm/face-api.js@0.23.1/models');

      const videoEl = videoRef.current;
      const detections = await faceapi.detectAllFaces(videoEl, new faceapi.TinyFaceDetectorOptions());

      if (detections.length > 0) {
        setSkinColor('Face Detected');
      } else {
        setErrorMessage('Sorry, I am not able to detect your face.');
      }
    } catch (error) {
      console.error('Error detecting face:', error);
      setErrorMessage('Sorry, there was an error detecting your face.');
    }
  };

  useEffect(() => {
    if (timer === 0) {
      clearInterval(timer);
      if (!skinColor && !errorMessage) {
        setErrorMessage('Sorry, I am not able to detect your face.');
      }
    }
  }, [timer, skinColor, errorMessage]);

  return (
    <div>
      <button onClick={openCamera} style={{ backgroundColor: 'gray', color: 'white', textAlign: 'center', padding: '10px', border: '2px solid black' }}>Open Camera</button>
      <video ref={videoRef} width="640" height="480" autoPlay muted></video>
      <div className="timer">Timer: {timer}</div>
      {skinColor && !errorMessage && <p>{skinColor}</p>}
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
};

export default FaceScanner;
