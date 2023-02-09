/**
 * @Author: wangrenjie86@gmail.com
 * @Date: 2023-02-09 11:55:23
 * @LastEditors: wangrenjie86@gmail.com
 * @LastEditTime: 2023-02-09 12:09:43
 * @FilePath: \packages\ui\packages\index.js
 * @Description:
 */

import XButton from './button';
import XHeader from './header';

const componentList = { XButton, XHeader };

const install = app => {
  Object.keys(componentList).forEach(componentName => {
    let comp = componentList[componentName];
    app.component(comp.name, comp);
  });
};

export default {
  install,
};
