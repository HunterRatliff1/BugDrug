// Bacteria box padding
const PAD = 5;

const ANTIBIOTICS = {
  'PCN/Amox/Ampicillin': {
    class: 'ampicillin',
    commonBacteria: ['Strep', 'Enterococcus'],
    sometimesBacteria: ['GNRs'],
    commonInfectionTypes: [
      'Superficial skin/soft tissue',
      'CAP',
      'Lower GU'
    ],
    sometimesInfectionTypes: [
      'Deep soft tissue, bone, and hardware',
      'Endocarditis',
      'Aspiration PNA',
      'Upper GU'
    ]
  },
  'Naf/Oxacillin': {
    class: 'oxacillin',
    commonBacteria: ['Strep', 'MSSA'],
    sometimesBacteria: [],
    commonInfectionTypes: [
      'Superficial skin/soft tissue',
      'Deep soft tissue, bone, and hardware',
      'Line-associated',
      'Endocarditis'
    ],
    sometimesInfectionTypes: [
      'HCAP/HAP',
      'VAP',
      'Aspiration PNA',
      'Lower GU',
      'Upper GU',
      'GU with instrumentation'
    ]
  },
  'Dicloxacillin': {
    class: 'dicloxacillin',
    commonBacteria: ['Strep', 'MSSA'],
    sometimesBacteria: [],
    commonInfectionTypes: [
      'Superficial skin/soft tissue'
    ],
    sometimesInfectionTypes: [
      'Deep soft tissue, bone, and hardware',
      'Line-associated',
      'Endocarditis',
      'HCAP/HAP',
      'VAP',
      'Aspiration PNA',
      'Lower GU',
      'Upper GU',
      'GU with instrumentation'
    ]
  },
  'Ampicillin Sulbactam (Unasyn)': {
    class: 'unasyn',
    commonBacteria: ['Strep', 'MSSA', 'Enterococcus', 'Anaerobes', 'GNRs'],
    sometimesBacteria: [],
    commonInfectionTypes: [
      'Superficial skin/soft tissue',
      'Deep soft tissue, bone, and hardware',
      'Line-associated',
      'Endocarditis',
      'Aspiration PNA',
      'Biliary',
      'Secondary intraabdominal',
      'GI',
      'Lower GU',
      'Upper GU',
    ],
    sometimesInfectionTypes: [
      'CAP',
      'HCAP/HAP',
      'VAP',
      'Spontaneous intraperitoneal',
      'GU with instrumentation'
    ]
  },
  'Amoxicillin-Clavulanate (Augmentin)': {
    class: 'augmentin',
    commonBacteria: ['Strep', 'MSSA', 'Enterococcus', 'Anaerobes', 'GNRs'],
    sometimesBacteria: [],
    commonInfectionTypes: [
      'Deep soft tissue, bone, and hardware',
      'Line-associated',
      'Endocarditis',
      'Superficial skin/soft tissue',
      'Aspiration PNA',
      'Biliary',
      'Secondary intraabdominal',
      'GI',
      'Lower GU',
      'Upper GU',
    ],
    sometimesInfectionTypes: [
      'CAP',
      'HCAP/HAP',
      'VAP',
      'Spontaneous intraperitoneal',
      'GU with instrumentation'
    ]
  },
  'Piperacillin-Tazobactam (Zosyn)': {
    class: 'zosyn',
    commonBacteria: ['Strep', 'MSSA', 'Enterococcus', 'GNRs', 'Pseudomonas', 'Anaerobes'],
    sometimesBacteria: [],
    commonInfectionTypes: [
      'Deep soft tissue, bone, and hardware',
      'Line-associated',
      'Meningitis',
      'Endocarditis',
      'HCAP/HAP',
      'VAP',
      'Aspiration PNA',
      'Biliary',
      'Spontaneous intraperitoneal',
      'Secondary intraabdominal',
      'GI',
      'Upper GU',
      'GU with instrumentation',
      'Empiric therapy',
      'Neutropenic fever'
    ],
    sometimesInfectionTypes: [
      'Superficial skin/soft tissue',
      'CAP',
      'Lower GU'
    ]
  },
  'Ertapenem': {
    class: 'ertapenem',
    commonBacteria: ['Strep', 'MSSA', 'GNRs', 'ESCAPPM', 'ESBL', 'Anaerobes'],
    sometimesBacteria: [],
    commonInfectionTypes: [
      'Deep soft tissue, bone, and hardware',
      'Line-associated',
      'Endocarditis',
      'HCAP/HAP',
      'VAP',
      'Aspiration PNA',
      'Biliary',
      'Spontaneous intraperitoneal',
      'Secondary intraabdominal',
      'GI',
      'Upper GU',
      'GU with instrumentation'
    ],
    sometimesInfectionTypes: [
      'Superficial skin/soft tissue',
      'Meningitis',
      'CAP',
      'Lower GU'
    ]
  },
  'Mero/Dori/Imipenem': {
    class: 'imipenem',
    commonBacteria: ['Strep', 'MSSA', 'GNRs', 'Pseudomonas', 'ESCAPPM', 'ESBL', 'Anaerobes'],
    sometimesBacteria: [],
    commonInfectionTypes: [
      'Deep soft tissue, bone, and hardware',
      'Line-associated',
      'Meningitis',
      'Endocarditis',
      'HCAP/HAP',
      'VAP',
      'Aspiration PNA',
      'Biliary',
      'Spontaneous intraperitoneal',
      'Secondary intraabdominal',
      'GI',
      'Upper GU',
      'GU with instrumentation',
      'Empiric therapy',
      'Neutropenic fever'
    ],
    sometimesInfectionTypes: [
      'Superficial skin/soft tissue',
      'CAP',
      'Lower GU'
    ]
  },
  'Vancomycin': {
    class: 'vancomycin',
    commonBacteria: ['Strep', 'MRSA', 'Enterococcus'],
    sometimesBacteria: ['MSSA'],
    commonInfectionTypes: [
      'Superficial skin/soft tissue',
      'Deep soft tissue, bone, and hardware',
      'Line-associated',
      'Meningitis',
      'Endocarditis',
      'HCAP/HAP',
      'VAP',
      'GU with instrumentation',
      'Empiric therapy',
      'Neutropenic fever'
    ],
    sometimesInfectionTypes: [
      'Aspiration PNA',
      'Spontaneous intraperitoneal',
      'Secondary intraabdominal',
      'GI',
      'Biliary'
    ]
  },
  'Vancomycin PO': {
    class: 'vancomycin-po',
    commonBacteria: ['Anaerobes'],
    sometimesBacteria: [],
    commonInfectionTypes: ['GI'],
    sometimesInfectionTypes: []
  },
  'Linezolid': {
    class: 'linezolid',
    commonBacteria: ['Strep', 'MSSA', 'MRSA', 'VRE', 'Enterococcus'],
    sometimesBacteria: [],
    commonInfectionTypes: [
      'Superficial skin/soft tissue',
      'Deep soft tissue, bone, and hardware',
      'VAP',
      'GU with instrumentation',
      'Empiric therapy',
      'Neutropenic fever'
    ],
    sometimesInfectionTypes: [
      'Line-associated',
      'HCAP/HAP',
      'Aspiration PNA',
      'Endocarditis',
      'Meningitis',
      'Biliary',
      'Spontaneous intraperitoneal',
      'Secondary intraabdominal'
    ]
  },
  'Daptomycin': {
    class: 'daptomycin',
    commonBacteria: ['Strep', 'MSSA', 'MRSA', 'VRE', 'Enterococcus'],
    sometimesBacteria: [],
    commonInfectionTypes: [
      'Deep soft tissue, bone, and hardware',
      'Line-associated',
      'Meningitis',
      'Endocarditis',
      'GU with instrumentation',
      'Empiric therapy',
      'Neutropenic fever'
    ],
    sometimesInfectionTypes: [
      'Superficial skin/soft tissue',
      'Biliary',
      'Spontaneous intraperitoneal',
      'Secondary intraabdominal',
      'GI'
    ]
  },
  'Cefazolin': {
    class: 'cefazolin',
    commonBacteria: ['Strep', 'MSSA'],
    sometimesBacteria: ['GNRs'],
    commonInfectionTypes: [
      'Superficial skin/soft tissue',
      'Deep soft tissue, bone, and hardware',
      'Line-associated',
      'Endocarditis',
      'Lower GU'
    ],
    sometimesInfectionTypes: [
      'CAP',
      'HCAP/HAP',
      'VAP',
      'Aspiration PNA',
      'Biliary',
      'Spontaneous intraperitoneal',
      'Secondary intraabdominal',
      'GI',
      'Upper GU',
      'GU with instrumentation'
    ]
  },
  'Cephalexin': {
    class: 'cephalexin',
    commonBacteria: ['Strep', 'MSSA'],
    sometimesBacteria: ['GNRs'],
    commonInfectionTypes: [
      'Superficial skin/soft tissue',
      'Lower GU'
    ],
    sometimesInfectionTypes: [
      'Deep soft tissue, bone, and hardware',
      'Line-associated',
      'Endocarditis',
      'CAP',
      'HCAP/HAP',
      'VAP',
      'Aspiration PNA',
      'Biliary',
      'Spontaneous intraperitoneal',
      'Secondary intraabdominal',
      'GI',
      'Upper GU',
      'GU with instrumentation'
    ]
  },
  'Cefoxitin': {
    class: 'cefoxitin',
    commonBacteria: ['Strep', 'MSSA'],
    sometimesBacteria: ['GNRs', 'Anaerobes'],
    commonInfectionTypes: [],
    sometimesInfectionTypes: [
      'Superficial skin/soft tissue',
      'Deep soft tissue, bone, and hardware',
      'Line-associated',
      'Endocarditis',
      'CAP',
      'HCAP/HAP',
      'VAP',
      'Aspiration PNA',
      'Biliary',
      'Spontaneous intraperitoneal',
      'Secondary intraabdominal',
      'GI',
      'Lower GU',
      'Upper GU',
      'GU with instrumentation'
    ]
  },
  'Cefotetan': {
    class: 'cefotetan',
    commonBacteria: ['Strep', 'MSSA'],
    sometimesBacteria: ['GNRs', 'Anaerobes'],
    commonInfectionTypes: [],
    sometimesInfectionTypes: [
      'Superficial skin/soft tissue',
      'Deep soft tissue, bone, and hardware',
      'Line-associated',
      'Endocarditis',
      'CAP',
      'HCAP/HAP',
      'VAP',
      'Aspiration PNA',
      'Biliary',
      'Spontaneous intraperitoneal',
      'Secondary intraabdominal',
      'GI',
      'Lower GU',
      'Upper GU',
      'GU with instrumentation'
    ]
  },
  'Ceftriaxone': {
    class: 'ceftriaxone',
    commonBacteria: ['GNRs'],
    sometimesBacteria: ['Strep', 'MSSA', 'Anaerobes'],
    commonInfectionTypes: [
      'Deep soft tissue, bone, and hardware',
      'Line-associated',
      'Meningitis',
      'Endocarditis',
      'CAP',
      'HCAP/HAP',
      'Aspiration PNA',
      'Biliary',
      'Spontaneous intraperitoneal',
      'Secondary intraabdominal',
      'GI',
      'Lower GU',
      'Upper GU',
      'GU with instrumentation'
    ],
    sometimesInfectionTypes: ['VAP']
  },
  'Ceftazidime': {
    class: 'ceftazidime',
    commonBacteria: ['GNRs', 'Pseudomonas'],
    sometimesBacteria: [],
    commonInfectionTypes: [
      'Deep soft tissue, bone, and hardware',
      'Line-associated',
      'Meningitis',
      'Endocarditis',
      'HCAP/HAP',
      'VAP',
      'Biliary',
      'Spontaneous intraperitoneal',
      'Secondary intraabdominal',
      'GI',
      'Upper GU',
      'GU with instrumentation'
    ],
    sometimesInfectionTypes: [
      'Aspiration PNA',
      'Lower GU'
    ]
  },
  'Cefepime': {
    class: 'cefepime',
    commonBacteria: ['GNRs', 'Pseudomonas'],
    sometimesBacteria: ['Strep', 'MSSA'],
    commonInfectionTypes: [
      'Deep soft tissue, bone, and hardware',
      'Line-associated',
      'Meningitis',
      'Endocarditis',
      'HCAP/HAP',
      'VAP',
      'Biliary',
      'Spontaneous intraperitoneal',
      'Secondary intraabdominal',
      'GI',
      'Upper GU',
      'GU with instrumentation',
      'Empiric therapy',
      'Neutropenic fever'
    ],
    sometimesInfectionTypes: [
      'Aspiration PNA',
      'Lower GU'
    ]
  },
  'Ceftaroline': {
    class: 'ceftaroline',
    commonBacteria: ['Strep', 'MSSA', 'MRSA', 'Enterococcus', 'GNRs'],
    sometimesBacteria: [],
    commonInfectionTypes: [
      'Superficial skin/soft tissue',
      'Deep soft tissue, bone, and hardware',
      'Line-associated',
      'Endocarditis',
      'CAP',
      'HCAP/HAP',
      'VAP',
      'GU with instrumentation',
      'Empiric therapy',
      'Neutropenic fever'
    ],
    sometimesInfectionTypes: [
      'Aspiration PNA',
      'Biliary',
      'Spontaneous intraperitoneal',
      'Secondary intraabdominal',
      'GI',
      'Upper GU',
      'Lower GU'
    ]
  },
  'Aztreonam': {
    class: 'aztreonam',
    commonBacteria: ['GNRs', 'ESCAPPM', 'Pseudomonas'],
    sometimesBacteria: [],
    commonInfectionTypes: [
      'Deep soft tissue, bone, and hardware',
      'Line-associated',
      'Endocarditis',
      'VAP',
      'Biliary',
      'Meningitis',
      'Spontaneous intraperitoneal',
      'Secondary intraabdominal',
      'GI',
      'Upper GU',
      'Lower GU',
      'GU with instrumentation',
      'Empiric therapy',
      'Neutropenic fever'
    ],
    sometimesInfectionTypes: ['HCAP/HAP']
  },
  'Amikacin/Gentamicin/Tobramycin': {
    class: 'amikacin',
    commonBacteria: ['GNRs', 'Pseudomonas', 'ESCAPPM'],
    sometimesBacteria: [],
    commonInfectionTypes: [
      'Deep soft tissue, bone, and hardware',
      'Line-associated',
      'Endocarditis',
      'VAP',
      'Biliary',
      'Spontaneous intraperitoneal',
      'Secondary intraabdominal',
      'GI',
      'Upper GU',
      'Lower GU',
      'GU with instrumentation',
      'Empiric therapy',
      'Neutropenic fever'
    ],
    sometimesInfectionTypes: ['HCAP/HAP']
  },
  'Erythro/Azithromycin': {
    class: 'erythromycin',
    commonBacteria: ['Atypicals'],
    sometimesBacteria: ['Strep', 'MSSA'],
    commonInfectionTypes: [
      'CAP',
      'Empiric therapy',
      'Neutropenic fever'
    ],
    sometimesInfectionTypes: [
      'Superficial skin/soft tissue',
      'Deep soft tissue, bone, and hardware',
      'HCAP/HAP',
      'Aspiration PNA',
      'Lower GU',
      'GI'
    ]
  },
  'Nitrofurantoin': {
    class: 'nitrofurantoin',
    commonBacteria: ['VRE', 'Enterococcus'],
    sometimesBacteria: ['Strep', 'GNRs', 'MSSA', 'MRSA', 'ESBL'],
    commonInfectionTypes: ['Lower GU'],
    sometimesInfectionTypes: []
  },
  'Fosfomycin': {
    class: 'fosfomycin',
    commonBacteria: ['GNRs', 'Pseudomonas', 'MSSA', 'MRSA', 'VRE', 'Enterococcus', 'ESCAPPM', 'ESBL'],
    sometimesBacteria: ['Strep'],
    commonInfectionTypes: ['Lower GU'],
    sometimesInfectionTypes: []
  },
  'Ciprofloxacin': {
    class: 'ciprofloxacin',
    commonBacteria: ['GNRs', 'ESCAPPM', 'Atypicals'],
    sometimesBacteria: ['Strep', 'Pseudomonas', 'MSSA'],
    commonInfectionTypes: [
      'GI',
      'Lower GU'
    ],
    sometimesInfectionTypes: [
      'Superficial skin/soft tissue',
      'Deep soft tissue, bone, and hardware',
      'HCAP/HAP',
      'Aspiration PNA',
      'Spontaneous intraperitoneal',
      'Secondary intraabdominal',
      'Upper GU',
      'GU with instrumentation'
    ]
  },
  'Levofloxacin': {
    class: 'levofloxacin',
    commonBacteria: ['Strep', 'GNRs', 'ESCAPPM', 'Atypicals'],
    sometimesBacteria: ['MSSA', 'Pseudomonas'],
    commonInfectionTypes: [
      'CAP',
      'HCAP/HAP',
      'Lower GU',
      'Upper GU',
      'Biliary',
      'Spontaneous intraperitoneal',
      'Secondary intraabdominal',
      'GI',
      'GU with instrumentation',
      'Empiric therapy',
      'Neutropenic fever'
    ],
    sometimesInfectionTypes: [
      'Superficial skin/soft tissue',
      'Deep soft tissue, bone, and hardware',
      'Aspiration PNA',
      'VAP'
    ]
  },
  'Moxifloxacin': {
    class: 'moxifloxacin',
    commonBacteria: ['Strep', 'GNRs', 'ESCAPPM', 'Atypicals'],
    sometimesBacteria: ['MSSA', 'Pseudomonas', 'Anaerobes'],
    commonInfectionTypes: [
      'CAP',
      'HCAP/HAP',
      'Aspiration PNA',
      'Biliary',
      'Spontaneous intraperitoneal',
      'Secondary intraabdominal',
      'GI',
      'GU with instrumentation',
      'Empiric therapy',
      'Neutropenic fever'
    ],
    sometimesInfectionTypes: [
      'Superficial skin/soft tissue',
      'Deep soft tissue, bone, and hardware',
      'VAP'
    ]
  },
  'TMP-SMX': {
    class: 'tmp-smx',
    commonBacteria: ['Strep', 'MSSA', 'MRSA', 'GNRs'],
    sometimesBacteria: ['ESCAPPM'],
    commonInfectionTypes: [
      'Superficial skin/soft tissue',
      'Deep soft tissue, bone, and hardware',
      'Lower GU',
      'Upper GU',
      'GI',
      'CAP',
      'GU with instrumentation'
    ],
    sometimesInfectionTypes: [
      'Line-associated',
      'Endocarditis',
      'Biliary',
      'Spontaneous intraperitoneal',
      'Secondary intraabdominal',
      'HCAP/HAP',
      'Aspiration PNA'
    ]
  },
  'Doxycycline': {
    class: 'doxycycline',
    commonBacteria: ['Strep', 'MSSA', 'MRSA', 'Atypicals'],
    sometimesBacteria: ['VRE', 'Enterococcus', 'GNRs', 'ESCAPPM'],
    commonInfectionTypes: [
      'Superficial skin/soft tissue',
      'Deep soft tissue, bone, and hardware',
      'CAP',
      'GI',
      'Empiric therapy',
      'Neutropenic fever'
    ],
    sometimesInfectionTypes: [
      'Line-associated',
      'Endocarditis',
      'Aspiration PNA',
      'HCAP/HAP',
      'Lower GU',
      'Upper GU',
      'GU with instrumentation'
    ]
  },
  'Tigecycline': {
    class: 'tigecycline',
    commonBacteria: ['Strep', 'MSSA', 'MRSA', 'GNRs', 'ESCAPPM', 'Anaerobes', 'Atypicals'],
    sometimesBacteria: ['VRE', 'Enterococcus'],
    commonInfectionTypes: [
      'Superficial skin/soft tissue',
      'Deep soft tissue, bone, and hardware',
      'CAP',
      'Biliary',
      'Spontaneous intraperitoneal',
      'HCAP/HAP',
      'Secondary intraabdominal',
      'GI'
    ],
    sometimesInfectionTypes: [
      'Line-associated',
      'Endocarditis',
      'Aspiration PNA',
      'Upper GU',
      'Lower GU',
      'GU with instrumentation',
      'VAP',
      'Empiric therapy',
      'Neutropenic fever'
    ]
  },
  'Metronidazole': {
    class: 'metronidazole',
    commonBacteria: ['Anaerobes'],
    sometimesBacteria: [],
    commonInfectionTypes: [
      'Deep soft tissue, bone, and hardware',
      'Secondary intraabdominal',
      'GI'
    ],
    sometimesInfectionTypes: [
      'Aspiration PNA',
      'Biliary',
      'GU with instrumentation',
      'Empiric therapy',
      'Neutropenic fever'
    ]
  },
  'Clindamycin': {
    class: 'clindamycin',
    commonBacteria: ['Strep', 'MSSA', 'MRSA', 'Anaerobes'],
    sometimesBacteria: [],
    commonInfectionTypes: [
      'Superficial skin/soft tissue',
      'Deep soft tissue, bone, and hardware',
      'Aspiration PNA'
    ],
    sometimesInfectionTypes: [
      'Biliary',
      'Spontaneous intraperitoneal',
      'Secondary intraabdominal',
      'GI',
      'GU with instrumentation',
      'Empiric therapy',
      'Neutropenic fever'
    ]
  }
};

const ANTIBIOTICS_CLASSES = {
  'Penicillins': {
    class: 'penicillins',
    antibiotics: [
      'PCN/Amox/Ampicillin',
      'Naf/Oxacillin',
      'Dicloxacillin',
      'Ampicillin Sulbactam (Unasyn)',
      'Amoxicillin-Clavulanate (Augmentin)',
      'Piperacillin-Tazobactam (Zosyn)'
    ]
  },
  'Carbapenems': {
    class: 'carbapenems',
    antibiotics: [
      'Ertapenem',
      'Mero/Dori/Imipenem',
    ]
  },
  'Cephalosporins': {
    class: 'cephalosporins',
    antibiotics: [
      'Cefazolin',
      'Cephalexin',
      'Cefoxitin',
      'Cefotetan',
      'Ceftriaxone',
      'Ceftazidime',
      'Cefepime',
      'Ceftaroline',
    ]
  },
  'Aminoglycosides': {
    class: 'aminoglycosides',
    antibiotics: [
      'Amikacin/Gentamicin/Tobramycin'
    ]
  },
  'Macrolides': {
    class: 'macrolides',
    antibiotics: [
      'Erythro/Azithromycin'
    ]
  },
  'Fluoroquinolones': {
    class: 'fluoroquinolones',
    antibiotics: [
      'Ciprofloxacin',
      'Levofloxacin',
      'Moxifloxacin'
    ]
  },
  'Tetracyclines': {
    class: 'tetracyclines',
    antibiotics: [
      'Doxycycline',
      'Tigecycline'
    ]
  },
  'PO Options': {
    class: 'po-options',
    antibiotics: [
      'PCN/Amox/Ampicillin',
      'Dicloxacillin',
      'Amoxicillin-Clavulanate (Augmentin)',
      'Vancomycin PO',
      'Linezolid',
      'Cephalexin',
      'Erythro/Azithromycin',
      'Nitrofurantoin',
      'Fosfomycin',
      'Ciprofloxacin',
      'Levofloxacin',
      'Moxifloxacin',
      'TMP-SMX',
      'Doxycycline',
      'Tigecycline',
      'Metronidazole',
      'Clindamycin'
    ]
  },
  'Bacteriostatic (non-bacteriocidal) agents': {
    class: 'bacteriostatic-agents',
    antibiotics: [
      'Linezolid',
      'Erythro/Azithromycin',
      'Doxycycline',
      'Tigecycline',
      'Clindamycin'
    ]
  },
};

const BACTERIA = {
  'Strep': {
    class: 'gram-positive',
    commonAntibiotics: [
      'PCN/Amox/Ampicillin',
      'Naf/Oxacillin',
      'Dicloxacillin',
      'Ampicillin Sulbactam (Unasyn)',
      'Amoxicillin-Clavulanate (Augmentin)',
      'Piperacillin-Tazobactam (Zosyn)',
      'Ertapenem',
      'Mero/Dori/Imipenem',
      'Vancomycin',
      'Linezolid',
      'Daptomycin',
      'Cefazolin',
      'Cephalexin',
      'Cefoxitin',
      'Cefotetan',
      'Ceftaroline',
      'Levofloxacin',
      'Moxifloxacin',
      'TMP-SMX',
      'Doxycycline',
      'Tigecycline',
      'Clindamycin'
    ],
    sometimesAntibiotics: [
      'Ceftriaxone',
      'Cefepime',
      'Erythro/Azithromycin',
      'Nitrofurantoin',
      'Fosfomycin',
      'Ciprofloxacin'
    ],
    commonInfectionTypes: [
      'Superficial skin/soft tissue',
      'Deep soft tissue, bone, and hardware',
      'Line-associated',
      'Meningitis',
      'Endocarditis',
      'CAP',
      'HCAP/HAP',
      'VAP',
      'Aspiration PNA',
      'Secondary intraabdominal',
      'GU with instrumentation',
      'Empiric therapy',
      'Neutropenic fever'
    ],
    sometimesInfectionTypes: [
      'Biliary',
      'Spontaneous intraperitoneal',
      'GI',
      'Lower GU',
      'Upper GU'
    ]
  },
  'MSSA': {
    class: 'mssa',
    commonAntibiotics: [
      'Naf/Oxacillin',
      'Dicloxacillin',
      'Ampicillin Sulbactam (Unasyn)',
      'Amoxicillin-Clavulanate (Augmentin)',
      'Piperacillin-Tazobactam (Zosyn)',
      'Ertapenem',
      'Mero/Dori/Imipenem',
      'Linezolid',
      'Daptomycin',
      'Cefazolin',
      'Cephalexin',
      'Cefoxitin',
      'Cefotetan',
      'Ceftaroline',
      'Fosfomycin',
      'TMP-SMX',
      'Doxycycline',
      'Tigecycline',
      'Clindamycin'
    ],
    sometimesAntibiotics: [
      'Ceftriaxone',
      'Cefepime',
      'Erythro/Azithromycin',
      'Nitrofurantoin',
      'Ciprofloxacin',
      'Levofloxacin',
      'Moxifloxacin',
      'Vancomycin'
    ],
    commonInfectionTypes: [
      'Superficial skin/soft tissue',
      'Deep soft tissue, bone, and hardware',
      'Line-associated',
      'Endocarditis',
      'HCAP/HAP',
      'VAP',
      'Secondary intraabdominal',
      'GU with instrumentation',
      'Empiric therapy',
      'Neutropenic fever'
    ],
    sometimesInfectionTypes: [
      'Meningitis',
      'Spontaneous intraperitoneal',
      'CAP',
      'Aspiration PNA'
    ]
  },
  'MRSA': {
    class: 'mrsa',
    commonAntibiotics: [
      'Vancomycin',
      'Linezolid',
      'Daptomycin',
      'Ceftaroline',
      'Fosfomycin',
      'TMP-SMX',
      'Doxycycline',
      'Tigecycline',
      'Clindamycin'
    ],
    sometimesAntibiotics: ['Nitrofurantoin'],
    commonInfectionTypes: [
      'Superficial skin/soft tissue',
      'Deep soft tissue, bone, and hardware',
      'Line-associated',
      'Endocarditis',
      'HCAP/HAP',
      'VAP',
      'Secondary intraabdominal',
      'GU with instrumentation',
      'Empiric therapy',
      'Neutropenic fever'
    ],
    sometimesInfectionTypes: [
      'Meningitis',
      'CAP',
      'Aspiration PNA',
      'Spontaneous intraperitoneal'
    ]
  },
  'VRE': {
    class: 'vre',
    commonAntibiotics: [
      'Linezolid',
      'Daptomycin',
      'Nitrofurantoin',
      'Fosfomycin',
    ],
    sometimesAntibiotics: ['Doxycycline', 'Tigecycline'],
    commonInfectionTypes: [],
    sometimesInfectionTypes: [
      'Superficial skin/soft tissue',
      'Deep soft tissue, bone, and hardware',
      'Line-associated',
      'Meningitis',
      'Endocarditis',
      'Biliary',
      'Secondary intraabdominal',
      'Lower GU',
      'Upper GU',
      'GU with instrumentation',
      'Empiric therapy'
    ]
  },
  'Enterococcus': {
    class: 'enterococcus',
    commonAntibiotics: [
      'PCN/Amox/Ampicillin',
      'Ampicillin Sulbactam (Unasyn)',
      'Amoxicillin-Clavulanate (Augmentin)',
      'Piperacillin-Tazobactam (Zosyn)',
      'Vancomycin',
      'Linezolid',
      'Daptomycin',
      'Ceftaroline',
      'Nitrofurantoin',
      'Fosfomycin',
    ],
    sometimesAntibiotics: ['Doxycycline', 'Tigecycline'],
    commonInfectionTypes: [
      'Line-associated',
      'Endocarditis',
      'Secondary intraabdominal',
      'Lower GU',
      'Upper GU',
      'GU with instrumentation'
    ],
    sometimesInfectionTypes: [
      'Superficial skin/soft tissue',
      'Deep soft tissue, bone, and hardware',
      'Meningitis',
      'Biliary',
      'Empiric therapy'
    ]
  },
  'GNRs': {
    class: 'gram-negative',
    commonAntibiotics: [
      'Ampicillin Sulbactam (Unasyn)',
      'Amoxicillin-Clavulanate (Augmentin)',
      'Piperacillin-Tazobactam (Zosyn)',
      'Ertapenem',
      'Mero/Dori/Imipenem',
      'Ceftriaxone',
      'Ceftazidime',
      'Cefepime',
      'Ceftaroline',
      'Aztreonam',
      'Amikacin/Gentamicin/Tobramycin',
      'Fosfomycin',
      'Ciprofloxacin',
      'Levofloxacin',
      'Moxifloxacin',
      'TMP-SMX',
      'Tigecycline'
    ],
    sometimesAntibiotics: [
      'PCN/Amox/Ampicillin',
      'Cefazolin',
      'Cephalexin',
      'Cefoxitin',
      'Cefotetan',
      'Nitrofurantoin',
      'Doxycycline'
    ],
    commonInfectionTypes: [
      'Deep soft tissue, bone, and hardware',
      'Line-associated',
      'Meningitis',
      'CAP',
      'HCAP/HAP',
      'VAP',
      'Biliary',
      'Spontaneous intraperitoneal',
      'Secondary intraabdominal',
      'GI',
      'Lower GU',
      'Upper GU',
      'GU with instrumentation',
      'Empiric therapy',
      'Neutropenic fever'
    ],
    sometimesInfectionTypes: [
      'Superficial skin/soft tissue',
      'Endocarditis',
      'Aspiration PNA'
    ]
  },
  'Pseudomonas': {
    class: 'psa',
    commonAntibiotics: [
      'Piperacillin-Tazobactam (Zosyn)',
      'Mero/Dori/Imipenem',
      'Ceftazidime',
      'Cefepime',
      'Aztreonam',
      'Amikacin/Gentamicin/Tobramycin',
      'Fosfomycin'
    ],
    sometimesAntibiotics: [
      'Ciprofloxacin',
      'Moxifloxacin',
      'Levofloxacin'
    ],
    commonInfectionTypes: [
      'Deep soft tissue, bone, and hardware',
      'Line-associated',
      'VAP',
      'Empiric therapy',
      'Biliary',
      'Neutropenic fever'
    ],
    sometimesInfectionTypes: [
      'Superficial skin/soft tissue',
      'Meningitis',
      'Endocarditis',
      'HCAP/HAP',
      'Spontaneous intraperitoneal',
      'Secondary intraabdominal',
      'GI',
      'Lower GU',
      'Upper GU',
      'GU with instrumentation'
    ]
  },
  'ESCAPPM': {
    class: 'escappm',
    commonAntibiotics: [
      'Ertapenem',
      'Mero/Dori/Imipenem',
      'Aztreonam',
      'Amikacin/Gentamicin/Tobramycin',
      'Ciprofloxacin',
      'Levofloxacin',
      'Moxifloxacin',
      'Tigecycline',
      'Fosfomycin'
    ],
    sometimesAntibiotics: [
      'TMP-SMX',
      'Doxycycline'
    ],
    commonInfectionTypes: [],
    sometimesInfectionTypes: [
      'Superficial skin/soft tissue',
      'Deep soft tissue, bone, and hardware',
      'Line-associated',
      'Meningitis',
      'Endocarditis',
      'CAP',
      'HCAP/HAP',
      'VAP',
      'Aspiration PNA',
      'Biliary',
      'Spontaneous intraperitoneal',
      'Secondary intraabdominal',
      'GI',
      'Lower GU',
      'Upper GU',
      'GU with instrumentation',
      'Empiric therapy',
      'Neutropenic fever'
    ]
  },
  'ESBL': {
    class: 'esbl',
    commonAntibiotics: [
      'Ertapenem',
      'Mero/Dori/Imipenem',
      'Fosfomycin'
    ],
    sometimesAntibiotics: ['Nitrofurantoin'],
    commonInfectionTypes: [],
    sometimesInfectionTypes: [
      'Deep soft tissue, bone, and hardware',
      'Line-associated',
      'Meningitis',
      'Endocarditis',
      'HCAP/HAP',
      'VAP',
      'Biliary',
      'Spontaneous intraperitoneal',
      'Secondary intraabdominal',
      'GI',
      'Lower GU',
      'Upper GU',
      'GU with instrumentation',
      'Empiric therapy',
      'Neutropenic fever'
    ]
  },
  'Anaerobes': {
    class: 'anaerobes',
    commonAntibiotics: [
      'Ampicillin Sulbactam (Unasyn)',
      'Amoxicillin-Clavulanate (Augmentin)',
      'Piperacillin-Tazobactam (Zosyn)',
      'Ertapenem',
      'Mero/Dori/Imipenem',
      'Vancomycin PO',
      'Tigecycline',
      'Metronidazole',
      'Clindamycin'
    ],
    sometimesAntibiotics: [
      'Cefoxitin',
      'Cefotetan',
      'Ceftriaxone',
      'Moxifloxacin'
    ],
    commonInfectionTypes: [
      'Deep soft tissue, bone, and hardware',
      'Aspiration PNA',
      'Biliary',
      'Secondary intraabdominal',
      'GI',
      'Empiric therapy',
      'Neutropenic fever'
    ],
    sometimesInfectionTypes: [
      'Superficial skin/soft tissue',
      'Spontaneous intraperitoneal',
      'GU with instrumentation'
    ]
  },
  'Atypicals': {
    class: 'atypicals',
    commonAntibiotics: [
      'Erythro/Azithromycin',
      'Ciprofloxacin',
      'Levofloxacin',
      'Moxifloxacin',
      'Doxycycline',
      'Tigecycline'
    ],
    sometimesAntibiotics: [],
    commonInfectionTypes: [
      'CAP',
      'HCAP/HAP',
      'Empiric therapy'
    ],
    sometimesInfectionTypes: ['Neutropenic fever']
  }
};

const INFECTION_TYPES = {
  'Superficial skin/soft tissue': {
    class: 'superficial-soft-tissue',
    commonAntibiotics: [
      'PCN/Amox/Ampicillin',
      'Naf/Oxacillin',
      'Dicloxacillin',
      'Ampicillin Sulbactam (Unasyn)',
      'Amoxicillin-Clavulanate (Augmentin)',
      'Vancomycin',
      'Cefazolin',
      'Ceftaroline',
      'Linezolid',
      'Cephalexin',
      'TMP-SMX',
      'Doxycycline',
      'Tigecycline',
      'Clindamycin'
    ],
    sometimesAntibiotics: [
      'Piperacillin-Tazobactam (Zosyn)',
      'Ertapenem',
      'Mero/Dori/Imipenem',
      'Daptomycin',
      'Cefoxitin',
      'Cefotetan',
      'Erythro/Azithromycin',
      'Ciprofloxacin',
      'Levofloxacin',
      'Moxifloxacin'
    ],
    commonBacteria: ['Strep', 'MRSA', 'MSSA'],
    sometimesBacteria: ['VRE', 'Enterococcus', 'GNRs', 'Pseudomonas', 'ESCAPPM', 'Anaerobes']
  },
  'Deep soft tissue, bone, and hardware': {
    class: 'deep-soft-tissue',
    commonAntibiotics: [
      'Naf/Oxacillin',
      'Ampicillin Sulbactam (Unasyn)',
      'Amoxicillin-Clavulanate (Augmentin)',
      'Piperacillin-Tazobactam (Zosyn)',
      'Ertapenem',
      'Mero/Dori/Imipenem',
      'Vancomycin',
      'Linezolid',
      'Daptomycin',
      'Cefazolin',
      'Ceftriaxone',
      'Ceftazidime',
      'Cefepime',
      'Ceftaroline',
      'Aztreonam',
      'Amikacin/Gentamicin/Tobramycin',
      'TMP-SMX',
      'Doxycycline',
      'Tigecycline',
      'Metronidazole',
      'Clindamycin'
    ],
    sometimesAntibiotics: [
      'PCN/Amox/Ampicillin',
      'Dicloxacillin',
      'Cefoxitin',
      'Cefotetan',
      'Cephalexin',
      'Erythro/Azithromycin',
      'Ciprofloxacin',
      'Levofloxacin',
      'Moxifloxacin'
    ],
    commonBacteria: ['Strep', 'MSSA', 'MRSA', 'GNRs', 'Pseudomonas', 'Anaerobes'],
    sometimesBacteria: ['VRE', 'Enterococcus', 'ESCAPPM', 'ESBL']
  },
  'Line-associated': {
    class: 'line-associated',
    commonAntibiotics: [
      'Naf/Oxacillin',
      'Ampicillin Sulbactam (Unasyn)',
      'Amoxicillin-Clavulanate (Augmentin)',
      'Piperacillin-Tazobactam (Zosyn)',
      'Ertapenem',
      'Mero/Dori/Imipenem',
      'Vancomycin',
      'Daptomycin',
      'Cefazolin',
      'Ceftriaxone',
      'Ceftazidime',
      'Cefepime',
      'Ceftaroline',
      'Aztreonam',
      'Amikacin/Gentamicin/Tobramycin'
    ],
    sometimesAntibiotics: [
      'Dicloxacillin',
      'Linezolid',
      'Cefoxitin',
      'Cefotetan',
      'Cephalexin',
      'TMP-SMX',
      'Doxycycline',
      'Tigecycline'
    ],
    commonBacteria: ['Strep', 'MSSA', 'MRSA', 'Enterococcus', 'GNRs', 'Pseudomonas'],
    sometimesBacteria: ['VRE', 'ESCAPPM', 'ESBL']
  },
  'Meningitis': {
    class: 'meningitis',
    commonAntibiotics: [
      'Piperacillin-Tazobactam (Zosyn)',
      'Mero/Dori/Imipenem',
      'Vancomycin',
      'Daptomycin',
      'Ceftriaxone',
      'Ceftazidime',
      'Cefepime',
      'Aztreonam'
    ],
    sometimesAntibiotics: [
      'Linezolid',
      'Ertapenem'
    ],
    commonBacteria: ['Strep', 'GNRs'],
    sometimesBacteria: ['MSSA', 'MRSA', 'VRE', 'Enterococcus', 'Pseudomonas', 'ESCAPPM', 'ESBL']
  },
  'Endocarditis': {
    class: 'endocarditis',
    commonAntibiotics: [
      'Naf/Oxacillin',
      'Ampicillin Sulbactam (Unasyn)',
      'Amoxicillin-Clavulanate (Augmentin)',
      'Piperacillin-Tazobactam (Zosyn)',
      'Ertapenem',
      'Mero/Dori/Imipenem',
      'Vancomycin',
      'Daptomycin',
      'Cefazolin',
      'Ceftriaxone',
      'Ceftazidime',
      'Cefepime',
      'Ceftaroline',
      'Aztreonam',
      'Amikacin/Gentamicin/Tobramycin'
    ],
    sometimesAntibiotics: [
      'PCN/Amox/Ampicillin',
      'Dicloxacillin',
      'Linezolid',
      'Cephalexin',
      'Cefoxitin',
      'Cefotetan',
      'TMP-SMX',
      'Doxycycline',
      'Tigecycline'
    ],
    commonBacteria: ['Strep', 'MSSA', 'MRSA', 'Enterococcus'],
    sometimesBacteria: ['VRE', 'Pseudomonas', 'ESCAPPM', 'ESBL', 'GNRs']
  },
  'CAP': {
    class: 'cap',
    commonAntibiotics: [
      'PCN/Amox/Ampicillin',
      'Ceftriaxone',
      'Erythro/Azithromycin',
      'Levofloxacin',
      'Moxifloxacin',
      'Ceftaroline',
      'TMP-SMX',
      'Doxycycline',
      'Tigecycline'
    ],
    sometimesAntibiotics: [
      'Ampicillin Sulbactam (Unasyn)',
      'Amoxicillin-Clavulanate (Augmentin)',
      'Piperacillin-Tazobactam (Zosyn)',
      'Ertapenem',
      'Mero/Dori/Imipenem',
      'Cefazolin',
      'Cephalexin',
      'Cefoxitin',
      'Cefotetan'
    ],
    commonBacteria: ['Strep', 'GNRs', 'Atypicals'],
    sometimesBacteria: ['MRSA', 'MSSA', 'ESCAPPM']
  },
  'HCAP/HAP': {
    class: 'hcap',
    commonAntibiotics: [
      'Piperacillin-Tazobactam (Zosyn)',
      'Ertapenem',
      'Mero/Dori/Imipenem',
      'Vancomycin',
      'Ceftriaxone',
      'Ceftazidime',
      'Cefepime',
      'Ceftaroline',
      'Levofloxacin',
      'Moxifloxacin',
      'Tigecycline'
    ],
    sometimesAntibiotics: [
      'Naf/Oxacillin',
      'Dicloxacillin',
      'Ampicillin Sulbactam (Unasyn)',
      'Amoxicillin-Clavulanate (Augmentin)',
      'Linezolid',
      'Cefazolin',
      'Cephalexin',
      'Cefoxitin',
      'Cefotetan',
      'Doxycycline',
      'Erythro/Azithromycin',
      'Aztreonam',
      'Amikacin/Gentamicin/Tobramycin',
      'TMP-SMX',
      'Ciprofloxacin'
    ],
    commonBacteria: ['Strep', 'MSSA', 'MRSA', 'GNRs', 'Atypicals'],
    sometimesBacteria: ['Pseudomonas', 'ESCAPPM', 'ESBL']
  },
  'VAP': {
    class: 'vap',
    commonAntibiotics: [
      'Piperacillin-Tazobactam (Zosyn)',
      'Ertapenem',
      'Mero/Dori/Imipenem',
      'Vancomycin',
      'Linezolid',
      'Ceftazidime',
      'Cefepime',
      'Ceftaroline',
      'Aztreonam',
      'Amikacin/Gentamicin/Tobramycin'
    ],
    sometimesAntibiotics: [
      'Naf/Oxacillin',
      'Dicloxacillin',
      'Ampicillin Sulbactam (Unasyn)',
      'Amoxicillin-Clavulanate (Augmentin)',
      'Cefazolin',
      'Cephalexin',
      'Cefoxitin',
      'Cefotetan',
      'Ceftriaxone',
      'Levofloxacin',
      'Moxifloxacin',
      'Tigecycline'
    ],
    commonBacteria: ['Strep', 'MSSA', 'MRSA', 'GNRs', 'Pseudomonas'],
    sometimesBacteria: ['ESCAPPM', 'ESBL']
  },
  'Aspiration PNA': {
    class: 'aspiration-pna',
    commonAntibiotics: [
      'Ampicillin Sulbactam (Unasyn)',
      'Amoxicillin-Clavulanate (Augmentin)',
      'Piperacillin-Tazobactam (Zosyn)',
      'Ertapenem',
      'Mero/Dori/Imipenem',
      'Ceftriaxone',
      'Moxifloxacin',
      'Clindamycin'
    ],
    sometimesAntibiotics: [
      'PCN/Amox/Ampicillin',
      'Naf/Oxacillin',
      'Dicloxacillin',
      'Vancomycin',
      'Linezolid',
      'Cefazolin',
      'Cephalexin',
      'Ceftazidime',
      'Cefepime',
      'Ceftaroline',
      'Cefoxitin',
      'Cefotetan',
      'Ciprofloxacin',
      'Levofloxacin',
      'Erythro/Azithromycin',
      'Doxycycline',
      'TMP-SMX',
      'Tigecycline',
      'Metronidazole'
    ],
    commonBacteria: ['Strep', 'Anaerobes'],
    sometimesBacteria: ['MRSA', 'MSSA', 'GNRs', 'ESCAPPM']
  },
  'Biliary': {
    class: 'biliary',
    commonAntibiotics: [
      'Ampicillin Sulbactam (Unasyn)',
      'Amoxicillin-Clavulanate (Augmentin)',
      'Piperacillin-Tazobactam (Zosyn)',
      'Ertapenem',
      'Mero/Dori/Imipenem',
      'Ceftriaxone',
      'Ceftazidime',
      'Cefepime',
      'Levofloxacin',
      'Aztreonam',
      'Amikacin/Gentamicin/Tobramycin',
      'Moxifloxacin'
    ],
    sometimesAntibiotics: [
      'Linezolid',
      'Daptomycin',
      'Cefazolin',
      'Cephalexin',
      'Cefoxitin',
      'Cefotetan',
      'Ceftaroline',
      'Tigecycline',
      'Metronidazole',
      'Clindamycin',
      'TMP-SMX',
      'Vancomycin'
    ],
    commonBacteria: ['GNRs', 'Pseudomonas', 'Anaerobes'],
    sometimesBacteria: ['Strep', 'VRE', 'Enterococcus', 'ESCAPPM', 'ESBL']
  },
  'Spontaneous intraperitoneal': {
    class: 'spontaneous-intraperitoneal',
    commonAntibiotics: [
      'Piperacillin-Tazobactam (Zosyn)',
      'Ertapenem',
      'Mero/Dori/Imipenem',
      'Ceftriaxone',
      'Ceftazidime',
      'Cefepime',
      'Levofloxacin',
      'Aztreonam',
      'Moxifloxacin',
      'Amikacin/Gentamicin/Tobramycin',
      'Tigecycline'
    ],
    sometimesAntibiotics: [
      'Ampicillin Sulbactam (Unasyn)',
      'Amoxicillin-Clavulanate (Augmentin)',
      'Vancomycin',
      'Linezolid',
      'Daptomycin',
      'Cefazolin',
      'Cephalexin',
      'Cefoxitin',
      'Cefotetan',
      'Ceftaroline',
      'Ciprofloxacin',
      'TMP-SMX',
      'Clindamycin'
    ],
    commonBacteria: ['GNRs'],
    sometimesBacteria: [
      'Strep',
      'MSSA',
      'MRSA',
      'Pseudomonas',
      'ESCAPPM',
      'Anaerobes',
      'ESBL'
    ]
  },
  'Secondary intraabdominal': {
    class: 'secondary-intraperitoneal',
    commonAntibiotics: [
      'Ampicillin Sulbactam (Unasyn)',
      'Amoxicillin-Clavulanate (Augmentin)',
      'Piperacillin-Tazobactam (Zosyn)',
      'Ertapenem',
      'Mero/Dori/Imipenem',
      'Ceftriaxone',
      'Ceftazidime',
      'Cefepime',
      'Levofloxacin',
      'Aztreonam',
      'Amikacin/Gentamicin/Tobramycin',
      'Tigecycline',
      'Metronidazole',
      'Moxifloxacin'
    ],
    sometimesAntibiotics: [
      'Vancomycin',
      'Linezolid',
      'Daptomycin',
      'Cefazolin',
      'Cephalexin',
      'Cefoxitin',
      'Cefotetan',
      'Ceftaroline',
      'Ciprofloxacin',
      'Clindamycin',
      'TMP-SMX'
    ],
    commonBacteria: ['Strep', 'MSSA', 'MRSA', 'Enterococcus', 'GNRs', 'Anaerobes'],
    sometimesBacteria: ['VRE', 'Pseudomonas', 'ESCAPPM', 'ESBL']
  },
  'GI': {
    class: 'gi',
    commonAntibiotics: [
      'Ampicillin Sulbactam (Unasyn)',
      'Amoxicillin-Clavulanate (Augmentin)',
      'Piperacillin-Tazobactam (Zosyn)',
      'Ertapenem',
      'Mero/Dori/Imipenem',
      'Vancomycin PO',
      'Ceftriaxone',
      'Ceftazidime',
      'Cefepime',
      'Ciprofloxacin',
      'Aztreonam',
      'Amikacin/Gentamicin/Tobramycin',
      'Moxifloxacin',
      'TMP-SMX',
      'Tigecycline',
      'Metronidazole',
      'Levofloxacin',
      'Doxycycline'
    ],
    sometimesAntibiotics: [
      'Cefazolin',
      'Cephalexin',
      'Cefoxitin',
      'Cefotetan',
      'Ceftaroline',
      'Erythro/Azithromycin',
      'Vancomycin',
      'Clindamycin',
      'Daptomycin'
    ],
    commonBacteria: ['GNRs', 'Anaerobes'],
    sometimesBacteria: ['Strep', 'Pseudomonas', 'ESCAPPM', 'ESBL']
  },
  'Lower GU': {
    class: 'lower-gu',
    commonAntibiotics: [
      'Ampicillin Sulbactam (Unasyn)',
      'Amoxicillin-Clavulanate (Augmentin)',
      'PCN/Amox/Ampicillin',
      'Cefazolin',
      'Cephalexin',
      'Ceftriaxone',
      'Nitrofurantoin',
      'Fosfomycin',
      'Ciprofloxacin',
      'Amikacin/Gentamicin/Tobramycin',
      'Levofloxacin',
      'Aztreonam',
      'TMP-SMX'
    ],
    sometimesAntibiotics: [
      'Naf/Oxacillin',
      'Dicloxacillin',
      'Piperacillin-Tazobactam (Zosyn)',
      'Ertapenem',
      'Mero/Dori/Imipenem',
      'Ceftazidime',
      'Cefepime',
      'Ceftaroline',
      'Cefoxitin',
      'Cefotetan',
      'Erythro/Azithromycin',
      'Doxycycline',
      'Tigecycline'
    ],
    commonBacteria: ['Enterococcus', 'GNRs'],
    sometimesBacteria: ['Strep', 'VRE', 'Pseudomonas', 'ESCAPPM', 'ESBL']
  },
  'Upper GU': {
    class: 'upper-gu',
    commonAntibiotics: [
      'Ampicillin Sulbactam (Unasyn)',
      'Amoxicillin-Clavulanate (Augmentin)',
      'Piperacillin-Tazobactam (Zosyn)',
      'Ertapenem',
      'Mero/Dori/Imipenem',
      'Ceftriaxone',
      'Ceftazidime',
      'Cefepime',
      'Aztreonam',
      'Amikacin/Gentamicin/Tobramycin',
      'Erythro/Azithromycin',
      'Levofloxacin',
      'TMP-SMX'
    ],
    sometimesAntibiotics: [
      'PCN/Amox/Ampicillin',
      'Naf/Oxacillin',
      'Dicloxacillin',
      'Cefazolin',
      'Cephalexin',
      'Ciprofloxacin',
      'Cefoxitin',
      'Cefotetan',
      'Ceftaroline',
      'Doxycycline',
      'Tigecycline'
    ],
    commonBacteria: ['Enterococcus', 'GNRs'],
    sometimesBacteria: ['Strep', 'VRE', 'Pseudomonas', 'ESCAPPM', 'ESBL']
  },
  'GU with instrumentation': {
    class: 'gu-w-instrumentation',
    commonAntibiotics: [
      'Piperacillin-Tazobactam (Zosyn)',
      'Ertapenem',
      'Mero/Dori/Imipenem',
      'Vancomycin',
      'Linezolid',
      'Daptomycin',
      'Ceftriaxone',
      'Ceftazidime',
      'Cefepime',
      'Ceftaroline',
      'Aztreonam',
      'Amikacin/Gentamicin/Tobramycin',
      'Levofloxacin',
      'Moxifloxacin',
      'TMP-SMX'
    ],
    sometimesAntibiotics: [
      'Naf/Oxacillin',
      'Dicloxacillin',
      'Ampicillin Sulbactam (Unasyn)',
      'Amoxicillin-Clavulanate (Augmentin)',
      'Cefazolin',
      'Cephalexin',
      'Cefoxitin',
      'Cefotetan',
      'Ciprofloxacin',
      'Doxycycline',
      'Tigecycline',
      'Metronidazole',
      'Clindamycin'
    ],
    commonBacteria: ['Strep', 'MSSA', 'MRSA', 'Enterococcus', 'GNRs'],
    sometimesBacteria: ['VRE', 'Pseudomonas', 'ESCAPPM', 'ESBL', 'Anaerobes']
  },
  'Zoonotics and STIs': {
    class: 'zoonotics',
    commonAntibiotics: [],
    sometimesAntibiotics: [],
    commonBacteria: [],
    sometimesBacteria: []
  },
  'Empiric therapy': {
    class: 'empiric-therapy',
    commonAntibiotics: [
      'Piperacillin-Tazobactam (Zosyn)',
      'Mero/Dori/Imipenem',
      'Vancomycin',
      'Linezolid',
      'Daptomycin',
      'Cefepime',
      'Ceftaroline',
      'Aztreonam',
      'Amikacin/Gentamicin/Tobramycin',
      'Erythro/Azithromycin',
      'Levofloxacin',
      'Moxifloxacin',
      'Doxycycline'
    ],
    sometimesAntibiotics: [
      'Tigecycline',
      'Metronidazole',
      'Clindamycin'
    ],
    commonBacteria: [
      'Strep',
      'MSSA',
      'MRSA',
      'GNRs',
      'Pseudomonas',
      'Anaerobes',
      'Atypicals'
    ],
    sometimesBacteria: ['VRE', 'Enterococcus', 'ESCAPPM', 'ESBL']
  },
  'Neutropenic fever': {
    class: 'neutropenic-fever',
    commonAntibiotics: [
      'Piperacillin-Tazobactam (Zosyn)',
      'Mero/Dori/Imipenem',
      'Vancomycin',
      'Linezolid',
      'Daptomycin',
      'Cefepime',
      'Ceftaroline',
      'Aztreonam',
      'Amikacin/Gentamicin/Tobramycin',
      'Erythro/Azithromycin',
      'Levofloxacin',
      'Moxifloxacin',
      'Doxycycline'
    ],
    sometimesAntibiotics: [
      'Tigecycline',
      'Metronidazole',
      'Clindamycin'
    ],
    commonBacteria: [
      'Strep',
      'MSSA',
      'MRSA',
      'GNRs',
      'Pseudomonas',
      'Anaerobes'
    ],
    sometimesBacteria: ['ESCAPPM', 'ESBL', 'Atypicals']
  }
};
