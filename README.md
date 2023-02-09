# lerna-learn

### lerna create [packageName]

创建子项目包

### lerna add

增加本地或者远程 package 作为当前项目 packages 里面的依赖

```javascript

// 安装moduleA作为moduleB的业务依赖
lerna add moduleA --scope moduleB

// 安装moduleA作为moduleB的开发依赖
lerna add moduleA --scope moduleB --dev

// 安装moduleA作为所有子项目的依赖，除了moduleA自身
lerna add moduleA

// 向所有的子项目安装 babel-core
lerna add babel-core

```

### lerna bootstrap

安装各个子项目的声明依赖，并通过软链接的方式处理子项目间的依赖关系

```bash
--hoist 来将依赖安装到根目录以达成子目录共享 node_modules
```

### lerna clean

清空所有子项目的 node_modules

### yarn 结合 lerna

- yarn 管理依赖
- lerna 发布到 git 和 npm

```bash

# 清理
lerna clean # 清理所有的node_modules
yarn workspaces run clean

# 安装依赖
yarn install 等价于 lerna bootstrap --npm-client yarn --use-workspaces

# 给某个package安装依赖
yarn workspaces packageB add packageA
==
lerna add packageB --scope packageA

# 给所有的package安装依赖
yarn add lodash -W

# 给root安装依赖
yarn add -W -D typescript

```
