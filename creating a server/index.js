// http modul handles the request and response of nodejs server
const http=require("http")

const dataControl=(req,resp)=>{
    resp.write("<h1> hello, this is nodejs server</h1>")
    resp.end()
}
http.createServer(dataControl).listen(4500)