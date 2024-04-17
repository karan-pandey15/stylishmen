// 'use client';
// import React, { useState, useRef, useEffect } from 'react';
// import * as faceapi from 'face-api.js';
// import './Facedetection.css';

// const FaceScanner = () => {
//   const videoRef = useRef(null);
//   const [isLoaded, setIsLoaded] = useState(false);
//   const [isDetecting, setIsDetecting] = useState(false);
//   const [errorMessage, setErrorMessage] = useState('');

//   useEffect(() => {
//     const loadModels = async () => {
//       try {
//         await faceapi.nets.tinyFaceDetector.loadFromUri('https://cdn.jsdelivr.net/npm/face-api.js@0.23.1/models');
//         await faceapi.nets.faceLandmark68Net.loadFromUri('https://cdn.jsdelivr.net/npm/face-api.js@0.23.1/models');
//         await faceapi.nets.faceRecognitionNet.loadFromUri('https://cdn.jsdelivr.net/npm/face-api.js@0.23.1/models');
//         await faceapi.nets.faceExpressionNet.loadFromUri('https://cdn.jsdelivr.net/npm/face-api.js@0.23.1/models');
//         setIsLoaded(true);
//       } catch (error) {
//         console.error('Error loading models:', error);
//         setErrorMessage('Error loading face detection models.');
//       }
//     };

//     loadModels();
//   }, []);

//   // Rest of the code for camera opening and face detection...

//   return (
//     <div>
//       {errorMessage && <p>{errorMessage}</p>}
//       {/* Render camera and button only if models are loaded */}
//       {isLoaded && !isDetecting && (
//         <button onClick={handleOpenCamera} style={{ backgroundColor: 'gray', color: 'white', textAlign: 'center', padding: '10px', border: '2px solid black' }}>
//           Open Camera
//         </button>
//       )}
//       <video ref={videoRef} width="640" height="480" autoPlay muted></video>
//     </div>
//   );
// };
// export default FaceScanner;

'use client'
import React, { useState, useRef } from 'react';

const SkinColorDetector = () => {
  const [result, setResult] = useState(null);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  
  const handleScan = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;
      videoRef.current.play(); // Play the video
      detectSkinColor(); // Call detectSkinColor function after the stream starts
    } catch (error) {
      console.error('Error accessing camera:', error);
    }
  };

  const detectSkinColor = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const width = video.videoWidth;
    const height = video.videoHeight;

    canvas.width = width;
    canvas.height = height;

    ctx.drawImage(video, 0, 0, width, height);

    const imageData = ctx.getImageData(0, 0, width, height);
    const data = imageData.data;

    let redSum = 0;
    let greenSum = 0;
    let blueSum = 0;
    let totalPixels = 0;

    for (let i = 0; i < data.length; i += 4) {
      const red = data[i];
      const green = data[i + 1];
      const blue = data[i + 2];
      const alpha = data[i + 3];

      // Skip transparent pixels
      if (alpha === 0) continue;

      redSum += red;
      greenSum += green;
      blueSum += blue;
      totalPixels++;
    }

    const avgRed = redSum / totalPixels;
    const avgGreen = greenSum / totalPixels;
    const avgBlue = blueSum / totalPixels;

    const avgColor = `rgb(${avgRed.toFixed(0)}, ${avgGreen.toFixed(0)}, ${avgBlue.toFixed(0)})`;
    setResult(avgColor);
  };

  return (
    <div>
      <h1>Skin Color Detector</h1>
      <button onClick={handleScan}>Open Camera</button>
      <video ref={videoRef} autoPlay style={{ display: 'none' }}></video>
      <canvas ref={canvasRef} style={{ display: 'none' }}></canvas>
      {result && (
        <div>
          <h2>Result:</h2>
          <p>Your skin color is: {result}</p>
        </div>
      )}
    </div>
  );
};

export default SkinColorDetector;
