const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pluginOptions: {
    electronBuilder: {
      outputDir: 'desktop-build',
    //   files: [ '**/*' ],
      builderOptions: {
        "appId": "com.example.electron-boilerplate",
        "directories": {
            "buildResources": "resources"
        },
        "extraFiles": [
            "credentials"
        ],
        "linux": {
            "target": "deb",
            "icon": "icon_desktop.png",
            "desktop": "ans",
        },
        "deb": {
            // "depends": "['libnotify4', 'libxtst6', 'libnss3']"
        },
        "win": {
            target: 'nsis',
            icon: 'icon_desktop.png',
        }
      }
    },
  },
  productionSourceMap: false,
})
