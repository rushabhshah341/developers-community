// let reader = new FileReader();
let solution = require('./solutions.json');
(function () {
   console.log(solution[0])
   solution.forEach(item => {
      // TODO use file reader to see if folder exists
      if (folderName(Nameitem.solutionname) && item.documents) {
         item.documents.forEach(doc => {
            // TODO use file reader to see if folder exists

            //is this doc a folder 
            if (doc.documentname.pages) {
               // check if folder exists
               //loop
            } else if (fileName(doc.documentname)) {
               // check if file exists
            } else {
               console.log(`${doc.documentname} file doesn't exist or is not named properly.
                  file name should take title, make it lower case and add dashes where spaces are
                  i.e.  File Name should be file-name
                  `);
            }
         })

      } else {
         console.log(`${doc.documentname} file doesn't exist or is not named properly. 
               file name should take title, make it lower case and add dashes where spaces are
               i.e.  File Name should be file-name
            `);
      }
   })

}());

function fileName(file) {
   return file.toLowerCase().split(' ').join('-')
}
function folderName(folder) {
   return folder.split(' ').join('')
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

