/*
 * @Author: ItKui
 * @Date: 2020-08-05 15:18:57
 * @LastEditTime: 2020-08-05 15:20:39
 * @FilePath: \vue-test\vue.config.js
 */
module.exports = {
    pwa: {
      name: 'test',
      themeColor: '#4c89fe',
      msTileColor: '#4c89fe',
      manifestOptions: {
        start_url: '.',
        background_color: '#4c89fe'
      },
      workboxPluginMode: 'GenerateSW',
      workboxOptions: {
      }
    }
  }