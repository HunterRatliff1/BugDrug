const highlight = function(classes, color) {
  classes.forEach(function(c) {
    $(c).css("background-color", color);
  });
};

const orangeHighlightBacteria = function(bacteria) {
  context.fillStyle = "black";
  bacteria.forEach(function(b) {
    switch (b) {
      case 'Strep':
        context.beginPath();
        context.fillStyle = "rgba(255,153,0,0.25)";
        context.rect(2 + PAD, 2 + BH / 3 + PAD, BW / 2 - 2, BH / 6 - 2);
        context.fill();
        context.fillText('Strep', 1 + BW / 4 + PAD - 10, 1 + BH * 5 / 12 + PAD);
        break;
      case 'MSSA':
        context.beginPath();
        context.fillStyle = "rgba(255,153,0,0.25)";
        context.rect(1 + BW / 6 + PAD, 2 + PAD, BW / 6 - 1, BH / 3 - 2);
        context.rect(2 + PAD, 2 + BH / 6 + PAD, BW / 6 - 1, BH / 6 - 2);
        context.fill();
        context.fillText('MSSA', 1 + BW / 6 + PAD, 1 + BH / 4 + PAD);
        break;
      case 'MRSA':
        context.beginPath();
        context.fillStyle = "rgba(255,153,0,0.25)";
        context.rect(2 + PAD, 2 + PAD, BW / 6 - 2, BH / 6 - 2);
        context.fill();
        context.fillText('MRSA', 1 + BW / 12 + PAD, 1 + BH / 12 + PAD);
        break;
      case 'VRE':
        context.beginPath();
        context.fillStyle = "rgba(255,153,0,0.25)";
        context.rect(2 + BW / 3 + PAD, 2 + PAD, BW / 6 - 2, BH / 6 - 2);
        context.fill();
        context.fillText('VRE', 1 + BW * 5 / 12 + PAD, 1 + BH / 12 + PAD);
        break;
      case 'Enterococcus':
        context.beginPath();
        context.fillStyle = "rgba(255,153,0,0.25)";
        context.rect(2 + BW / 3 + PAD, 2 + BH / 6 + PAD, BW / 6 - 2, BH / 6 - 2);
        context.fill();
        context.fillText('Enterococcus', 1 + BW * 5 / 12 + PAD, 1 + BH / 4 + PAD);
        break;
      case 'GNRs':
        context.beginPath();
        context.fillStyle = "rgba(255,153,0,0.25)";
        context.rect(1 + BW / 6 + PAD, 2 + BH / 2 + PAD, BW / 3 - 1, BH / 2 - 2);
        context.fill();
        context.fillText('GNRs', 1 + BW / 3 + PAD - 10, 1 + BH * 3 / 4 + PAD);
        break;
      case 'ESCAPPM':
        context.beginPath();
        context.fillStyle = "rgba(255,153,0,0.25)";
        context.rect(2 + PAD, 1 + BH * 2 / 3 + PAD, BW / 6, BH / 6 - 1);
        context.fill();
        context.fillText('ESCAPPM', 1 + BW / 12 + PAD, 1 + BH * 3 / 4 + PAD);
        break;
      case 'Pseudomonas':
        context.beginPath();
        context.fillStyle = "rgba(255,153,0,0.25)";
        context.rect(2 + PAD, 2 + BH / 2 + PAD, BW / 6 - 1, BH / 6 - 1);
        context.fill();
        context.fillText('Pseudomonas', 1 + BW / 12 + PAD, 1 + BH * 7 / 12 + PAD);
        break;
      case 'ESBL':
        context.beginPath();
        context.fillStyle = "rgba(255,153,0,0.25)";
        context.rect(2 + PAD, 1 + BH * 5 / 6 + PAD, BW / 6 - 1, BH / 6);
        context.fill();
        context.fillText('ESBL', 1 + BW / 12 + PAD, 1 + BH * 11 / 12 + PAD);
        break;
      case 'Anaerobes':
        context.beginPath();
        context.fillStyle = "rgba(255,153,0,0.25)";
        context.rect(2 + BW / 2 + PAD, 2 + PAD, BW / 2 - 2, BH / 2 - 2);
        context.fill();
        context.fillText('Anaerobes', 1 + BW * 3 / 4 + PAD, 1 + BH / 4 + PAD);
        break;
      case 'Atypicals':
        context.beginPath();
        context.fillStyle = "rgba(255,153,0,0.25)";
        context.rect(2 + BW / 2 + PAD, 2 + BH / 2 + PAD, BW / 2 - 2, BH / 2 - 2);
        context.fill();
        context.fillText('Atypicals', 1 + BW * 3 / 4 + PAD, 1 + BH * 3 / 4 + PAD);
        break;
    }
  })
};

const yellowHighlightBacteria = function(bacteria) {
  context.strokeStyle = "black";
  context.lineWidth = 2;
  context.fillStyle = "black";
  bacteria.forEach(function(b) {
    switch (b) {
      case 'Strep':
        context.beginPath();
        context.fillStyle = "rgba(255,255,0,0.25)";
        context.rect(2 + PAD, 2 + BH / 3 + PAD, BW / 2 - 2, BH / 6 - 2);
        context.fill();
        context.fillText('Strep', 1 + BW / 4 + PAD - 10, BH * 5 / 12 + PAD);
        break;
      case 'MSSA':
        context.beginPath();
        context.fillStyle = "rgba(255,255,0,0.25)";
        context.rect(1 + BW / 6 + PAD, 2 + PAD, BW / 6 - 1, BH / 3 - 2);
        context.rect(2 + PAD, 2 + BH / 6 + PAD, BW / 6 - 1, BH / 6 - 2);
        context.fill();
        context.fillText('MSSA', 1 + BW / 6 + PAD, 1 + BH / 4 + PAD);
        break;
      case 'MRSA':
        context.beginPath();
        context.fillStyle = "rgba(255,255,0,0.25)";
        context.rect(2 + PAD, 2 + PAD, BW / 6 - 2, BH / 6 - 2);
        context.fill();
        context.fillText('MRSA', 1 + BW / 12 + PAD, 1 + 15 + PAD);
        break;
      case 'VRE':
        context.beginPath();
        context.fillStyle = "rgba(255,255,0,0.25)";
        context.rect(2 + BW / 3 + PAD, 2 + PAD, BW / 6 - 2, BH / 6 - 2);
        context.fill();
        context.fillText('VRE', 1 + BW * 5 / 12 + PAD, 1 + BH / 12 + PAD);
        break;
      case 'Enterococcus':
        context.beginPath();
        context.fillStyle = "rgba(255,255,0,0.25)";
        context.rect(2 + BW / 3 + PAD, 2 + BH / 6 + PAD, BW / 6 - 2, BH / 6 - 2);
        context.fill();
        context.fillText('Enterococcus', 1 + BW * 5 / 12 + PAD, 1 + BH / 4 + PAD);
        break;
      case 'GNRs':
        context.beginPath();
        context.fillStyle = "rgba(255,255,0,0.25)";
        context.rect(1 + BW / 6 + PAD, 2 + BH / 2 + PAD, BW / 3 - 1, BH / 2 - 2);
        context.fill();
        context.fillText('GNRs', 1 + BW / 3 + PAD - 10, 1 + BH * 3 / 4 + PAD);
        break;
      case 'ESCAPPM':
        context.beginPath();
        context.fillStyle = "rgba(255,255,0,0.25)";
        context.rect(2 + PAD, 1 + BH * 2 / 3 + PAD, BW / 6, BH / 6 - 1);
        context.fill();
        context.fillText('ESCAPPM', 1 + BW / 12 + PAD, 1 + BH * 3 / 4 + PAD);
        break;
      case 'Pseudomonas':
        context.beginPath();
        context.fillStyle = "rgba(255,255,0,0.25)";
        context.rect(2 + PAD, 2 + BH / 2 + PAD, BW / 6 - 1, BH / 6 - 1);
        context.fill();
        context.fillText('Pseudomonas', 1 + BW / 12 + PAD, 1 + BH * 7 / 12 + PAD);
        break;
      case 'ESBL':
        context.beginPath();
        context.fillStyle = "rgba(255,255,0,0.25)";
        context.rect(2 + PAD, 1 + BH * 5 / 6 + PAD, BW / 6 - 1, BH / 6);
        context.fill();
        context.fillText('ESBL', 1 + BW / 12 + PAD, 1 + BH * 11 / 12 + PAD);
        break;
      case 'Anaerobes':
        context.beginPath();
        context.fillStyle = "rgba(255,255,0,0.25)";
        context.rect(2 + BW / 2 + PAD, 2 + PAD, BW / 2 - 2, BH / 2 - 2);
        context.fill();
        context.fillText('Anaerobes', 1 + BW * 3 / 4 + PAD, 1 + BH / 4 + PAD);
        break;
      case 'Atypicals':
        context.beginPath();
        context.fillStyle = "rgba(255,255,0,0.25)";
        context.rect(2 + BW / 2 + PAD, 2 + BH / 2 + PAD, BW / 2 - 2, BH / 2 - 2);
        context.fill();
        context.fillText('Atypicals', 1 + BW * 3 / 4 + PAD, 1 + BH * 3 / 4 + PAD);
        break;
    }
  })
};

const removeHighlightBacteria = function(bacteria) {
  context.strokeStyle = "black";
  context.lineWidth = 2;
  context.fillStyle = "black";
  bacteria.forEach(function(b) {
    switch (b) {
      case 'Strep':
        context.beginPath();
        context.clearRect(2 + PAD, 2 + BH / 3 + PAD, BW / 2 - 1, BH / 6 - 2);
        context.fillText('Strep', 1 + BW / 4 + PAD - 10, 1 + BH * 5 / 12 + PAD);
        break;
      case 'MSSA':
        context.beginPath();
        context.clearRect(1 + BW / 6 + PAD, 2 + PAD, BW / 6 - 1, BH / 3 - 2);
        context.clearRect(2 + PAD, 2 + BH / 6 + PAD, BW / 6 - 1, BH / 6 - 2);
        context.fillText('MSSA', 1 + BW / 6 + PAD, 1 + BH / 4 + PAD);
        // Re-draw box
        context.moveTo(1 + BW / 3 + PAD, PAD);
        context.lineTo(1 + BW / 3 + PAD, 1 + BH / 3 + PAD);
        context.lineTo(PAD, 1 + BH / 3 + PAD);
        context.stroke();
        break;
      case 'MRSA':
        context.beginPath();
        context.clearRect(2 + PAD, 2 + PAD, BW / 6 - 2, BH / 6 - 2);
        context.fillText('MRSA', 1 + BW / 12 + PAD, 1 + BH / 12 + PAD);
        // Re-draw box
        context.moveTo(1 + BW / 6 + PAD, PAD);
        context.lineTo(1 + BW / 6 + PAD, 1 + BH / 6 + PAD);
        context.lineTo(PAD, 1 + BH / 6 + PAD);
        context.stroke();
        break;
      case 'VRE':
        context.beginPath();
        context.clearRect(2 + BW / 3 + PAD, 2 + PAD, BW / 6 - 1, BH / 6 - 2);
        context.fillText('VRE', 1 + BW * 5 / 12 + PAD, 1 + BH / 12 + PAD);
        // Re-draw box
        context.moveTo(1 + BW / 3 + PAD, 1 + BH / 6 + PAD);
        context.lineTo(1 + BW / 2 + PAD, 1 + BH / 6 + PAD);
        context.stroke();
        break;
      case 'Enterococcus':
        context.beginPath();
        context.clearRect(2 + BW / 3 + PAD, 2 + BH / 6 + PAD, BW / 6 - 1, BH / 6 - 2);
        context.fillText('Enterococcus', 1 + BW * 5 / 12 + PAD, 1 + BH / 4 + PAD);
        // Re-draw box
        context.moveTo(1 + BW / 3 + PAD, 1 + BH / 3 + PAD);
        context.lineTo(1 + BW / 2 + PAD, 1 + BH / 3 + PAD);
        context.stroke();
        break;
      case 'GNRs':
        context.beginPath();
        context.clearRect(1 + BW / 6 + PAD, 1 + BH / 2 + PAD, BW / 3, BH / 2 - 1);
        context.fillText('GNRs', 1 + BW / 3 + PAD - 10, 1 + BH * 3 / 4 + PAD);
        // Re-draw Pseudomonas, ESCAPPM, and ESBL boxes
        context.moveTo(1 + BW / 6 + PAD, 1 + BH / 2 + PAD);
        context.lineTo(1 + BW / 6 + PAD, 1 + BH * 2 / 3 + PAD);
        context.lineTo(PAD, 1 + BH * 2 / 3 + PAD);
        context.moveTo(1 + BW / 6 + PAD, 1 + BH * 2 / 3 + PAD);
        context.lineTo(1 + BW / 6 + PAD, 1 + BH * 5 / 6 + PAD);
        context.moveTo(PAD, 1 + BH * 5 / 6 + PAD);
        context.lineTo(1 + BW / 6 + PAD, 1 + BH * 5 / 6 + PAD);
        context.lineTo(1 + BW / 6 + PAD, 1 + BH + PAD);
        context.stroke();
        break;
      case 'Pseudomonas':
        context.beginPath();
        context.clearRect(2 + PAD, 1 + BH / 2 + PAD, BW / 6 - 1, BH / 6);
        context.fillText('Pseudomonas', 1 + BW / 12 + PAD, 1 + BH * 7 / 12 + PAD);
        break;
      case 'ESCAPPM':
        context.beginPath();
        context.clearRect(2 + PAD, 2 + BH * 2 / 3 + PAD, BW / 6 - 1, BH / 6 - 2);
        context.fillText('ESCAPPM', 1 + BW / 12 + PAD, 1 + BH * 3 / 4 + PAD);
        break;
      case 'ESBL':
        context.beginPath();
        context.clearRect(2 + PAD, 1 + BH * 5 / 6 + PAD, BW / 6 - 1, BH / 6);
        context.fillText('ESBL', 1 + BW / 12 + PAD, 1 + BH * 11 / 12 + PAD);
        break;
      case 'Anaerobes':
        context.beginPath();
        context.clearRect(2 + BW / 2 + PAD, 2 + PAD, BW / 2 - 2, BH / 2 - 2);
        context.fillText('Anaerobes', 1 + BW * 3 / 4 + PAD, 1 + BH / 4 + PAD);
        break;
      case 'Atypicals':
        context.beginPath();
        context.clearRect(2 + BW / 2 + PAD, 1 + BH / 2 + PAD, BW / 2 - 2, BH / 2 - 1);
        context.fillText('Atypicals', 1 + BW * 3 / 4 + PAD, 1 + BH * 3 / 4 + PAD);
        break;
    }
  })
};
