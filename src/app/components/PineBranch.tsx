export function PineBranch() {
  return (
    <svg width="240" height="180" viewBox="0 0 240 180" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Main branch */}
      <path
        d="M20 140 Q 60 100, 100 80 T 180 40"
        stroke="#5a4a3a"
        strokeWidth="6"
        fill="none"
        strokeLinecap="round"
      />
      
      {/* Pine needles - cluster 1 */}
      <g>
        <ellipse cx="50" cy="115" rx="12" ry="28" fill="#3d5f4a" transform="rotate(-30 50 115)" />
        <ellipse cx="45" cy="120" rx="10" ry="26" fill="#4a6e56" transform="rotate(-45 45 120)" />
        <ellipse cx="55" cy="118" rx="11" ry="25" fill="#4a6e56" transform="rotate(-15 55 118)" />
      </g>

      {/* Pine needles - cluster 2 */}
      <g>
        <ellipse cx="85" cy="95" rx="14" ry="30" fill="#3d5f4a" transform="rotate(-20 85 95)" />
        <ellipse cx="80" cy="100" rx="12" ry="28" fill="#4a6e56" transform="rotate(-35 80 100)" />
        <ellipse cx="90" cy="98" rx="13" ry="27" fill="#4a6e56" transform="rotate(-5 90 98)" />
      </g>

      {/* Pine needles - cluster 3 */}
      <g>
        <ellipse cx="120" cy="75" rx="13" ry="28" fill="#3d5f4a" transform="rotate(-10 120 75)" />
        <ellipse cx="115" cy="80" rx="11" ry="26" fill="#4a6e56" transform="rotate(-25 115 80)" />
        <ellipse cx="125" cy="78" rx="12" ry="25" fill="#4a6e56" transform="rotate(5 125 78)" />
      </g>

      {/* Pine needles - cluster 4 */}
      <g>
        <ellipse cx="155" cy="58" rx="12" ry="26" fill="#3d5f4a" transform="rotate(0 155 58)" />
        <ellipse cx="150" cy="63" rx="10" ry="24" fill="#4a6e56" transform="rotate(-15 150 63)" />
        <ellipse cx="160" cy="61" rx="11" ry="23" fill="#4a6e56" transform="rotate(15 160 61)" />
      </g>

      {/* Decorative berries */}
      <circle cx="48" cy="122" r="4" fill="#c67b5c" />
      <circle cx="52" cy="125" r="3.5" fill="#c67b5c" />
      <circle cx="44" cy="126" r="3" fill="#c67b5c" />
      
      <circle cx="88" cy="98" r="4" fill="#c67b5c" />
      <circle cx="92" cy="101" r="3.5" fill="#c67b5c" />
      
      <circle cx="123" cy="78" r="4" fill="#c67b5c" />
      <circle cx="127" cy="81" r="3" fill="#c67b5c" />
      <circle cx="119" cy="82" r="3.5" fill="#c67b5c" />

      {/* Small decorative dots (snow) */}
      <circle cx="65" cy="110" r="2" fill="#faf6f0" opacity="0.8" />
      <circle cx="102" cy="85" r="2" fill="#faf6f0" opacity="0.8" />
      <circle cx="138" cy="68" r="2" fill="#faf6f0" opacity="0.8" />
      <circle cx="72" cy="105" r="1.5" fill="#faf6f0" opacity="0.8" />
      <circle cx="145" cy="62" r="1.5" fill="#faf6f0" opacity="0.8" />
    </svg>
  );
}
