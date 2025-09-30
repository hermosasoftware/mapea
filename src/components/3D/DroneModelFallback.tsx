import React, { useState, useEffect } from 'react';
import { FaPlane, FaCog, FaWifi } from 'react-icons/fa';

interface DroneModelFallbackProps {
  className?: string;
  message?: string;
}

export const DroneModelFallback: React.FC<DroneModelFallbackProps> = ({
  className = "",
  message = "Cargando modelo 3D..."
}) => {
  const [loadingStage, setLoadingStage] = useState(0);
  const [progress, setProgress] = useState(0);

  const loadingStages = [
    "Inicializando Three.js...",
    "Descargando modelo GLB...", 
    "Procesando geometría...",
    "Configurando materiales...",
    "Optimizando renderizado...",
    "Casi listo..."
  ];

  useEffect(() => {
    const stageInterval = setInterval(() => {
      setLoadingStage(prev => (prev + 1) % loadingStages.length);
    }, 800);

    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) return 0;
        return prev + Math.random() * 15;
      });
    }, 200);

    return () => {
      clearInterval(stageInterval);
      clearInterval(progressInterval);
    };
  }, []);

  return (
    <div className={`w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-lg relative overflow-hidden ${className}`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-4 left-4 w-2 h-2 bg-mapea-olive rounded-full animate-pulse"></div>
        <div className="absolute top-8 right-6 w-1 h-1 bg-white rounded-full animate-ping"></div>
        <div className="absolute bottom-6 left-8 w-1.5 h-1.5 bg-mapea-olive rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-4 right-4 w-1 h-1 bg-white rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Main Loading Icon */}
      <div className="relative mb-6 z-10">
        <div className="relative">
          <FaPlane className="text-7xl text-mapea-olive animate-pulse transform rotate-45" />
          
          {/* Rotating Ring */}
          <div className="absolute inset-0 animate-spin">
            <div className="w-full h-full border-4 border-transparent border-t-mapea-olive border-r-mapea-olive/50 rounded-full"></div>
          </div>
          
          {/* Pulsing Ring */}
          <div className="absolute inset-0 animate-ping opacity-30">
            <div className="w-full h-full border-2 border-mapea-olive rounded-full"></div>
          </div>
        </div>

        {/* Side Icons */}
        <FaCog className="absolute -top-2 -right-2 text-xl text-white/70 animate-spin" style={{ animationDuration: '3s' }} />
        <FaWifi className="absolute -bottom-2 -left-2 text-lg text-mapea-olive/70 animate-pulse" />
      </div>
      
      {/* Progress Bar */}
      <div className="w-3/4 max-w-xs mb-4 z-10">
        <div className="bg-gray-700 rounded-full h-2 overflow-hidden">
          <div 
            className="bg-gradient-to-r from-mapea-olive to-green-400 h-full rounded-full transition-all duration-300 ease-out"
            style={{ width: `${Math.min(progress, 100)}%` }}
          >
            <div className="h-full bg-white/20 animate-pulse"></div>
          </div>
        </div>
        <div className="text-center text-xs text-mapea-olive/80 mt-1 font-mono">
          {Math.min(Math.round(progress), 100)}%
        </div>
      </div>

      {/* Loading Stage Message */}
      <p className="text-white text-sm font-medium mb-2 text-center z-10 min-h-[1.25rem]">
        {loadingStages[loadingStage]}
      </p>
      
      {/* Status Message */}
      <p className="text-mapea-light-gray text-xs mb-4 text-center z-10">
        {message}
      </p>
      
      {/* Animated Dots */}
      <div className="flex space-x-2 z-10">
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className="w-2 h-2 bg-mapea-olive rounded-full animate-bounce"
            style={{ 
              animationDelay: `${i * 0.15}s`,
              animationDuration: '1.2s'
            }}
          />
        ))}
      </div>

      {/* Scanning Line Effect */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-mapea-olive to-transparent opacity-30"
          style={{ 
            top: '30%',
            animation: 'scanLine 3s ease-in-out infinite alternate'
          }}
        ></div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes scanLine {
            0% { top: 20%; opacity: 0.1; }
            50% { opacity: 0.3; }
            100% { top: 80%; opacity: 0.1; }
          }
        `
      }} />
    </div>
  );
};
