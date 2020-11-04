const Koa = require('koa');
const router = require('koa-router')();
const views = require('koa-views');
const koaStatic = require('koa-static');
const path = require('path');

const app = new Koa();

app.use(views(path.join(__dirname, '/views')));

//配置静态web服务的中间件
app.use(koaStatic(path.join(__dirname, 'static'))); // __dirname是当前文件夹

router.get('/', async (ctx) => {
  await ctx.render('index');
});

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(10086, () => {
  console.log('点击运行: http://localhost:10086?appId=2021001153690963&appName=支付宝出行服务&appIcon=https://appstoreisvpic.alipayobjects.com/prod/d8af6251-8072-469c-ae33-2907d5f8b774.png@120w.png');
});
