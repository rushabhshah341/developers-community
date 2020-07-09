// let reader = new FileReader();
let data = [
   {
      "categoryname": "Agent Experience",
      "image": "agent-experience-new",
      "documents": [
         {
            "documentname": "Add Agent Widgets",
            "pages": [
               {
                  "pagename": "Add Your Own Widgets to the Agent Workspace"
               }
            ]
         },
         {
            "documentname": "Agent Workspace Widget SDK",
            "pages": [
               {
                  "pagename": "Overview"
               },
               {
                  "pagename": "Limitations"
               },
               {
                  "pagename": "Methods"
               },
               {
                  "pagename": "Public Model Structure"
               },
               {
                  "pagename": "Public Properties"
               },
               {
                  "pagename": "Best Practices and Troubleshooting"
               },
               {
                  "pagename": "Release Notes"
               }
            ]
         }
      ]
   }
];
let path;
let pass;
const fs = require("fs"); // Or `import fs from "fs";` with ESM

(function () {

   let pass = true;
   data.forEach(item => {
      path = "pages/documents/";
      path += convertToExpectedFolderName(item.categoryname) + '/';
      if (fs.existsSync(path) && item.documents) {
         item.documents.forEach(doc => {
            var document_path = path
            //check if document is a folder 
            if (doc.pages) {
               document_path += convertToExpectedFolderName(doc.documentname) + '/'
               // console.log("Doc is a folder")

               if (fs.existsSync(document_path)) {
                  console.log('Doc Folder exists');
                  //now loop over pages
                  doc.pages.forEach(page => {
                     if (page.subpages) {
                        let pagesPath = document_path;
                        // TODO
                     }
                     fileExists(page.pagename, document_path)
                  })
               }
               else {
                  console.log(`${doc.documentname} file doesn't exist or is not named properly.`);
               }
            }
            fileExists(doc.documentname, document_path)
         })

      } else {
         console.log(` ${convertToExpectedFolderName(item.categoryname)} folders doesn't exist or is not named properly.`);
      }
   })

}());

function convertToExpectedFileName(file) {
   // console.log('file name is:', file.toLowerCase().split(' ').join('-').trim());
   return file.toLowerCase().split(' ').join('-').trim()
}
function convertToExpectedFolderName(folder) {
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

function pageNameMatchesLayout(fileName, path) {
   console.log('This file exists: ', path);
   get_line(path, 1, function (err, line) {
      console.log("___pagename___:", line.substring(10));
      if (!(fileName === line.substring(10))) {
         console.log(`Page name: ${line.substring(10)} in file does not match the layout spec: ${fileName}`)
         pass = false;
      }
   })
}
function fileExists(fileName, path) {
   // check if file exists
   let convertedFileName = convertToExpectedFileName(fileName);
   let fileName_path = path + convertedFileName + '.md'
   if (fs.existsSync(fileName_path)) {
      pageNameMatchesLayout(fileName, fileName_path)
   }
   else {
      console.log('Could not find this file ', fileName_path);
      pass = false;
   }
}


