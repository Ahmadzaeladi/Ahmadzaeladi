const fs = require('fs');

const generateSVG = () => {
    const svgContent = `
    <svg width="800" height="200" xmlns="http://www.w3.org/2000/svg">
        <style>
            .terminal-bg { fill: #0d1117; rx: 8; }
            .terminal-header { fill: #161b22; rx: 8; }
            .dot-red { fill: #ff5f56; }
            .dot-yellow { fill: #ffbd2e; }
            .dot-green { fill: #27c93f; }
            .text { 
                font-family: 'Courier New', Courier, monospace; 
                fill: #56d364; 
                font-size: 14px;
            }
            .text-white { fill: #c9d1d9; }
            .cursor {
                animation: blink 1s step-end infinite;
            }
            @keyframes blink {
                0%, 100% { opacity: 1; }
                50% { opacity: 0; }
            }
            @keyframes type1 {
                0%, 5% { opacity: 0; }
                5%, 100% { opacity: 1; }
            }
            @keyframes type2 {
                0%, 25% { opacity: 0; }
                25%, 100% { opacity: 1; }
            }
            @keyframes type3 {
                0%, 45% { opacity: 0; }
                45%, 100% { opacity: 1; }
            }
            @keyframes type4 {
                0%, 65% { opacity: 0; }
                65%, 100% { opacity: 1; }
            }
            @keyframes type5 {
                0%, 85% { opacity: 0; }
                85%, 100% { opacity: 1; }
            }
            .line-1 { animation: type1 8s infinite; }
            .line-2 { animation: type2 8s infinite; }
            .line-3 { animation: type3 8s infinite; }
            .line-4 { animation: type4 8s infinite; }
            .line-5 { animation: type5 8s infinite; }
        </style>
        
        <rect class="terminal-bg" width="800" height="200" />
        <rect class="terminal-header" width="800" height="30" />
        
        <circle class="dot-red" cx="20" cy="15" r="6" />
        <circle class="dot-yellow" cx="40" cy="15" r="6" />
        <circle class="dot-green" cx="60" cy="15" r="6" />
        
        <text class="text line-1" x="20" y="60">ahmad@dev:~$ <tspan class="text-white">npm start profile.js</tspan></text>
        <text class="text line-2" x="20" y="90">[Info] Initializing backend services...</text>
        <text class="text line-3" x="20" y="120">[Info] Connected to PostgreSQL DB</text>
        <text class="text line-4" x="20" y="150">[Success] CodeIgniter 4 API Online</text>
        <text class="text line-5" x="20" y="180">ahmad@dev:~$ <tspan class="cursor text-white">_</tspan></text>
    </svg>
    `;

    fs.writeFileSync('terminal.svg', svgContent);
    console.log('✅ Animasi Terminal SVG berhasil di-generate!');
};

generateSVG();
