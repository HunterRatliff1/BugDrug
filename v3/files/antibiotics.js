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
        examples: '',
        abxClass: 'penicillins',
        comments: 'comment goes here'
    },
    'NAF': {
        name: 'Naf/Oxacillin',
        fullName: '',
        examples: '',
        abxClass: 'penicillins',
        comments: 'comment goes here'
    },
    'Unasyn': {
        name: 'Unasyn',
        fullName: 'AMP/SUL',
        examples: '',
        abxClass: 'penicillins',
        comments: 'comment goes here'
    },
    'Augmentin': {
        name: 'Augmentin',
        fullName: 'AMX/CLA',
        examples: '',
        abxClass: 'penicillins',
        comments: 'comment goes here'
    },
    'Zosyn': {
        name: 'Zosyn',
        fullName: 'Piperacillin/tazobactam (PIP/TZB)',
        examples: '',
        abxClass: 'penicillins',
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
        fullName: '1st generation cephalosporins',
        examples: {
            Cefazolin: {route: "IV", trade: "Ancef"}, 
            Cephalexin: {route: "PO"}
        },
        abxClass: 'cephalosporins',
        comments: '<b>Drug of choice</b> for methicillin <b class="text-success">susceptible</b> staphylococcus. ' +
        "Has very limited gram negative coverage (<i>E coli, Klebsiella, Proteus mirabilis, Moraxella</i>) but " +
        "that's but when there isn't resistance."
    },
    'FOX': {
        name: 'Cefoxitin (2G)',
        fullName: '2nd generation cephalosporins',
        examples: {Cefoxitin: {route: "IV"}},
        abxClass: 'cephalosporins',
        comments: 'Quite similar to first generations; a little less active for gram-postivie cocci, but begins to ' +
        "have more gram negative coverage (notably <b></i>H influenzae</i></b>). Cefoxitin has some activity against " +
        "anaerobes, including <i>Bacteroides spp</i>, but I wouldn't count on it alone for anaerobic coverage."
    },
    'CRO': {
        name: 'Ceftriaxone (3G)',
        fullName: '3rd generation cephalosporins',
        examples: {
            Ceftriaxone: {route: "IV", trade: "Rocephin"}, 
            Ceftazidime: {route: "IV"}, 
            Cefdinir: {route: "PO", trade: "Omnicef"}
        },
        abxClass: 'cephalosporins',
        comments: 'Has solid gram negative coverage, unless there are beta-lactamases (AmpC, ESBL). <b>Ceftazidime has ' +
        "<i>Pseudomonas</i> coverage</b>, but the rest of the class does not.<br><br>Ceftriaxone is great for bacterial " +
        "meningitis (has <i>N meningitidis</i> coverage, but does lack Listeria spp. coverage)."
    },
    'FEP': {
        name: 'Cefepime (4G)',
        fullName: '4th generation cephalosporins',
        examples: {Cefepime: {route: "IV", trade: "Maxipime"}},
        abxClass: 'cephalosporins',
        comments: 'Broad spectrum antibiotic with activty against <i>Pseudomonas</i> and AmpC beta-lactamases (but not ' +
        "ESBLs). Lacks anaerobic or MRSA coverage (but does have better MSSA activity the 3rd generation)."
    },
    'CPT': {
        name: 'Ceftaroline (5G)',
        fullName: '5th generation cephalosporins',
        examples: {Ceftaroline: {route: "IV"}},
        abxClass: 'cephalosporins',
        comments: 'This is unique among the cephalosporins, since it has good ' +
        "<b>MRSA activity</b>. It does come at the cost of some gram negative " +
        "coverage (think of it as cefazolin/Ancef with MRSA activity). You " +
        "really should consult ID if you're thinking about using this one!"
    },

    /*** GRAM POSITIVES
     * VAN Vancomycin
     * LZD Linezolid
     * DAP Daptomycin
    ***/
    'VAN': {
        name: 'Vancomycin',
        fullName: 'Vancomycin',
        examples: {
            "Vancomycin": {route: "IV"},
            "Vancomycin ": {route: "PO for C diff"}},
        abxClass: 'gram-positives',
        comments: 'comment goes here'
    },
    'LZD': {
        name: 'Linezolid',
        fullName: '',
        examples: {Linezolid: {route: "IV or PO", trade: "Zyvox"}},
        abxClass: 'gram-positives',
        comments: 'Used for <i>Staph aureus</i> (especially MRSA) and ' +
        "Enterococcus (especially vancomycin-resistant <i>E. faecium</i>). " +
        "Can use it orally since has great bioavailability.<br><br>" +
        "Has risk of serotonin syndrome if given with SSRI/SNRIs since it's a " +
        "weak MAOI. Will also cause myelospression (reversible) and peripheral " +
        "neuropathy (irreversible) with long term use."
    },
    'DAP': {
        name: 'Daptomycin',
        fullName: '',
        examples: {Daptomycin: {route: "IV", trade: "Cubicin"}},
        abxClass: 'gram-positives',
        comments: 'comment goes here'
    },

    /***  carbapenems
     * MEM Mero/Dori/Imipenem
     * ETP Ertapenem
    ***/
    'MEM': {
        name: 'Meropenem',
        fullName: 'Mero/Dori/Imipenem',
        examples: '',
        abxClass: 'carbapenems',
        comments: 'comment goes here'
    },
    'ETP': {
        name: 'Ertapenem',
        fullName: '',
        examples: '',
        abxClass: 'carbapenems',
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
        examples: '',
        abxClass: 'tetracyclines',
        comments: 'comment goes here'
    },
    'MIN': {
        name: 'Minocycline',
        fullName: '',
        examples: '',
        abxClass: 'tetracyclines',
        comments: 'comment goes here'
    },
    'TGC': {
        name: 'Tigecycline',
        fullName: '',
        examples: '',
        abxClass: 'tetracyclines',
        comments: 'comment goes here'
    },
    /***  anaerobic-abx
     *  MTZ Metronidazole
     *  CLI Clindamycin
    ***/
    'MTZ': {
        name: 'Metronidazole',
        fullName: '',
        examples: '',
        abxClass: 'anaerobic-abx',
        comments: 'comment goes here'
    },
    'CLI': {
        name: 'Clindamycin',
        fullName: '',
        examples: '',
        abxClass: 'anaerobic-abx',
        comments: 'comment goes here'
    },

    /***  
     *  
    ***/
    'blank': {
        name: 'TEMPLATE',
        fullName: '',
        examples: '',
        abxClass: 'other-abx',
        comments: 'comment goes here'
    }

    
};