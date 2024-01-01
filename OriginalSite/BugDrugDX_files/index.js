// Append antibiotics, antibiotics classes, and infection types list elements
Object.keys(ANTIBIOTICS).forEach(function(a) {
  const antibioticListItem = '<li class="antibiotic ' + ANTIBIOTICS[a].class +
    '">' + a + '</li>';
  $('.antibiotics').append(antibioticListItem);
});
Object.keys(ANTIBIOTICS_CLASSES).forEach(function(ac) {
  const antibioticClassListItem = '<li class="antibiotic-class ' +
    ANTIBIOTICS_CLASSES[ac].class + '">' + ac + '</li>';
  $('.antibiotics-classes').append(antibioticClassListItem);
});
Object.keys(INFECTION_TYPES).forEach(function(it) {
  const infectionTypeListItem = '<li class="infection-type ' +
    INFECTION_TYPES[it].class + '">' + it + '</li>';
  $('.infection-types').append(infectionTypeListItem);
});

// Highlights on hover over antibiotics and antibiotics classes
Object.keys(ANTIBIOTICS).forEach(function(a) {
  const antibioticData = ANTIBIOTICS[a];
  $('.' + antibioticData.class).hover(
    function() {
      highlight(Object.keys(ANTIBIOTICS).map(function(a) {
        return '.' + ANTIBIOTICS[a].class;
      }), '');
      removeHighlightBacteria(Object.keys(BACTERIA).map(function(b) {
        return '.' + BACTERIA[b].class;
      }));
      highlight(Object.keys(INFECTION_TYPES).map(function(it) {
        return '.' + INFECTION_TYPES[it].class;
      }), '');
      orangeHighlightBacteria(antibioticData.commonBacteria);
      highlight(antibioticData.commonInfectionTypes.map(function(it) {
        return '.' + INFECTION_TYPES[it].class;
      }), 'orange');
      yellowHighlightBacteria(antibioticData.sometimesBacteria);
      highlight(antibioticData.sometimesInfectionTypes.map(function(it) {
        return '.' + INFECTION_TYPES[it].class;
      }), 'yellow');
    },
    function() {
      removeHighlightBacteria(antibioticData.commonBacteria);
      highlight(antibioticData.commonInfectionTypes.map(function(it) {
        return '.' + INFECTION_TYPES[it].class;
      }), '');
      removeHighlightBacteria(antibioticData.sometimesBacteria);
      highlight(antibioticData.sometimesInfectionTypes.map(function(it) {
        return '.' + INFECTION_TYPES[it].class;
      }), '');
    }
  )
});

Object.keys(ANTIBIOTICS_CLASSES).forEach(function(ac) {
  const antibioticClassData = ANTIBIOTICS_CLASSES[ac];
  $('.' + antibioticClassData.class).hover(
    function() {
      highlight(Object.keys(ANTIBIOTICS).map(function(a) {
        return '.' + ANTIBIOTICS[a].class;
      }), '');
      highlight(antibioticClassData.antibiotics.map(function(a) {
        return '.' + ANTIBIOTICS[a].class;
      }), 'lightgreen');
    },
    function() {
      highlight(antibioticClassData.antibiotics.map(function(a) {
        return '.' + ANTIBIOTICS[a].class;
      }), '');
      highlight(Object.keys(INFECTION_TYPES).map(function(it) {
        return '.' + INFECTION_TYPES[it].class;
      }), '');
    }
  )
});

// Highlights on hover over bacteria
const mrsaRect = {
  x: PAD,
  y: PAD,
  w: BW / 6,
  h: BH / 6
};
const mssaRect1 = {
  x: 1 + BW / 6 + PAD,
  y: PAD,
  w: BW / 6,
  h: BH / 3
};
const mssaRect2 = {
  x: PAD,
  y: 1 + BH / 6 + PAD,
  w: BW / 6,
  h: BH / 6
};
const strepRect = {
  x: PAD,
  y: 1 + BH / 3 + PAD,
  w: BW / 2,
  h: BH / 6
};
const vreRect = {
  x: 1 + BW / 3 + PAD,
  y: PAD,
  w: BW / 6,
  h: BH / 6
};
const entRect = {
  x: 1 + BW / 3 + PAD,
  y: 1 + BH / 6 + PAD,
  w: BW / 6,
  h: BH / 6
};
const psaRect = {
  x: PAD,
  y: 1 + BH / 2 + PAD,
  w: BW / 6,
  h: BH / 6
};
const esblRect = {
  x: PAD,
  y: 1 + BH * 5 / 6 + PAD,
  w: BW / 6,
  h: BH / 6
};
const escappmRect = {
  x: PAD,
  y: 1 + BH * 2 / 3 + PAD,
  w: BW / 6,
  h: BH / 6
};
const gnrRect = {
  x: 1 + BW / 6 + PAD,
  y: 1 + BH / 2 + PAD,
  w: BW / 3,
  h: BH / 2
};
const anaerobesRect = {
  x: 1 + BW / 2 + PAD,
  y: PAD,
  w: BW / 2,
  h: BH / 2
};
const atypicalsRect = {
  x: 1 + BW / 2 + PAD,
  y: 1 + BH / 2 + PAD,
  w: BW / 2,
  h: BH / 2
};
const highlightForBacteria = function(bacteriaData, x, y, info = '') {
  if (context.isPointInPath(x, y)) {
    highlight(bacteriaData.commonAntibiotics.map(function(a) {
      return '.' + ANTIBIOTICS[a].class;
    }), 'orange');
    highlight(bacteriaData.commonInfectionTypes.map(function(it) {
      return '.' + INFECTION_TYPES[it].class;
    }), 'orange');
    highlight(bacteriaData.sometimesAntibiotics.map(function(a) {
      return '.' + ANTIBIOTICS[a].class;
    }), 'yellow');
    highlight(bacteriaData.sometimesInfectionTypes.map(function(it) {
      return '.' + INFECTION_TYPES[it].class;
    }), 'yellow');
    $('.bacteria-info').text(info);
    $('.bacteria-info').html($('.bacteria-info').html().replace(/\n/g,'<br/>'));
  }
};
canvas.onmousemove = function (e) {
  const clientRect = this.getBoundingClientRect();
  const x = e.clientX - clientRect.left;
  const y = e.clientY - clientRect.top;

  highlight(Object.keys(ANTIBIOTICS).map(function(a) {
    return '.' + ANTIBIOTICS[a].class;
  }), '');
  highlight(Object.keys(INFECTION_TYPES).map(function(it) {
    return '.' + INFECTION_TYPES[it].class;
  }), '');
  // MRSA
  context.beginPath();
  context.rect(mrsaRect.x, mrsaRect.y, mrsaRect.w, mrsaRect.h);
  highlightForBacteria(BACTERIA['MRSA'], x, y);
  // MSSA
  context.beginPath();
  context.rect(mssaRect1.x, mssaRect1.y, mssaRect1.w, mssaRect1.h);
  context.rect(mssaRect2.x, mssaRect2.y, mssaRect2.w, mssaRect2.h);
  highlightForBacteria(BACTERIA['MSSA'], x, y);
  // Strep
  context.beginPath();
  context.rect(strepRect.x, strepRect.y, strepRect.w, strepRect.h);
  highlightForBacteria(BACTERIA['Strep'], x, y);
  // VRE
  context.beginPath();
  context.rect(vreRect.x, vreRect.y, vreRect.w, vreRect.h);
  const vreInfo = 'Variable resistance many antibiotics, check your local ' +
    'susceptibility patterns. Cell wall agent + aminoglycoside and other ' +
    'combination therapies may be considered with infectious disease ' +
    'consultation, especially for endocarditis.';
  highlightForBacteria(BACTERIA['VRE'], x, y, vreInfo);
  // Enterococcus
  context.beginPath();
  context.rect(entRect.x, entRect.y, entRect.w, entRect.h);
  const enterococcusInfo = 'If susceptible, ampicillin is the drug of choice. ' +
    'Cell wall agent + aminoglycoside and other combination therapies may be ' +
    'considered with infectious disease consultation, especially for endocarditis.';
  highlightForBacteria(BACTERIA['Enterococcus'], x, y, enterococcusInfo);
  // Pseudomonas
  context.beginPath();
  context.rect(psaRect.x, psaRect.y, psaRect.w, psaRect.h);
  highlightForBacteria(BACTERIA['Pseudomonas'], x, y);
  // ESBL
  context.beginPath();
  context.rect(esblRect.x, esblRect.y, esblRect.w, esblRect.h);
  highlightForBacteria(BACTERIA['ESBL'], x, y);
  // ESCAPPM
  context.beginPath();
  context.rect(escappmRect.x, escappmRect.y, escappmRect.w, escappmRect.h);
  highlightForBacteria(BACTERIA['ESCAPPM'], x, y);
  // GNRs
  context.beginPath();
  context.rect(gnrRect.x, gnrRect.y, gnrRect.w, gnrRect.h);
  highlightForBacteria(BACTERIA['GNRs'], x, y);
  // Anaerobes
  context.beginPath();
  context.rect(anaerobesRect.x, anaerobesRect.y, anaerobesRect.w, anaerobesRect.h);
  const anaerobesInfo = 'Metronidazole and Vancomycin PO are used for C difficile infections';
  highlightForBacteria(BACTERIA['Anaerobes'], x, y, anaerobesInfo);
  // Atypicals
  context.beginPath();
  context.rect(atypicalsRect.x, atypicalsRect.y, atypicalsRect.w, atypicalsRect.h);
  highlightForBacteria(BACTERIA['Atypicals'], x, y);
};
// Remove highlights when mouse leaves canvas element
canvas.onmouseout = function (e) {
  highlight(Object.keys(ANTIBIOTICS).map(function(a) {
    return '.' + a.class;
  }), '');
  removeHighlightBacteria(Object.keys(BACTERIA).map(function(b) {
    return '.' + b.class;
  }));
  highlight(Object.keys(INFECTION_TYPES).map(function(it) {
    return '.' + it.class;
  }), '');
  $('.bacteria-info').text('');
}
// Highlights on hover over infection types
Object.keys(INFECTION_TYPES).forEach(function(it) {
  const infectionTypeData = INFECTION_TYPES[it];
  $('.' + infectionTypeData.class).hover(
    function() {
      highlight(Object.keys(ANTIBIOTICS).map(function(a) {
        return '.' + ANTIBIOTICS[a].class;
      }), '');
      removeHighlightBacteria(Object.keys(BACTERIA).map(function(b) {
        return '.' + BACTERIA[b].class;
      }));
      highlight(Object.keys(INFECTION_TYPES).map(function(it) {
        return '.' + INFECTION_TYPES[it].class;
      }), '');
      highlight(infectionTypeData.commonAntibiotics.map(function(a) {
        return '.' + ANTIBIOTICS[a].class;
      }), 'orange');
      orangeHighlightBacteria(infectionTypeData.commonBacteria);
      highlight(infectionTypeData.sometimesAntibiotics.map(function(a) {
        return '.' + ANTIBIOTICS[a].class;
      }), 'yellow');
      yellowHighlightBacteria(infectionTypeData.sometimesBacteria);
    },
    function() {
      highlight(infectionTypeData.commonAntibiotics.map(function(a) {
        return '.' + ANTIBIOTICS[a].class;
      }), '');
      removeHighlightBacteria(infectionTypeData.commonBacteria);
      highlight(infectionTypeData.sometimesAntibiotics.map(function(a) {
        return '.' + ANTIBIOTICS[a].class;
      }), '');
      removeHighlightBacteria(infectionTypeData.sometimesBacteria);
    }
  )
});

// Tooltips for special cases
$('.daptomycin')
  .attr('data-toggle', 'tooltip')
  .attr(
    'title',
    'IV, consult pharmacy for dosing<br>' +
    'Do not use for lung infections'
  )
  .attr('data-html', true);
$('.zoonotics')
  .attr('data-toggle', 'tooltip')
  .attr('title', 'Susceptibility is organism-specific. Please refer to a more detailed resource.');
$('.infection-types-title')
  .attr('data-toggle', 'tooltip')
  .attr('title', 'Some antibiotics matched to these indications should be used as part of a combination regimen');
$('.ampicillin')
  .attr('data-toggle', 'tooltip')
  .attr(
    'title',
    'Ampicillin: PO 250-500mg q6h, IV 50-200mg/kg IV/day<br>' +
    'Amoxicillin: PO 250-1000mg TID<br>' +
    'PCN G: IM or IV, dosing varies per indication<br>' +
    'Ampicillin covers Listeria, relevant for meningitis<br>' +
    'PCN does not cover gram negatives'
  )
  .attr('data-html', true);
$('.meningitis')
  .attr('data-toggle', 'tooltip')
  .attr('title', 'Ampicillin used for Listeria coverage when treating meningitis');
$('.cap')
  .attr('data-toggle', 'tooltip')
  .attr('title', 'Most common regimens: fluoroquinolone or ceftriaxone + azithromycin');
$('.oxacillin')
  .attr('data-toggle', 'tooltip')
  .attr(
    'title',
    'Nafcillin: IV/IM 2g q4h<br>' +
    'Oxacillin: IV 2g q4h'
  )
  .attr('data-html', true);
$('.dicloxacillin')
  .attr('data-toggle', 'tooltip')
  .attr('title', 'Dicloxacillin: PO 125-500mg q6h');
$('.augmentin')
  .attr('data-toggle', 'tooltip')
  .attr(
    'title',
    'PO 500/125 TID or 875/125 BID<br>' +
    'IV (Europe only) 1000/200 q6h<br>' +
    'May not cover Proteus'
  )
  .attr('data-html', true);
$('.unasyn')
  .attr('data-toggle', 'tooltip')
  .attr(
    'title',
    'IV 3g q6h<br>' +
    'May not cover Proteus'
  )
  .attr('data-html', true);
$('.zosyn')
  .attr('data-toggle', 'tooltip')
  .attr('title', 'IV 2.25-4.5g q4h-q6h');
$('.ertapenem')
  .attr('data-toggle', 'tooltip')
  .attr(
    'title',
    'IV/IM 1g q24h<br>' +
    'Convenient, once-per-day IV dosing'
  )
  .attr('data-html', true);
$('.imipenem')
  .attr('data-toggle', 'tooltip')
  .attr(
    'title',
    'Meropenem: IV 1g q8h<br>' +
    'Doripenem: IV 500mg q8h<br>' +
    'Imipenem-Cilastatin: IV 0.5-1g q6-q8h (higher for Pseudomonas), highest seizure risk'
  )
  .attr('data-html', true);
$('.vancomycin')
  .attr('data-toggle', 'tooltip')
  .attr(
    'title',
    'IV, consult pharmacy for dosing<br>' +
    'Prefer Nafcillin for MSSA bacteremia'
  )
  .attr('data-html', true);
$('.vancomycin-po')
  .attr('data-toggle', 'tooltip')
  .attr(
    'title',
    'PO 125mg q6h<br>' +
    'C difficile only'
  )
  .attr('data-html', true);
$('.linezolid')
  .attr('data-toggle', 'tooltip')
  .attr(
    'title',
    'PO/IV 400-600 q12h<br>' +
    'Bacteriostatic agent. Consider alternative agents such as Vancomycin and Daptomycin for serious infections.<br>' +
    'Originally developed as antidepressant, risk of serotonin syndrome.'
  )
  .attr('data-html', true);
$('.cefazolin')
  .attr('data-toggle', 'tooltip')
  .attr(
    'title',
    'First generation<br>' +
    'IV/IM 1-1.5g q8h<br>' +
    'Used for surgical prophylaxis (2g IV within 60mins of incision, 3g if &gt;120kg body weight).'
  )
  .attr('data-html', true);
$('.cephalexin')
  .attr('data-toggle', 'tooltip')
  .attr(
    'title',
    'First generation<br>' +
    'PO 250-1000mg q6h'
  )
  .attr('data-html', true);
$('.cefoxitin')
  .attr('data-toggle', 'tooltip')
  .attr(
    'title',
    'Second generation anti-Bacteroides<br>' +
    'IV 2g q6-8h'
  )
  .attr('data-html', true);
$('.cefotetan')
  .attr('data-toggle', 'tooltip')
  .attr(
    'title',
    'Second generation anti-Bacteroides<br>' +
    'IV/IM 1-3g q12h'
  )
  .attr('data-html', true);
$('.ceftriaxone')
  .attr('data-toggle', 'tooltip')
  .attr(
    'title',
    'Third generation<br>' +
    'IV 1-2g q24h<br>' +
    'For meningitis: IV 2g q12h<br>' +
    'Reasonable oral anaerobe coverage for aspiration pneumonia.<br>' +
    'Cefotaxime is an IV alternative, but requires more frequent dosing. Availability is region-specific.<br>' +
    'Dosing increased for CNS infections<br>' +
    'Oral alternatives, such as cefpodoxime, are region-specific'
  )
  .attr('data-html', true);
$('.ceftazidime')
  .attr('data-toggle', 'tooltip')
  .attr(
    'title',
    'Extended spectrum third generation<br>' +
    'IV/IM 1-2g q8-12h<br>' +
    'Consult pharmacy for meningitis dosing.<br>' +
    'Dosing increased for CNS infections'
  )
  .attr('data-html', true);
$('.cefepime')
  .attr('data-toggle', 'tooltip')
  .attr(
    'title',
    'Fourth generation<br>' +
    'IV 1-2g q8-12h<br>' +
    'Dosing increased for CNS infections'
  )
  .attr('data-html', true);
$('.ceftaroline')
  .attr('data-toggle', 'tooltip')
  .attr(
    'title',
    'Fifth generation<br>' +
    'IV 600mg q12h'
  )
  .attr('data-html', true);
$('.aztreonam')
  .attr('data-toggle', 'tooltip')
  .attr(
    'title',
    'No allergic cross-reactivity with beta-lactams (exception: Ceftazidime)<br>' +
    'Great for penicillin allergies<br>' +
    'IV 1-2g q6-12h'
  )
  .attr('data-html', true);
$('.amikacin')
  .attr('data-toggle', 'tooltip')
  .attr(
    'title',
    'IV, dosing varies, consult pharmacy.<br>' +
    'Nephrotoxic, ototoxic.'
  )
  .attr('data-html', true);
$('.erythromycin')
  .attr('data-toggle', 'tooltip')
  .attr(
    'title',
    'Azithromycin: IV 500mg daily used for CAP (along with Ceftriaxone),<br>' +
    'generally PO 250-500mg daily, dosing varies by indication<br>' +
    'Frequently used for STIs, MAC prophylaxis<br>' +
    'Erythromycin: multiple formulations are available for varied indications,<br>' +
    'ophthalmic solutions available for conjunctivitis, please refer to external resource'
  )
  .attr('data-html', true);
$('.lower-gu')
  .attr('data-toggle', 'tooltip')
  .attr(
    'title',
    'For STIs, susceptibility is organism and region-specific. Please consult a more detailed resource.<br>' +
    'Nitrofurantoin and fosfomycin are urinary agents that act in the bladder'
  )
  .attr('data-html', true);
$('.nitrofurantoin')
  .attr('data-toggle', 'tooltip')
  .attr(
    'title',
    'PO 5-7mg/kg/day divided q6h, 1-2mg/kg/day once daily for prophylaxis<br>' +
    'Only effective for lower GU infections<br>' +
    'Not effective in Serratia, Proteus, or Pseudomonas'
  )
  .attr('data-html', true);
$('.fosfomycin')
  .attr('data-toggle', 'tooltip')
  .attr(
    'title',
    'PO 3mg x1-3 doses (q3days)<br>' +
    'Only effective for lower GU infections'
  )
  .attr('data-html', true);
$('.ciprofloxacin')
  .attr('data-toggle', 'tooltip')
  .attr(
    'title',
    'PO or IV 250-500mg q12h<br>' +
    'High rates of resistance in Pseudomonas<br>' +
    'Among fluoroquinolone, best activity against Pseudomonas'
  )
  .attr('data-html', true);
$('.levofloxacin')
  .attr('data-toggle', 'tooltip')
  .attr(
    'title',
    'IV/PO 250-750mg daily<br>' +
    'High rates of resistance in Pseudomonas'
  )
  .attr('data-html', true);
$('.moxifloxacin')
  .attr('data-toggle', 'tooltip')
  .attr(
    'title',
    'PO or IV 400mg q24h<br>' +
    'Ophthalmic and topical solutions available for skin and eye infections.<br>' +
    'High rates of resistance in Pseudomonas.<br>' +
    'Not used for UTI (no urinary excretion)'
  )
  .attr('data-html', true);
$('.tmp-smx')
  .attr('data-toggle', 'tooltip')
  .attr(
    'title',
    'Generally PO, 1-2 DS tablets BID. Dosing varies. IV formulation available.<br>' +
    'PCP and toxoplasma prophylaxis (refer to external resource for dosing)'
  )
  .attr('data-html', true);
$('.doxycycline')
  .attr('data-toggle', 'tooltip')
  .attr(
    'title',
    'PO/IV 100mg q12h<br>' +
    'Frequently used for atypical and zoonotic diseases. Please refer to a more detailed resource.'
  )
  .attr('data-html', true);
$('.tigecycline')
  .attr('data-toggle', 'tooltip')
  .attr(
    'title',
    'IV 100mg, then 50mg q12h<br>' +
    'Technically approved for skin-related and intra-abdominal infections<br>' +
    'Use is associated with higher risk of death<br>' +
    'Tigecycline should be reserved for situations when alternatives are not suitable<br>' +
    'May not cover Proteus'
  )
  .attr('data-html', true);
$('.metronidazole')
  .attr('data-toggle', 'tooltip')
  .attr(
    'title',
    'PO or IV. Consult pharmacy for dosing.<br>' +
    'Also used for bacterial vaginosis, trichomonas, giardiasis, C diff colitis, invasive amebiasis, some STIs<br>' +
    'Disulfiram-like reaction with alcohol.<br>' +
    'Anaerobic infection under the diaphragm.'
  )
  .attr('data-html', true);
$('.clindamycin')
  .attr('data-toggle', 'tooltip')
  .attr(
    'title',
    'PO 150-450mg q6-8h. IV 1.2-2.7g daily divided TID.<br>' +
    'Variable regional susceptibility patterns.<br>' +
    'Anaerobic infections above the diaphragm.<br>' +
    'High resistance in Bacteroides spp.'
  )
  .attr('data-html', true);
$('.abscess')
  .attr('data-toggle', 'tooltip')
  .attr(
    'title',
    'Frequently polymicrobial.<br>' +
    'Organism(s) vary by anatomic location, please consult a more detailed resource.'
  )
  .attr('data-html', true);
$('.superficial-soft-tissue')
  .attr('data-toggle', 'tooltip')
  .attr(
    'title',
    'Consider evaluating for gram negative infections and deep soft tissue<br>' +
    'infections if patient is diabetic and/or immunocompromised'
  )
  .attr('data-html', true);
$('.deep-soft-tissue, .septic-joint, .aspiration-pna, .biliary, .secondary-intraperitoneal, .gu-w-instrumentation')
  .attr('data-toggle', 'tooltip')
  .attr('title', 'Frequently polymicrobial');
$('.gi')
  .attr('data-toggle', 'tooltip')
  .attr(
    'title',
    'Frequently polymicrobial.<br>' +
    'Metronidazole and Vancomycin PO are used for C difficile infections'
  )
  .attr('data-html', true);
$('.empiric-therapy')
  .attr('data-toggle', 'tooltip')
  .attr('title', 'Multiple drugs often used together to cover most likely organisms');
$('.neutropenic-fever')
  .attr('data-toggle', 'tooltip')
  .attr(
    'title',
    'Multiple drugs often used together to cover most likely organisms<br>' +
    'Cipro + Augmentin may be used as an outpatient regimen'
  )
  .attr('data-html', true);
$('.carbapenems')
  .attr('data-toggle', 'tooltip')
  .attr('title', 'Partial penicillin allergic cross-reactivity');
$('.bacteriostatic-agents')
  .attr('data-toggle', 'tooltip')
  .attr(
    'title',
    'For serious infections, consider another antibiotic<br>' +
    'Clindamycin may be bacteriocidal at high concentrations'
  )
  .attr('data-html', true);
