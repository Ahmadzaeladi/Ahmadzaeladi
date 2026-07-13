const fs = require('fs');

const generateSVG = () => {
    const svgContent = `
    <svg width="800" height="250" xmlns="http://www.w3.org/2000/svg">
        <style>
            .text-retro {
                font-family: 'Courier New', Courier, monospace;
                font-weight: bold;
                fill: #ffffff;
            }
            .text-icon {
                font-family: Arial, sans-serif;
                font-weight: bold;
            }
            
            /* Background Bergerak */
            @keyframes scrollStars {
                from { transform: translateX(0); }
                to { transform: translateX(-800px); }
            }
            .stars { animation: scrollStars 8s linear infinite; }
            
            /* Animasi Pesawat */
            @keyframes float {
                0%, 100% { transform: translate(50px, 110px); }
                50% { transform: translate(50px, 100px); }
            }
            .ship { animation: float 2s ease-in-out infinite; }
            
            /* Animasi Laser */
            @keyframes shoot {
                0% { transform: translateX(80px); opacity: 1; }
                80% { opacity: 1; }
                100% { transform: translateX(800px); opacity: 0; }
            }
            .laser-1 { animation: shoot 0.8s linear infinite; }
            .laser-2 { animation: shoot 1s linear infinite 0.3s; }
            .laser-3 { animation: shoot 0.7s linear infinite 0.6s; }
            
            /* Animasi Tech Icons Bergerak Mendekat */
            @keyframes moveTarget1 {
                0% { transform: translateX(850px) translateY(105px); }
                100% { transform: translateX(-50px) translateY(105px); }
            }
            @keyframes moveTarget2 {
                0% { transform: translateX(850px) translateY(75px); }
                100% { transform: translateX(-50px) translateY(75px); }
            }
            @keyframes moveTarget3 {
                0% { transform: translateX(850px) translateY(135px); }
                100% { transform: translateX(-50px) translateY(135px); }
            }
            @keyframes moveTarget4 {
                0% { transform: translateX(850px) translateY(165px); }
                100% { transform: translateX(-50px) translateY(165px); }
            }
            @keyframes moveTarget5 {
                0% { transform: translateX(850px) translateY(195px); }
                100% { transform: translateX(-50px) translateY(195px); }
            }
            
            .target-1 { animation: moveTarget1 3.5s linear infinite; }
            .target-2 { animation: moveTarget2 4s linear infinite 1s; }
            .target-3 { animation: moveTarget3 3s linear infinite 2s; }
            .target-4 { animation: moveTarget4 4.5s linear infinite 0.5s; }
            .target-5 { animation: moveTarget5 3.8s linear infinite 1.5s; }
        </style>

        <!-- Background -->
        <rect width="800" height="250" fill="#0d1117" />
        
        <!-- Bintang -->
        <g class="stars" fill="#ffffff" opacity="0.6">
            <circle cx="100" cy="50" r="1.5"/><circle cx="300" cy="150" r="1"/>
            <circle cx="600" cy="80" r="2"/><circle cx="750" cy="200" r="1.5"/>
            <circle cx="900" cy="50" r="1.5"/><circle cx="1100" cy="150" r="1"/>
            <circle cx="1400" cy="80" r="2"/><circle cx="1550" cy="200" r="1.5"/>
        </g>

        <!-- UI Header -->
        <text x="15" y="30" class="text-retro" font-size="12" fill="#4ade80">PLAYER: AHMAD ZAELADI</text>
        <text x="440" y="30" class="text-retro" font-size="12" fill="#facc15">MISSION: MASTERING TECH STACK</text>
        <rect x="15" y="40" width="770" height="2" fill="#3b82f6" opacity="0.5" />

        <!-- Laser -->
        <rect x="0" y="115" width="30" height="3" fill="#facc15" class="laser-1" rx="1.5" />
        <rect x="0" y="90" width="30" height="3" fill="#4ade80" class="laser-2" rx="1.5" />
        <rect x="0" y="130" width="30" height="3" fill="#3b82f6" class="laser-3" rx="1.5" />

        <!-- Pesawat Player -->
        <g class="ship">
            <!-- Api Roket -->
            <polygon points="-15,10 0,5 0,25 -15,20" fill="#ef4444" opacity="0.8">
                <animate attributeName="opacity" values="0.3;1;0.3" dur="0.1s" repeatCount="indefinite" />
            </polygon>
            <!-- Sayap & Badan -->
            <path d="M0,0 L35,15 L0,30 L5,15 Z" fill="#3b82f6" />
            <path d="M5,10 L25,15 L5,20 Z" fill="#93c5fd" />
        </g>

        <!-- TARGET 1: JavaScript -->
        <g class="target-1">
            <rect width="32" height="32" fill="#f7df1e" rx="6" />
            <text x="16" y="22" class="text-icon" font-size="16" fill="#000000" text-anchor="middle">JS</text>
        </g>

        <!-- TARGET 2: Node.js -->
        <g class="target-2">
            <rect width="50" height="32" fill="#339933" rx="6" />
            <text x="25" y="22" class="text-icon" font-size="14" fill="#ffffff" text-anchor="middle">Node</text>
        </g>

        <!-- TARGET 3: PostgreSQL -->
        <g class="target-3">
            <rect width="40" height="32" fill="#336791" rx="6" />
            <text x="20" y="22" class="text-icon" font-size="14" fill="#ffffff" text-anchor="middle">PG</text>
        </g>

        <!-- TARGET 4: Bootstrap 5 -->
        <g class="target-4">
            <rect width="32" height="32" fill="#7952b3" rx="6" />
            <text x="16" y="24" class="text-icon" font-size="20" fill="#ffffff" text-anchor="middle">B</text>
        </g>

        <!-- TARGET 5: CodeIgniter 4 -->
        <g class="target-5">
            <rect width="45" height="32" fill="#ef4223" rx="6" />
            <text x="22" y="22" class="text-icon" font-size="14" fill="#ffffff" text-anchor="middle">CI4</text>
        </g>
    </svg>
    `;

    fs.writeFileSync('shooter.svg', svgContent);
    console.log('✅ Animasi Tech Stack Shooter SVG berhasil di-generate!');
};

generateSVG();