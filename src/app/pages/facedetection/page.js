

// 'use client'
// import React, { useState } from 'react';
// import Webcam from 'react-webcam';

// const SkinColorAnalyzer = () => {
//   const [image, setImage] = useState(null);
//   const webcamRef = React.useRef(null);

//   const capture = React.useCallback(() => {
//     const imageSrc = webcamRef.current.getScreenshot();
//     setImage(imageSrc);
//   }, [webcamRef, setImage]);

//   const analyzeColor = () => {
//     if (!image) return;

//     const canvas = document.createElement('canvas');
//     const context = canvas.getContext('2d');

//     const img = new Image();
//     img.crossOrigin = 'Anonymous';
//     img.src = image;

//     img.onload = () => {
//       canvas.width = img.width;
//       canvas.height = img.height;
//       context.drawImage(img, 0, 0, img.width, img.height);

//       // Define skin color ranges
//       const skinColors = {
//         fair: { r: [200, 255], g: [150, 200], b: [100, 150] },
//         brown: { r: [150, 200], g: [100, 150], b: [50, 100] },
//         dark: { r: [100, 150], g: [50, 100], b: [20, 50] },
//         black: { r: [0, 100], g: [0, 100], b: [0, 100] }
//       };

//       // Get the RGB values of the center pixel
//       const pixelData = context.getImageData(img.width / 2, img.height / 2, 1, 1).data;
//       const [r, g, b] = pixelData;

//       // Check if the color matches any skin color range
//       let skinColor = 'None of these';
//       for (const color in skinColors) {
//         const { r: rRange, g: gRange, b: bRange } = skinColors[color];
//         if (r >= rRange[0] && r <= rRange[1] && g >= gRange[0] && g <= gRange[1] && b >= bRange[0] && b <= bRange[1]) {
//           skinColor = color;
//           break;
//         }
//       }

//       alert(`Skin color: ${skinColor}`);
//     };
//   };

//   return (
//     <div style={{position:'absolute',top:'30%',left:'50%',transform:'translate(-50%,-50%)'}} >
//       <Webcam
//         audio={false}
//         ref={webcamRef}
//         screenshotFormat="image/jpeg"
//         width={640}
//         height={480}
//         videoConstraints={{ facingMode: 'user' }}
//       />
//       <br />
//       <button style={{padding:'10px',fontWeight:'bold',borderRadius:'10px',fontSize:'18px',backgroundColor:'#D2B48C'}} onClick={capture}>Captureimg</button>
//       {image && <button style={{padding:'10px',fontWeight:'bold',borderRadius:'10px',fontSize:'18px',backgroundColor:'#F5EDDC',margin:'20px 0'}}   onClick={analyzeColor}>Analyze Color</button>}
//       {image && <img src={image} alt="Captured" />}

//     </div>
//   );
// };

// export default SkinColorAnalyzer;
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

      // Define skin color RGB values
      const skinColors = {
        'Fair/Light Skin': { r: 240, g: 217, b: 181 },
        'Medium Skin/Tan': { r: 210, g: 180, b: 140 },
        'Olive Skin': { r: 184, g: 151, b: 120 },
        'Brown Skin': { r: 139, g: 69, b: 19 },
        'Dark Skin': { r: 92, g: 58, b: 33 },
        'Black Skin': { r: 26, g: 26, b: 26 }
      };

      // Get the RGB values of the center pixel
      const pixelData = context.getImageData(img.width / 2, img.height / 2, 1, 1).data;
      const [r, g, b] = pixelData;

      // Compare with skin color RGB values
      let result = 'None of these';
      for (const color in skinColors) {
        const { r: targetR, g: targetG, b: targetB } = skinColors[color];
        if (r === targetR && g === targetG && b === targetB) {
          result = color;
          break;
        }
      }

      alert(`Skin color: ${result}`);
    };
  };

  return (
    <div style={{position:'absolute',top:'30%',left:'50%',transform:'translate(-50%,-50%)'}} >
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={640}
        height={480}
        videoConstraints={{ facingMode: 'user' }}
      />
      <br />
      <button style={{padding:'10px',fontWeight:'bold',borderRadius:'10px',fontSize:'18px',backgroundColor:'#D2B48C'}} onClick={capture}>ClickMe</button>
      {image && <button style={{padding:'10px',fontWeight:'bold',borderRadius:'10px',fontSize:'18px',backgroundColor:'#F5EDDC',margin:'20px '}}   onClick={analyzeColor}>Analyze Color</button>}
      {image && <img src={image} alt="Captured" />}
    </div>
  );
};

export default SkinColorAnalyzer;
