---
date: 2024-02-10
title: Core Web Vital如何影響SEO
tags:
    - Frontend
    - Performance
    - SEO
description: Vercel CTO，前google search總裁解密Core Web Vital如何影響SEO...
---

# Core Web Vital 如何影響 SEO

## 前言

2024 年 2 月 5 日，`Vercel` 的官方 youtube 有個[影片](https://www.youtube.com/watch?v=qIyEwOEKnE0)

是 Vercel Frontend Lead `Lee Robinson`，講解一篇叫[How Core Web Vitals affect SEO](https://vercel.com/blog/how-core-web-vitals-affect-seo)的文章

這篇 blog 是 Vercel 的 `CTO` 寫的，他是前 `google search` 的 `director`

非常有權位的文章

## 搜尋排名

-   查詢關鍵字的`關聯度`跟網站`內容質量`還是最重要的，遠大於網站效能
-   跟競爭對手，有著類似的內容質量情境下，`網站速度`會讓你在 `SEO` 脫穎而出，而且網站速度也會影響`購買轉換率`

翻 vercel 相關文章，發現一個不錯收集`網頁效能`影響`DX`跟`轉換率`資料的[網站](https://wpostats.com/)

## 查看 Core Web Vitals 的方法

### [Google Search Console](https://search.google.com/search-console)

### [PageSpeed Insights](https://pagespeed.web.dev/)

## Core Web Vitals 的內涵

`PageSpeed Insights`分成兩個部分：

-   Discover what your `real users` are experiencing
-   Diagnose `performance` issues

實際上只有第一項，`真實使用者`體驗資料會影響`SEO`

第二項，俗稱所謂的`lighthouse跑分`，只是當成優化網站的參考依據

用 `Devtools` 的 `lighthouse` 的效果跟上面的 `PageSpeed Insights` 的 `lighthouse` 效果是一樣的

## 真實使用者資料

-   會使用過去`28天`中，`P75`的使用者的`平均`使用情況
-   會影響的效能指標有
    -   `Largest Contentful Paint` (`LCP`)
    -   `First Input Delay` (`FID`)
    -   `Cumulative Layout Shift` (`CLS`)
-   `2024-03-12` 之後 `Interaction to Next Paint` (`INP`) 會取代 `FID`.
-   `桌機`跟`手機`版的網站是`分開`計算的
-   使用者來自哪個`國家`，並無區別，計算`權重一樣`
-   收集的資料要足夠多，才會進行排名
-   使用者必須`登入chrome`，並啟動`使用統計報告`(usage statistic reporting)
-   只能收集`桌機`或是`android`系統的 chrome 資訊

最後一點蠻有趣的，`軟體`被`硬體`(Apple)掐著脖子，收集不到 `IPhone` 的資料

## Core Web Vitals 指標

### LCP

`LCP`是`Largest Contentful Paint`縮寫，詳細可以看[官方文件](https://web.dev/articles/lcp)

簡單講就是，網站`主要內容`的`載入時間`，通常`瓶頸`會在`圖片`、`影片`等等

他會取`P75`的數字作評估(有 75%的人比這數字好)

在`2.5秒`內認為是`良好`，大於`4.0`秒，會被歸類為`糟糕`的使用者體驗

![LCP](../../images/2024-02-10_CoreWebVital_SEO/01.svg)

### INP

`INP`是`Interaction to Next Paint`縮寫，詳細可以看[官方文件](https://web.dev/articles/inp)

簡單講就是當`行為觸發`後，網站到對你的行為作出`反應的時間`，一樣取`P75`

`INP`會計算下列行為

-   `滑鼠點擊`
-   輕觸`觸碰螢幕`裝置
-   實體或螢幕`鍵盤`輸入

![INP](../../images/2024-02-10_CoreWebVital_SEO/02.svg)

在`200毫秒`內認為是`良好`，大於`500毫秒`，會被歸類為`糟糕`的使用者體驗

### CLS

`CLS`是`Cumulative Layout Shift`縮寫，詳細可以看[官方文件](https://web.dev/articles/cls)

講白話就是，避免`板面`(layout)突然大幅度移動，造成使用者`誤點按鈕`之類的不好體驗

### FID

`FID`是`First Input Delay`縮寫，詳細可以看[官方文件](https://web.dev/articles/fid)

跟 INP 很類似，但是只取第一次的輸入

`2024-03-12`之後會被`INP`取代

## 即時的 Core Web Vitals

因為 PageSpeed Insights 是計算 28 天 P75 的平均值

並不能`即時`地反映出，對網站所做的`優化改變`

所以一般`前端監控服務`都會有 Core Web Vitals 的指標

甚至還可以統計 `P90`、`P95` 等等數據

`Vercel` 他們也有提供這樣的體驗

<Comment />
