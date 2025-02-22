const path = require('path');

module.exports = {
    target: 'electron-renderer',
    // NOTICE don't remove following start-end comments, it is used for parsing by postinstall.config.js
    // start of extra configs
    externals: {
        typeorm: "require('typeorm')",
        sqlite3: "require('sqlite3')",
    },
    resolve: {
        alias: {
            typeorm: path.resolve(__dirname, "../node_modules/typeorm/typeorm-model-shim")
        }
    }
    // end of extra configs
};
