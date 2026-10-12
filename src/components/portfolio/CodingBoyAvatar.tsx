import React from 'react';

interface CodingBoyAvatarProps {
  className?: string;
}

export const CodingBoyAvatar: React.FC<CodingBoyAvatarProps> = ({ className = 'w-full h-full' }) => {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="3D developer character writing code on a laptop"
    >
      <defs>
        {/* Background Gradient */}
        <radialGradient id="avatarBgGrad" cx="100" cy="85" r="95" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#141e33" />
          <stop offset="55%" stopColor="#0a101f" />
          <stop offset="100%" stopColor="#050811" />
        </radialGradient>

        {/* Ambient Backdrop Halos */}
        <radialGradient id="emeraldAura" cx="70" cy="65" r="55" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#10b981" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="cyanAura" cx="135" cy="70" r="50" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
        </radialGradient>

        {/* 3D Skin Gradients */}
        <linearGradient id="skinGrad" x1="100" y1="65" x2="100" y2="128" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#ffd8b3" />
          <stop offset="45%" stopColor="#f7be92" />
          <stop offset="85%" stopColor="#e89e70" />
          <stop offset="100%" stopColor="#cf7f52" />
        </linearGradient>

        <linearGradient id="neckGrad" x1="100" y1="120" x2="100" y2="142" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#c8794f" />
          <stop offset="100%" stopColor="#df9469" />
        </linearGradient>

        {/* Laptop Screen Light Reflection on Face */}
        <radialGradient id="screenFaceGlow" cx="100" cy="130" r="40" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.35" />
          <stop offset="60%" stopColor="#10b981" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
        </radialGradient>

        {/* 3D Hair Gradients */}
        <linearGradient id="hairGrad" x1="100" y1="52" x2="100" y2="92" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#3d312a" />
          <stop offset="25%" stopColor="#29201a" />
          <stop offset="80%" stopColor="#181310" />
          <stop offset="100%" stopColor="#0f0c0a" />
        </linearGradient>
        <linearGradient id="hairSheen" x1="75" y1="62" x2="125" y2="70" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#5a493e" stopOpacity="0" />
          <stop offset="50%" stopColor="#7a6455" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#5a493e" stopOpacity="0" />
        </linearGradient>

        {/* 3D Hoodie Gradients */}
        <linearGradient id="hoodieGrad" x1="100" y1="135" x2="100" y2="200" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#1e293b" />
          <stop offset="40%" stopColor="#151e2d" />
          <stop offset="100%" stopColor="#0b111a" />
        </linearGradient>
        <linearGradient id="shoulderHighlight" x1="40" y1="155" x2="160" y2="155" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.25" />
          <stop offset="50%" stopColor="#ffffff" stopOpacity="0.05" />
          <stop offset="100%" stopColor="#34d399" stopOpacity="0.25" />
        </linearGradient>

        {/* Headphones 3D Gradient */}
        <linearGradient id="headphoneGrad" x1="65" y1="70" x2="135" y2="100" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#475569" />
          <stop offset="50%" stopColor="#1e293b" />
          <stop offset="100%" stopColor="#0f172a" />
        </linearGradient>

        {/* Laptop Metallic Shell Gradient */}
        <linearGradient id="laptopShell" x1="70" y1="130" x2="130" y2="175" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#475569" />
          <stop offset="50%" stopColor="#334155" />
          <stop offset="100%" stopColor="#1e293b" />
        </linearGradient>

        {/* Laptop Display Gradient & Glow */}
        <linearGradient id="displayBack" x1="76" y1="134" x2="124" y2="164" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#09101d" />
          <stop offset="100%" stopColor="#050a14" />
        </linearGradient>

        {/* Screen Upward Light Cast */}
        <linearGradient id="screenBeam" x1="100" y1="162" x2="100" y2="115" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.45" />
          <stop offset="50%" stopColor="#34d399" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
        </linearGradient>

        {/* Soft Drop Shadows and Blur Filters */}
        <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
        <filter id="screenBloom" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>

        {/* Avatar Circular Clip */}
        <clipPath id="avatarClip">
          <circle cx="100" cy="100" r="96" />
        </clipPath>
      </defs>

      {/* Main Content Clipped to Circle */}
      <g clipPath="url(#avatarClip)">
        {/* Deep Gradient Background */}
        <circle cx="100" cy="100" r="96" fill="url(#avatarBgGrad)" />

        {/* Ambient Aurora Spots */}
        <circle cx="70" cy="65" r="55" fill="url(#emeraldAura)" />
        <circle cx="135" cy="70" r="50" fill="url(#cyanAura)" />

        {/* Subtle Background Code Glyphs */}
        <g opacity="0.28" className="font-mono" style={{ userSelect: 'none' }}>
          <text x="28" y="48" fill="#10b981" fontSize="10" fontWeight="600">&#123; &#125;</text>
          <text x="156" y="52" fill="#06b6d4" fontSize="9" fontWeight="600">&lt;/&gt;</text>
          <text x="24" y="115" fill="#3b82f6" fontSize="8" fontWeight="500">0101</text>
          <text x="160" y="118" fill="#10b981" fontSize="8" fontWeight="500">async</text>
        </g>

        {/* Torso & Hoodie (3D Volume) */}
        <g id="torso">
          {/* Base Hoodie Body */}
          <path
            d="M48 200 C48 168 66 146 86 142 L114 142 C134 146 152 168 152 200 Z"
            fill="url(#hoodieGrad)"
          />
          {/* Shoulder 3D Rim Highlights */}
          <path
            d="M48 200 C48 170 66 148 86 143 L114 143 C134 148 152 170 152 200"
            stroke="url(#shoulderHighlight)"
            strokeWidth="1.5"
            fill="none"
          />
          {/* Hoodie Collar / Neckline with Depth */}
          <path
            d="M86 142 Q100 152 114 142 Q100 148 86 142 Z"
            fill="#0f172a"
          />
          {/* Modern Emerald Zipper / Accent Trim */}
          <line x1="100" y1="148" x2="100" y2="182" stroke="#10b981" strokeWidth="1.2" strokeOpacity="0.75" />
          {/* Drawstrings */}
          <path d="M94 148 Q93 162 95 168" stroke="#64748b" strokeWidth="1" strokeLinecap="round" />
          <path d="M106 148 Q107 162 105 168" stroke="#64748b" strokeWidth="1" strokeLinecap="round" />
        </g>

        {/* Neck */}
        <path
          d="M91 120 L109 120 L112 143 Q100 146 88 143 Z"
          fill="url(#neckGrad)"
        />

        {/* 3D Head */}
        <g id="head">
          {/* Ear Shadows */}
          <ellipse cx="74" cy="98" rx="4.5" ry="7" fill="#df9469" />
          <ellipse cx="126" cy="98" rx="4.5" ry="7" fill="#df9469" />

          {/* Main Face Oval */}
          <ellipse cx="100" cy="96" rx="27" ry="32" fill="url(#skinGrad)" />

          {/* Screen Light Reflection on Jaw/Cheeks (3D Glow) */}
          <ellipse cx="100" cy="116" rx="22" ry="12" fill="url(#screenFaceGlow)" />

          {/* Eyes & Eyebrows */}
          <g id="eyes">
            {/* Friendly Eyebrows */}
            <path d="M85 84 Q91 82 96 84" stroke="#1e1814" strokeWidth="2" strokeLinecap="round" />
            <path d="M104 84 Q109 82 115 84" stroke="#1e1814" strokeWidth="2" strokeLinecap="round" />

            {/* Eyes */}
            <ellipse cx="91" cy="91" rx="2.8" ry="3.5" fill="#181310" />
            <ellipse cx="109" cy="91" rx="2.8" ry="3.5" fill="#181310" />

            {/* Eye Catchlights (Friendly Glint) */}
            <circle cx="92" cy="89.8" r="1.1" fill="#ffffff" />
            <circle cx="110" cy="89.8" r="1.1" fill="#ffffff" />
            <circle cx="90.2" cy="92.2" r="0.6" fill="#67e8f9" opacity="0.8" />
            <circle cx="108.2" cy="92.2" r="0.6" fill="#67e8f9" opacity="0.8" />
          </g>

          {/* Modern Designer Glasses (Developer Style) */}
          <g id="glasses" opacity="0.95">
            {/* Left Frame */}
            <rect x="83" y="85" width="16" height="13" rx="4" fill="#000000" fillOpacity="0.25" stroke="#38bdf8" strokeWidth="1.2" />
            {/* Right Frame */}
            <rect x="101" y="85" width="16" height="13" rx="4" fill="#000000" fillOpacity="0.25" stroke="#38bdf8" strokeWidth="1.2" />
            {/* Bridge */}
            <path d="M99 90 Q100 88.5 101 90" stroke="#38bdf8" strokeWidth="1.2" fill="none" strokeLinecap="round" />
            {/* Glass Glare Reflections */}
            <path d="M85 87 L93 87" stroke="#ffffff" strokeWidth="0.8" strokeOpacity="0.75" strokeLinecap="round" />
            <path d="M103 87 L111 87" stroke="#ffffff" strokeWidth="0.8" strokeOpacity="0.75" strokeLinecap="round" />
          </g>

          {/* Nose */}
          <path d="M100 94 L98.5 102 L101.5 102" stroke="#c8794f" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />

          {/* Smile */}
          <path d="M94 108 Q100 114 106 108" stroke="#b45309" strokeWidth="1.8" strokeLinecap="round" fill="none" />
        </g>

        {/* 3D Modern Layered Haircut */}
        <g id="hair">
          {/* Main Hair Volume */}
          <path
            d="M72 90 C70 66 84 52 100 52 C118 52 130 64 128 90 C125 76 120 68 112 68 C104 68 100 71 96 68 C90 68 82 72 76 82 Z"
            fill="url(#hairGrad)"
          />
          {/* Textured Front Tuft / Side Sweep */}
          <path
            d="M75 80 C80 62 96 55 116 57 C124 58 127 65 125 74 C117 66 106 63 94 67 C86 70 80 75 75 80 Z"
            fill="#3a2f27"
          />
          <path
            d="M84 62 Q102 58 118 64 Q106 60 92 64 Z"
            fill="url(#hairSheen)"
          />
        </g>

        {/* Over-Ear Headphones (Tech Gamer/Dev Aesthetic) */}
        <g id="headphones">
          {/* Headband arch */}
          <path
            d="M70 94 C68 62 82 50 100 50 C118 50 132 62 130 94"
            stroke="url(#headphoneGrad)"
            strokeWidth="3.5"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M76 68 C82 56 92 52 100 52 C108 52 118 56 124 68"
            stroke="#64748b"
            strokeWidth="1.2"
            strokeLinecap="round"
            fill="none"
            opacity="0.6"
          />

          {/* Left Ear Cushion & Glowing Ring */}
          <rect x="67" y="88" width="6.5" height="18" rx="3.2" fill="#0f172a" stroke="#334155" strokeWidth="1" />
          <circle cx="70" cy="97" r="2" fill="#10b981" />
          <circle cx="70" cy="97" r="3.5" stroke="#10b981" strokeWidth="0.8" opacity="0.8" />

          {/* Right Ear Cushion & Glowing Ring */}
          <rect x="126.5" y="88" width="6.5" height="18" rx="3.2" fill="#0f172a" stroke="#334155" strokeWidth="1" />
          <circle cx="130" cy="97" r="2" fill="#10b981" />
          <circle cx="130" cy="97" r="3.5" stroke="#10b981" strokeWidth="0.8" opacity="0.8" />
        </g>

        {/* Arms Reaching to Keyboard */}
        <g id="arms">
          {/* Left Forearm */}
          <path
            d="M58 184 C62 166 75 163 86 167 L82 176 C72 173 63 176 58 184 Z"
            fill="#1e293b"
          />
          {/* Right Forearm */}
          <path
            d="M142 184 C138 166 125 163 114 167 L118 176 C128 173 137 176 142 184 Z"
            fill="#1e293b"
          />

          {/* Hands Resting & Typing on Keyboard */}
          <ellipse cx="85" cy="170" rx="5.5" ry="3.5" fill="#f7be92" />
          <ellipse cx="115" cy="170" rx="5.5" ry="3.5" fill="#f7be92" />
          {/* Finger Knuckles Highlight */}
          <circle cx="86" cy="169" r="1.2" fill="#ffd8b3" />
          <circle cx="114" cy="169" r="1.2" fill="#ffd8b3" />
        </g>

        {/* Screen Light Projection Beam */}
        <polygon
          points="74,136 126,136 138,172 62,172"
          fill="url(#screenBeam)"
          opacity="0.75"
        />

        {/* Modern Laptop (3D Perspective) */}
        <g id="laptop">
          {/* Laptop Screen Bezel / Lid */}
          <rect
            x="72"
            y="126"
            width="56"
            height="38"
            rx="3"
            fill="url(#laptopShell)"
            stroke="#64748b"
            strokeWidth="0.8"
          />

          {/* Active Display Panel */}
          <rect
            x="74.5"
            y="128.5"
            width="51"
            height="33"
            rx="1.8"
            fill="url(#displayBack)"
          />

          {/* Code Editor Window Header */}
          <g id="ideHeader">
            <rect x="74.5" y="128.5" width="51" height="5" fill="#0f172a" />
            {/* macOS / IDE Window Buttons */}
            <circle cx="77.5" cy="131" r="1" fill="#ef4444" />
            <circle cx="80.5" cy="131" r="1" fill="#f59e0b" />
            <circle cx="83.5" cy="131" r="1" fill="#10b981" />
            {/* Active file indicator */}
            <rect x="88" y="130" width="16" height="2" rx="0.5" fill="#334155" />
          </g>

          {/* Code Editor Content with Visible Syntax-Highlighted Code Lines */}
          <g id="codeEditorLines" className="font-mono">
            {/* Line 1: Comment */}
            <text x="77" y="137.5" fill="#64748b" fontSize="3.6" fontWeight="600">// App.tsx</text>

            {/* Line 2: const dev = async () =&gt; &#123; */}
            <text x="77" y="143" fontSize="3.5" fontWeight="600">
              <tspan fill="#06b6d4">const </tspan>
              <tspan fill="#34d399">code </tspan>
              <tspan fill="#f8fafc">= </tspan>
              <tspan fill="#a855f7">()</tspan>
            </text>

            {/* Line 3: return &lt;Portfolio /&gt; */}
            <text x="79" y="148.5" fontSize="3.5" fontWeight="600">
              <tspan fill="#06b6d4">return </tspan>
              <tspan fill="#38bdf8">&lt;</tspan>
              <tspan fill="#34d399">Dev</tspan>
              <tspan fill="#38bdf8">/&gt;</tspan>
            </text>

            {/* Line 4: Closing Bracket &amp; Pulsing Cursor */}
            <text x="77" y="154" fill="#a855f7" fontSize="3.5" fontWeight="600">&#125;;</text>
            <rect x="82" y="150.8" width="1" height="4" fill="#10b981">
              <animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite" />
            </rect>

            {/* Micro Syntax Status Badges in Editor Corner */}
            <circle cx="120" cy="137" r="1" fill="#10b981" />
            <circle cx="122.8" cy="137" r="1" fill="#06b6d4" />
          </g>

          {/* Screen Inner Glass Shine */}
          <path
            d="M75 129 L125 129 L105 160 L75 160 Z"
            fill="#ffffff"
            fillOpacity="0.03"
          />

          {/* Laptop Lower Deck / Keyboard Chassis (Wedge in Perspective) */}
          <polygon
            points="62,172 138,172 133,180 67,180"
            fill="url(#laptopShell)"
            stroke="#475569"
            strokeWidth="0.8"
          />

          {/* Keyboard Surface Glow */}
          <polygon
            points="69,173 131,173 128,177 72,177"
            fill="#0f172a"
          />
          {/* Backlit Key Grid (Cyan Neon Glow) */}
          <line x1="74" y1="174" x2="126" y2="174" stroke="#38bdf8" strokeWidth="0.8" strokeDasharray="2, 1.5" strokeOpacity="0.8" />
          <line x1="73" y1="176" x2="127" y2="176" stroke="#34d399" strokeWidth="0.8" strokeDasharray="2.5, 1.5" strokeOpacity="0.8" />

          {/* Trackpad */}
          <rect x="94" y="177.5" width="12" height="2" rx="0.5" fill="#1e293b" stroke="#475569" strokeWidth="0.4" />

          {/* Under-Chassis Neon Shadow */}
          <ellipse cx="100" cy="181" rx="34" ry="2.5" fill="#06b6d4" opacity="0.35" />
        </g>

        {/* Soft Circular Inner Bevel Ring for 3D Porthole Depth */}
        <circle cx="100" cy="100" r="95.5" stroke="rgba(255,255,255,0.12)" strokeWidth="1" fill="none" />
      </g>
    </svg>
  );
};
