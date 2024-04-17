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
import React, { useState } from 'react';
import Webcam from 'react-webcam';

const SkinColorAnalyzer = () => {
  const [image, setImage] = useState(null);
  const webcamRef = React.useRef(null);

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImage(imageSrc);
  }, [webcamRef, setImage]);

  const analyzeColor = () => {
    if (!image) return;

    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');

    const img = new Image();
    img.crossOrigin = 'Anonymous';
    img.src = image;

    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      context.drawImage(img, 0, 0, img.width, img.height);

      // Get the RGB values of the center pixel
      const pixelData = context.getImageData(img.width / 2, img.height / 2, 1, 1).data;
      const [r, g, b] = pixelData;

      // Check skin color based on RGB values
      if (r >= 200 && g >= 150 && b >= 100) {
        alert('Skin color: Fair');
      } else if (r >= 150 && g >= 100 && b >= 50) {
        alert('Skin color: Brown');
      } else if (r >= 100 && g >= 50 && b >= 20) {
        alert('Skin color: Dark');
      } else if (r < 100 && g < 100 && b < 100) {
        alert('Skin color: Black');
      } else {
        alert('Skin color: None of these');
      }
    };
  };

  return (
    <div>
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={640}
        height={480}
        videoConstraints={{ facingMode: 'user' }}
      />
      <br />
      <button style={{border:'2px solid red'}} onClick={capture}>Capture</button>
      {image && <button onClick={analyzeColor}>Analyze Color</button>}
      {image && <img src={image} alt="Captured" />}
    </div>
  );
};

export default SkinColorAnalyzer;
