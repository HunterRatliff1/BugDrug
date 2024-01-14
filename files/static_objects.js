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
 * 
 * ----------------------------------- SCHEMA ----------------------------------
 * ANTIBIOTICS = {
 *  "DOM ID": {
 *      name: `A string to be displayed in the list, with a short name for the 
 *             antibiotic`,
 *      fullName: `(optional) The HTML code to be used as the title of the info 
 *             box. If left blank and examples are given, then the examples 
 *             replace the blank string`,
 *      examples: { // Can be one or more objects with structure below
 *          "Generic name 1": {
 *              route: `(mandatory) String of the routes of administration`,
 *              trade: `(optional) Trade name for this antibiotic`,
 *              abbv:  `(optional) Abbreviation for the antibiotic`
 *          },
 *          "Generic name 2": {route: "...", trade:"...",abbv:"..."}
 *      },
 *      abxClass: `(mandatory) The DOM ID of the <ul> that the antibiotic should
 *                 fall under`,
 *      comments: `The HTML code to populate in the main part of the info box`
 *  },
 *  "Another DOM ID": "{...}"
 * }
 *
 \*****************************************************************************/
const ANTIBIOTICS = {
    /*** PENICILLINS
            AMP       PCN/Amox/Ampicillin
            NAF       Naf/Oxacillin/Dicloxacillin
            Unasyn    Ampicillin Sulbactam (Unasyn)
            Augmentin Amoxicillin-Clavulanate (Augmentin)
            Zosyn     Piperacillin-Tazobactam (Zosyn)
    ***/
    'NAF': {
        name: 'Naf/Oxacillin',
        fullName: 'Anti-staphylococcal penicillins',
        examples: {
            Nafcillin: {route: "IV/IM"}, 
            Oxacillin: {route: "IV"},
            Dicloxacillin: {route: "PO"}
        },
        abxClass: 'penicillins',
        comments: 'As the name implies, the anti-staphylococcal penicillins are the best treatment options for infections ' +
        "with Staphylococcus spp. For methicillin-<u>susceptible</u> strain of Staph. aureus (MSSA), especially severe " +
        "infections, outcomes are better if you use an anti-staphylococcal penicillin (or first generation cephalosporin)."
    },
    'AMP': {
        name: 'Amox / Amp',
        fullName: 'Aminopenicillins',
        examples: {
            Ampicillin: {route: "IV"}, 
            Amoxicillin: {route: "PO"}
        },
        abxClass: 'penicillins',
        comments: 'Both ampicillin & amoxicillin are great for strep coverage, and have very limited gram negative ' +
        "coverage (gram negative coverage improves with adding a beta-lactam, see <mark>see <b>Augmentin & Unasyn</b></mark>). " +
        "Ampicillin has activity against enterococci and <b><i>Listeria</i></b>"
    },
    'Augmentin': {
        name: 'Augmentin &trade;',
        fullName: '',
        examples: {"Amoxicillin-Clavulanate": {route: "PO", trade:"Augmentin", abbv:"AMX/CLA"}},
        abxClass: 'penicillins',
        comments: 'Augmentin adds the beta-lactamase inhibitor clavulanic acid to amoxicillin to give it more potent gram ' +
        "negative coverage. It is ideal for infections of the head/neck & sinusitis."
    },
    'Unasyn': {
        name: 'Unasyn &trade;',
        fullName: '',
        examples: {"Ampicillin-Sulbactam": {route: "IV", trade:"Unasyn", abbv:"AMP/SUL"}},
        abxClass: 'penicillins',
        comments: 'Unasyn adds the beta-lactamase inhibitor sulbactam to ampicillin to give it more potent gram ' +
        "negative coverage (though increasing resistance limits its use for intraabdominal infections). It is ideal for " +
        "infections of the head/neck.<br><br>" +
        "High dose <b>sulbactam</b> can be used to treat <mark><b><i>Acinetobacter</i></b></mark>. " +
        "Ampicillin alone has no activity against <i>Acinetobacter</i>, but unfortunately there isn't a commercially " +
        "available version of sulbactam alone (though there is Xacduro [Sulbactam/durlobactam])."
    },
    'Zosyn': {
        name: 'Zosyn &trade;',
        fullName: '',
        examples: {"Piperacillin-Tazobactam": {route: "IV", trade:"Zosyn", abbv:"PIP/TZB"}},
        abxClass: 'penicillins',
        comments: 'Has both <b><i>Pseudomonas</i></b> (from piperacillin) and <b>anaerobic</b> coverage, so it can be ' +
        "ideal for emperic coverage of hospital associations (e.g <mark><b>HCAP</b></mark>) and intraabdominal infections. " +
        "It's a weak inducer of AmpC beta-lactamases, but is a good substrate (see <mark><b>AmpC</b></mark> for what " +
        "this means), so it's not ideally for AmpC producing bacteria.<br><br>" +
        "There is some controversy regarding nephrotoxicity when combined with <mark><b>vancomycin</b></mark>. Vanco " +
        "is nephrotoxic alone and recent evidence is casting doubt on Vanc-Zosyn nephrotoxicity, so ask your ID " +
        "pharmacist their thoughts before using this combo."
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
            "Imipenem-Cilastatin": {route: "IV", trade: "Primaxin", abbv: "IPM-CLN"}
        },
        abxClass: 'carbapenems',
        comments: 'Carbapenems are the broadest of all beta-lactams and cover some of the most difficult bacteria that ' +
        "we frequently encounter (including <b>ESBLs</b>). Unfortunately, rates of resistance are increasing (<mark>see " +
        "<b>CREs</b></mark>) so they should only be used in the sickest of patients. Generally, if a patient has a " +
        "history of ESBL <u>but is immunocompetent and not septic</u>, don't just throw on meropenem without a reason " +
        "(this is how we get CREs). Carbapenem exposure also increase the risk of C diff and other bad infections " +
        "(e.g. <mark>stenotrophomonas</mark>).<br><br>"+
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
        'Minocycline has good activity against some of the "bad bugs", namely <mark><i>Stenotrophomonas</i></mark> and ' + 
        "<mark><i>Acinetobacter</i></mark>. It can have high rates of vestibular side effects (ataxia, vertigo) and turn the skin blue." +
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
        examples: {Metronidazole: {route: "PO/IV", trade:"Flagyl"}},
        abxClass: 'anaerobic-abx',
        comments: 'Metronidazole only covers anaerobes, but does a pretty good job when it comes to them! Traditionally, ' +
        'folks say to use metronidazole "below the diaphragm" due to its excellent activity against anaerobic gram ' +
        'negative bacilli (<i>Bacteroides fragilis</i>) and to use clindamycin "above the diaphragm" (metronidazole lacks ' +
        "activity against <i>Actinomyces</i>).<br><br>" +
        "Oral metronidazole has excellent bioavailability, so it's often used with another medication that covers gram " +
        "negatives (e.g. a fluoroquinolone) as an oral regimen for intraabdominal infections. Unlike clindamycin, which " +
        "can <i>cause</i> C diff colitis, metronidazole is sometimes used to <u>treat</u> C diff."
    },
    'CLI': {
        name: 'Clindamycin',
        fullName: '',
        examples: {Clindamycin: {route: "PO/IV"}},
        abxClass: 'anaerobic-abx',
        comments: 'Clindamycin is primarily used for anaerobic bacterial infections of the head & neck (has better ' +
        "activity against <i>Actinomyces israelii</i> & peptostreptococci compared to metronidazole). Conversely, rates " +
        "of resistance to <i>Bacteroides fragilis</i> are higher with clindamycin, so it's not used as much for " +
        "intraabdominal infections. Notably, has high rates of <b><i>C diff</i> colitis</b>, so consider another agent.<br><br>" +
        "The IV formulation is used to inhibit toxin production in necrotizing fasciitis & toxic shock syndrome, and " +
        "the topical form is used for bacterial vaginosis & acne. Has some activity against MRSA, but used less often " + 
        "due to increasing resistance & side effect profile."
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
        '<li>For the "bad bugs" can <b>sometimes</b> use Levofloxacin (<mark>Steno, Acinetobacter</mark>) or Cipro (<mark>Acinetobacter</mark>)</li>' +
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
        comments: 'Bactrim has broad activity against many gram negative infections, including MDR bugs, such as ' +
        "<mark><i>Stenotrophomonas maltophilia</i></mark>, and Staph infections (including <b>MRSA</b>).<br><br>" +
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
        bugExamples: 'Enterobacterales (gram negative rods)',
        bugClass: 'GN',
        comments: ''
    },
    'PsA': {
        name: 'Pseudomonas aeruginosa (susceptible)',
        bugExamples: '',
        bugClass: 'GN',
        comments: ''
    },
    'AmpC': {
        name: 'AmpC producers (HECK Yes)',
        bugExamples: '',
        bugClass: 'GN',
        comments: ''
    },
    'ESBL': {
        name: 'Extended-spectrum beta-lactamases',
        bugExamples: '',
        bugClass: 'GN',
        comments: ''
    },
    'CRE': {
        name: 'Carbapenem-resistant Enterobacterales',
        bugExamples: '',
        bugClass: 'GN',
        comments: ''
    },
    'Steno': {
        name: 'Other notable Enterobacterales',
        bugExamples: '',
        bugClass: 'GN',
        comments: ''
    },    
    'CRAB': {
        name: 'Other notable Enterobacterales',
        bugExamples: '',
        bugClass: 'GN',
        comments: ''
    },     
    'MSSA': {
        name: 'MSSA',
        bugExamples: '',
        bugClass: 'GP',
        comments: ''
    },
    'MRSA': {
        name: 'MRSA',
        bugExamples: '',
        bugClass: 'GP',
        comments: ''
    },
    'SOSA': {
        name: 'Staph other than Staph aureus',
        bugExamples: '',
        bugClass: 'GP',
        comments: ''
    },  
    'Strep': {
        name: 'Streptococcus spp.',
        bugExamples: `S. pyogenes (GAS, &#946;), S. agalactiae (GBS, &#946;), S.  pneumoniae (&#593;), viridans group 
        (&#593;), anginosus group (varies)`,
        bugClass: 'GP',
        comments: `The Streptococcus spp. are a confusing bunch of gram positive cocci <b>in chains</b>,  because we 
        have multiple ways of classifying to them (e.g. &#593;/&#946;/&#947; hemolysis or the Lancefield groups A-F). 
        In the future I should make a schema for strep alone, but for now lets focus on a few of the highest yield 
        species: <ul>
        <li>Group A (<i><b>S. pyogenes</b></i>) and other &#946; hemolytic strep can cause cellulitis, pharyngitis, bacteremia</li>
        <li><i><b>S. agalactiae</b></i> (Group B, &#946; hemolytic) can cause neonatal meningitis but also causes infections 
        in older/immunocompromised adults</li>
        <li><i><b>S. pneumoniae</b></i> (&#593; hemolytic) can cause pneumonia, sinusitis, meningitis, bacteremia</li>
        <li>&#947;-hemolytic strep, formerly GDS, are now Enterococcus; <mark>see <b>VSE</b> & <b>VRE</b></mark></li>
        </ul>`
    },  
    'VSE': {
        name: 'Vancomycin-sensitive Enterococcus',
        bugExamples: '',
        bugClass: 'GP',
        comments: ''
    },
    'VRE': {
        name: 'Vancomycin-resistant Enterococcus',
        bugExamples: '',
        bugClass: 'GP',
        comments: ''
    },
    'anaerobes': {
        name: 'Anaerobes',
        bugExamples: 'Bacteroides, Clostridium, Actinomyces, Prevotella, Peptostreptococci, Fusobacterium',
        bugClass: 'ana',
        comments: ''
    },
    'Other': {
        name: 'Not classified elsewhere / exceptions',
        bugExamples: '',
        bugClass: 'other',
        comments: `
        <b><i>Staphylococcus saprophyticus</i></b> technically falls under the "Staph other that staph aureus" or "coag
        negative staph" group, but it behaves differently so I categorized it here. It's a common cause of UTI and is 
        generally susceptible to most antibiotics used to treat UTIs (except fosfomycin). Treatment optiions include
        Bactrim, Augmentin, most cepholosporins, and fluoroquinolones.<br><br>
        
        <b><i>Neisseria meningitidis</i></b> is an important cause of meningitis (as the name implies). Treatment of 
        choice is ceftriaxone (ciprofloxacin is used for meningitis prophylaxis).<br><br>

        <b><i>Listeria monocytogenes</i></b> can cause meningitis and bacteremia in immunocompromised hosts. Treatment of 
        choice is Ampicillin
        `
    },
    'PNA': {
        name: 'Atypical pneumonias',
        bugExamples: 'Mycoplasma pneumoniae, Legionella pneumophila, Chlamydia pneumoniae, Chlamydia psittaci',
        bugClass: 'atyp',
        comments: `Atypical pneumonias are called "atypical" because they do not grow well with traditional methods. 
        This is in part because most of these bacteria lack cell walls. <i>C pneumoniae</i> often develops in younger 
        children, whereas <i>C psittaci</i> is more assocaited with pet birds. <i>Mycoplasma</i> is the classic "walking 
        pneumonia and is generally less severe than <i>Legionella</i>.`
    },
    'Zoo': {
        name: 'Zoonotic & tick-borne bacteria',
        bugExamples: "<u>Zoonotic:</u> Leptospirosis, Brucella, Q fever, Bartonella, Yersinia pestis<br> " +
        "<u>Tick-borne:</u> Rickettsia, Lyme, Babesiosis, Anaplasmosis/Ehrlichiosis, Tularemia",
        bugClass: 'atyp',
        comments: `This is such a broad category and it's beyond the scope of this page to talk about all of the 
        zoonotic & tick-borne pathogens (and their treatments). The important takeaway for learners is that 
        tetracyclines, in particular <mar><b>doxycycline</b></mark> has activity against many of these bugs.`
    }
};

/******************************************************************************\
 * SYNDROMES
 \*****************************************************************************/
const SYNDROMES = {
    'Empiric': {
        name: 'Empiric / Sepsis',
        fullName: 'Empiric treatment for sepsis',
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
        comments: COMMONTEXT.PNA + " <mark>Also see <b>HCAP</b></mark>" + 
        "<br><br>" + COMMONTEXT.aspiration 
    },
    'HAP': {
        name: 'HCAP',
        fullName: 'Pneumonia with risk factors',
        comments: COMMONTEXT.PNA + " <mark>Also see <b>CAP</b></mark>" + 
        "<br><br>" + COMMONTEXT.MDR
    },
    'SSTI': {
        name: 'Cellulitis / SSTI',
        fullName: 'Cellulitis and other skin/soft tissue infections',
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
        comments: 'Most common bacteria are enterobacteriaceae (gram negative rods) ' +
        "enterococcus, and anaerobes (Clostridium and Bacteroides spp). For many " +
        "of these conditions antibiotics are not definitive therapy, and these " +
        "folks need some kind of procedural intervention (cholecystectomy, " +
        "percutaneous drain, ERCP). "
    },
    'SBP': {
        name: 'SBP',
        fullName: 'Spontaneous bacterial peritonitis',
        comments: 'Seen in cirrhosis patients with ascites. Diagnostic criteria ' +
        "&#8805; 250 cells/uL from ascitic fluid. Cultures of ascitic fluid is " +
        "often negative. Most common treatment is ceftriaxone"
    },
    'Meningitis': {
        name: 'Meningitis',
        fullName: 'Bacterial meningitis (community acquired)',
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
        name: 'Septic arthritis',
        fullName: 'Septic arthritis',
        comments: 'Most common pathogens are Staph aureus, Streptococcus sp., ' +
        "and gram negative rods. If sexually active, consider <i>Neisseria " +
        "gonorrhoeae</i>"
    }
    
};


