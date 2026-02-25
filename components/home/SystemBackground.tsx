'use client'

import { useId } from 'react'

type Density = 'high' | 'medium' | 'low'

interface SystemBackgroundProps {
  density?: Density
}

export default function SystemBackground({ density = 'medium' }: SystemBackgroundProps) {
  const id = useId()
  
  const nodesByDensity = {
    high: [
      { x: 15, y: 20, r: 1.5, delay: 0 },
      { x: 45, y: 25, r: 1.8, delay: 2 },
      { x: 78, y: 22, r: 1.5, delay: 4 },
      { x: 85, y: 35, r: 2.8, delay: 5 },
      { x: 12, y: 45, r: 1.5, delay: 1.5 },
      { x: 52, y: 42, r: 1.5, delay: 3.5 },
      { x: 88, y: 58, r: 1.5, delay: 5.5 },
      { x: 22, y: 65, r: 1.8, delay: 6 },
      { x: 58, y: 72, r: 1.5, delay: 0.5 },
      { x: 75, y: 78, r: 2.2, delay: 1.5 },
      { x: 18, y: 82, r: 1.5, delay: 2.5 },
      { x: 72, y: 92, r: 1.5, delay: 4.5 },
      { x: 32, y: 32, r: 1.5, delay: 2 },
      { x: 28, y: 15, r: 1.5, delay: 1 },
      { x: 65, y: 36, r: 1.5, delay: 1 },
    ],
    medium: [
      { x: 15, y: 20, r: 1.5, delay: 0 },
      { x: 45, y: 25, r: 1.8, delay: 2 },
      { x: 78, y: 22, r: 1.5, delay: 4 },
      { x: 85, y: 35, r: 2.8, delay: 5 },
      { x: 12, y: 45, r: 1.5, delay: 1.5 },
      { x: 52, y: 42, r: 1.5, delay: 3.5 },
      { x: 88, y: 58, r: 1.5, delay: 5.5 },
      { x: 22, y: 65, r: 1.8, delay: 6 },
      { x: 58, y: 72, r: 1.5, delay: 0.5 },
      { x: 75, y: 78, r: 2.2, delay: 1.5 },
    ],
    low: [
      { x: 15, y: 20, r: 1.5, delay: 0 },
      { x: 45, y: 25, r: 1.8, delay: 2 },
      { x: 85, y: 35, r: 2.8, delay: 5 },
      { x: 52, y: 42, r: 1.5, delay: 3.5 },
      { x: 22, y: 65, r: 1.8, delay: 6 },
      { x: 75, y: 78, r: 2.2, delay: 1.5 },
    ]
  }
  
  const nodes = nodesByDensity[density]

  const connectionsByDensity = {
    high: [
      { from: 0, to: 1 },
      { from: 1, to: 2 },
      { from: 2, to: 3 },
      { from: 0, to: 4 },
      { from: 1, to: 5 },
      { from: 5, to: 6 },
      { from: 4, to: 7 },
      { from: 7, to: 8 },
      { from: 8, to: 9 },
      { from: 9, to: 10 },
      { from: 10, to: 11 },
      { from: 1, to: 12 },
      { from: 0, to: 13 },
      { from: 2, to: 14 },
    ],
    medium: [
      { from: 0, to: 1 },
      { from: 1, to: 2 },
      { from: 2, to: 3 },
      { from: 0, to: 4 },
      { from: 1, to: 5 },
      { from: 5, to: 6 },
      { from: 4, to: 7 },
      { from: 7, to: 8 },
      { from: 8, to: 9 },
    ],
    low: [
      { from: 0, to: 1 },
      { from: 1, to: 2 },
      { from: 0, to: 3 },
      { from: 3, to: 4 },
      { from: 4, to: 5 },
    ]
  }
  
  const connections = connectionsByDensity[density]

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <svg 
        className="w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <defs>
          <radialGradient id={`fade-${id}`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="white" stopOpacity="1" />
            <stop offset="60%" stopColor="white" stopOpacity="0.4" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <mask id={`fadeMask-${id}`}>
            <rect width="100" height="100" fill={`url(#fade-${id})`} />
          </mask>
        </defs>

        <g mask={`url(#fadeMask-${id})`}>
          {connections.map((conn, i) => (
            <line
              key={i}
              x1={nodes[conn.from].x}
              y1={nodes[conn.from].y}
              x2={nodes[conn.to].x}
              y2={nodes[conn.to].y}
              stroke="rgb(52, 211, 153)"
              strokeWidth="0.5"
              opacity="0.12"
            />
          ))}

          {nodes.map((node, i) => (
            <circle
              key={i}
              cx={node.x}
              cy={node.y}
              r={node.r}
              fill="rgb(52, 211, 153)"
              className="animate-pulse-subtle"
              style={{ 
                opacity: 0.14,
                animationDelay: `${node.delay}s`,
                animationDuration: `${7 + (i % 4)}s`
              }}
            />
          ))}
        </g>
      </svg>

      <style jsx>{`
        @keyframes pulse-subtle {
          0%, 100% { opacity: 0.12; }
          50% { opacity: 0.18; }
        }
        .animate-pulse-subtle {
          animation: pulse-subtle 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}
