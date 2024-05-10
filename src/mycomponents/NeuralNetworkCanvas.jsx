// components/NeuralNetworkCanvas.js
import React, { useEffect, useRef, useState } from 'react';

// Utility functions for the canvas logic
const calculateDistance = (neuron1, neuron2) => {
  const dx = neuron2.x - neuron1.x;
  const dy = neuron2.y - neuron1.y;
  return Math.sqrt(dx * dx + dy * dy);
};

const getRandomSubset = (arr, size) => {
  const shuffled = arr.slice();
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled.slice(0, size);
};

const NeuralNetworkCanvas = () => {
  const canvasRef = useRef(null);
  const [neurons, setNeurons] = useState([]);
  const numNeurons = 10;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // Initialize neurons with random velocities and connections
    const initNeurons = () => {
      const newNeurons = [];
      for (let i = 0; i < numNeurons; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const vx = Math.random() * 2 - 1;
        const vy = Math.random() * 2 - 1;
        newNeurons.push({ x, y, vx, vy, connections: [] });
      }

      // Create random connections between neurons
      newNeurons.forEach((neuron) => {
        const numConnections = Math.floor(Math.random() * 2) + 5; // 5 to 6 connections
        const subset = getRandomSubset(
          newNeurons.filter((n) => n !== neuron),
          numConnections
        );
        neuron.connections = subset;
      });

      setNeurons(newNeurons);
    };

    const animate = () => {
      updateNeurons();
      drawNeurons();
      drawConnections();
      requestAnimationFrame(animate);
    };

    const updateNeurons = () => {
      setNeurons((prevNeurons) =>
        prevNeurons.map((neuron) => {
          let { x, y, vx, vy } = neuron;

          // Update position
          x += vx;
          y += vy;

          // Bounce off the walls
          if (x < 0 || x > canvas.width) vx *= -1;
          if (y < 0 || y > canvas.height) vy *= -1;

          return { ...neuron, x, y, vx, vy };
        })
      );
    };

    const drawNeurons = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#fff';

      neurons.forEach((neuron) => {
        ctx.beginPath();
        ctx.arc(neuron.x, neuron.y, 10, 0, Math.PI * 2);
        ctx.fill();
      });
    };

    const drawConnections = () => {
      ctx.beginPath();
      ctx.strokeStyle = '#fff';

      neurons.forEach((neuron) => {
        neuron.connections.forEach((connection) => {
          ctx.moveTo(neuron.x, neuron.y);
          ctx.lineTo(connection.x, connection.y);
        });
      });

      ctx.stroke();
    };

    // Set up initial configuration
    resizeCanvas(); // Ensure the canvas fills the window
    initNeurons(); // Initialize the neurons
    animate(); // Start the animation loop

    window.addEventListener('resize', resizeCanvas); // Handle resizing

    return () => {
      window.removeEventListener('resize', resizeCanvas); // Cleanup on unmount
    };
  }, [neurons]); // Re-run the effect if neurons change

  return <canvas ref={canvasRef} className="canvas-container" />; // Add CSS class
};

export default NeuralNetworkCanvas;
