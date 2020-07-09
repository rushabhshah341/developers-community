// let reader = new FileReader();
let solution = require('./solutions.json');
let solution_path = "pages/Solutions/MMS/additionaloptions.md";
let document_path = "pages/documents/";
const fs = require("fs"); // Or `import fs from "fs";` with ESM

(function () {

    let pass = true;
    solution.forEach(item => {
        // TODO use file reader to see if folder exists
        solution_path = "pages/Solutions/";
        solution_path += folderName(item.solutionname) + '/';
        // console.log('Solution path updated :', solution_path)
        if (fs.existsSync(solution_path) && item.documents) {
            // console.log('Found folder HOOORAH :', folderName(item.solutionname))

            item.documents.forEach(doc => {
                // TODO use file reader to see if folder exists
                var document_path = solution_path

                //check if document is a folder 
                if (doc.documentname.pages) {
                    //TODO add for loop for pages.check
                    // console.log("Doc is a folder")
                    document_path += folderName(doc.documentname) + '/'
                    if (fs.existsSync(document_path)) {
                        // Check if pages have subpages
                        console.log('Doc Folder exists');
                        //now loop over pages
                    }
                    else {
                        console.log(`${doc.documentname} file doesn't exist or is not named properly.`);
                    }
                }
                //check if document is a file
                else if (doc.documentname) {
                    // check if file exists
                    let fName = fileName(doc.documentname);
                    document_path = solution_path + fName + '.md'
                    //solution_path += filefName + '.md';
                    // console.log('solution path is : ', solution_path);
                    if (fs.existsSync(document_path)) {
                        console.log('This file exists: ', document_path);
                        let pagename = get_line(document_path, 1, function (err, line) {
                            // console.log("pagename&&&:", line.substring(10));
                            console.log("\n");
                            if (!(doc.documentname === line.substring(10))) {
                                console.log("FILENAME IS BAD!")
                            }
                        })
                    }
                    else {
                        console.log('Could not find this file ', document_path);
                    }
                } else {
                    console.log(`${doc.documentname} file doesn't exist or is not named properly.
                  file name should take title, make it lower case and add dashes where spaces are
                  i.e.  File Name should be file-name
                  `);
                }
            })

        } else {
            console.log(` ${folderName(item.solutionname)} folders doesn't exist or is not named properly.
            `);
        }
    })

}());

function fileName(file) {
    // console.log('file name is:', file.toLowerCase().split(' ').join('-').trim());
    return file.toLowerCase().split(' ').join('-').trim()
}
function folderName(folder) {
    // console.log('Folder name is:', folder.split(' ').join('').trim());
    return folder.split(' ').join('').trim();
}

function get_line(filename, line_no, callback) {
    var data = fs.readFileSync(filename, 'utf8');
    var lines = data.split("\n");

    if (+line_no > lines.length) {
        throw new Error('File end reached without finding line');
    }

    callback(null, lines[+line_no]);
}

