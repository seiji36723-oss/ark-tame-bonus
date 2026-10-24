# ARK テイムボーナスチェッカー

ARK（Survival Ascended / Evolved）の恐竜の **テイム前とテイム後のステータス画面** を入れると、テイムで増えたレベル（テイムボーナス）がどのステータスに何レベル振られたかを出す Web アプリです。

**使う：https://seiji36723-oss.github.io/ark-tame-bonus/**

- スマホ・PC のブラウザで動きます。画像は端末の中だけで処理し、外部に送りません
- テイム前は気絶中の野生の画面、テイム後はテイムした後の画面を、どちらも「気絶値」の行まで写してください
- テイム後に自分で振ったレベルは、ボーナスと分けて表示します

## 計算方法

[ARK Smart Breeding](https://github.com/cadon/ARKStatsExtractor) のレベル抽出ロジックを JavaScript に移植しています。
テイム前の野生レベルとテイム後の野生レベルの差がテイムボーナスです。

## 使っているもの・ライセンス

- 種族データ・抽出ロジック：ARK Smart Breeding（MIT License, Copyright (c) 2015 cadon）
- 文字認識：[Tesseract.js](https://github.com/naptha/tesseract.js) / tesseract.js-core（Apache License 2.0）、言語データ [tessdata](https://github.com/tesseract-ocr/tessdata_best)（Apache License 2.0）
- フォント：Google Fonts（Fredoka, M PLUS Rounded 1c / SIL Open Font License）

### ARK Smart Breeding の MIT License

```
The MIT License (MIT)

Copyright (c) 2015 cadon

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

ARK: Survival Ascended / Evolved は Studio Wildcard の商標です。このアプリは非公式のファンツールです。
