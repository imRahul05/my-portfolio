// ParticleBackground.tsx
import React from "react";
import Particles, { ISourceOptions } from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticleBackground: React.FC = () => {
  const particlesInit = async (engine: any) => {
    await loadFull(engine);
  };

  const options: ISourceOptions = {
    background: {
      color: { value: "transparent" }, // transparent instead of white
    },
    fullScreen: { enable: false }, // we'll control position with CSS
    fpsLimit: 60,
    detectRetina: true,
    particles: {
      number: {
        value: 80, // 👈 now particles will render
        density: { enable: true, area: 800 },
      },
      color: { value: "#000000" }, // black dots
      links: {
        enable: true,
        color: "#000000",
        distance: 150,
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 2,
        outModes: { default: "out" },
      },
      opacity: { value: 0.5 },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 5 } },
    },
  };

  return <Particles id="tsparticles" init={particlesInit} options={options} />;
};

export default ParticleBackground;
