const webpackOptions = {
    publicPath: '/',
    lintOnSave: false,
    configureWebpack: {
        devtool: 'eval' // this is needed to debug in browser
    },
    css: {
        loaderOptions: {
            scss: {
                /* Add any other functions, mixins or variables here to globally initialise the app */
                prependData: `
				@import "~@/scss/variables.scss";
				`
            }
        }
    },
    runtimeCompiler: true
};

module.exports = webpackOptions;
