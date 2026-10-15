const fs = require('fs');
const content = fs.readFileSync('stream_67402.txt', 'utf8');

function pdfPathToSvg(commands) {
  const tokens = commands.trim().split(/\s+/);
  let d = '';
  let i = 0;
  while (i < tokens.length) {
    const t = tokens[i];
    if (t === 'm') {
      const x = tokens[i - 2];
      const y = tokens[i - 1];
      d += 'M ' + x + ' ' + y + ' ';
      i++;
    } else if (t === 'l') {
      const x = tokens[i - 2];
      const y = tokens[i - 1];
      d += 'L ' + x + ' ' + y + ' ';
      i++;
    } else if (t === 'c') {
      const x1 = tokens[i - 6];
      const y1 = tokens[i - 5];
      const x2 = tokens[i - 4];
      const y2 = tokens[i - 3];
      const x = tokens[i - 2];
      const y = tokens[i - 1];
      d += 'C ' + x1 + ' ' + y1 + ', ' + x2 + ' ' + y2 + ', ' + x + ' ' + y + ' ';
      i++;
    } else {
      i++;
    }
  }
  return d.trim();
}

const lines = content.split('\n');

const panels = [];
let curPanel = [];
let inPanel = false;
for (let j = 670; j < 835; j++) {
  const line = lines[j].trim();
  if (line === 'q') {
    inPanel = true;
    curPanel = [];
  } else if (line === 'W n') {
    panels.push(pdfPathToSvg(curPanel.join(' ')));
    inPanel = false;
  } else if (inPanel) {
    if (!line.startsWith('/GS') && !line.includes('cm') && !line.includes('BX')) {
      curPanel.push(line);
    }
  }
}
console.log('Found panels:', panels.length);

let blueLines = [];
let captureBlue = false;
for (let j = 835; j < 950; j++) {
  const line = lines[j].trim();
  if (line.includes('cm')) {
    captureBlue = true;
  } else if (line === 'f' || line === 'Q') {
    if (captureBlue && blueLines.length > 0) break;
  } else if (captureBlue) {
    blueLines.push(line);
  }
}

const tokens = blueLines.join(' ').trim().split(/\s+/);
let blueD = '';
let i = 0;
const tx = 728.9238;
const ty = 524.6764;
while (i < tokens.length) {
  const t = tokens[i];
  if (t === 'm') {
    const x = (parseFloat(tokens[i - 2]) + tx).toFixed(3);
    const y = (parseFloat(tokens[i - 1]) + ty).toFixed(3);
    blueD += 'M ' + x + ' ' + y + ' ';
    i++;
  } else if (t === 'l') {
    const x = (parseFloat(tokens[i - 2]) + tx).toFixed(3);
    const y = (parseFloat(tokens[i - 1]) + ty).toFixed(3);
    blueD += 'L ' + x + ' ' + y + ' ';
    i++;
  } else if (t === 'c') {
    const x1 = (parseFloat(tokens[i - 6]) + tx).toFixed(3);
    const y1 = (parseFloat(tokens[i - 5]) + ty).toFixed(3);
    const x2 = (parseFloat(tokens[i - 4]) + tx).toFixed(3);
    const y2 = (parseFloat(tokens[i - 3]) + ty).toFixed(3);
    const x = (parseFloat(tokens[i - 2]) + tx).toFixed(3);
    const y = (parseFloat(tokens[i - 1]) + ty).toFixed(3);
    blueD += 'C ' + x1 + ' ' + y1 + ', ' + x2 + ' ' + y2 + ', ' + x + ' ' + y + ' ';
    i++;
  } else {
    i++;
  }
}
blueD = blueD.trim() + ' Z';

const allMatches = (blueD + ' ' + panels.join(' ')).match(/-?\d+\.?\d*/g).map(Number);
let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
for (let k = 0; k < allMatches.length; k += 2) {
  const px = allMatches[k];
  const py = allMatches[k+1];
  if (!isNaN(px) && px < minX) minX = px;
  if (!isNaN(px) && px > maxX) maxX = px;
  if (!isNaN(py) && py < minY) minY = py;
  if (!isNaN(py) && py > maxY) maxY = py;
}
console.log('BBox:', { minX, maxX, minY, maxY, w: maxX - minX, h: maxY - minY });

const panelColors = [
  '#e2e8f0', // top left
  '#cbd5e1', // inner fold
  '#e2e8f0', // right
  '#94a3b8', // bottom dark shade
  '#cbd5e1', // bottom face
  '#e2e8f0'
];

let svg = '<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"' + (minX - 2).toFixed(2) + ' ' + (minY - 2).toFixed(2) + ' ' + (maxX - minX + 4).toFixed(2) + ' ' + (maxY - minY + 4).toFixed(2) + '\" width=\"100%\" height=\"100%\">\n';
svg += '  <g transform=\"scale(1, -1) translate(0, -' + (minY + maxY).toFixed(2) + ')\">\n';

panels.forEach((p, idx) => {
  const col = panelColors[idx % panelColors.length];
  svg += '    <path d=\"' + p + ' Z\" fill=\"' + col + '\" stroke=\"none\" />\n';
});

svg += '    <path d=\"' + blueD + '\" fill=\"#0072ce\" fill-rule=\"evenodd\" />\n';
svg += '  </g>\n</svg>';

fs.writeFileSync('public/images/shapack_logo_icon.svg', svg);
console.log('Successfully saved public/images/shapack_logo_icon.svg');
