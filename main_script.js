/**
 * @summary The main JS file used for the webpage
 * 
 * DEPENDENCIES
 * Before this script is run, have the HTML file run: 
 * 
 *   1. *parseCSV.js* to import the function `csvToJS()` and the strings 
 *      `CSV_SYNDROME` and `CSV_ANTIBIOTICS`. Running the csvToJS() function on
 *      these strings is used to get the classes that should be applied to the
 *      syndrome-bacteria (e.g. cellulitis can be caused by MRSA) and 
 *      antibiotic-bacteria (e.g vanc can treat MRSA) pairs
 *      
 *   2. *static_objects.js* to import the JSON objects `ANTIBIOTICS`, `BACTERIA`,
 *      and `SYNDROMES`. These are lists of the antibiotics, bacteria, and 
 *      syndromes that are used to generate the lists in the HTML document (that
 *      appear on either side of the SVG). These objects also define the text 
 *      that gets populated in the box under the SVG
 *  
 * CREDIT
 * Adapted from the website https://bugdrugdx.com/
 * 
 * @author Hunter Ratliff
 * @link https://github.com/HunterRatliff1/BugDrug
 * @link https://bugdrugdx.com/
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
 * SECTION I
 * Define helper functions
 \*****************************************************************************/

/** clearHighlights - Removes any old highlights
 * 
 * This serves as a helper function to reset the webpage to it's default state,
 * primarily when the user is no longer hovering over an element. First it
 * removes the custom classes from any of the toggleable elements (.toggleable).
 * 
 * It also resets the text in the box below the SVG to look like it did when you
 * first load the page
 * 
 * @param {Array=} cls Array of HTML classes to be removed, in addition to the 
 *                     default classes. These classes are the classes used in 
 *                     the CSV file
 */
function clearHighlights(cls=["note", "unk"]) {
    var toRemove = "good some broad bad na com occ" + " " + cls.join(" ");

    // Remove all of the classes that amy have been added
    $( ".toggleable").removeClass(toRemove);
  
    // Reset the text in the box to the default
    $( "#box-title" ).html("Hover to begin");
    $( "#box-subtitle" ).html("");
    $( "#box-text" ).html("Hover over a syndrome, bacteria, or antibiotics to get started<br><br><br>");
};


/** addHighlights - Adds respective classes to DOM elements by ID 
 * 
 * This expects a list of **key:value pairs**, where the key is the ID attribute  
 * of the DOM element, and the value is the CSS class to be applied to that 
 * element. If a class is not specified (i.e. the value == ''), the the default
 * class will be applied, as defined by `defaultClass`. Note: the CSS classes 
 * need to be defined in `styles.css`. This function doesn't check to see if the 
 * class you applied is valid
 * 
 * An example input could be `{GNR:'good', PsA:'bad', AmpC:''}` or 
 * `{UTI:'good', HAP:'some', SSTI:'some'}`
 * 
 * 
 * @param {JSON}    listOfIDs    - An object of key:value pairs, where the key
 *                                 is the ID attribute of the HTML element and 
 *                                 the value is the class to be applied to that
 *                                 element.
 * @param {string=} defaultClass - The class to be applied if no class is given.
 *                                 This defaults to "na". 
 * 
 * @example
 * var myObj = {GNR:"good",PsA:"bad", AmpC:""};
 * addHighlights(myObj);
 * 
 * // Same as if you ran the code below
 *  $("#GNR").addClass("good");
 *  $("#PsA").addClass("bad");
 *  $("#AmpC").addClass("na");
 * 
 * @see clearHighlights to reverse the changes made here
 */
function addHighlights(listOfIDs, defaultClass="na") {
    Object.keys(listOfIDs).forEach(function(key){
        var id = '#' + key;
        var classToAdd = listOfIDs[key];
        if (classToAdd=='') {classToAdd = defaultClass;}
        $(id).addClass(classToAdd);
    });
};


/** addInfoBox - Populate the HTML for the info box
 * 
 * This helps to pipe HTML strings into the info box (located under the SVG).
 * The relevant HTML code is listed below 
 * 
    <div class="card-body">
        <h5 id="box-title" class="card-title">   TITLE GOES HERE   </h5>
        <h6 id="box-subtitle" class="card-subtitle">   OPTIONAL SUBTITLE   </h6>
        <p id="box-text" class="card-text">   TEXT GOES HERE   </p>
    </div>
 *    
 * @param {string=} title  - HTML code to be used as title text. If left blank,
 *                           and subtitle is not blank, the the subtitle will
 *                           replace the title. 
 * @param {string} text    - Bulk of the HTML code to be used in the body of the
 *                           card.
 * @param {JSON=} subtitle - Optional JSON object that gets special formatting.
 *                           See the code for details.
 * 
 * @example
 * addInfoBox(title="Your title", text="Your text");
 * 
 * // Using the special subtitle
 * var exampleText = "Aminoglycosides are super nephrotoxic";
 * var exampleSubtitle = {
 *      Amikacin: {route: "IV"},
 *      Gentamicin: {route: "IV", trade:"Garamycin"},
 *      Tobramycin: {route: "IV"}
 * };
 * addInfoBox(title="", text=exampleText, subtitle=exampleSubtitle);
 * 
 */
function addInfoBox(title="", text="", subtitle="") {

    /**
     * For cases when the subtitle is not a string, we're going to assume that
     * it's a complex object, like `ANTIBIOTICS.MEM.examples`, that contains
     * the generic antibiotic name as the key, and additional (optional) 
     * key:value pairs listing parameters (namely, route, trade, and abbv).
     * 
     * The goal is to get the JSON data below:
     * {
     *    Meropenem: {route: "IV", trade: "Merrem"},
     *    Doripenem: {route: "IV"},
     *    "Imipenem-Cilastatin": {route: "IV", trade: "Primaxin", abbv: "IPM-CLN"}
     *  }
     * 
     * To output formatted text like this:
     * Meropenem (Merrem, IV) / Doripenem (IV) / Imipenem-Cilastatin [IPM-CLN] (Primaxin, IV)
     */
    if(typeof(subtitle)!=="string"){
        var output = []; // An array to push results to (e.g. list of abx)
        
        /** For each antibiotic that is given, run through the code below */ 
        Object.keys(subtitle).forEach(function(key){
            var item = subtitle[key];
            var html = "";  // This will be the html code for the item

            // Start by adding the key (generic name of the abx)
            html += key;

            // If an abbreviation is given, add it after the name
            if(item.abbv != undefined){
                html += ' <small>[' + item.abbv + ']</small>';
            }

            /** Now we're to the stuff that goes in the parentheses. One or more 
             *  of these may not be defined, and we only want the parentheses
             *  to show up if at least one is defined */
            var parenth = [];
            if(item.trade != undefined){
                parenth.push('<span class="text-info">' + item.trade + '</span>');
            }
            if(item.route != undefined){
                parenth.push(item.route);
            }
            if(parenth.length>0){ // Only run if at least one is defined
                html += ' (' + parenth.join(", ") + ')';
            }

            output.push(html);
        });

        subtitle = output.join(" / ");
    }

    // If given subtitle w/o title, switch the two
    if(title=="" & subtitle!=""){
        title = subtitle;
        subtitle = "";
    }

    $( "#box-title" ).html(title);
    $( "#box-subtitle" ).html(subtitle);
    $( "#box-text" ).html(text);

}


/******************************************************************************\
 * SECTION II
 * Implement the code
 \*****************************************************************************/
$( document ).ready(function() {

    //$('#disclaimerModal').modal('show');

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

        // When you hover over the **syndrome**...
        $( '#'+syn).on( "mouseenter", function(){
            addHighlights(csvToJS(CSV_SYNDROME, false)[syn]), // highlight the **bugs**
            addInfoBox(syndrome.fullName, syndrome.comments)
        } );
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

        // When you hover over the **antibiotic**...
        $( '#'+abx).on( "mouseenter", function(){
            addHighlights(csvToJS(CSV_ANTIBIOTICS, false)[abx]), // highlight the **bugs**
            addInfoBox(antibiotic.fullName, antibiotic.comments, antibiotic.examples)
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
            addHighlights(csvToJS(CSV_SYNDROME, true)[bug]),    // highlight the **syndromes**
            addHighlights(csvToJS(CSV_ANTIBIOTICS, true)[bug]), // highlight the **antibiotics**
            // Add info box
            addInfoBox(bacteria.name, bacteria.comments, bacteria.bugExamples)

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

    console.log(csvToJS(CSV_ANTIBIOTICS, true)["AmpC"]);
    */
    
});

