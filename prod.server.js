var express = require('express');
var config = require('./config/index');

var port = process.env.PORT || config.build.port;

var app = express();

var router = express.Router();

router.get('/',function (req, res, next) {
	req.url = '/inex.html';
	next();
});

var appData = require('./data.json');//加载本地数据文件
var seller = appData.seller;//获取对应的本地数据
var goods = appData.goods;
var ratings = appData.ratings;
var apiRoutes = express.Router();



apiRoutes.get('/seller', (req, res) => {
    res.json({
      	errno: 0,
      	data: seller
    })//接口返回json数据，上面配置的数据seller就赋值给data请求后调用
 });
apiRoutes.get('/goods', (req, res) => {
    res.json({
      	errno: 0,
      	data: goods
    })
 });
apiRoutes.get('/ratings', (req, res) => {
    res.json({
      	errno: 0,
      	data: ratings
    })
 });
 app.use('/api', apiRoutes);//通过路由请求数据

 app.use(express.static('./dist'));


 module.exports = app.listen(port, function (err) {
 	if(err){
 		console.log(err);
 		return;
 	}
 	console.log('listening at http://localhost:' +port+ '\n');
 })

