import React, { useState, useEffect } from 'react';

const MatrixLoader = () => {
  const [loadingText, setLoadingText] = useState('LOADING');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + Math.random() * 3;
      });
    }, 100);

    // Animate loading text
    const textStates = ['LOADING', 'LOADING.', 'LOADING..', 'LOADING...'];
    let textIndex = 0;
    const textInterval = setInterval(() => {
      setLoadingText(textStates[textIndex % textStates.length]);
      textIndex++;
    }, 500);

    return () => {
      clearInterval(progressInterval);
      clearInterval(textInterval);
    };
  }, []);

  const generateMatrixColumns = () => {
    const columns = [];
    for (let i = 0; i < 40; i++) {
      columns.push(<div key={i} className="matrix-column" />);
    }
    return columns;
  };

  return (
    <div className="matrix-container">
      <div className="loader-overlay">
        <h1 className="loader-title">INITIALIZING</h1>
        <p className="loader-subtitle">{loadingText}</p>
        <div className="progress-container">
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ width: `${Math.min(progress, 100)}%` }}
            />
          </div>
          <span className="progress-text">{Math.floor(Math.min(progress, 100))}%</span>
        </div>
      </div>
      
      {/* Matrix Rain Effect */}
      {[...Array(6)].map((_, patternIndex) => (
        <div key={patternIndex} className="matrix-pattern">
          {generateMatrixColumns()}
        </div>
      ))}

      <style jsx>{`
        .matrix-container {
          position: relative;
          width: 100vw;
          height: 100vh;
          background: #000;
          display: flex;
          overflow: hidden;
        }

        .loader-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          z-index: 10;
          pointer-events: none;
        }

        .loader-title {
          font-family: 'Courier New', monospace;
          font-size: 4rem;
          font-weight: bold;
          color: #00ff41;
          text-shadow: 
            0 0 5px #00ff41,
            0 0 10px #00ff41,
            0 0 20px #00ff41,
            0 0 40px #00ff41;
          margin: 0;
          letter-spacing: 0.1em;
          animation: glitch 2s infinite;
        }

        .loader-subtitle {
          font-family: 'Courier New', monospace;
          font-size: 1.2rem;
          color: #ffffff;
          margin: 1rem 0;
          letter-spacing: 0.2em;
          text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
          animation: flicker 3s infinite alternate;
          min-width: 120px;
          text-align: center;
        }

        .progress-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 2rem;
        }

        .progress-bar {
          width: 300px;
          height: 4px;
          background: rgba(0, 255, 65, 0.2);
          border-radius: 2px;
          overflow: hidden;
          border: 1px solid #00ff41;
          box-shadow: 0 0 10px rgba(0, 255, 65, 0.3);
        }

        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #00ff41, #00dd33, #00ff41);
          background-size: 200% 100%;
          animation: progressGlow 1.5s ease-in-out infinite;
          transition: width 0.3s ease;
        }

        .progress-text {
          font-family: 'Courier New', monospace;
          color: #00ff41;
          font-size: 0.9rem;
          margin-top: 0.5rem;
          text-shadow: 0 0 5px #00ff41;
          letter-spacing: 0.1em;
        }

        @keyframes progressGlow {
          0%, 100% {
            background-position: 0% 50%;
            box-shadow: 0 0 5px #00ff41;
          }
          50% {
            background-position: 100% 50%;
            box-shadow: 0 0 15px #00ff41;
          }
        }

        @keyframes glitch {
          0%, 90%, 100% {
            transform: translateX(0);
          }
          20% {
            transform: translateX(-2px);
          }
          40% {
            transform: translateX(2px);
          }
          60% {
            transform: translateX(-1px);
          }
          80% {
            transform: translateX(1px);
          }
        }

        @keyframes flicker {
          0%, 50%, 100% {
            opacity: 1;
          }
          25%, 75% {
            opacity: 0.8;
          }
        }

        .matrix-pattern {
          position: relative;
          width: 1000px;
          height: 100%;
          flex-shrink: 0;
        }

        .matrix-column {
          position: absolute;
          top: -100%;
          width: 20px;
          height: 100%;
          font-size: 16px;
          line-height: 18px;
          font-weight: bold;
          animation: fall linear infinite;
          white-space: nowrap;
        }

        .matrix-column::before {
          content: "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲンABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
          position: absolute;
          top: 0;
          left: 0;
          background: linear-gradient(
            to bottom,
            #ffffff 0%,
            #ffffff 5%,
            #00ff41 10%,
            #00ff41 20%,
            #00dd33 30%,
            #00bb22 40%,
            #009911 50%,
            #007700 60%,
            #005500 70%,
            #003300 80%,
            rgba(0, 255, 65, 0.5) 90%,
            transparent 100%
          );
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          writing-mode: vertical-lr;
          letter-spacing: 1px;
          text-rendering: optimizeLegibility;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        .matrix-column:nth-child(1) {
          left: 0px;
          animation-delay: -2.5s;
          animation-duration: 3s;
        }
        .matrix-column:nth-child(2) {
          left: 25px;
          animation-delay: -3.2s;
          animation-duration: 4s;
        }
        .matrix-column:nth-child(3) {
          left: 50px;
          animation-delay: -1.8s;
          animation-duration: 2.5s;
        }
        .matrix-column:nth-child(4) {
          left: 75px;
          animation-delay: -2.9s;
          animation-duration: 3.5s;
        }
        .matrix-column:nth-child(5) {
          left: 100px;
          animation-delay: -1.5s;
          animation-duration: 3s;
        }
        .matrix-column:nth-child(6) {
          left: 125px;
          animation-delay: -3.8s;
          animation-duration: 4.5s;
        }
        .matrix-column:nth-child(7) {
          left: 150px;
          animation-delay: -2.1s;
          animation-duration: 2.8s;
        }
        .matrix-column:nth-child(8) {
          left: 175px;
          animation-delay: -2.7s;
          animation-duration: 3.2s;
        }
        .matrix-column:nth-child(9) {
          left: 200px;
          animation-delay: -3.4s;
          animation-duration: 3.8s;
        }
        .matrix-column:nth-child(10) {
          left: 225px;
          animation-delay: -1.9s;
          animation-duration: 2.7s;
        }
        .matrix-column:nth-child(11) {
          left: 250px;
          animation-delay: -3.6s;
          animation-duration: 4.2s;
        }
        .matrix-column:nth-child(12) {
          left: 275px;
          animation-delay: -2.3s;
          animation-duration: 3.1s;
        }
        .matrix-column:nth-child(13) {
          left: 300px;
          animation-delay: -3.1s;
          animation-duration: 3.6s;
        }
        .matrix-column:nth-child(14) {
          left: 325px;
          animation-delay: -2.6s;
          animation-duration: 2.9s;
        }
        .matrix-column:nth-child(15) {
          left: 350px;
          animation-delay: -3.7s;
          animation-duration: 4.1s;
        }
        .matrix-column:nth-child(16) {
          left: 375px;
          animation-delay: -2.8s;
          animation-duration: 3.3s;
        }
        .matrix-column:nth-child(17) {
          left: 400px;
          animation-delay: -3.3s;
          animation-duration: 3.7s;
        }
        .matrix-column:nth-child(18) {
          left: 425px;
          animation-delay: -2.2s;
          animation-duration: 2.6s;
        }
        .matrix-column:nth-child(19) {
          left: 450px;
          animation-delay: -3.9s;
          animation-duration: 4.3s;
        }
        .matrix-column:nth-child(20) {
          left: 475px;
          animation-delay: -2.4s;
          animation-duration: 3.4s;
        }
        .matrix-column:nth-child(21) {
          left: 500px;
          animation-delay: -1.7s;
          animation-duration: 2.4s;
        }
        .matrix-column:nth-child(22) {
          left: 525px;
          animation-delay: -3.5s;
          animation-duration: 3.9s;
        }
        .matrix-column:nth-child(23) {
          left: 550px;
          animation-delay: -2s;
          animation-duration: 3s;
        }
        .matrix-column:nth-child(24) {
          left: 575px;
          animation-delay: -4s;
          animation-duration: 4.4s;
        }
        .matrix-column:nth-child(25) {
          left: 600px;
          animation-delay: -1.6s;
          animation-duration: 2.3s;
        }
        .matrix-column:nth-child(26) {
          left: 625px;
          animation-delay: -3s;
          animation-duration: 3.5s;
        }
        .matrix-column:nth-child(27) {
          left: 650px;
          animation-delay: -3.8s;
          animation-duration: 4s;
        }
        .matrix-column:nth-child(28) {
          left: 675px;
          animation-delay: -2.5s;
          animation-duration: 2.8s;
        }
        .matrix-column:nth-child(29) {
          left: 700px;
          animation-delay: -3.2s;
          animation-duration: 3.6s;
        }
        .matrix-column:nth-child(30) {
          left: 725px;
          animation-delay: -2.7s;
          animation-duration: 3.2s;
        }
        .matrix-column:nth-child(31) {
          left: 750px;
          animation-delay: -1.8s;
          animation-duration: 2.7s;
        }
        .matrix-column:nth-child(32) {
          left: 775px;
          animation-delay: -3.6s;
          animation-duration: 4.1s;
        }
        .matrix-column:nth-child(33) {
          left: 800px;
          animation-delay: -2.1s;
          animation-duration: 3.1s;
        }
        .matrix-column:nth-child(34) {
          left: 825px;
          animation-delay: -3.4s;
          animation-duration: 3.7s;
        }
        .matrix-column:nth-child(35) {
          left: 850px;
          animation-delay: -2.8s;
          animation-duration: 2.9s;
        }
        .matrix-column:nth-child(36) {
          left: 875px;
          animation-delay: -3.7s;
          animation-duration: 4.2s;
        }
        .matrix-column:nth-child(37) {
          left: 900px;
          animation-delay: -2.3s;
          animation-duration: 3.3s;
        }
        .matrix-column:nth-child(38) {
          left: 925px;
          animation-delay: -1.9s;
          animation-duration: 2.5s;
        }
        .matrix-column:nth-child(39) {
          left: 950px;
          animation-delay: -3.5s;
          animation-duration: 3.8s;
        }
        .matrix-column:nth-child(40) {
          left: 975px;
          animation-delay: -2.6s;
          animation-duration: 3.4s;
        }

        .matrix-column:nth-child(odd)::before {
          content: "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン123456789";
        }

        .matrix-column:nth-child(even)::before {
          content: "ガギグゲゴザジズゼゾダヂヅデドバビブベボパピプペポヴァィゥェォャュョッABCDEFGHIJKLMNOPQRSTUVWXYZ";
        }

        .matrix-column:nth-child(3n)::before {
          content: "アカサタナハマヤラワイキシチニヒミリウクスツヌフムユルエケセテネヘメレオコソトノホモヨロヲン0987654321";
        }

        .matrix-column:nth-child(4n)::before {
          content: "ンヲロヨモホノトソコオレメヘネテセケエルユムフヌツスクウリミヒニチシキイワラヤマハナタサカア";
        }

        .matrix-column:nth-child(5n)::before {
          content: "ガザダバパギジヂビピグズヅブプゲゼデベペゴゾドボポヴァィゥェォャュョッ!@#$%^&*()_+-=[]{}|;:,.<>?";
        }

        @keyframes fall {
          0% {
            transform: translateY(-10%);
            opacity: 1;
          }
          100% {
            transform: translateY(200%);
            opacity: 0;
          }
        }

        @media (max-width: 768px) {
          .loader-title {
            font-size: 3rem;
          }
          
          .loader-subtitle {
            font-size: 1rem;
          }
          
          .progress-bar {
            width: 250px;
          }
          
          .matrix-column {
            font-size: 14px;
            line-height: 16px;
            width: 18px;
          }
        }

        @media (max-width: 480px) {
          .loader-title {
            font-size: 2.5rem;
          }
          
          .loader-subtitle {
            font-size: 0.9rem;
          }
          
          .progress-bar {
            width: 200px;
          }
          
          .matrix-column {
            font-size: 12px;
            line-height: 14px;
            width: 15px;
          }
        }
      `}</style>
    </div>
  );
};

export default MatrixLoader;