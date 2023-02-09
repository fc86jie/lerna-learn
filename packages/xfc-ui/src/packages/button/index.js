/**
 * @Author: wangrenjie86@gmail.com
 * @Date: 2023-02-09 11:56:08
 * @LastEditors: wangrenjie86@gmail.com
 * @LastEditTime: 2023-02-09 12:20:16
 * @FilePath: \packages\ui\packages\button\index.js
 * @Description:
 */

import XButton from './src/button.vue';

XButton.install = app => {
  app.component(XButton.name, XButton);
};

export default XButton;
