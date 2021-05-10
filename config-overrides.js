const path = require('path');
const { override, addWebpackAlias } = require('customize-cra');

const resolve = dir => path.resolve(__dirname, dir);

module.exports = override(
	addWebpackAlias({
		'~': resolve('src'),
	})
);
