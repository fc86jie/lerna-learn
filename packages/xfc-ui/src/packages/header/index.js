/**
 * @Author: wangrenjie86@gmail.com
 * @Date: 2023-02-09 11:56:17
 * @LastEditors: wangrenjie86@gmail.com
 * @LastEditTime: 2023-02-09 12:08:28
 * @FilePath: \packages\ui\packages\header\index.js
 * @Description:
 */

import XHeader from './src/header.vue';

XHeader.install = app => {
  app.component(XHeader.name, XHeader);
};

export default XHeader;
