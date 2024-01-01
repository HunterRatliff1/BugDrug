const SYNDROMES = {
    'Empiric': {
        name: 'Empiric / Sepsis',
        fullName: 'Empiric treatment for sepsis',
        bugMain: ['GNR', 'PsA', 'AmpC', 'Staph', 'Strep', 'MSSA', 'MRSA', 'VSE'],
        bugRare: ['VRE', 'ESBL'],
        abxMain: [],
        abxRare: [],
        comments: 'comment goes here'
    },
    'UTI': {
        name: 'UTI',
        fullName: 'Urinary tract infection',
        bugMain: ['GNR', 'PsA', 'AmpC'],
        bugRare: ['VSE', 'VRE', 'ESBL'],
        abxMain: [],
        abxRare: [],
        comments: ''
    },
    'CAP': {
        name: 'CAP',
        fullName: '',
        bugMain: ['', '', ''],
        bugRare: ['', '', ''],
        abxMain: [],
        abxRare: [],
        comments: ''
    },
    'HAP': {
        name: 'HAP',
        fullName: '',
        bugMain: ['', '', ''],
        bugRare: ['', '', ''],
        abxMain: [],
        abxRare: [],
        comments: ''
    },
    'SSTI': {
        name: 'Cellulitis',
        fullName: '',
        bugMain: ['', '', ''],
        bugRare: ['', '', ''],
        abxMain: [],
        abxRare: [],
        comments: ''
    },
    'Foot': {
        name: 'Foot ulcer',
        fullName: '',
        bugMain: ['', '', ''],
        bugRare: ['', '', ''],
        abxMain: [],
        abxRare: [],
        comments: ''
    },
    'Osteo': {
        name: 'Osteomyelitis',
        fullName: '',
        bugMain: ['', '', ''],
        bugRare: ['', '', ''],
        abxMain: [],
        abxRare: [],
        comments: ''
    },
    'IAI': {
        name: 'IAI',
        fullName: '',
        bugMain: ['', '', ''],
        bugRare: ['', '', ''],
        abxMain: [],
        abxRare: [],
        comments: ''
    },
    'Hepatobiliary': {
        name: 'Hepatobiliary',
        fullName: '',
        bugMain: ['', '', ''],
        bugRare: ['', '', ''],
        abxMain: [],
        abxRare: [],
        comments: ''
    },
    'SBP': {
        name: 'SBP',
        fullName: '',
        bugMain: ['', '', ''],
        bugRare: ['', '', ''],
        abxMain: [],
        abxRare: [],
        comments: ''
    },
    'Meningitis': {
        name: 'Meningitis',
        fullName: '',
        bugMain: ['', '', ''],
        bugRare: ['', '', ''],
        abxMain: [],
        abxRare: [],
        comments: ''
    },
    'EDA': {
        name: 'SA / EDA',
        fullName: '',
        bugMain: ['', '', ''],
        bugRare: ['', '', ''],
        abxMain: [],
        abxRare: [],
        comments: ''
    },
    'Oral': {
        name: 'Oral flora',
        fullName: '',
        bugMain: ['', '', ''],
        bugRare: ['', '', ''],
        abxMain: [],
        abxRare: [],
        comments: ''
    }
    
};

const ANTIBIOTICS = {
    'Cefepime': {
        name: 'Cefepime (4G)',
        fullName: '',
        abxClass: 'cephalosporins',
        bugMain: ['GNR', 'PsA', 'AmpC', 'Strep', 'MSSA'],
        bugRare: [],
        synMain: [],
        synRare: [],
        comments: 'comment goes here'
    },
    'Vanc': {
        name: 'Vancomycin',
        fullName: '',
        abxClass: 'other-abx',
        bugMain: ['MSSA', 'MRSA', 'SOSA', 'Strep', 'VSE'],
        bugRare: [],
        synMain: [],
        synRare: [],
        comments: 'comment goes here'
    }
};

const BACTERIA = {
    'GNR': {
        name: 'Enterobacterales (gram negative rods)',
        fullName: '',
        bugClass: 'GN',
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
        abxMain: ['', '', '', '', ''],
        abxRare: [],
        synMain: [],
        synRare: [],
        comments: ''
    }
};





// Removes all highlights
const clearHighlights = function (cls="active") {
    $( ".syndromes").removeClass(cls);
    $( ".antibiotics").removeClass(cls); // TODO !!!!!!!!!! antibiotics
    $( ".bugs").removeClass(cls); 
};


// Given an array of IDs, add a class
const mainHighlight = function(ids, cls="active") {
    clearHighlights(); // remove old highlights

    ids.forEach(function (i) {
        var id = '#' + i;
        $(id).addClass(cls);
    });
};

$( document ).ready(function() {
    // For the bag table, add classes to the parts of the SVG
    $( "#bug-table rect" ).each(function() {
        $( this ).addClass( "bugs" );
    });

    // For each syndrome listed in the SYNDROMES object
    Object.keys(SYNDROMES).forEach(function(syn) {
        var syndrome = SYNDROMES[syn];

        // Generate the HTML for the list, and add it to the page
        var html = '<li id="' + syn + '">' + syndrome.name + '</li>';
        $( "#list-syndrome" ).append(html);
        $( '#' + syn).addClass( "syndromes" );
        $( '#' + syn).addClass( "list-group-item" );

        // Highlight the .....
        $( '#'+syn).on( "mouseenter", function(){mainHighlight(syndrome.bugMain)} );
        $( '#'+syn).on( "mouseleave", function(){clearHighlights()} );
    });

    // For each antibiotic listed in the ANTIBIOTICS object
    Object.keys(ANTIBIOTICS).forEach(function(abx) {
        var antibiotic = ANTIBIOTICS[abx];

        // Generate the HTML for the list, and add it to the page
        var html = '<li id="' + abx + '">' + antibiotic.name + '</li>';
        $( '#' + antibiotic.abxClass + ' ul').append(html);
        $( '#' + abx).addClass( "antibiotics" );
        $( '#' + abx).addClass( "list-group-item" );

        // Highlight the .....
        $( '#'+abx).on( "mouseenter", function(){mainHighlight(antibiotic.bugMain)} );
        $( '#'+abx).on( "mouseleave", function(){clearHighlights()} );
    });

    // For each bug listed in the BACTERIA object
    Object.keys(BACTERIA).forEach(function(bug) {
        var bacteria = BACTERIA[bug];
        $( '#' + bug).addClass( "syndromes" );

        // Highlight the .....
        $( '#'+bug).on( "mouseenter", function(){mainHighlight(bacteria.abxMain)} );
        $( '#'+bug).on( "mouseleave", function(){clearHighlights()} );
    });


      //$( "#syn_UTI").addClass( "active" );
       
    

    //addHighlight(["Emperic", "AmpC"]);
    //clearHighlights();

  
    

    /*
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
      */
});

