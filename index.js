// console.log("pavan")

const http=require("http") 
const PORT=4000
const app=http.createServer((require,response)=>{
response.write("<h1>HELLO THIS RESPONSE FROM HTTP</h1>")
response.write(require.url)
response.end()

})
app.listen(PORT,()=>console.log(`server is running at ${PORT}`))
