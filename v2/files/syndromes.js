const COMMONTEXT = {
    MDR: '<b>Drug resistance:</b> As with all bacteria, the ' +
    'resistance patterns (ESBL, CRE, VRE) are not dictated by the source ' +
    'of the infection. So in a patient with a history of ESBL, you would ' +
    'want to cover ESBL, for example.',
    PNA: "<b>CAP vs HAP vs HCAP:</b> Reviewing the differences among " +
    "<i>community-acquired pneumonia</i> (CAP), <i>healthcare-associated " +
    "pneumonia</i> (HCAP), <i>hospital-acquired pneumonia</i> (HAP), and " +
    "<i>ventilator-associated pneumonia</i> (VAP) is beyond my scope. For " +
    "learners, it's more important to <b>think about risk factors</b>. A " +
    "patient coming from a nursing facility is more likely to " +
    "healthcare-associated pathogens even if they are coming from the " +
    "community.",
    aspiration: "<b>Anaerobes:</b> Historically, we used to use anaerobic coverage " +
    "for pneumonia, especially aspiration pneumonia. More recently, the " +
    "<a href='https://pubmed.ncbi.nlm.nih.gov/31573350/'>2019 ATS/IDSA guidelines</a> " +
    "have moved away from anaerobic coverage, <b>unless</b> a lung " +
    "abscess or empyema is suspected.",
    waitCx: "<b>Culture-guided treatment:</b> Whenever possible, it's very helpful " +
    "to obtain cultures before starting antibiotics. If a patient is clincially " +
    "stable (well appearing, non-septic, acceptable vital signs), consider waiting " +
    "until cultures have been obtained to start antibiotics. This is especially " +
    "important for tissue cultures (osteomyelitis, wounds) of <b>chronic</b> infections. "
};

const SYNDROMES = {
    'Empiric': {
        name: 'Empiric / Sepsis',
        fullName: 'Empiric treatment for sepsis',
        bugs: {
            GNR:'com', PsA:'com', AmpC:'com', 
            ESBL:'occ', CRE:'', Others:'', 
            MSSA:'com', MRSA:'com', SOSA:'', 
            Strep:'com', VRE:'', VSE:'occ',
            anaerobes:'occ', PNA:'', Zoo:'occ'},
        comments: "Sepsis is complicated and this tool doesn't take into " + 
        "account important factors (e.g. immunocompromise, prior " +
        "micro data, antibiotic exposure)" +
        "<br><br>" +
        "This is just a suggestion for bugs that cause " + 
        "undifferentiated infections and that emperic antibiotics " +
        "that are often used"
    },
    'UTI': {
        name: 'UTI',
        fullName: 'Urinary tract infection',
        bugs: {
            GNR:'com', PsA:'com', AmpC:'com', 
            ESBL:'occ', CRE:'occ', Others:'', 
            MSSA:'', MRSA:'', SOSA:'unk', 
            Strep:'', VRE:'occ', VSE:'occ',
            anaerobes:'', PNA:'', Zoo:''},
        comments: 
            '<i>Staphylococcus saprophyticus</i> can also cause UTIs. ' +
            '<i>Staph aureus</i> is <b>not normal</b> in the urine. ' +
            'If thought to be a true pathogen (not contaminant), you should ' +
            'suspect hematogenous seeding (e.g. bacteremia, renal abscess).' +
            '<br><br>' + COMMONTEXT.MDR
    },
    'CAP': {
        name: 'CAP',
        fullName: 'Community acquired pneumonia',
        bugs: {
            GNR:'com', PsA:'', AmpC:'com', 
            ESBL:'', CRE:'', Others:'', 
            MSSA:'occ', MRSA:'occ', SOSA:'', 
            Strep:'com', VRE:'', VSE:'',
            anaerobes:'', PNA:'com', Zoo:''},
        comments: COMMONTEXT.PNA + " <mark>Also see <b>HCAP</b></mark>" + 
        "<br><br>" + COMMONTEXT.aspiration 
    },
    'HAP': {
        name: 'HCAP',
        fullName: 'Pneumonia with risk factors',
        bugs: {
            GNR:'com', PsA:'com', AmpC:'com', 
            ESBL:'occ', CRE:'occ', Others:'occ', 
            MSSA:'com', MRSA:'com', SOSA:'', 
            Strep:'com', VRE:'', VSE:'',
            anaerobes:'', PNA:'', Zoo:''},
        comments: COMMONTEXT.PNA + " <mark>Also see <b>CAP</b></mark>" + 
        "<br><br>" + COMMONTEXT.MDR
    },
    'SSTI': {
        name: 'Cellulitis',
        fullName: 'Cellulitis and other skin/soft tissue infections',
        bugs: {
            GNR:'', PsA:'', AmpC:'', 
            ESBL:'', CRE:'', Others:'', 
            MSSA:'com', MRSA:'com', SOSA:'unk', 
            Strep:'com', VRE:'', VSE:'',
            anaerobes:'occ', PNA:'', Zoo:''},
        comments: 'Common simple SSTIs include cellulitis, erysipelas, impetigo, ' +
        "ecthyma, folliculitis, furuncles, carbuncles, and abscesses. " +
        "Classically, <b>purulent</b> infections are caused by <i>Staph aureus</i> " +
        "and <b>nonpurulent</b> infections are caused by <i>beta-hemolytic strep</i>. " + 
        "Abscesses should be drained, in which case they often don't require antibiotics." + 
        "<br><br>" +   
        "<b class='text-danger'>Notable exceptions not mentioned here:</b> " +  
        "<i>Pseudomonas</i> (folliculitis, ecthyma gangrenosum), " +
        "<i>Vibrio</i> (seawater/seafood, hemorrhagic bullae), " + 
        "<i>Clostridium</i> (necrotizing fasciitis). " +
        "Also see <mark><b>foot ulcer</b></mark> for deeper infections and " +
        "<mark><b>SA / EDA</b></mark> (septic arthritis) if there is concern " +
        "for joint involvement."
    },
    'Foot': {
        name: 'Foot ulcer',
        fullName: 'Foot ulcers (with focus on diabetes)',
        bugs: {
            GNR:'occ', PsA:'occ', AmpC:'', 
            ESBL:'', CRE:'', Others:'', 
            MSSA:'com', MRSA:'com', SOSA:'unk', 
            Strep:'com', VRE:'', VSE:'',
            anaerobes:'occ', PNA:'', Zoo:''},
        comments: 'This is a complicated topic, but my (oversimplified) approach ' +
        "is in a stepwise manner: <ol><li>" +
        "<b>Superficial inflammation: </b>Staph (including MRSA) and strep</li><li>" + 
        "<b>Fascia involved:</b> Add GNRs (and Psudomonas if they have a history " +
        "of such or recent antibiotics)</li><li>" + 
        "<b>Deep tissue involved:</b> Add anaerobes. Also <mark>see " +
        "<b>osteomyelitis</b></mark> if the bone is involved.</li></ol>" +
        "It is also paramount to check for peripheral <b>vascular disease</b> " +
        "as many folks need revascularization (sometimes urgently)." +
        "<br><br>" +
        COMMONTEXT.waitCx
    },
    'Osteo': {
        name: 'Osteomyelitis',
        fullName: 'Osteomyelitis',
        bugs: {
            GNR:'com', PsA:'com', AmpC:'', 
            ESBL:'', CRE:'', Others:'', 
            MSSA:'com', MRSA:'com', SOSA:'occ', 
            Strep:'com', VRE:'', VSE:'',
            anaerobes:'occ', PNA:'', Zoo:''},
        comments: 'This is an oversimplified approach to the <i>most common</i> ' +
        "casuses of <b class='text-danger'>non-hematogenous</b>, osteomyelitis " + 
        "<b class='text-info'>in adults</b>. Anaerobes are generally more of a " +
        "concern is chronic osteo (vs acute). " +
        "<br><br>" + COMMONTEXT.waitCx +
        "<br><br>" + COMMONTEXT.MDR + " For chronic OM, there is often drug " +
        "resistance, making it all the more important to obtain cultures (if " +
        "able) to guide long term antibiotics." +
        "<br><br>" +
        "<b>Good orals:</b> Some antibiotics with decent oral bioavailability " +
        "and bone penetration are " +
        "<b class='text-success'>A</b><b>ugmentin</b> (Amoxicillin-clavulanic acid), " +
        "<b class='text-success'>B</b><b>actrim</b> (TMP-SMX), " +
        "<b class='text-success'>C</b><b>iprofloxacin</b> (fluoroquinolones generally), " +
        "<b class='text-success'>D</b><b>oxycycline</b>, and " +
        "<b class='text-success'>Z</b><b>yvox</b> (linezolid)"
    },
    'IAI': {
        name: 'IAI',
        fullName: 'Intra-abdominal infection (bowel flora)',
        bugs: {
            GNR:'com', PsA:'occ', AmpC:'', 
            ESBL:'occ', CRE:'', Others:'', 
            MSSA:'com', MRSA:'com', SOSA:'', 
            Strep:'com', VRE:'occ', VSE:'com',
            anaerobes:'com', PNA:'', Zoo:''},
        comments: 'Clinical scenerios include secondary peritonitis (bowel ' +
        "perforation, ischemic bowel, intraabdominal abscess), diverticulitis, " +
        "ruptured appendix, etc. <b>Anaerobic coverage is a must</b> (for " +
        "<i>Bacteroides</i> spp., but often polymicrobial) and a " +
        "<b>surgical consult is indicated</b>. " +
        "<br><br>" +
        "Good oral options for uncomplicated cases (e.g. diverticulitis) " +
        "include a fluoroquinolone (gram negatives) plus metronidazole (Flagyl, " +
        "for anaerobes). These both have excellent oral bioavailability"
    },
    'Hepatobiliary': {
        name: 'Hepatobiliary infections',
        fullName: 'Hepatobiliary stuff (cholangitis, cholecystitis, liver abscess)',
        bugs: {
            GNR:'com', PsA:'', AmpC:'', 
            ESBL:'', CRE:'', Others:'', 
            MSSA:'', MRSA:'', SOSA:'', 
            Strep:'', VRE:'com', VSE:'com',
            anaerobes:'com', PNA:'', Zoo:''},
        comments: 'Most common bacteria are enterobacteriaceae (gram negative rods) ' +
        "enterococcus, and anaerobes (Clostridium and Bacteroides spp). For many " +
        "of these conditions antibiotics are not definitive therapy, and these " +
        "folks need some kind of procedural intervention (cholecystectomy, " +
        "percutaneous drain, ERCP). "
    },
    'SBP': {
        name: 'SBP',
        fullName: 'Spontaneous bacterial peritonitis',
        bugs: {
            GNR:'com', PsA:'', AmpC:'', 
            ESBL:'', CRE:'', Others:'', 
            MSSA:'', MRSA:'', SOSA:'occ', 
            Strep:'com', VRE:'', VSE:'occ',
            anaerobes:'', PNA:'', Zoo:''},
        comments: 'Seen in cirrhosis patients with ascites. Diagnostic criteria ' +
        "&#8805; 250 cells/uL from ascitic fluid. Cultures of ascitic fluid is " +
        "often negative. Most common treatment is ceftriaxone"
    },
    'Meningitis': {
        name: 'Meningitis',
        fullName: 'Meningitis (community acquired)',
        bugs: {
            GNR:'', PsA:'', AmpC:'', 
            ESBL:'', CRE:'', Others:'', 
            MSSA:'', MRSA:'', SOSA:'', 
            Strep:'', VRE:'', VSE:'',
            anaerobes:'', PNA:'', Zoo:''},
        comments: ''
    },
    'EDA': {
        name: 'SA / EDA',
        fullName: 'Septic arthritis or epidural abscess',
        bugs: {
            GNR:'', PsA:'', AmpC:'', 
            ESBL:'', CRE:'', Others:'', 
            MSSA:'', MRSA:'', SOSA:'', 
            Strep:'', VRE:'', VSE:'',
            anaerobes:'', PNA:'', Zoo:''},
        comments: ''
    },
    'Oral': {
        name: 'Oral flora',
        fullName: 'Oral flora',
        bugs: {
            GNR:'', PsA:'', AmpC:'', 
            ESBL:'', CRE:'', Others:'', 
            MSSA:'', MRSA:'', SOSA:'', 
            Strep:'', VRE:'', VSE:'',
            anaerobes:'', PNA:'', Zoo:''},
        comments: ''
    }
    
};


