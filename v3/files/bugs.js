const BACTERIA = {
    'GNR': {
        name: 'Enterobacterales (gram negative rods)',
        fullName: 'Enterobacterales (gram negative rods)',
        bugClass: 'GN',
        synd: {
            Empiric:'com', UTI:'com', CAP:'com', HAP:'com', 
            SSTI:'', Foot:'occ', Osteo:'com', 
            IAI:'com', Hepatobiliary:'com', SBP:'com', 
            Meningitis:'', SA:'com'
        },
        abx: {
            AMP:'', NAF:'', Unasyn:'', Augmentin:'', Zosyn:'',
            CFZ:'', FOX:'', CRO:'', FEP:'', CPT:'',
            VAN:'', LZD:'', DAP:'',
            MEM:'', ETP:'', 
            DOX:'', MIN:'', TGC:'',
            MTZ:'', CLI:''
        },
        comments: ''
    },
    'PsA': {
        name: 'Pseudomonas',
        fullName: 'Pseudomonas',
        bugClass: 'GN',
        synd: {
            Empiric:'com', UTI:'com', CAP:'', HAP:'com', 
            SSTI:'', Foot:'occ', Osteo:'com', 
            IAI:'occ', Hepatobiliary:'', SBP:'', 
            Meningitis:'', SA:'occ'
        },
        abx: {
                AMP:'', NAF:'', Unasyn:'', Augmentin:'', Zosyn:'',
                CFZ:'', FOX:'', CRO:'', FEP:'good', CPT:'',
                VAN:'', LZD:'', DAP:'',
                MEM:'', ETP:'', 
                DOX:'', MIN:'', TGC:'',
                MTZ:'', CLI:''
            },
        comments: ''
    },
    'AmpC': {
        name: 'AmpC producers (HECK Yes)',
        fullName: '',
        bugClass: 'GN',
        synd: {
            Empiric:'com', UTI:'com', CAP:'occ', HAP:'com', 
            SSTI:'', Foot:'', Osteo:'', 
            IAI:'', Hepatobiliary:'', SBP:'', 
            Meningitis:'', SA:''
        },
        abx: {
                AMP:'', NAF:'', Unasyn:'', Augmentin:'', Zosyn:'',
                CFZ:'', FOX:'', CRO:'', FEP:'', CPT:'',
                VAN:'', LZD:'', DAP:'',
                MEM:'', ETP:'', 
                DOX:'', MIN:'', TGC:'',
                MTZ:'', CLI:''
            },
        comments: ''
    },
    'ESBL': {
        name: 'Extended-spectrum beta-lactamases',
        fullName: '',
        bugClass: 'GN',
        synd: {
            Empiric:'occ', UTI:'occ', CAP:'', HAP:'occ', 
            SSTI:'', Foot:'', Osteo:'', 
            IAI:'', Hepatobiliary:'', SBP:'', 
            Meningitis:'', SA:''
        },
        abx: {
                AMP:'', NAF:'', Unasyn:'', Augmentin:'', Zosyn:'',
                CFZ:'', FOX:'', CRO:'', FEP:'', CPT:'',
                VAN:'', LZD:'', DAP:'',
                MEM:'', ETP:'', 
                DOX:'', MIN:'', TGC:'',
                MTZ:'', CLI:''
            },
        comments: ''
    },
    'CRE': {
        name: 'Carbapenem-resistant Enterobacterales',
        fullName: '',
        bugClass: 'GN',
        synd: {
            Empiric:'', UTI:'occ', CAP:'', HAP:'occ', 
            SSTI:'', Foot:'', Osteo:'', 
            IAI:'', Hepatobiliary:'', SBP:'', 
            Meningitis:'', SA:''
        },
        abx: {
                AMP:'', NAF:'', Unasyn:'', Augmentin:'', Zosyn:'',
                CFZ:'', FOX:'', CRO:'', FEP:'', CPT:'',
                VAN:'', LZD:'', DAP:'',
                MEM:'', ETP:'', 
                DOX:'', MIN:'', TGC:'',
                MTZ:'', CLI:''
            },
        comments: ''
    },
    'Others': {
        name: 'Other notable Enterobacterales',
        fullName: '',
        bugClass: 'GN',
        synd: {
            Empiric:'', UTI:'', CAP:'', HAP:'occ', 
            SSTI:'', Foot:'', Osteo:'', 
            IAI:'', Hepatobiliary:'', SBP:'', 
            Meningitis:'unk', SA:''
        },
        abx: {
                AMP:'', NAF:'', Unasyn:'', Augmentin:'', Zosyn:'',
                CFZ:'', FOX:'', CRO:'', FEP:'', CPT:'',
                VAN:'', LZD:'', DAP:'',
                MEM:'', ETP:'', 
                DOX:'', MIN:'', TGC:'',
                MTZ:'', CLI:''
            },
        comments: ''
    },     
    'MSSA': {
        name: 'MSSA',
        fullName: '',
        bugClass: 'GP',
        synd: {
            Empiric:'com', UTI:'', CAP:'occ', HAP:'com', 
            SSTI:'com', Foot:'com', Osteo:'com', 
            IAI:'occ', Hepatobiliary:'', SBP:'', 
            Meningitis:'', SA:'com'
        },
        abx: {
                AMP:'', NAF:'', Unasyn:'', Augmentin:'', Zosyn:'',
                CFZ:'', FOX:'', CRO:'', FEP:'', CPT:'',
                VAN:'', LZD:'', DAP:'',
                MEM:'', ETP:'', 
                DOX:'', MIN:'', TGC:'',
                MTZ:'', CLI:''
            },
        comments: ''
    },
    'MRSA': {
        name: 'MRSA',
        fullName: '',
        bugClass: 'GP',
        synd: {
            Empiric:'com', UTI:'', CAP:'occ', HAP:'com', 
            SSTI:'com', Foot:'com', Osteo:'com', 
            IAI:'occ', Hepatobiliary:'', SBP:'', 
            Meningitis:'', SA:'com'
        },
        abx: {
                AMP:'', NAF:'', Unasyn:'', Augmentin:'', Zosyn:'',
                CFZ:'', FOX:'', CRO:'', FEP:'', CPT:'',
                VAN:'', LZD:'', DAP:'',
                MEM:'', ETP:'', 
                DOX:'', MIN:'', TGC:'',
                MTZ:'', CLI:''
            },
        comments: ''
    },
    'SOSA': {
        name: 'Staph other than Staph aureus',
        fullName: '',
        bugClass: 'GP',
        synd: {
            Empiric:'', UTI:'unk', CAP:'', HAP:'', 
            SSTI:'unk', Foot:'unk', Osteo:'occ', 
            IAI:'', Hepatobiliary:'', SBP:'occ', 
            Meningitis:'', SA:''
        },
        abx: {
                AMP:'', NAF:'', Unasyn:'', Augmentin:'', Zosyn:'',
                CFZ:'', FOX:'', CRO:'', FEP:'', CPT:'',
                VAN:'', LZD:'', DAP:'',
                MEM:'', ETP:'', 
                DOX:'', MIN:'', TGC:'',
                MTZ:'', CLI:''
            },
        comments: ''
    },  
    'Strep': {
        name: 'Strep spp.',
        fullName: '',
        bugClass: 'GP',
        synd: {
            Empiric:'com', UTI:'', CAP:'com', HAP:'com', 
            SSTI:'com', Foot:'com', Osteo:'com', 
            IAI:'occ', Hepatobiliary:'', SBP:'com', 
            Meningitis:'com', SA:'com'
        },
        abx: {
                AMP:'', NAF:'', Unasyn:'', Augmentin:'', Zosyn:'',
                CFZ:'', FOX:'', CRO:'', FEP:'', CPT:'',
                VAN:'', LZD:'', DAP:'',
                MEM:'', ETP:'', 
                DOX:'', MIN:'', TGC:'',
                MTZ:'', CLI:''
            },
        comments: ''
    },  
    'VSE': {
        name: 'Vancomycin-sensitive Enterococcus',
        fullName: '',
        bugClass: 'GP',
        synd: {
            Empiric:'occ', UTI:'occ', CAP:'', HAP:'', 
            SSTI:'', Foot:'', Osteo:'', 
            IAI:'com', Hepatobiliary:'com', SBP:'occ', 
            Meningitis:'', SA:''
        },
        abx: {
                AMP:'', NAF:'', Unasyn:'', Augmentin:'', Zosyn:'',
                CFZ:'', FOX:'', CRO:'', FEP:'', CPT:'',
                VAN:'', LZD:'', DAP:'',
                MEM:'', ETP:'', 
                DOX:'', MIN:'', TGC:'',
                MTZ:'', CLI:''
            },
        comments: ''
    },
    'VRE': {
        name: 'Vancomycin-resistant Enterococcus',
        fullName: '',
        bugClass: 'GP',
        synd: {
            Empiric:'', UTI:'occ', CAP:'', HAP:'', 
            SSTI:'', Foot:'', Osteo:'', 
            IAI:'occ', Hepatobiliary:'occ', SBP:'', 
            Meningitis:'', SA:''
        },
        abx: {
                AMP:'', NAF:'', Unasyn:'', Augmentin:'', Zosyn:'',
                CFZ:'', FOX:'', CRO:'', FEP:'', CPT:'',
                VAN:'', LZD:'', DAP:'',
                MEM:'', ETP:'', 
                DOX:'', MIN:'', TGC:'',
                MTZ:'', CLI:''
            },
        comments: ''
    },
    'anaerobes': {
        name: 'Anaerobes',
        fullName: '',
        bugClass: 'ana',
        synd: {
            Empiric:'occ', UTI:'', CAP:'', HAP:'', 
            SSTI:'occ', Foot:'occ', Osteo:'occ', 
            IAI:'com', Hepatobiliary:'com', SBP:'', 
            Meningitis:'', SA:''
        },
        abx: {
                AMP:'', NAF:'', Unasyn:'', Augmentin:'', Zosyn:'',
                CFZ:'', FOX:'', CRO:'', FEP:'', CPT:'',
                VAN:'', LZD:'', DAP:'',
                MEM:'', ETP:'', 
                DOX:'', MIN:'', TGC:'',
                MTZ:'', CLI:''
            },
        comments: ''
    },
    'PNA': {
        name: 'Atypical penumonias',
        fullName: '',
        bugClass: 'atyp',
        synd: {
            Empiric:'', UTI:'', CAP:'com', HAP:'', 
            SSTI:'', Foot:'', Osteo:'', 
            IAI:'', Hepatobiliary:'', SBP:'', 
            Meningitis:'', SA:''
        },
        abx: {
                AMP:'', NAF:'', Unasyn:'', Augmentin:'', Zosyn:'',
                CFZ:'', FOX:'', CRO:'', FEP:'', CPT:'',
                VAN:'', LZD:'', DAP:'',
                MEM:'', ETP:'', 
                DOX:'', MIN:'', TGC:'',
                MTZ:'', CLI:''
            },
        comments: ''
    },
    'Zoo': {
        name: 'Zoonotic bacteria',
        fullName: '',
        bugClass: 'atyp',
        synd: {
            Empiric:'occ', UTI:'', CAP:'', HAP:'', 
            SSTI:'', Foot:'', Osteo:'', 
            IAI:'', Hepatobiliary:'', SBP:'', 
            Meningitis:'', SA:''
        },
        abx: {
                AMP:'', NAF:'', Unasyn:'', Augmentin:'', Zosyn:'',
                CFZ:'', FOX:'', CRO:'', FEP:'', CPT:'',
                VAN:'', LZD:'', DAP:'',
                MEM:'', ETP:'', 
                DOX:'good', MIN:'', TGC:'',
                MTZ:'', CLI:''
            },
        comments: ''
    }
};

