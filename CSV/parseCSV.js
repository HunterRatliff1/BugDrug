// Example CSV used to demonstrate the functions below
const csvStringExp = `
Label,colA,colB
row1,A1,B1
row2,A2,B2
row3,A3,B3
row4,A4,B4
`;


/** parseCSV - Takes a string from a CSV file and processes it into an array 
 * of arrays. 
 * 
 * @param {string} str - A single string containing the CSV values. These should
 *                       be unquoted.
 * @returns {Array}      Returns an array of arrays
 * 
 * @example
 * parseCSV(csvStringExp);   // using example data 
 * 
 * // Returns below:
 * [
 *   ['Label', 'colA', 'colB'],
 *   ['row1',  'A1',   'B1'],
 *   ['row2',  'A2',   'B2'],
 *   ['row3',  'A3',   'B3'],
 *   ['row4',  'A4',   'B4']
 * ]
 */
function parseCSV(str){
    var lines=str.split("\n");
  
    var result = [];

    for(var i=0;i<lines.length;i++){
        // ignore empty lines
        if (!lines[i])
            continue

        var currentline=lines[i].split(",");
        result.push(currentline);
    }
    return result
};


/** transpose - Transpose an array of arrays
 * @description 
 * When given an array of arrays (with `i` rows and `j` columns), returns the
 * transposed matrix (with `j` rows and `i` columns).
 * 
 * @param {Array} matrix - An array of arrays.
 * @returns {Array}
 * 
 * @example
 * var objArray = parseCSV(csvStringExp);   // using example data 
 * transpose(objArray);
 * // Returns below:
 * [
 *   ['Label', 'row1', 'row2', 'row3', 'row4'],
 *   ['colA', 'A1', 'A2', 'A3', 'A4'],
 *   ['colB', 'B1', 'B2', 'B3', 'B4']
 * ]
 * @see parseCSV
 * @link Adapted from this SO post https://stackoverflow.com/a/46805290
 */
function transpose(matrix) {
    const rows = matrix.length, cols = matrix[0].length;
    const grid = [];
    for (let j = 0; j < cols; j++) {
        grid[j] = Array(rows);
    }
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
        grid[j][i] = matrix[i][j];
        }
    }
    return grid;
}


/** toJSON - Converts array of CSV data into Javascript object
 * @description 
 * This takes the CSV data, formatted as an array of arrays (with `i` rows and 
 * `j` columns), and creates a nested javascript object. In the parent object, 
 * it uses the first column (`j=0`) as keys to name each child object. The child
 * object's names/keys come from the first row (`i=0`), and the values come from 
 * the remaining `j-1` columns. 
 * 
 * In the example, which comes from a CSV with **four rows** and **three columns**, 
 * the names from the row are in the format *col(`j`)* and the names in the first 
 * column are in the format *row(`i`)*. *row(`i`)* becomes the key for each child
 * object, and each child object consists of key:value pairs (using *col(`j`)* 
 * as the key). See the example for details. 
 * 
 * @param {Array}     arr   - An array of arrays, generated from parseCSV().
 * @param {boolean=}  json  - A logical flag indicating if the results should be
 *                            returned as a JavaScript object (true; default) or
 *                            as a JSON string (json=false).
 * @returns {(Object|string)} A Javascript object (or JSON string) with the 
 *                            values of the array renamed as objects. See the
 *  
 * 
 * @example
 * var objArray = parseCSV(csvStringExp);
 * toJSON(objArray, json=true);
 * // Returns below:
 * {"row1": {"colA":"A1","colB":"B1"},
 *  "row2": {"colA":"A2","colB":"B2"},
 *  "row3": {"colA":"A3","colB":"B3"},
 *  "row4": {"colA":"A4","colB":"B4"}
 * }
 * @see parseCSV
 * @link Adapted from this SO post https://stackoverflow.com/q/27979002
 */
function toJSON(arr, json=false){
    
    // This is the parent object, where each item will be the contents of a row
    var result = {};
    var headers=arr[0];
  
    // For each row (skipping the header row)
    for(var i=1;i<arr.length;i++){
        // This object will be the child object, e.g. {col1:'', col2:'', ...}
        var rowObj = {};
        var currentline=arr[i];
  
        // For each column of that row, name contents based on the column's header
        for(var j=1;j<headers.length;j++){  // skip the first column
            rowObj[headers[j]] = currentline[j];
        }

        // Name the results of the loop above based on the value in the first
        // column of that row
        result[currentline[0]] = rowObj;
    }

    // If JSON is true, return the results as json string. Otherwise return
    // it as a JavaScript object
    return json ? JSON.stringify(result) : result;
}

/* Some examples to demonstrate behavior */
// Create the JSON using the format as is
var objArray = parseCSV(csvStringExp);
var onjJson = toJSON(objArray, true);
console.log(onjJson);

// Transpose the CSV then create JSON
var objTransposed = transpose(objArray);
var onjJsonTransposed = toJSON(objTransposed, true);
console.log(objTransposed);
console.log(onjJsonTransposed);

