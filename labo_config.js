// ================================================================
// AIラボ（famm版）設定ファイル
// ここの「 」の中を書き換えて保存するだけで、LP・AI famm・カルテ・管理画面の
// 表示が全部変わります。前後の " や , は消さないでください。
// ================================================================
var LABO_CONFIG = {
  /* ===== ブランド・運営者 ===== */
  labo_name: "AIラボ",
  company: "Famm",
  instructor_name: "famm講師",
  instructor_nick: "famm講師",
  instructor_title: "Famm Webデザイナー講座",
  ai_name: "AI famm",

  /* ===== 募集情報（募集期ごとに書き換える） ===== */
  term_label: "第1期",
  target: "Famm 卒業生・受講生 限定",
  price: "【famm設定】円",
  price_badge: "【famm設定】",
  price_note: "受講料・継続プランの金額は【famm設定】。",
  payment: "【famm設定】",
  start_date: "【famm設定】",
  deadline: "【famm設定】",
  archive_note: "毎回の勉強会はアーカイブ（録画）が残るので、当日参加できなくても後から視聴できます。",

  /* ===== リンク ===== */
  apply_url: "#price",   // famm指定のお申し込みページに差し替え
  apply_label: "お申し込み方法は famm からご案内します",
  tokutei_url: "https://famm.us/ja/school",   // famm指定のページに差し替え
  privacy_url: "https://famm.us/ja/school",   // famm指定のページに差し替え
  terms_url: "https://famm.us/ja/school",   // famm指定のページに差し替え

  /* ===== 管理者ボードの合言葉（本番のみ有効） =====
     ここには合言葉そのものではなく「ハッシュ（暗号化した値）」を置きます。
     合言葉を変えたいときは Claude に「管理者ボードの合言葉を〇〇に変えて」と頼んでください。 */
  admin_pass_hash: "bc85990c7dddcf2d67abfd2de266eae8338747a2caa12f88802ac3ba5c9132d5",

  /* ===== カルテ自動下書きで使ってはいけない語（任意・空でもOK） =====
     ここに入れた語を含む下書きは、投入前に自動で止まります。 */
  draft_ng_words: ["先着", "ラストチャンス"],

  /* ===== カリキュラム：週ごとの日程（第1週〜第6週の順） ===== */
  weeks: ["【famm設定】","【famm設定】","【famm設定】","【famm設定】","【famm設定】","【famm設定】"]
};

/* ---- ここから下は触らない（自動差し込みの仕組み） ---- */
(function(){
  var C = window.LABO_CONFIG || {};
  window.cfg = function(k, d){ return (C[k]!==undefined && C[k]!=="") ? C[k] : d; };
  window.cfgWeek = function(i, d){ return (C.weeks && C.weeks[i]) ? C.weeks[i] : (d||"日程調整中"); };
  function apply(){
    document.querySelectorAll('[data-cfg]').forEach(function(el){
      var k=el.getAttribute('data-cfg'); if(C[k]!==undefined && C[k]!=="") el.textContent=C[k];
    });
    document.querySelectorAll('[data-cfg-href]').forEach(function(el){
      var k=el.getAttribute('data-cfg-href'); if(C[k]) el.setAttribute('href',C[k]);
    });
    if(C.labo_name && document.title.indexOf("AI活用ラボ")>=0){ document.title=document.title.split("AI活用ラボ").join(C.labo_name); }
  }
  if(document.readyState==="loading") document.addEventListener("DOMContentLoaded",apply); else apply();
})();
