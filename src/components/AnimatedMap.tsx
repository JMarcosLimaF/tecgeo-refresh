
import React, { useEffect, useRef } from 'react';

const AnimatedMap = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
    };
    
    setCanvasDimensions();
    window.addEventListener('resize', setCanvasDimensions);
    
    // Grid points
    const gridSize = 20;
    const points: { 
      x: number; 
      y: number; 
      originX: number; 
      originY: number; 
      color: string;
    }[] = [];
    
    // Generate grid
    const generateGrid = () => {
      points.length = 0;
      const rows = Math.floor(canvas.height / gridSize) + 2;
      const cols = Math.floor(canvas.width / gridSize) + 2;
      
      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          const pointX = x * gridSize;
          const pointY = y * gridSize;
          points.push({
            x: pointX,
            y: pointY,
            originX: pointX,
            originY: pointY,
            color: 'rgba(14, 165, 233, 0.4)' // Default color (blue)
          });
        }
      }
    };
    
    generateGrid();
    window.addEventListener('resize', generateGrid);
    
    // Animation properties
    let animationFrameId: number;
    let mouseX = 0;
    let mouseY = 0;
    
    // Track mouse position
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };
    
    canvas.addEventListener('mousemove', handleMouseMove);
    
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Process points and update their colors based on mouse proximity
      for (const point of points) {
        const dx = mouseX - point.originX;
        const dy = mouseY - point.originY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 100; // Reduced from 150 to decrease the effect area
        
        if (distance < maxDistance) {
          const force = (1 - distance / maxDistance) * 5;
          point.x = point.originX + (dx * force) / 10;
          point.y = point.originY + (dy * force) / 10;
          
          // Transition color to green (#6eaa5e) based on proximity
          const colorIntensity = 1 - distance / maxDistance;
          point.color = `rgba(110, 170, 94, ${0.4 + colorIntensity * 0.6})`; // Changed to #6eaa5e
        } else {
          point.x = point.originX;
          point.y = point.originY;
          point.color = 'rgba(14, 165, 233, 0.4)'; // Default blue color
        }
      }
      
      // Draw lines between points
      ctx.beginPath();
      ctx.lineWidth = 0.5;
      
      for (let i = 0; i < points.length; i++) {
        const pointA = points[i];
        
        for (let j = i + 1; j < points.length; j++) {
          const pointB = points[j];
          const distanceAB = Math.sqrt(
            Math.pow(pointA.x - pointB.x, 2) + Math.pow(pointA.y - pointB.y, 2)
          );
          
          if (distanceAB < gridSize * 1.5) {
            // Calculate line color based on the average color of connected points
            const isNearMouse = 
              pointA.color.includes('110, 170, 94') || 
              pointB.color.includes('110, 170, 94');
              
            ctx.strokeStyle = isNearMouse 
              ? 'rgba(110, 170, 94, 0.2)' // Changed to #6eaa5e for lines near mouse
              : 'rgba(14, 165, 233, 0.2)'; // Default blue for regular lines
              
            ctx.beginPath();
            ctx.moveTo(pointA.x, pointA.y);
            ctx.lineTo(pointB.x, pointB.y);
            ctx.stroke();
          }
        }
      }
      
      // Draw dots at points
      for (const point of points) {
        ctx.beginPath();
        ctx.fillStyle = point.color;
        ctx.arc(point.x, point.y, 1, 0, Math.PI * 2);
        ctx.fill();
      }
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animate();
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', setCanvasDimensions);
      window.removeEventListener('resize', generateGrid);
      canvas.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full z-0 opacity-70"
    />
  );
};

export default AnimatedMap;
