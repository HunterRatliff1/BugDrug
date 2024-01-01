const ANTIBIOTICS = {
    /*** PENICILLINS
            AMP       PCN/Amox/Ampicillin
            NAF       Naf/Oxacillin/Dicloxacillin
            Unasyn    Ampicillin Sulbactam (Unasyn)
            Augmentin Amoxicillin-Clavulanate (Augmentin)
            Zosyn     Piperacillin-Tazobactam (Zosyn)
    ***/
    'AMP': {
        name: 'Amox/Amp',
        fullName: '',
        abxClass: 'penicillins',
        bugs: {
            GNR:'', PsA:'', AmpC:'', 
            ESBL:'', CRE:'', Others:'', 
            MSSA:'', MRSA:'', SOSA:'', 
            Strep:'', VRE:'', VSE:'',
            anaerobes:'', PNA:'', Zoo:''},
        synd: {
            Empiric:'', UTI:'', CAP:'', HAP:'', 
            SSTI:'', Foot:'', Osteo:'', 
            IAI:'', Hepatobiliary:'', SBP:'', 
            Meningitis:'', SA:'', 
            Oral:''},
        comments: 'comment goes here'
    },
    'NAF': {
        name: 'Naf/Oxacillin',
        fullName: '',
        abxClass: 'penicillins',
        bugs: {
            GNR:'', PsA:'', AmpC:'', 
            ESBL:'', CRE:'', Others:'', 
            MSSA:'', MRSA:'', SOSA:'', 
            Strep:'', VRE:'', VSE:'',
            anaerobes:'', PNA:'', Zoo:''},
        synd: {
            Empiric:'', UTI:'', CAP:'', HAP:'', 
            SSTI:'', Foot:'', Osteo:'', 
            IAI:'', Hepatobiliary:'', SBP:'', 
            Meningitis:'', SA:'', 
            Oral:''},
        comments: 'comment goes here'
    },
    'Unasyn': {
        name: 'Unasyn',
        fullName: 'AMP/SUL',
        abxClass: 'penicillins',
        bugs: {
            GNR:'', PsA:'', AmpC:'', 
            ESBL:'', CRE:'', Others:'', 
            MSSA:'', MRSA:'', SOSA:'', 
            Strep:'', VRE:'', VSE:'',
            anaerobes:'', PNA:'', Zoo:''},
        synd: {
            Empiric:'', UTI:'', CAP:'', HAP:'', 
            SSTI:'', Foot:'', Osteo:'', 
            IAI:'', Hepatobiliary:'', SBP:'', 
            Meningitis:'', SA:'', 
            Oral:''},
        comments: 'comment goes here'
    },
    'Augmentin': {
        name: 'Augmentin',
        fullName: 'AMX/CLA',
        abxClass: 'penicillins',
        bugs: {
            GNR:'', PsA:'', AmpC:'', 
            ESBL:'', CRE:'', Others:'', 
            MSSA:'', MRSA:'', SOSA:'', 
            Strep:'', VRE:'', VSE:'',
            anaerobes:'', PNA:'', Zoo:''},
        synd: {
            Empiric:'', UTI:'', CAP:'', HAP:'', 
            SSTI:'', Foot:'', Osteo:'', 
            IAI:'', Hepatobiliary:'', SBP:'', 
            Meningitis:'', SA:'', 
            Oral:''},
        comments: 'comment goes here'
    },
    'Zosyn': {
        name: 'Zosyn',
        fullName: 'Piperacillin/tazobactam (PIP/TZB)',
        abxClass: 'penicillins',
        bugs: {
            GNR:'', PsA:'', AmpC:'', 
            ESBL:'', CRE:'', Others:'', 
            MSSA:'', MRSA:'', SOSA:'', 
            Strep:'', VRE:'', VSE:'',
            anaerobes:'', PNA:'', Zoo:''},
        synd: {
            Empiric:'', UTI:'', CAP:'', HAP:'', 
            SSTI:'', Foot:'', Osteo:'', 
            IAI:'', Hepatobiliary:'', SBP:'', 
            Meningitis:'', SA:'', 
            Oral:''},
        comments: 'comment goes here'
    },

    /*** CEPHALOSPORINS
     * CFZ Cefazolin / Cephalexin (1G)
     * FOX Cefoxitin (2G)
     * CRO Ceftriaxone / Ceftazidime (3G)
     * FEP Cefepime (4G)
     * CPT Ceftaroline (5G)
    ***/
    'CFZ': {
        name: 'Cefazolin (1G)',
        fullName: 'Cefazolin / Cephalexin <small>(1G)</small>',
        abxClass: 'cephalosporins',
        bugs: {
            GNR:'', PsA:'', AmpC:'', 
            ESBL:'', CRE:'', Others:'', 
            MSSA:'', MRSA:'', SOSA:'', 
            Strep:'', VRE:'', VSE:'',
            anaerobes:'', PNA:'', Zoo:''},
        synd: {
            Empiric:'', UTI:'', CAP:'', HAP:'', 
            SSTI:'', Foot:'', Osteo:'', 
            IAI:'', Hepatobiliary:'', SBP:'', 
            Meningitis:'', SA:'', 
            Oral:''},
        comments: 'comment goes here'
    },
    'FOX': {
        name: 'Cefoxitin (2G)',
        fullName: '',
        abxClass: 'cephalosporins',
        bugs: {
            GNR:'', PsA:'', AmpC:'', 
            ESBL:'', CRE:'', Others:'', 
            MSSA:'', MRSA:'', SOSA:'', 
            Strep:'', VRE:'', VSE:'',
            anaerobes:'', PNA:'', Zoo:''},
        synd: {
            Empiric:'', UTI:'', CAP:'', HAP:'', 
            SSTI:'', Foot:'', Osteo:'', 
            IAI:'', Hepatobiliary:'', SBP:'', 
            Meningitis:'', SA:'', 
            Oral:''},
        comments: 'comment goes here'
    },
    'CRO': {
        name: 'Ceftriaxone (3G)',
        fullName: 'Ceftriaxone / Ceftazidime (3G)',
        abxClass: 'cephalosporins',
        bugs: {
            GNR:'', PsA:'', AmpC:'', 
            ESBL:'', CRE:'', Others:'', 
            MSSA:'', MRSA:'', SOSA:'', 
            Strep:'', VRE:'', VSE:'',
            anaerobes:'', PNA:'', Zoo:''},
        synd: {
            Empiric:'', UTI:'', CAP:'', HAP:'', 
            SSTI:'', Foot:'', Osteo:'', 
            IAI:'', Hepatobiliary:'', SBP:'', 
            Meningitis:'', SA:'', 
            Oral:''},
        comments: 'comment goes here'
    },
    'Cefepime': {
        name: 'Cefepime (4G)',
        fullName: '',
        abxClass: 'cephalosporins',
        bugs: {
            GNR:'good', PsA:'good', AmpC:'some', 
            ESBL:'bad', CRE:'bad', Others:'', 
            MSSA:'good', MRSA:'bad', SOSA:'', 
            Strep:'good', VRE:'', VSE:'',
            anaerobes:'', PNA:'', Zoo:''},
        synd: {
            Empiric:'', UTI:'', CAP:'', HAP:'', 
            SSTI:'', Foot:'', Osteo:'', 
            IAI:'', Hepatobiliary:'', SBP:'', 
            Meningitis:'', SA:'', 
            Oral:''},
        comments: 'comment goes here'
    },
    'CPT': {
        name: 'Ceftaroline (5G)',
        fullName: '',
        abxClass: 'cephalosporins',
        bugs: {
            GNR:'', PsA:'', AmpC:'', 
            ESBL:'', CRE:'', Others:'', 
            MSSA:'', MRSA:'', SOSA:'', 
            Strep:'', VRE:'', VSE:'',
            anaerobes:'', PNA:'', Zoo:''},
        synd: {
            Empiric:'', UTI:'', CAP:'', HAP:'', 
            SSTI:'', Foot:'', Osteo:'', 
            IAI:'', Hepatobiliary:'', SBP:'', 
            Meningitis:'', SA:'', 
            Oral:''},
        comments: 'comment goes here'
    },

    /*** GRAM POSITIVES
     * VAN Vancomycin
     * LZD Linezolid
     * DAP Daptomycin
    ***/

    'VAN': {
        name: 'Vancomycin',
        fullName: '',
        abxClass: 'gram-positives',
        bugs: {
            GNR:'', PsA:'', AmpC:'', 
            ESBL:'', CRE:'', Others:'', 
            MSSA:'broad', MRSA:'good', SOSA:'good', 
            Strep:'good', VRE:'bad', VSE:'good',
            anaerobes:'', PNA:'', Zoo:''},
        synd: {
            Empiric:'', UTI:'', CAP:'', HAP:'', 
            SSTI:'', Foot:'', Osteo:'', 
            IAI:'', Hepatobiliary:'', SBP:'', 
            Meningitis:'', SA:'', 
            Oral:''},
        comments: 'comment goes here'
    },
    'LZD': {
        name: 'Linezolid',
        fullName: '',
        abxClass: 'gram-positives',
        bugs: {
            GNR:'', PsA:'', AmpC:'', 
            ESBL:'', CRE:'', Others:'', 
            MSSA:'', MRSA:'', SOSA:'', 
            Strep:'', VRE:'', VSE:'',
            anaerobes:'', PNA:'', Zoo:''},
        synd: {
            Empiric:'', UTI:'', CAP:'', HAP:'', 
            SSTI:'', Foot:'', Osteo:'', 
            IAI:'', Hepatobiliary:'', SBP:'', 
            Meningitis:'', SA:'', 
            Oral:''},
        comments: 'comment goes here'
    },
    'DAP': {
        name: 'Daptomycin',
        fullName: '',
        abxClass: 'gram-positives',
        bugs: {
            GNR:'', PsA:'', AmpC:'', 
            ESBL:'', CRE:'', Others:'', 
            MSSA:'', MRSA:'', SOSA:'', 
            Strep:'', VRE:'', VSE:'',
            anaerobes:'', PNA:'', Zoo:''},
        synd: {
            Empiric:'', UTI:'', CAP:'', HAP:'', 
            SSTI:'', Foot:'', Osteo:'', 
            IAI:'', Hepatobiliary:'', SBP:'', 
            Meningitis:'', SA:'', 
            Oral:''},
        comments: 'comment goes here'
    },

    /***  carbapenems
     * MEM Mero/Dori/Imipenem
     * ETP Ertapenem
    ***/
    'MEM': {
        name: 'Meropenem',
        fullName: 'Mero/Dori/Imipenem',
        abxClass: 'carbapenems',
        bugs: {
            GNR:'', PsA:'', AmpC:'', 
            ESBL:'', CRE:'', Others:'', 
            MSSA:'', MRSA:'', SOSA:'', 
            Strep:'', VRE:'', VSE:'',
            anaerobes:'', PNA:'', Zoo:''},
        synd: {
            Empiric:'', UTI:'', CAP:'', HAP:'', 
            SSTI:'', Foot:'', Osteo:'', 
            IAI:'', Hepatobiliary:'', SBP:'', 
            Meningitis:'', SA:'', 
            Oral:''},
        comments: 'comment goes here'
    },
    'ETP': {
        name: 'Ertapenem',
        fullName: '',
        abxClass: 'carbapenems',
        bugs: {
            GNR:'', PsA:'', AmpC:'', 
            ESBL:'', CRE:'', Others:'', 
            MSSA:'', MRSA:'', SOSA:'', 
            Strep:'', VRE:'', VSE:'',
            anaerobes:'', PNA:'', Zoo:''},
        synd: {
            Empiric:'', UTI:'', CAP:'', HAP:'', 
            SSTI:'', Foot:'', Osteo:'', 
            IAI:'', Hepatobiliary:'', SBP:'', 
            Meningitis:'', SA:'', 
            Oral:''},
        comments: 'comment goes here'
    },
    /***  tetracyclines
     * DOX Doxycycline
     * MIN Minocycline
     * TGC Tigecycline 
    ***/
    'DOX': {
        name: 'Doxycycline',
        fullName: '',
        abxClass: 'tetracyclines',
        bugs: {
            GNR:'', PsA:'', AmpC:'', 
            ESBL:'', CRE:'', Others:'', 
            MSSA:'', MRSA:'', SOSA:'', 
            Strep:'', VRE:'', VSE:'',
            anaerobes:'', PNA:'', Zoo:''},
        synd: {
            Empiric:'', UTI:'', CAP:'', HAP:'', 
            SSTI:'', Foot:'', Osteo:'', 
            IAI:'', Hepatobiliary:'', SBP:'', 
            Meningitis:'', SA:'', 
            Oral:''},
        comments: 'comment goes here'
    },
    'MIN': {
        name: 'Minocycline',
        fullName: '',
        abxClass: 'tetracyclines',
        bugs: {
            GNR:'', PsA:'', AmpC:'', 
            ESBL:'', CRE:'', Others:'', 
            MSSA:'', MRSA:'', SOSA:'', 
            Strep:'', VRE:'', VSE:'',
            anaerobes:'', PNA:'', Zoo:''},
        synd: {
            Empiric:'', UTI:'', CAP:'', HAP:'', 
            SSTI:'', Foot:'', Osteo:'', 
            IAI:'', Hepatobiliary:'', SBP:'', 
            Meningitis:'', SA:'', 
            Oral:''},
        comments: 'comment goes here'
    },
    'TGC': {
        name: 'Tigecycline',
        fullName: '',
        abxClass: 'tetracyclines',
        bugs: {
            GNR:'', PsA:'', AmpC:'', 
            ESBL:'', CRE:'', Others:'', 
            MSSA:'', MRSA:'', SOSA:'', 
            Strep:'', VRE:'', VSE:'',
            anaerobes:'', PNA:'', Zoo:''},
        synd: {
            Empiric:'', UTI:'', CAP:'', HAP:'', 
            SSTI:'', Foot:'', Osteo:'', 
            IAI:'', Hepatobiliary:'', SBP:'', 
            Meningitis:'', SA:'', 
            Oral:''},
        comments: 'comment goes here'
    },
    /***  anaerobic-abx
     *  MTZ Metronidazole
     *  CLI Clindamycin
    ***/
    'MTZ': {
        name: 'Metronidazole',
        fullName: '',
        abxClass: 'anaerobic-abx',
        bugs: {
            GNR:'', PsA:'', AmpC:'', 
            ESBL:'', CRE:'', Others:'', 
            MSSA:'', MRSA:'', SOSA:'', 
            Strep:'', VRE:'', VSE:'',
            anaerobes:'', PNA:'', Zoo:''},
        synd: {
            Empiric:'', UTI:'', CAP:'', HAP:'', 
            SSTI:'', Foot:'', Osteo:'', 
            IAI:'', Hepatobiliary:'', SBP:'', 
            Meningitis:'', SA:'', 
            Oral:''},
        comments: 'comment goes here'
    },
    'CLI': {
        name: 'Clindamycin',
        fullName: '',
        abxClass: 'anaerobic-abx',
        bugs: {
            GNR:'', PsA:'', AmpC:'', 
            ESBL:'', CRE:'', Others:'', 
            MSSA:'', MRSA:'', SOSA:'', 
            Strep:'', VRE:'', VSE:'',
            anaerobes:'', PNA:'', Zoo:''},
        synd: {
            Empiric:'', UTI:'', CAP:'', HAP:'', 
            SSTI:'', Foot:'', Osteo:'', 
            IAI:'', Hepatobiliary:'', SBP:'', 
            Meningitis:'', SA:'', 
            Oral:''},
        comments: 'comment goes here'
    },

    /***  
     *  
    ***/
    'blank': {
        name: 'TEMPLATE',
        fullName: '',
        abxClass: 'other-abx',
        bugs: {
            GNR:'', PsA:'', AmpC:'', 
            ESBL:'', CRE:'', Others:'', 
            MSSA:'', MRSA:'', SOSA:'', 
            Strep:'', VRE:'', VSE:'',
            anaerobes:'', PNA:'', Zoo:''},
        synd: {
            Empiric:'', UTI:'', CAP:'', HAP:'', 
            SSTI:'', Foot:'', Osteo:'', 
            IAI:'', Hepatobiliary:'', SBP:'', 
            Meningitis:'', SA:'', 
            Oral:''},
        comments: 'comment goes here'
    }

    
};