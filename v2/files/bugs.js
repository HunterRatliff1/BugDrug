const BACTERIA = {
    'GNR': {
        name: 'Enterobacterales (gram negative rods)',
        fullName: 'Enterobacterales (gram negative rods)',
        bugClass: 'GN',
        synd: {
            Empiric:'', UTI:'', CAP:'', HAP:'', 
            SSTI:'', Foot:'', Osteo:'', 
            IAI:'', Hepatobiliary:'', SBP:'', 
            Meningitis:'', EDA:'', 
            Oral:''},
        abxMain: ['', '', '', '', ''],
        abxRare: [],
        synMain: [],
        synRare: [],
        comments: ''
    },
    'PsA': {
        name: 'Pseudomonas',
        fullName: '',
        bugClass: 'GN',
        synd: {
            Empiric:'', UTI:'', CAP:'', HAP:'', 
            SSTI:'', Foot:'', Osteo:'', 
            IAI:'', Hepatobiliary:'', SBP:'', 
            Meningitis:'', EDA:'', 
            Oral:''},
        abxMain: ['Cefepime', '', '', '', ''],
        abxRare: [],
        synMain: [],
        synRare: [],
        comments: ''
    },
    'AmpC': {
        name: 'AmpC producers (HECK Yes)',
        fullName: '',
        bugClass: 'GN',
        synd: {
            Empiric:'', UTI:'', CAP:'', HAP:'', 
            SSTI:'', Foot:'', Osteo:'', 
            IAI:'', Hepatobiliary:'', SBP:'', 
            Meningitis:'', EDA:'', 
            Oral:''},
        abxMain: ['', '', '', '', ''],
        abxRare: [],
        synMain: [],
        synRare: [],
        comments: ''
    },
    'ESBL': {
        name: 'Extended-spectrum beta-lactamases',
        fullName: '',
        bugClass: 'GN',
        synd: {
            Empiric:'', UTI:'', CAP:'', HAP:'', 
            SSTI:'', Foot:'', Osteo:'', 
            IAI:'', Hepatobiliary:'', SBP:'', 
            Meningitis:'', EDA:'', 
            Oral:''},
        abxMain: ['', '', '', '', ''],
        abxRare: [],
        synMain: [],
        synRare: [],
        comments: ''
    },
    'CRE': {
        name: 'Carbapenem-resistant Enterobacterales',
        fullName: '',
        bugClass: 'GN',
        synd: {
            Empiric:'', UTI:'', CAP:'', HAP:'', 
            SSTI:'', Foot:'', Osteo:'', 
            IAI:'', Hepatobiliary:'', SBP:'', 
            Meningitis:'', EDA:'', 
            Oral:''},
        abxMain: ['', '', '', '', ''],
        abxRare: [],
        synMain: [],
        synRare: [],
        comments: ''
    },
    'Others': {
        name: 'Other notable Enterobacterales',
        fullName: '',
        bugClass: 'GN',
        synd: {
            Empiric:'', UTI:'', CAP:'', HAP:'', 
            SSTI:'', Foot:'', Osteo:'', 
            IAI:'', Hepatobiliary:'', SBP:'', 
            Meningitis:'', EDA:'', 
            Oral:''},
        abxMain: ['', '', '', '', ''],
        abxRare: [],
        synMain: [],
        synRare: [],
        comments: ''
    },     
    'MSSA': {
        name: 'MSSA',
        fullName: '',
        bugClass: 'GP',
        synd: {
            Empiric:'', UTI:'', CAP:'', HAP:'', 
            SSTI:'', Foot:'', Osteo:'', 
            IAI:'', Hepatobiliary:'', SBP:'', 
            Meningitis:'', EDA:'', 
            Oral:''},
        abxMain: ['', '', '', '', ''],
        abxRare: [],
        synMain: [],
        synRare: [],
        comments: ''
    },
    'MRSA': {
        name: 'MRSA',
        fullName: '',
        bugClass: 'GP',
        synd: {
            Empiric:'', UTI:'', CAP:'', HAP:'', 
            SSTI:'', Foot:'', Osteo:'', 
            IAI:'', Hepatobiliary:'', SBP:'', 
            Meningitis:'', EDA:'', 
            Oral:''},
        abxMain: ['Vanc', '', '', '', ''],
        abxRare: [],
        synMain: [],
        synRare: [],
        comments: ''
    },
    'SOSA': {
        name: 'Staph other than Staph aureus',
        fullName: '',
        bugClass: 'GP',
        synd: {
            Empiric:'', UTI:'', CAP:'', HAP:'', 
            SSTI:'', Foot:'', Osteo:'', 
            IAI:'', Hepatobiliary:'', SBP:'', 
            Meningitis:'', EDA:'', 
            Oral:''},
        abxMain: ['', '', '', '', ''],
        abxRare: [],
        synMain: [],
        synRare: [],
        comments: ''
    },  
    'Strep': {
        name: 'Strep spp.',
        fullName: '',
        bugClass: 'GP',
        synd: {
            Empiric:'', UTI:'', CAP:'', HAP:'', 
            SSTI:'', Foot:'', Osteo:'', 
            IAI:'', Hepatobiliary:'', SBP:'', 
            Meningitis:'', EDA:'', 
            Oral:''},
        abxMain: ['', '', '', '', ''],
        abxRare: [],
        synMain: [],
        synRare: [],
        comments: ''
    },  
    'VSE': {
        name: 'Vancomycin-sensitive Enterococcus',
        fullName: '',
        bugClass: 'GP',
        synd: {
            Empiric:'', UTI:'', CAP:'', HAP:'', 
            SSTI:'', Foot:'', Osteo:'', 
            IAI:'', Hepatobiliary:'', SBP:'', 
            Meningitis:'', EDA:'', 
            Oral:''},
        abxMain: ['', '', '', '', ''],
        abxRare: [],
        synMain: [],
        synRare: [],
        comments: ''
    },
    'VRE': {
        name: 'Vancomycin-resistant Enterococcus',
        fullName: '',
        bugClass: 'GP',
        synd: {
            Empiric:'', UTI:'', CAP:'', HAP:'', 
            SSTI:'', Foot:'', Osteo:'', 
            IAI:'', Hepatobiliary:'', SBP:'', 
            Meningitis:'', EDA:'', 
            Oral:''},
        abxMain: ['', '', '', '', ''],
        abxRare: [],
        synMain: [],
        synRare: [],
        comments: ''
    },
    'anaerobes': {
        name: 'Anaerobes',
        fullName: '',
        bugClass: 'ana',
        synd: {
            Empiric:'', UTI:'', CAP:'', HAP:'', 
            SSTI:'', Foot:'', Osteo:'', 
            IAI:'', Hepatobiliary:'', SBP:'', 
            Meningitis:'', EDA:'', 
            Oral:''},
        abxMain: ['', '', '', '', ''],
        abxRare: [],
        synMain: [],
        synRare: [],
        comments: ''
    },
    'PNA': {
        name: 'Atypical penumonias',
        fullName: '',
        bugClass: 'atyp',
        synd: {
            Empiric:'', UTI:'', CAP:'', HAP:'', 
            SSTI:'', Foot:'', Osteo:'', 
            IAI:'', Hepatobiliary:'', SBP:'', 
            Meningitis:'', EDA:'', 
            Oral:''},
        abxMain: ['', '', '', '', ''],
        abxRare: [],
        synMain: [],
        synRare: [],
        comments: ''
    },
    'Zoo': {
        name: 'Zoonotic bacteria',
        fullName: '',
        bugClass: 'atyp',
        synd: {
            Empiric:'', UTI:'', CAP:'', HAP:'', 
            SSTI:'', Foot:'', Osteo:'', 
            IAI:'', Hepatobiliary:'', SBP:'', 
            Meningitis:'', EDA:'', 
            Oral:''},
        abxMain: ['', '', '', '', ''],
        abxRare: [],
        synMain: [],
        synRare: [],
        comments: ''
    }
};

