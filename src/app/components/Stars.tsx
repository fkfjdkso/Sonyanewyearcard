export function Stars() {
  return (
    <svg width="100" height="80" viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Large star */}
      <g>
        <path
          d="M 50 5 L 54 18 L 68 18 L 57 26 L 61 39 L 50 31 L 39 39 L 43 26 L 32 18 L 46 18 Z"
          fill="#c67b5c"
        />
        <circle cx="50" cy="24" r="3" fill="#faf6f0" opacity="0.6" />
      </g>

      {/* Medium star - right */}
      <g>
        <path
          d="M 80 25 L 82 32 L 90 32 L 84 37 L 86 44 L 80 39 L 74 44 L 76 37 L 70 32 L 78 32 Z"
          fill="#3d5f4a"
        />
        <circle cx="80" cy="36" r="2" fill="#faf6f0" opacity="0.6" />
      </g>

      {/* Small star - left top */}
      <g>
        <path
          d="M 20 15 L 21 20 L 26 20 L 22 23 L 23 28 L 20 25 L 17 28 L 18 23 L 14 20 L 19 20 Z"
          fill="#3d5f4a"
        />
      </g>

      {/* Small star - bottom */}
      <g>
        <path
          d="M 65 55 L 66 60 L 71 60 L 67 63 L 68 68 L 65 65 L 62 68 L 63 63 L 59 60 L 64 60 Z"
          fill="#c67b5c"
          opacity="0.7"
        />
      </g>

      {/* Tiny decorative stars */}
      <circle cx="35" cy="10" r="2" fill="#3d5f4a" opacity="0.5" />
      <circle cx="90" cy="15" r="1.5" fill="#c67b5c" opacity="0.5" />
      <circle cx="15" cy="35" r="2" fill="#c67b5c" opacity="0.4" />
      <circle cx="55" cy="45" r="1.5" fill="#3d5f4a" opacity="0.4" />

      {/* Sparkle effect */}
      <g opacity="0.7">
        <line x1="50" y1="8" x2="50" y2="12" stroke="#faf6f0" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="48" y1="10" x2="52" y2="10" stroke="#faf6f0" strokeWidth="1.5" strokeLinecap="round" />
      </g>
      
      <g opacity="0.6">
        <line x1="80" y1="28" x2="80" y2="31" stroke="#faf6f0" strokeWidth="1" strokeLinecap="round" />
        <line x1="78.5" y1="29.5" x2="81.5" y2="29.5" stroke="#faf6f0" strokeWidth="1" strokeLinecap="round" />
      </g>
    </svg>
  );
}
