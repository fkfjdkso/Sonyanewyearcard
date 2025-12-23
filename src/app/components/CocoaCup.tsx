export function CocoaCup() {
  return (
    <svg width="120" height="140" viewBox="0 0 120 140" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Steam wisps */}
      <g opacity="0.6">
        <path
          d="M 45 15 Q 40 8, 45 2"
          stroke="#c67b5c"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M 60 18 Q 55 10, 58 3"
          stroke="#c67b5c"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M 75 16 Q 72 9, 75 4"
          stroke="#c67b5c"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />
      </g>

      {/* Cup body */}
      <g>
        {/* Main cup shape */}
        <path
          d="M 30 35 L 35 100 Q 35 115, 50 115 L 70 115 Q 85 115, 85 100 L 90 35 Z"
          fill="#c67b5c"
        />
        
        {/* Highlight on cup */}
        <path
          d="M 40 40 L 43 95 Q 43 105, 52 105 L 56 105 Q 60 105, 60 100 L 63 40 Z"
          fill="#d89478"
          opacity="0.6"
        />

        {/* Cup rim */}
        <ellipse cx="60" cy="35" rx="30" ry="8" fill="#d89478" />
        <ellipse cx="60" cy="35" rx="28" ry="6" fill="#c67b5c" />
      </g>

      {/* Cocoa liquid */}
      <ellipse cx="60" cy="42" rx="26" ry="7" fill="#6d4c3d" opacity="0.8" />

      {/* Marshmallow 1 */}
      <g>
        <ellipse cx="52" cy="40" rx="9" ry="7" fill="#faf6f0" />
        <ellipse cx="52" cy="39" rx="7" ry="5" fill="#ffffff" opacity="0.7" />
      </g>

      {/* Marshmallow 2 */}
      <g>
        <ellipse cx="68" cy="38" rx="8" ry="6" fill="#faf6f0" />
        <ellipse cx="68" cy="37" rx="6" ry="4" fill="#ffffff" opacity="0.7" />
      </g>

      {/* Marshmallow 3 */}
      <g>
        <ellipse cx="60" cy="45" rx="7" ry="5" fill="#faf6f0" />
        <ellipse cx="60" cy="44" rx="5" ry="3" fill="#ffffff" opacity="0.7" />
      </g>

      {/* Cup handle */}
      <path
        d="M 88 50 Q 105 50, 105 70 Q 105 90, 88 90"
        stroke="#c67b5c"
        strokeWidth="8"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M 88 55 Q 100 55, 100 70 Q 100 85, 88 85"
        stroke="#d89478"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
        opacity="0.6"
      />

      {/* Decorative pattern on cup */}
      <g opacity="0.5">
        <circle cx="50" cy="65" r="3" fill="#3d5f4a" />
        <circle cx="65" cy="70" r="2.5" fill="#3d5f4a" />
        <circle cx="55" cy="80" r="2" fill="#3d5f4a" />
        <circle cx="70" cy="85" r="2.5" fill="#3d5f4a" />
      </g>

      {/* Saucer */}
      <ellipse cx="60" cy="120" rx="45" ry="12" fill="#d89478" />
      <ellipse cx="60" cy="119" rx="43" ry="10" fill="#c67b5c" />
      <ellipse cx="60" cy="118" rx="35" ry="7" fill="#e0a890" opacity="0.5" />
    </svg>
  );
}
