const http=require('http');

const server= http.createServer((req,res)=>{

    const url=req.url;
   if(url===' / '){
    
   }
    else if(url==='/about'){
        
        res.writeHead(200,{'Contanct-Type':'text/html'})
    res.write('<h1>INDEX SAYFASI<h1>');
    }
    else if(url==='/contact'){
        res.write('Contact Sayfası');
    }
    else{
        res.write('404 Sayfa Bulunamadı!!!');
    }

    res.end();
   
    //Önce vir istekte bulunduk cıktı local3000 aratınca
    //3000 de calıstırıldı cıktısı cıktı sonra
    //İstek gönderidi cıktı ekranda hiç bir şey yoktu
    //res.write ile ekrana merhaba yazdırdık ve bu da bir istek
    //oldugundan dolayı ekrana yine bir istek gönderildi 
    //yazılmıs oldu.
    
    res.end();
    //res.end olmadan kod resp vermez
});

const port=3000;

server.listen(port,()=>{
    console.log(`Sunucu port ${port} de başlatıldı.`);
    //TERS TIRNAK KULLANDIK DOLARLI OLAN YERDE ONDAN DOLAYI

});