---
title: 語音轉文字輸入工具評比
date: 2025-11-10
tags:
    - STT
    - AI
description: 現在很流行vibe coding，透過AI來幫忙寫代碼，可以少打很多代碼，那既然要少打代碼，用講的是最快了，花了一些時間研究現在市面上的STT(speech-to-text)生態，做個紀錄
---

## 前言

現在很流行vibe coding，透過AI來幫忙寫代碼，可以少打很多代碼，那既然要少打代碼，用講的是最快了，花了一些時間研究現在市面上的`STT(speech-to-text)`生態，做個紀錄

## TLDR

選最貴的[Wispr Flow](https://wisprflow.ai/)，正常一個月要15美，但是現階段，註冊小號，用他邀請跟推薦的獎勵，就能一直免費用? 雖然不能調model，但感覺他就是用當下最好的，效果很好，而且他還有語音AI（實驗性質）的功能

假如wispr flow沒辦法白嫖的話，應該是選[spokenly](https://spokenly.app/)，自己接voice model API

## 背後原理

現在的語音轉文字輸入工具(STT)，都是以下的流程，有些軟體可能某部分會沒有

- 語音輸入存成檔案，存在local
- 透過`Voice Model`辨識成文字
    - 用`local`的model辨識
        - 比較好的model有
            - `OpenAI`的`Whisper Large v3 turbo`
            - `Nvidia`的`Parakeet V3`
    - 用`cloud`的model辨識
        - `對話段落辨識`
            - 一整段的語音，傳給比較好的語音model去辨識
            - 好處就是，provider的model強很多，且會有較多的`上下文`去增加`準確度`
            - 比較好的model有
                - `Deepgram Nove-3`
                - `GPT-4o Transcribe`
                - `GPT-4o mini Transcribe`
                - `Soniox Async`
        - `即時辨識`
            - 是用`websocket`連接
            - 會截取一段時間內(250~500ms不等)的語音，然後傳給model去`即時處理`
            - 比較好的model有
                - `Deepgram Nove-3 Realtime`
                - `Deepgram Nove-3 Flux`
                  - 最新的model，給`AI agent`用的，知道`何時傾聽`、`何時思考`以及`何時說話`
                - `Soniox Realtime`

- 再經過LLM去根據內容還有上下文去修飾文字
    - 在這邊會加一些`system prompt`或是`instruction`去調整輸出


## 服務選型

### [Wispr Flow](https://wisprflow.ai/)

`支援Mac、ios、windows`

他沒有voice model跟LLM給我選，也不需要設定`system prompt`，他只有問產出的風格是`formal`、`casual`、`very casual`。

其實這種都是那些專家幫你在`context engineering`做優化了，不需要自己搞，某種程度我比較喜歡這種，因為自己做功課弄半天，一定還是沒那麼專家處理的好

他有些設計算是蠻貼心，輸出效果也好，也有跟`cursor`跟`windsurf`做`coding`相關的整合，而且他還有個`AI語音`功能，在我列出來的幾個服務裡面，只有他們家有，還處於實驗性質，要把這個功能打開才會有。

按`fn+ctl`就能呼叫`AI語音模式(command mode)`。

功能簡介：

- 選取一段文字，使用`AI語音`模式，他會把`這段文字`，還有`你所講的話`當成是輸入，回傳的`結果`會`取代`那段文字
- 假如你有裝`perplexity`出的`comet瀏覽器`，使用`AI語音模式`，說要做什麼什麼`搜尋`，他就會用comet開新頁，用perplexity幫你搜尋
    - 在comet瀏覽器中，反白某一段話，叫出comet的AI assistant，那段話會在context裏面，但是沒辦法直接送出搜尋
    - 但是假如反白字，叫出`AI語音`模式，叫他解釋這段話，他會直接開新頁用perplexity解釋


### [spokenly](https://spokenly.app/)

`支援Mac、ios`

註冊就會給`免費額度`試用，一個月`10美金`，也可以接自己購買的model API，或是用local免費的。

有非常多的voice model可以選，而且還幫你`分類`，`tag`，還有`評價`，這一點真的蠻不錯的，尤其對生態沒那麼熟的人而言

也可以調整`system prompt`

缺點就是：
- 有感覺到這個比wispr flow`速度會慢一點點`，產生文字到輸出到input框需要優化我覺得。
- 只支援`mac`跟`ios`

STT的model真的很便宜，所以花錢去訂閱的感覺都是潘仔

假如wispr flow沒辦法白嫖的話，這個可能會是第一選擇，自己接API


### [superwhisper](https://superwhisper.com/)

`支援Mac、ios`

我看egghead.io的作者就是用這個軟體，一個月8.5美金左右，但是給的免費額度挺摳門的，15分鐘，可以選model，但是不多。

可以根據`場景`做不同的`system prompt`優化

速度有感覺稍微快一點

缺點就是:
- 一個月最少的`固定費用8.5美金`就在那邊
- 語音輸入時，他的`控制面板超大`，有時會擋到字，不知道他做這麼大的用意何在，有點白痴


### [Handy](https://github.com/cjpais/Handy)

`支援Mac、ios、windows、linux`

用Tauri做的APP，速度不錯，open source不用錢，但是只能選不用錢的model(你想花錢也沒辦法)，不過以不用錢的水準來看，`Whisper Large v3 turbo`跟`Parakeet V3`就很有水準了。

最大的優點就是支援linux系統

缺點就是
- 不能接付費的voice model API
- 細節功能偏少
- 沒有LLM去做輸出優化


### [lazytyper](https://lazytyper.com/)

`支援Mac、ios、windows`

內建很多中國的voice model，不過都要api key，細節功能多，可以設定`system prompt`，還可以設定帶入最近幾輪的對話當`context`

缺點就是
- 沒有引導去設定權限（非常糟糕），我還自己問AI怎麼去解決
- 似乎有bug，都設定好了，用一用又突然不能用。不是很穩定的感覺


### [代體](https://daiti.ai/)

`支援Mac、ios、windows`

也是完全免費，速度快，可以接LLM

缺點就是
- 不能選model，而且只能用他預設的local model，品質就偏中下（非常致命）
- 細節功能偏少

### [豆包](https://www.doubao.com/chat/)

`支援Mac、ios、windows、linux`

字節跳動的AI語音助手，他內建有個語音輸入功能，去左上角設定個熱鍵，就可以用了

他是屬於即時的語音翻譯，速度快，但是效果一般般，以免費的來看，還是可以用

另外提一下，這個助手有個網頁轉podcast功能，蠻好用的，重點是很快

缺點
- 不能設定`system prompt`
- 不能指定輸出成`繁體中文`(蠻大的缺點)


<Comment />