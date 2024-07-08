---
page: true
title: ES
description: ES
sidebar: true
---

## JS的歷史跟演進

### 建立
Javascript是在1995年被`Brendan Eich`在`Netscape`為了他們的瀏覽器，`Netscape Navigator`，花了`10天`創立出來的

- 一開始的名字叫`Mocha`
- 在Netscape Navigator 2.0 beta (1995年9月)改成`LiveScript`
- 在Netscape Navigator 2.0 beta 3 (1995年12月), 最後定版成`JavaScript`

他有寫了一本JS的歷史書，`JavaScript: The First 20 Years` ，有人把他翻成[中文](https://cn.history.js.org/)


### 其他語言的影子
Javascript有很多語言的影子，像是：
- JavaScript 的語法很大程度上是基於`Java`
- `Closure`跟`environments`借鏡了`Scheme`
- `AWK` 影響了`Function`
- JavaScript 的`String`、`Array`和`regular expressions`借鑒了 `Perl`
- `HyperTalk` 啟發了`onclick`事件處理
- `Python`影響了`Generators`
- `Arrow function`來自於`CoffeeScript`
- `C++`貢獻了`const`關鍵字
- `解構(destructuring)`來自`List`
- `模板字符串(Template literals)`來自`E語言`

### 特性

Javascript還有一些比較顯著的特性
- `動態語言`，絕大多數的Object可以在`runtime`的時候被改變，value的`type`也可以被改變
- 他有`Functional Programming`的特性：`first-class function`、`closures`, `partial`等等
- 他也有`Object Oriented Programming`的特點：`mutable state`、`objects`、`inheritance`、`classes`等等
- 常常`fail silently`
  - 就是發生錯誤時，不報出exception，或是會自動幫你做額外的處理，像"3"+"5"=8，會自動把string轉成number
  - `ES3`之後才有`exception`
- 直接JS代碼就可以部署，雖然大都會經過`minified`的工程化處理
  - 有在計畫[binary](https://github.com/tc39/proposal-binary-ast)的方式
- Javascript是web平台的一部分，內建在瀏覽器裡面，但是在其他部分也可以看到他的蹤跡，像是，`nodejs`處理server的事情還有寫`shell script`


### 標準

Javascript有兩個參考的標準
- `ECMA-262`
  - 由 `European Computer Manufacturers Association(ECMA) International` 主導。這是主要標準。
- `ISO/IEC 16262`
  - 由`International Organization for Standardization(ISO)` 和`International Electrotechnical Commission(IEC)` 主導。這是次要標準。

符合這兩個標準的叫做`ECMAScript`，並非叫`Javascript`是因為`Javascript`是`Oracle`註冊的商標，他並無意把`Javacript`商標給上述的標準組織

`ECMA`是取自主要標準的主導機構名稱

通常`Javascript`指的是`語言本身`，還有他的`實現`(implement)

而`ECMAScript`指的是`語言標準`，還有他的版本，像ECMAScript 6，就是第6版

### 版本時間線

- ECMAScript 1（`1997年6月`)：第一個版本
- ECMAScript 2（`1998年6月`)：保持 ECMA-262 與 ISO 標準同步的小更新
- ECMAScript 3（`1999年12月`)：新增核心功能- 正規表示式、更好的字串處理、控制語句[do-while、switch]、try/catch等等
- ECMAScript 4：想做的事太多，最終沒能成行，於`2008年7月`放棄了ECMAScript 4。
- ECMAScript 5（`2009年12月`)：小部分改進
- ECMAScript 5.1（`2011年6月`）：保持Ecma和ISO同步的小更新。
- ECMAScript 6（`2015年6月`）：一次大型更新，實現了 `ECMAScript 4` 的許多承諾。此版本是`第一個正式名稱`，`ECMAScript 2015`，基於發布年份的版本。
- ECMAScript `2016`（`2016年6月`）：與大型 ES6 相比，較短的發布生命週期導致新功能較少。
- ECMAScript `2017`（`2017年6月`)
- 後續 ECMAScript 版本（`ES2018`等)，都在6月發布

###
