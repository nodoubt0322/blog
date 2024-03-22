---
date: 2024-03-21
title: 如何google
tags:
    - Tools
    - Effeciency
description: 這篇文章會對google搜尋的操作符(operators)做個比較完整的整理...
---

# 如何 google

## 前言

網路上完整的講 google 搜尋的`操作符(operators)`的文章跟影片不多，上 google 的文件尋找，只能說少得可憐，繼續 google，找到兩天不錯的文章：

-   [Search Operators](https://www.googleguide.com/advanced_operators_reference.html)
-   [如何用好 Google 搜索引擎？](https://daily.zhihu.com/story/1175)

做個整理

## 符號運算符

分成 4 種

-   `""`
-   `-`
-   `..`
-   `*`

### 確切運算符 ""

`""`表示是`完全符合`的，對英文的組合字，特別好用

### 排除運算符 -

`-`表示是`不包含`減號後面的關鍵字，例如`apple -watch`

表示搜尋 apple 的文章，但是不包含 watch 的關鍵字

注意`-`跟`watch`中間不能有空格

### 範圍運算符 ..

`..`表示範圍，例如`apple $1000..3000`

表示搜尋 apple 的文章，包含 $1000 到 3000 的數字

### 萬用字元運算符 \*

`*`代表任意`1個`或是`多個`字符，例如`apple w*h`

## 搜尋運算符

-   allin 跟 in 系列 (all 代表可以多個關鍵字)
    -   (all)`inanchor`
    -   (all)`intext`
    -   (all)`intitle`
    -   (all)`inurl`
-   site
-   filetype
-   define
-   author
-   source

### inanchor

> tldr，這功能對一般使用者來說，不好用

`anchor`是錨點，`inanchor`表示是`包含`錨點的關鍵字，連結 link 也算

例如`apple inanchor:expensive`

會回傳有 apple 的關鍵字`頁面A`，並且包含`expensive`的`錨點`

或是有 apple 的關鍵字`頁面A`，並且在`頁面 B` 有`expensive`的的`連結` (頁面 B 並不會在搜索結果顯示)

有點繞，有點沒那麼好懂

加了 all 表示 inanchor 後面的關鍵字可以是`多個`

例如 `allinanchor:best museums sydney`

`best`跟`:`中間不能有空格

### intext

> tldr，這功能搜某個 id 的文章，特別好用

`intext`代表`內文`包含特定關鍵字

例如`intext:jserv`

### intitle

`intitle`代表`標題`包含特定關鍵字

例如`intitle:jserv`

### inurl

> tldr，這功能搜某個 id 做過的事，特別好用

`inurl`代表`網址`包含特定關鍵字

例如`inurl:jserv`

會出現類似像這樣網址 `https://wiki.csie.ncku.edu.tw/User/jserv` 的網頁

### site

> tldr，這個拿來搜文件，不錯用

加上`site`表示在特定網站做搜尋

例如`jserv site:ncku.edu.tw`

就是在有 `ncku.edu.tw` 網址的網頁搜尋 jserv

值得注意的是，跟 dns 解析一樣，他是從 root 開始 mapping

就是從 tw 然後 edu 然後 ncku 這樣開始 mapping

假如輸入`jserv site:ncku.edu`會沒東西

因為沒有`*.ncku.edu`這樣的網站

### filetype

> tldr，不好用，通常想搜電子書之類的，還不如用 site 去搜 github

搜特定檔案格式

例如`vue filetype:pdf`

### define

> tldr，問某個名詞解釋的時候，挺好用的

問關鍵字定義的時候，可以用這個

例如：`define:ebpf`

### author

> tldr，可以查某個作者的著作，不錯用

可以查作者寫過的東西

例如`author:"Crockford, Douglas"`

### source

搜特定的新聞來源，搜關鍵字

上面的分類要選新聞才有作用

例如：`election source:"taipei times"`

<Comment />
