// Bacteria box width
const BW = window.innerWidth / 3 - 35;
// Bacteria box height
const BH = window.innerHeight / 3;

var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
function drawGraph() {
  context.canvas.width = BW + 20;
  context.canvas.height = BH + 20;
  // Vertical lines
  for (var x = 0; x <= BW; x += BW / 2) {
      context.moveTo(1 + x + PAD, PAD);
      context.lineTo(1 + x + PAD, 2 + BH + PAD);
  }

  // Horizontal lines
  for (var x = 0; x <= BH; x += BH / 2) {
      context.moveTo(PAD, 1 + x + PAD);
      context.lineTo(BW + PAD, 1 + x + PAD);
  }

  // MRSA box
  context.moveTo(1 + BW / 6 + PAD, PAD);
  context.lineTo(1 + BW / 6 + PAD, 1 + BH / 6 + PAD);
  context.lineTo(PAD, 1 + BH / 6 + PAD);

  // MSSA box
  context.moveTo(1 + BW / 3 + PAD, PAD);
  context.lineTo(1 + BW / 3 + PAD, 1 + BH / 3 + PAD);
  context.lineTo(PAD, 1 + BH / 3 + PAD);

  // VRE box
  context.moveTo(1 + BW / 3 + PAD, 1 + BH / 6 + PAD);
  context.lineTo(1 + BW / 2 + PAD, 1 + BH / 6 + PAD);

  // Enterococcus box
  context.moveTo(1 + BW / 3 + PAD, 1 + BH / 3 + PAD);
  context.lineTo(1 + BW / 2 + PAD, 1 + BH / 3 + PAD);

  // Pseudomonas box
  context.moveTo(1 + BW / 6 + PAD, 1 + BH / 2 + PAD);
  context.lineTo(1 + BW / 6 + PAD, 1 + BH * 2 / 3 + PAD);
  context.lineTo(PAD, 1 + BH * 2 / 3 + PAD);

  // ESCAPPM box
  context.moveTo(1 + BW / 6 + PAD, 1 + BH * 2 / 3 + PAD);
  context.lineTo(1 + BW / 6 + PAD, 1 + BH * 5 / 6 + PAD);

  // ESBL box
  context.moveTo(PAD, 1 + BH * 5 / 6 + PAD);
  context.lineTo(1 + BW / 6 + PAD, 1 + BH * 5 / 6 + PAD);
  context.lineTo(1 + BW / 6 + PAD, 1 + BH + PAD);

  context.strokeStyle = "black";
  context.lineWidth = 2;
  context.stroke();

  // Text
  context.textAlign = "center";
  context.fillText('MRSA', 1 + BW / 12 + PAD, 1 + BH / 12 + PAD);
  context.fillText('MSSA', 1 + BW / 6 + PAD, 1 + BH / 4 + PAD);
  context.fillText('VRE', 1 + BW * 5 / 12 + PAD, 1 + BH / 12 + PAD);
  context.fillText('Enterococcus', 1 + BW * 5 / 12 + PAD, 1 + BH / 4 + PAD);
  context.fillText('Strep', 1 + BW / 4 + PAD - 10, 1 + BH * 5 / 12 + PAD);
  context.fillText('Pseudomonas', 1 + BW / 12 + PAD, 1 + BH * 7 / 12 + PAD);
  context.fillText('ESCAPPM', 1 + BW / 12 + PAD, 1 + BH * 3 / 4 + PAD);
  context.fillText('GNRs', 1 + BW / 3 + PAD - 10, 1 + BH * 3 / 4 + PAD);
  context.fillText('ESBL', 1 + BW / 12 + PAD, 1 + BH * 11 / 12 + PAD);
  context.fillText('Anaerobes', 1 + BW * 3 / 4 + PAD, 1 + BH / 4 + PAD);
  context.fillText('Atypicals', 1 + BW * 3 / 4 + PAD, 1 + BH * 3 / 4 + PAD);
}

drawGraph();
