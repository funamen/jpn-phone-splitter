# jpn-phone-splitter

このパッケージは日本国内における総務省が定める市外局番の一覧に基づいて電話番号を分割します。

This package divides phone numbers based on the list of area codes specified by the Ministry of Internal Affairs and Communications in Japan.

このページにあるデータを参照しています。

This is in reference to the data available on this website

https://www.soumu.go.jp/main_sosiki/joho_tsusin/top/tel_number/shigai_list.html

## Usage

```javascript
const {jpnPhoneNumberMeta, jpnPhoneNumberSplitter} = require('jpn-phone-splitter');
// or import { jpnPhoneNumberMeta, jpnPhoneNumberSplitter } from 'jpn-phone-splitter'


const osakaCityPhoneNumber = "0662088181";

//jpnPhoneNumberMeta
const jpnPhoneNumberMeta = jpnPhoneNumberMeta(osakaCityPhoneNumber);
// "+81-6-6208-8181"

//jpnPhoneNumberSplitter
const jpnPhoneNumberSplitter = jpnPhoneNumberSplitter(osakaCityPhoneNumber);

// {
//        ID: '363',
//        place: [
//           '大阪府池田市空港',
//           '大阪市（東住吉区矢田七丁目及び平野区長吉川辺四丁目を除く。）',
//           ... more items
//         ],
//         cityNumber: '6',
//         nextLength: 'BCDE',
//         parse: [ '+81', '6', '6208', '8181' ]
//       }
```
