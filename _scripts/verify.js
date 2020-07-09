// let reader = new FileReader();
let solution = require('./solutions.json');
let solution_path = "pages/Solutions/MMS/additionaloptions.md";
let document_path = "pages/documents/";
const fs = require("fs"); // Or `import fs from "fs";` with ESM

(function () {
   console.log(solution[0])
   // update solution path
   if (fs.existsSync(solution_path)) {
      // Do something
      console.log('the first file exists');
      //now loop 
   }
   solution.forEach(item => {
      // TODO use file reader to see if folder exists
      solution_path = "pages/Solutions/";
      solution_path += folderName(item.solutionname) + '/';
      console.log('Solution path updated :', solution_path)
      if (fs.existsSync(solution_path) && item.documents) {
         console.log('Found folder HOOORAH :', folderName(item.solutionname))

         item.documents.forEach(doc => {
            // TODO use file reader to see if folder exists

            //is this doc a folder 
            if (doc.documentname.pages) {
               // check if folder exists 
               // update solution path
               if (fs.existsSync(solution_path)) {
                  // Do something
                  console.log('folder exists');
                  //now loop 
               }
               else {
                  console.log(`${doc.documentname} file doesn't exist or is not named properly.
               file name should take title, make it lower case and add dashes where spaces are
               i.e.  File Name should be file-name
               `);
               }
               //loop
            } else if (doc.documentname) {
               // check if file exists
               let fName = fileName(doc.documentname);
               //solution_path += filefName + '.md';
               console.log('solution path is : ', solution_path);
               if (fs.existsSync(solution_path)) {
                  // Do something
                  console.log('This file exists: ', solution_path);
                  //now loop 
               }
               else {
                  console.log('Could not find this file ', solution_path);
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
   console.log('file name is:', file.toLowerCase().split(' ').join('-').trim());
   return file.toLowerCase().split(' ').join('-').trim()
}
function folderName(folder) {
   console.log('Folder name is:', folder.split(' ').join('').trim());
   return folder.split(' ').join('').trim();
}

// forEach(item ){
//     if (item.solutionname.a.split(' ').join('')  && item.documents ){ // check folder exists? -- fileread
//         item.documents.forEach(doc){
//         // check if each file name is not correct -- file read
//             if( !doc.documentname ){
//                 console.log( `${doc.documentname} file doesn't exist or is not named properly. 
//                 file name should take title, make it lower case and add dashes where spaces are
//                 i.e.  File Name should be file-name
//                 `);
//             } else{


//                // if(doc.pages){
//                //    doc.page.forEach(page){

//                //    else {
//                //       if (page.subpages){

//                //       }

//                //    }

//             } else{
//                   console.log(`${doc.documentname} file doesn't exist or is not named properly. 
//                 file name should take title, make it lower case and add dashes where spaces are
//                 i.e.  File Name should be file-name
//                 `);
//                }
//             }
//         }
//     } else{
//     print `${item.solutionname}  folder doesn't exist or is not named properly. 
//         folder name should take title and squash it.
//         i.e.  File Name should be FileName.
//         `
//     }   



// }

