



/* Dependecies: This reqires you to call three javascript files that contain 
                lists of objects. These objects are identified by their DOM ID 
                (e.g. <div id="myID">) and each item in the list has some 
                associated properties. See the respective files for details.
                These files also are used to build out the lists that appear
                on either side of the SVG diagram
    syndromes.js ----- List of the clinical syndromes
    antibiotics.js --- List of the antibiotic classes
    bugs.js ---------- List of the bugs, corresponding to the SVG
*/





// Removes all highlights from items with class of toggleable
const clearHighlights = function (cls="active") {
    // Remove all of the classes that amy have been added
    $( ".toggleable").removeClass("good some broad bad na com occ unk");
  
    // Reset the text in the box to the default
    $( "#box-title" ).html("Hover to begin");
    $( "#box-subtitle" ).html("");
    $( "#box-text" ).html("Hover over a syndrome, bacteria, or antibiotics to get started<br><br><br>");
};


/* Given an list of IDs, add a class
   expects an object with key:value pairs, where the key is 
   the DOM ID and the value is the class to be applied. E.g 
   {GNR:'ideal', PsA:'ideal', AmpC:'meh', MRSA:'', MSSA:'tooBroad'}  

   It also takes three additional arguments, title, text, and subtitle.
   Unlike listOfID (which should have multiple items), these are 
   strings of HTML/text that is plugged to the additional info box

   Example input
     listOfID = {GNR:'class1', PsA:'class1', AmpC:'', 
                 MRSA:'class2', MSSA:'class2'}
     title    = 'Empiric treatment for sepsis'
     text     = 'Sepsis is complicated and this tool doesn't take into
                 account important factors (e.g. immunocompromise, prior
                 micro data, antibiotic exposure<br><br>
                 This is just a suggestion for bugs that cause 
                 undifferentiated infections and that emperic antibiotics
                 that are often used'
   
   This code would 
     (1) Reset the page (clear prior highlights, reset the text in the box)
     (2) add 'class1' to #GNR and #PsA, add 'class2' to #MRSA and #MSSA,
         and add class 'na' #AmpC (because the JSON for AmpC was blank)
     (3) Set the box's title (#box-title) to 'Empiric treatment for sepsis'
         and replace the HTML in the body of the box (#box-text) to the
         HTML supplied by text. Because subtitle isn't supplied, it defaults
         to blank
*/
const mainHighlight = function(listOfID, title="", text="", subtitle="") {
    //clearHighlights(); // remove old highlights

    Object.keys(listOfID).forEach(function(key){
        var id = '#' + key;
        var classToAdd = listOfID[key];
        if (classToAdd=='') {classToAdd = "na";}
        $(id).addClass(classToAdd);
    });

    if(subtitle!=""){
        var subtext = []; // An array to push results to (e.g. list of abx) 

        // todo: better documentation here !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        Object.keys(subtitle).forEach(function(key){
            var item = subtitle[key];
            var html = "";  // This will be the html code for the item

            // For simplicity, will always assume that the route is listed
            html += key + " (" + item.route;
            if(item.trade != undefined){
                html += ', <span class="text-info">' + item.trade + '</span>'; 
            }
            if(item.abbv != undefined){
                html += ', <small>[' + item.abbv + ']</small>';
            }
            html += ")";

            subtext.push(html);
        });

        subtitle = subtext.join(" / ");
    }

    // If given subtitle w/o title, switch the two
    if(title=="" & subtitle!=""){
        title = subtitle;
        subtitle = "";
    }

    $( "#box-title" ).html(title);
    $( "#box-subtitle" ).html(subtitle);
    $( "#box-text" ).html(text);
};

$( document ).ready(function() {
    // For the bag table, add classes to the parts of the SVG
    $( "#bug-table rect" ).each(function() {
        $( this ).addClass( "bugs" );
        $( this ).addClass( "toggleable" );
    });

    /*** For each syndrome listed in the SYNDROMES object ***/
    Object.keys(SYNDROMES).forEach(function(syn) {
        var syndrome = SYNDROMES[syn];

        // Generate the HTML for the list, and add it to the page
        var html = '<li id="' + syn + '">' + syndrome.name + '</li>';
        $( "#list-syndrome" ).append(html);
        $( '#' + syn).addClass( "syndromes" );
        $( '#' + syn).addClass( "toggleable" );
        $( '#' + syn).addClass( "list-group-item" );

        // When you hover over the **syndrome**, highlight the **bug**
        $( '#'+syn).on( "mouseenter", function(){mainHighlight(csvToJS(CSV_SYNDROME, false)[syn], syndrome.fullName, syndrome.comments)} );
        $( '#'+syn).on( "mouseleave", function(){clearHighlights()} );
    });

    /*** For each antibiotic listed in the ANTIBIOTICS object ***/
    Object.keys(ANTIBIOTICS).forEach(function(abx) {
        var antibiotic = ANTIBIOTICS[abx];

        // Generate the HTML for the list, and add it to the page
        var html = '<li id="' + abx + '">' + antibiotic.name + '</li>';
        $( '#' + antibiotic.abxClass + ' ul').append(html);
        $( '#' + abx).addClass( "antibiotics" );
        $( '#' + abx).addClass( "toggleable" );
        $( '#' + abx).addClass( "list-group-item" );

        // When you hover over the **antibiotic**, highlight the **bug**
        $( '#'+abx).on( "mouseenter", function(){
            mainHighlight(csvToJS(CSV_ANTIBIOTICS, false)[abx], antibiotic.fullName, antibiotic.comments, antibiotic.examples)
        } );
        $( '#'+abx).on( "mouseleave", function(){clearHighlights()} );
    });

    /*** For each bug listed in the BACTERIA object ***/
    Object.keys(BACTERIA).forEach(function(bug) {
        var bacteria = BACTERIA[bug];
        $( '#' + bug).addClass( "bugs" );
        $( '#' + bug).addClass( "toggleable" );

        // When you hover over the **bug**... 
        $( '#'+bug + ", #"+bug+"-txt").on( "mouseenter", function(){
            // highlight the **syndrome**
            mainHighlight(csvToJS(CSV_SYNDROME, true)[bug], bacteria.fullName, bacteria.comments), 
            // highlight the **antibiotic**
            mainHighlight(csvToJS(CSV_ANTIBIOTICS, true)[bug],  bacteria.fullName, bacteria.comments)

            /** Note: The jQuery code also adds an additional selector, 
             * e.g. $(#GNR, #GNR-text) so the function is applied when you hover
             * over the SVG text (in addition to the box)
             **/ 
        } );
        $( '#'+bug).on( "mouseleave", function(){clearHighlights()} );
    });

    /*
    //console.log(BACTERIA);
    console.log(  csvToJS(CSV_SYNDROME, false)  ); // When you hover over the **syndrome**, highlight the **bug**
    console.log(  csvToJS(CSV_SYNDROME, true)  );  // When you hover over the **bug**, highlight the **syndrome**

    console.log(  csvToJS(CSV_ANTIBIOTICS, false)  ); // When you hover over the **antibiotic**, highlight the **bug**
    console.log(  csvToJS(CSV_ANTIBIOTICS, true)  );  // When you hover over the **bug**, highlight the **antibiotic**

    //console.log(csvToJS(CSV_ANTIBIOTICS, true)["AmpC"]);
    */
});

