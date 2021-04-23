const express = require("express")
const path = require("path")

const app = express() ;
const port = process.env.PORT || 5000; 

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve(__dirname + '/build'))); 

    app.get("*", (request, response) => { 
        response.sendFile(path.resolve(__dirname + "/build/index.html"));
    })
}

app.listen(port, () =>  {
    console.log(`listening on port: ${port}`)
});