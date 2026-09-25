# AIラボ（famm版）

Famm Webデザイナー講座の卒業生・受講生向け「AIカルテ」一式です。GitHub Pages＋Supabase無料プランで動きます。

## ページ
| ファイル | 役割 |
|---|---|
| trial.html | モニター版（カルテ3回まで体験。DB未設定でも端末内保存で動く） |
| lp.html | ご案内（価格・日程は labo_config.js の【famm設定】を書き換え） |
| start.html | 受講生の入口（名前で専用ページを発行） |
| index.html | 受講生マイページ（カルテ・画像添付・営業ログ・分析・取扱説明書・AI famm） |
| oubo.html | 応募ノート（クラウドワークス案件＋応募文の下書き） |
| tensaku.html | デザイン添削依頼（Figma URL） |
| ai.html | AI famm（24時間の自動おへんじ） |
| kanri.html | 管理者ボード（受信箱・返信・参加者・期限） |
| setup.html | 設置ガイド（Supabase作成→SQL→接続設定） |

## はじめかた
1. setup.html の順に Supabase を作成し、supabase_config.js を書き換えて enabled:true
2. labo_config.js の【famm設定】（価格・日程・申込URL・規約URL）を書き換え
3. assets/fm-*.png にキャラクター画像を置くと表示されます（無ければ非表示のまま）

`?demo=1` を付けるとサンプルデータで動きます。
