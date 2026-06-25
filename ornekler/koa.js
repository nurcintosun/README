const Koa = require('koa');
const app = new Koa();

app.use(ctx => {
    const url = ctx.url;
    ctx.type = 'text/html; charset=utf-8';

    if (url === '/' || url === '/index') {
        ctx.status = 200; // Durum kodu: Başarılı
        ctx.body = '<h1>HOSGELDİNİZ</h1>'; // Ekrana basılacak yazı
    } 
    else if (url === '/about') {
        ctx.status = 200;
        ctx.body = '<h1>GEC KALDİNİZ</h1>';
    } 
    else if (url === '/contact') {
        ctx.status = 200;
        ctx.body = '<h1>ERKEN GELDİNİZ</h1>';
    } 
    else {
        ctx.status = 404; // Durum kodu: Bulunamadı
        ctx.body = '<h1>!404 NOT FOUND!</h1>';
    }
}); // 👈 app.use burada bitti!

// 🔥 Dinleme satırını dışarıya, en alta aldık:
const port = 3000;
app.listen(port, () => {
    console.log('Koa Sunucusu 3000 de calismaya basliyor...');
});