var src = './src';
var www = './www';

module.exports = {
	img : {
		src : src + '/img/**',
		dest : www + '/img'
	},
	sass : {
		src : src + '/sass/*.scss',
		dest : www + '/css'
	},
	js : {
		src : src + '/js/*.js',
		dest : www + '/js'
	},
	libs : {
		src : src + '/libs/**',
		dest : www + '/libs'
	},
	html : {
		src : [
			www + '/*.html',
			www + '/partials/*.html',
			www + '/partials/*/*.html',
			www + '/modal/*.html',
			www + '/modal/*/*.html'
		]
	}
};


