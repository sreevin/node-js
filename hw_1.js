var fs = require('fs');
fs.writeFile('./testfileAsync.txt','This is a test sentence for Async',function(err){
    if(err) 
    throw err;
    console.log("Successfully written to file");
})
fs.writeFileSync('./testfileSync.txt','This is a test sentence for Sync');