/**
 * This file defines JSON data used in the text box (below the "bug table" in
 * the HTML file)
 * 
 * @author Hunter Ratliff
 * @link https://github.com/HunterRatliff1/BugDrug
 * 
 * Created on    : 2023-12-31
 * Last modified : 2024-01-07
 * 
 * @license MIT
 * Copyright (c) 2023 Hunter Ratliff
 * Permission is hereby granted, free of charge, to any person obtaining a copy 
 * of this software and associated documentation files (the "Software"), to 
 * deal in the Software without restriction, including without limitation the 
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or 
 * sell copies of the Software, and to permit persons to whom the Software is 
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in 
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR 
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE 
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER 
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING 
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS 
 * IN THE SOFTWARE.
 * 
 */

/******************************************************************************\
 * COMMONTEXT
 * These are common bits of text used multiple times in this document
 \*****************************************************************************/
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

/******************************************************************************\
 * ANTIBIOTICS
 * The "abxClass" should match the DOM id (used in the HTML file) for the list
 * it should be populated under 
 * 
 * Antibiotics are abbreviated based on the ASM's abbreviation conventions
 * https://journals.asm.org/abbreviations-conventions
 \*****************************************************************************/
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
            "Vancomycin*": {route: "PO for C diff"}},
        abxClass: 'gram-positives',
        comments: '<b>First line treatment</b> for methicillin-resistant <i>Staphylococcus spp</i>, including <b>MRSA</b> ' +
        "and most of the coagulase negative staph (* the oral formulation is used for <i>Clostridioides difficile</i> " +
        "colitis AKA C diff)." +
        "<br><br>IV vancomycin is <b>nephrotoxic</b>. Observational studies have reported higher risk of AKI when " +
        "combined with Zosyn (pip/tazo), but this is controversial. It will cause a rash if administered too fast " +
        "(from histamine release), but this is not a true allergy. However, there is an association with DRESS syndrome, " +
        "so not all rashes with vanco are the same! " 
    },
    'LZD': {
        name: 'Linezolid',
        fullName: '',
        examples: {Linezolid: {route: "IV or PO", trade: "Zyvox"}},
        abxClass: 'gram-positives',
        comments: 'Used for <i>Staph aureus</i> (especially MRSA) and Enterococcus (especially vancomycin-resistant ' +
        "<i>E. faecium</i>). Can use it orally since has great bioavailability.<br><br>" +
        "Has risk of <b>serotonin syndrome</b> if given with SSRI/SNRIs since it's a weak MAOI. Will also cause " +
        "myelospression (reversible) and peripheral neuropathy (irreversible) with long term use."
    },
    'DAP': {
        name: 'Daptomycin',
        fullName: '',
        examples: {Daptomycin: {route: "IV", trade: "Cubicin"}},
        abxClass: 'gram-positives',
        comments: 'Used for <i>Staph aureus</i> (especially MRSA) and Enterococcus (especially vancomycin-resistant ' +
        "<i>E. faecium</i>). Should <b>not be used for pneumonia</b> since surfactant inactivates it.<br><br>" +
        "" +
        "May cause <b>myopathy</b> so you should hold any statins and check a creatine kinase weekly."
    },

    /***  carbapenems
     * MEM Mero/Dori/Imipenem
     * ETP Ertapenem
    ***/
    'MEM': {
        name: 'Meropenem',
        fullName: '',
        examples: {
            Meropenem: {route: "IV", trade: "Merrem"},
            Doripenem: {route: "IV"},
            "Imipenem+Cilastatin": {route: "IV", trade: "Primaxin"}
        },
        abxClass: 'carbapenems',
        comments: 'Carbapenems are the broadest of all beta-lactams and cover some of the most difficult bacteria that ' +
        "we frequently encounter (including <b>ESBLs</b>). Unfortunately, rates of resistance are increasing (<mark>see " +
        "<b>CREs</b></mark>) so they should only be used in the sickest of patients. Generally, if a patient has a " +
        "history of ESBL <u>but is immunocompetent and not septic</u>, don't just throw on meropenem without a reason " +
        "(this is how we get CREs). Carbapenem exposure also increase the risk of C diff and other bad infections " +
        "(e.g. stenotrophomonas).<br><br>"+
        "Carbapenems are also associated with increased risk of seizures, especially in meningitis (and inconveniently " +
        "decrease the levels of valproic acid). Imipenem has the highest risk. Doripenem isn't used as often since it " +
        "has worse outcomes (especially for pneumonia)."
    },
    'ETP': {
        name: 'Ertapenem',
        fullName: '',
        examples: {Ertapenem: {route: "IV/IM", trade: "Invanz"}},
        abxClass: 'carbapenems',
        comments: 'Similar to other carbapenems (<mark>see <b>meropenem</b></mark>), with a few exceptions:<br>' +
        "<ol><li>It has <b>once daily dosing</b>, which can be nice for OPAT. This is because it's so heavily bound to " +
        "albumin (thus it should not be used if a patient's albumin is &lt;2.5 g/dL). Can also be given IM</li>" +
        "<li>It does <b>not have <i>Pseudomonas</i></b> activity</li>" +
        "<li>It's the most susceptible to carbapenemases (among the carbapenems)</li>" +
        "</ol>"
    },

    /***  tetracyclines
     * DOX Doxycycline
     * MIN Minocycline
     * TGC Tigecycline 
    ***/
    'DOX': {
        name: 'Doxycycline',
        fullName: '',
        examples: {Doxycycline: {route: "IV/PO"}},
        abxClass: 'tetracyclines',
        comments: "Doxycycline has broad applications: It's used to treat <b>zoonotic</b> (Leptospirosis, Brucella, " +
        "Q fever, Bartonella) and <b>tick-borne</b> (Rickettsia, Lyme, Babesiosis, Anaplasmosis/Ehrlichiosis) diseases, " +
        'as well as the <b>"atypical" pneumonias</b> (Mycoplasma, Legionella, Chlamydia). Doxy also has activity against ' +
        "Staph spp., including MRSA (though there can be resistance).<br><br>" +
        "Tetracyclines (like doxy) are also nice because they don't need to be renally dosed. However, while they achieve " +
        "good levels in tissues (e.g. skin, bone, lungs) they don't have very good penetration in the urine, CSF, or " +
        "bloodstream so shouldn't be relied for UTIs or bactermia."
    },
    'MIN': {
        name: 'Minocycline',
        fullName: '',
        examples: {Minocycline: {route: "IV/PO"}},
        abxClass: 'tetracyclines',
        comments: 'Minocycline is quite similar to doxycycline (see <mark><b>Doxycycline</b></mark> for overview of ' +
        "tetracyclines), but generally has broader activity than doxycycline (exception: doxycycline works better for " +
        "some of the tick-borne & zoonotic diseases). " +
        'Minocycline has good activity against some of the <mark>"bad bugs"</mark>, namely <i>Stenotrophomonas</i> and ' + 
        "<i>Acinetobacter</i>. It can have high rates of vestibular side effects (ataxia, vertigo) and turn the skin blue." +
        "<br><br>Trivia fact: Minocycline is technically a disease-modifying antirheumatic drugs (DMARD) for rheumatoid " +
        "arthritis, but please don't use it for that!"
    },
    'TGC': {
        name: 'Tigecycline',
        fullName: '',
        examples: {Tigecycline: {route: "IV", trade: "Tygacil"}},
        abxClass: 'tetracyclines',
        comments: "If you see ID using tigecycline, it's an indicator that things probably aren't going great. Despite " +
        "tigecycline's broad activity (CRE, <i>Acinetobacter</i>, <i>Stenotrophomonas</i>), it's often not the best " +
        "option for the patient; randomized trials have shown <b>increased mortality and higher rates of failure</b> for " +
        "tigecycline vs other antibiotics. It therefore has a <b>black box warning</b> and the FDA advises us to " +
        'only use Tigecycline "in situations when alternative treatments are not suitable". It also has high rates of ' +
        "GI side effects. Finally, despite it's broad activity, it <b>lacks Pseudomonas coverage</b>. "
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

    /***  other antibiotics
     * ATM      Aztreonam
     * Aminogly Amikacin/Gentamicin/Tobramycin
     * AZM      Erythro/Azithromycin
     * TMP-SMX  Trimethoprim / Sulfamethoxazole (Bactrim)
     * Quino    Flouroquinolones (Ciprofloxacin/Levofloxacin/Moxifloxacin)
     * NIT      Nitrofurantoin
     * FOF      Fosfomycin
     *  
    ***/
    'ATM': {
        name: 'Aztreonam',
        fullName: '',
        examples: {Aztreonam: {route: "IV"}},
        abxClass: 'other-abx',
        comments: 'Aztreonam is a unique beta-lactam that is most often used in patients with a <b>true beta-lactam ("' +
        'penicillin") allergy</b>. It exclusively covers gram negative bugs, including <i>Pseudomonas</i>. ' +
        "It's a weak inducer of AmpC beta-lactamases, but is a good substrate (see <mark><b>AmpC</b></mark> for what " +
        "this means). This makes it similar to ceftriaxone or pip/tazo for AmpC coverage: Not great"
    },
    'Aminogly': {
        name: 'Aminoglycosides',
        fullName: '',
        examples: {
            Amikacin: {route: "IV"},
            Gentamicin: {route: "IV"},
            Tobramycin: {route: "IV"}
        },
        abxClass: 'other-abx',
        comments: 'Aminoglycosides are used to treat gram negative infections, including <i>Pseudomonas</i>. ' +
        "Gentamicin can have a synergistic effect for many gram positives (Staph aureus, Enterococcus)<br><br>" +
        "Aminoglycosides has high rates of <b>nephrotoxicity & ototoxicity</b>, which limits their use in clinical practice"
    },
    'AZM': {
        name: 'Azithromycin',
        fullName: 'Macrolides',
        examples: {
            Azithromycin: {route: "PO/IV", trade: "Zithromax"},
            Erythromycin : {route: "PO/IV"}
        },
        abxClass: 'other-abx',
        comments: 'Macrolides are commonly used for treatment of bacterial pneumonia. A "Z-pak" is 500mg of azithromycin, ' +
        "followed by 250mg for 4 more days; it's also acceptable to do 500mg daily for 3 days. <br><br>" +
        "As a class, macrolides are associated with <b>QTc prolongation</b> and GI symptoms. In fact, erythromycin is more " +
        'so used for the pro-motility "side effects"; however, it ' + "shouldn't be used for more than 2 weeks since it " +
        "down-regulates motilin receptors. Finally there are many drug-drug interactions, especially with cardiac medications"
    },
    'Quino': {
        name: 'Fluoroquinolones',
        fullName: 'Fluoroquinolones',
        examples: {
            Ciprofloxacin: {route: "PO/IV", trade: "Cipro"},
            Levofloxacin: {route: "PO/IV", trade: "Levaquin"},
            Moxifloxacin: {route: "PO/IV"}
        },
        abxClass: 'other-abx',
        comments: "<ul>" +
        "<li>Cipro doesn't have as good of gram positive activity (vs levo/moxi)</li>" +
        "<li>Pseudomonas activity: cipro &gt; levo &gt;&gt; moxi</li>" +
        "<li>Moxifloxacin is the only one with anaerobic coverage (but especially intraabdominal)</li>" +
        "<li>For the <mark><b>Bad bugs</b>:</mark> can <b>sometimes</b> use Levofloxacin (Steno, Acinetobacter) or Cipro (Acinetobacter)</li>" +
        "</ul>" +
        "Associated with many side effects: <b>QT prolongation</b>, GI side effects (one of the highest rates of " +
        "<b><i>C diff</i></b>), achilles tendon ruptures, development of <b>aortic aneurysm</b>, worsening of myasthenia " +
        "gravis (to name a few)"
        
    },
    'TMPSMX': {
        name: 'Bactrim',
        fullName: '',
        examples: {"Trimethoprim-sulfamethoxazole": {
            route: "IV/PO", trade: "Bactrim", abbv: "TMP-SMX"
        }},
        abxClass: 'other-abx',
        comments: 'Bactrim has broad activity against many gram negative infections, including MDR bugs, such as (' +
        "<i>Stenotrophomonas maltophilia</i>; <mark>see <b>Bad bugs</b></mark>), and Staph infections (including <b>MRSA</b>).<br><br>" +
        "Monitor renal function on TMP-SMX. It can cause <b>acute kidney injury</b> (AIN or ATN) and <b>hyperkalemia</b> " +
        "(from TMP blocking potassium secretion). Trimethoprim can also increase the serum creatinine independently " +
        "(without affecting the GFR) by competing with creatinine for secretion from the proximal renal tubules. TMP-SMX " +
        "also may cause <b>myelosuppresion</b> & ITP, GI side effects, <b>SJS/TEN</b>, and other side effects." +
        "<br><br>Fun fact: In addition to treating bacterial infections, TMP-SMX has antifungal (<i>Pneumocystis " +
        "jiroveci</i>), antiparasitic (<i>Toxoplasma gondii</i>), and antimycobacterial (<i>Mycobacterium fortuitum</i>) " +
        "activity!"
    },
    'NIT': {
        name: 'Nitrofurantoin',
        fullName: '',
        examples: {Nitrofurantoin: {route: "PO", trade: "Macrobid"}},
        abxClass: 'other-abx',
        comments: 'Nitrofurantoin is used to treat <b>uncomplicated</b> urinary tract infections, namely cystitis. It has ' +
        "little activity outside of the bladder, so should <b>not be used for pyelonephritis</b>.<br><br>" +
        "It can also be used for <b>UTI <u>prophylaxis</u></b>, although prolonged use can cause pulmonary fibrosis."
    },
    'FOF': {
        name: 'Fosfomycin',
        fullName: '',
        examples: {Fosfomycin: {route: "PO"}},
        abxClass: 'other-abx',
        comments: 'In the US, oral fosfomycin is mainly used for UTIs (both complicated and uncomplicated, unlike ' +
        "nitrofurantoin). Elsewhere the IV formulation is available, which has broader uses. It has activity against " +
        "a broad range of bacteria, including gram negative Enterobacteriaceae (including ESBL) and gram positives " +
        "(including VRE). <br><br>" +
        "For uncomplicated UTIs, you can use a single dose, which makes it an attractive treatment option. However, you " +
        "should avoid using fosfomycin as empiric treatment to prevent resistance (there isn't much cross resistance " +
        "with other antibiotics, so it can be a great stepdown from carbapenems for MDR complicated UTIs). Similarly, " +
        "always use cultures to guide your therapy, as there can be resistance to fosfomycin."
    }

    
};

/******************************************************************************\
 * BACTERIA
 \*****************************************************************************/
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

/******************************************************************************\
 * SYNDROMES
 \*****************************************************************************/
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
            GNR:'com', PsA:'', AmpC:'occ', 
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
            MSSA:'occ', MRSA:'occ', SOSA:'', 
            Strep:'occ', VRE:'occ', VSE:'com',
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
            Strep:'', VRE:'occ', VSE:'com',
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
        fullName: 'Bacterial meningitis (community acquired)',
        bugs: {
            GNR:'', PsA:'', AmpC:'', 
            ESBL:'', CRE:'', Others:'unk', 
            MSSA:'', MRSA:'', SOSA:'', 
            Strep:'com', VRE:'', VSE:'',
            anaerobes:'', PNA:'', Zoo:''},
        comments: "This covers <b class='text-danger'><u>immunocompetent</u></b> " +
        "<b class='text-info'>adults</b> with acute <b>bacterial</b> meningitis. " +
        'Meningitis does not fit well into the "bacteria" schema ' + "I've " +
        "developed, so please read this text. " +
        "<br><br>" +
        "The two most common pathogens <i>Strep. pneumoniae</i> and <i>Neisseria " +
        "meningitidis</i>. The combo of ceftriaxone and vancomycin cover these " +
        "two bacteria (vanco is needed for resistant strains of S. pneumoniae). " + 
        "<i>Listeria monocytogenes</i> should be considered in immunocompromised " +
        "patients, pregnancy, and older adults (add ampicillin). <b>Dexamethasone</b> " +
        "should be given 15-20 minutes <b>before the first dose of antibiotics</b>."
    },
    'SA': {
        name: 'SA',
        fullName: 'Septic arthritis',
        bugs: {
            GNR:'com', PsA:'occ', AmpC:'', 
            ESBL:'', CRE:'', Others:'', 
            MSSA:'com', MRSA:'com', SOSA:'', 
            Strep:'com', VRE:'', VSE:'',
            anaerobes:'', PNA:'', Zoo:''},
        comments: 'Most common pathogens are Staph aureus, Streptococcus sp., ' +
        "and gram negative rods. If sexually active, consider <i>Neisseria " +
        "gonorrhoeae</i>"
    }
    
};


