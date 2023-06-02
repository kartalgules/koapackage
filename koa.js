const Koa = require('koa')
const app = new Koa()

app.use(ctx => {
    if(ctx.path === '/'){
      ctx.type = "text/html";
      ctx.body = '<h1>INDEX SAYFASINA HOSGELDINIZ</h1>';
    }else if(ctx.path === "/about"){
      ctx.type = "text/html"
      ctx.body = '<h1>HAKKIMDA SAYFASINA HOSGELDINIZ</h1>';
    }else if(ctx.path === "/contact"){
      ctx.type = "text/html"
      ctx.body = '<h1>İLETİSİM SAYFASINA HOSGELDINIZ</h1>';
    }else {
      ctx.type = "text/html"
      ctx.body = '<h1>404 SAYFA BULUNAMADI</h1>';
    }
  });
  
  const port = 3000
  app.listen(port, ()=>{
    console.log(`Server Starting.. Port: ${port}`)
  });