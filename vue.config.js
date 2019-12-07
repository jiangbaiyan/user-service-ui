module.exports = {
    devServer: {
        proxy: 'http://152.136.125.67:9600/v1/'
    },
    outputDir: 'dist',
    assetsDir: 'dist/public',
    runtimeCompiler: undefined,
    productionSourceMap: false,
    parallel: undefined,
};
