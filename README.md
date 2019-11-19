# apollo_server_basic test


## introduction

最近因為一些 學習遇到需要深入學習Graphql的語法

因此找了一些學習資源

然後看到了 [Apollo Graphql server的文章](https://medium.com/@Whien/%E4%BD%BF%E7%94%A8-apollo-graphql-server-%E6%92%B0%E5%AF%AB-api-%E5%AE%89%E8%A3%9D-query-704be7ce6301)

於是就照著範例 開始了一點基礎設定

## initial setup

```shell=
npm i apollo-server graphql -S
```

## setup node compile import 

因為這個範例還不適用typescript 

並且nodejs 本身還沒對於 import語法的支援

因此做了一點 babel-node的設定

1 安裝 @babel/core 以及@babel/node
```shell=
npm i -D @babel/core @babel/node
```

2 安裝 @babel/preset-env
```shell=
npm i -D @babel/preset-env
```

3 設定 .babelrc
```javascript==
{
    "presets": [ "@babel/preset-env" ]
}
```

4 新增 run_server scripts
```javascript==
"run_server": "babel-node run_server"
```