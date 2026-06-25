const http=require('http');

const server= http.createServer((req,res)=>{
const url=req.url;
res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });

if(url==='/index' ){
    res.write('<h2>İndex sayfasina hosgeldiniz.<h2>')
        
}

else if(url==='/hakkimda' ){
    res.write('<h2<Hakkimda sayfasina hosgeldiniz.<h2>')
}

else if(url==='/iletisim' ){
    res.write('<h2>İletisim sayfasina hosgeldiniz.<h2>')
}
else{
    res.write('404 ERROR!!')
}
res.end();
});
const port=8000;
server.listen(port,()=>{
    console.log('8000 numaralı portta calistiriliyor...');

})