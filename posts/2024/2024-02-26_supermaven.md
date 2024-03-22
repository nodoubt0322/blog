---
date: 2024-02-26
title: Copilot的新挑戰者，SuperMaven
tags:
    - Tools
    - IDE
description: Tabnine這個AI助手編輯器的作者，又一新的產品，號稱比Copilot更快更精準...
---

# Copilot 的新挑戰者，SuperMaven

## 前言

前幾天在網路上看到的新玩意 SuperMaven，號稱比 Copilot `更快更精準`

官方有一篇 [blog](https://supermaven.com/blog/introducing-supermaven) 做介紹

## 成本

類似 GPT-4 的`LLM`因為算力的要求，`成本高`，`Copilot`只能透過`限制`提供`建議`的內容來降低成本

所以現在就`市場經濟`來看，主流還是`SLM`為主

## context window

`context window`是 AI 在`提出建議`時，可`參考`的內容大小，跟`精准度`呈現`正相關`

所以 Copilit 最近才將 context window 改成`8192`個`token`

但是`SuperMaven`可以提供`30萬`個`token`的 content window

而成本只有市面上`4000`個 token 的成本

## 速度

SuperMaven 拿了市面上的 AI 編輯器

做了一個 `for 迴圈`，改了變數名稱，讓他不能使用 cache

去測試反應時間，結果如下

|    Tool    | Frames | Latency (ms) |
| :--------: | :----: | :----------: |
| Supermaven |   15   |     250      |
|  Copilot   |   47   |     783      |
|  Codeium   |   53   |     883      |
|  Tabnine   |   50   |     833      |
|   Cursor   |  113   |    1,883     |

結果 SuperMaven 速度比 Copilit 快了三倍

我自己試用，也有明顯感覺到快的感覺

不過現在只有支援`vscode`

費用`10美/月`，可以試用一個月

<Comment />
