MikuMikuDance用モデルデータ　初音ミク＠1052式（物理演算仕様ver1.031）


このモデルは、三次元CG@七葉（http://nanoha.kirara.st/3dcg/index.html）に投稿された
初音ミクモデルデータ（nh0163.zip）を、MikuMikuDance用に変換したものを物理演算化したものでございます。
下記の記事は、初音ミク＠七葉1052式に添付されていたreadmeを転載させていただいておりますので、
ご使用に関しましては各モデラー様の意思に沿うようお願いいたします。
モデルデータのご利用に関する注意点は元モデルデータのものに順ずるものとし、
このモデルを使用して起きた問題等に関しましては、当方では責任を負いかねますのですべて自己責任でお願いいたします。

------------------------------------------------------------------------------------------------------------




ここからは元モデル付属のreadmeより転載。
------------------------------------------------------------------------------------------------------------

初音ミク＠七葉1052式

・はじめに
当モデルデータは、三次元CG@七葉（http://nanoha.kirara.st/3dcg/index.html）に投稿された
初音ミクモデルデータ（nh0163.zip）を、MikuMikuDance用に変換したものです。
データの利用等に関する注意点については、元モデルデータのものに順ずるものとします。

-- 以下、元データ説明文より引用
　モデルデータは初音ミクの二次創作物である点だけ注意して頂ければ
　有償無償かかわらず断り無しに改変・流用を含む利用・再配布等オールOKです。
　三次元＠CG七葉及び3DCGや初音ミクに興味のある方の助けになれたら幸いです。
-- 引用終わり


・使い方
　１、まず、Zipを解凍して出来たフォルダ内の、toon9.bmp、toon10.bmp を、
　　　MikuMikuDanceのDataフォルダへコピーしてください。
　　　既に別モデル用の同名ファイルがある場合は、別モデル用のbmpをリネームしてください。

　２、次に、MikuMikuDanceを起動し、モデルデータ読み込みから当pmdファイルを開いてください。
　　　このとき、pmdファイルと、テクスチャファイル（miku_xx_body.bmp、miku_xx_head.bmp）は、
　　　同一フォルダに置かれているようにしてください。
　　　また、必ず１が終わってからMMDを起動してください。


・注意点
　ボーン構成はMMD純正初音ミクに似せてありますが、再現性は低いです。
　ボーンの形状が異なったり、そもそもボーンの数が足りてなかったりする部分もあります。
　ローポリモデルゆえに、関節動作時に破綻がおきやすいです。
　そういうもんだと思って使っていただければ幸いです。

　尚、捩りボーン機能を利用するには、MMD Ver.4.0 以降を使用してください。


・その他ファイルの説明
　サンプルポーズ.vpd       -  当モデルデータ用のサンプルポーズ
　左手グー_xx.vpd          -  当モデルデータ用の左手グーポーズ
　右手グー_xx.vpd          -  同右手ポーズ
　                            （純正モデルのグーポーズでは、上手くグーにならないため）
　miku_xx_body.bmp         -  当モデル用テクスチャファイル。胴体部分
　miku_xx_head.bmp         -  当モデル用テクスチャファイル。頭部
　toon9.bmp                -  顔面用のトゥーンファイル。影が目立たないように修正
　toon10.bmp               -  白目部分用のトゥーンファイル。影ができないように修正
　初音ミク@七葉1052式.txt  -  PMDEditor用材質ファイル


・データ変換使用ツール
　RokDeBone2　Ver5.0.2.0   おちゃっこLAB（http://www5d.biglobe.ne.jp/~ochikko）
                           RokDeBone用モデルを、Xファイル出力
　PMDEidtor ver.0.0.2.0    極北P
                           XファイルをPMDファイルへ変換

・おわりに
　MMDモデルとしては不完全な部分が多いですが、自分の技能ではこのあたりが限界のようです。
　我こそはと思う方、これをベースの修正していただければと思います。
　最後に、素晴らしい元モデルデータを作られた作者様に、深く御礼申し上げます。
　(2009/3/9)

------------------------------------------------------------------------------------------------------------
以上、転載はここまで。




------------------------------------------------------------------------------------------------------------


初音ミク＠七葉1052式　物理演算仕様（ver1.02）

上記の初音ミク＠七葉1052式のモデルに物理演算の剛体を入れたモデルをマイナーチェンジいたしました。

主な修正点、変更点。

〇手首から先を少し延長。手のひらから指にかけての造型を見栄えが良いように修正。
〇前髪を透過仕様に。（前髪テクスチャは箔鳥居様から提供いただきました。）
〇表情モーフ、その他モーフを追加。
〇ツインテを頂点を増やしよりやわらかく動くように修正。


主な修正点は上記のとおりです。
その他、本当にわからない程ですが少々テクスチャ等も弄っております。
後、前髪のポリがなるべく裏返らないように（あまり変化なし（汗
腕からわきの下にかけての破綻をこれまたなるべく出ないように等々（これも完全に直せていません）
現在のモデルより少しバージョンが上がったかなー、程度ですが修正を試みました。

いかんせん素人の所業なのでその辺はご容赦願いたいと思います。


今回は、七葉1052式（仮）をモデルチェンジというわけではなく、あくまでもこのモデル自体は
そのままに、表情やその他モーフで動く箇所を増やしたりツインテをより柔らい動きにしたりといった
中身に重点を置いた改造を目指しました。

最近ではいろいろな七葉1052系のモデルが新たにユーザーモデルとして、またそれを改変したモデルもたくさん作られていますが
そんな中、ルーツと言うべきこの七葉1052式（仮）モデルにもまだまだ現役でがんばってもらいたいという思いで
作成いたしました。
特に表情等大幅に追加しましたので、個人的にはドラマ系でも活躍してほしいなぁと。

今回の改造、修正に関しまして、1052C-Reシリーズでおなじみの箔鳥居様からいろいろとアドバイスをいただきまました。
また上記にあります通り前髪の透過テクスチャも提供してくださり本当にお世話になりました。
この場をお借りいたしましてお礼申し上げます。



最後にこの素晴らしい元モデルの製作、改良に携わった方々に感謝をこめてお礼を申し上げます。ありがとうございました。

（2011/07/24）ピッチングP


------------------------------------------------------------------------------------------------------------


初音ミク＠七葉1052式　物理演算仕様（ver1.03)

MMD　Ver7.34以降の仕様変更により、物理演算時の主に前髪の挙動の不具合を修正しMMD現行Verに対応、、現在のユーザーモデルでは上半身2ボーン、
グルーブボーンが標準になりつつあるのでそれに対応しました。
また、今までダミーボーンがなかったので、頭、両ひじ、両手首に搭載しました。
後、今回眉毛のモーフを標準→太い、から、太い→標準と今までとは逆にに変更しました。元のオリジナルの眉毛がかなり細く、少し離れると眉毛が
見えなくなる感じなので変更いたしました。

------------------------------------------------------------------------------------------------------------

初音ミク＠七葉1052式　物理演算仕様（ver1.031)

首と上半身2ボーンのウエイトにおかしいところがありましたので修正しました。ただ、上半身2ボーンで動く箇所で大きくひねると破たんするところが
どうしてもあります。ローポリ故に頂点が無いところに突き抜け等ありまして、この辺は技量不足で誠に申し訳ありません。
------------------------------------------------------------------------------------------------------------

2013/04/28  七葉1052式（仮）物理演算仕様ver1.031 ウエイトにおかしいところがあったので、出来るだけ修正（上半身2ボーン、首のウエイト）
2013/01/18　七葉1052式（仮）物理演算仕様ver1.03　物理演算使用時の主に前髪の挙動の不具合修正、上半身2ボーン追加、グルーブボーン追加。
　　　　　　　　　　　　　　　　　　　　　　　　 頭、両ひじ、両手首にダミーボーンを追加。

2011/07/24　七葉1052式（仮）物理演算仕様ver1.02　手の指をより見栄えがいいものに。表情モーフほか追加。その他細かいところマイナーチェンジ。
2011/04-10　七葉1052式（仮）物理演算仕様　物理演算仕様配布開始。

