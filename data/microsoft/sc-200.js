window.quizData = window.quizData || {};

window.quizData.sc200 = [
  {
    "q": "SIEM/SOARとしてログ分析と自動対応を行うMicrosoftサービスは（確認1）？",
    "c": [
      "Microsoft Sentinel",
      "Microsoft Planner",
      "SharePoint Lists",
      "Azure App Service"
    ],
    "a": "Microsoft Sentinel",
    "e": "SentinelはクラウドネイティブSIEM/SOAR。"
  },
  {
    "q": "Microsoft Sentinelでログ検索に使うクエリ言語は（確認1）？",
    "c": [
      "YAMLのみ",
      "HTML",
      "T-SQLのみ",
      "KQL"
    ],
    "a": "KQL",
    "e": "KQLはLog AnalyticsやSentinelの検索で使う。"
  },
  {
    "q": "複数のMicrosoft Defender製品を横断して検知・対応する基盤は（確認1）？",
    "c": [
      "OneDrive Sync Client",
      "Microsoft Bookings",
      "Microsoft Defender XDR",
      "Azure Static Web Apps"
    ],
    "a": "Microsoft Defender XDR",
    "e": "Defender XDRはエンドポイント、ID、メール、クラウドアプリの検知を統合する。"
  },
  {
    "q": "端末のEDRとして利用される代表サービスは（確認1）？",
    "c": [
      "Microsoft Defender for Endpoint",
      "Azure DNS",
      "Power Automate Desktopのみ",
      "Microsoft Forms"
    ],
    "a": "Microsoft Defender for Endpoint",
    "e": "Defender for Endpointは端末の検知・調査・対応に使う。"
  },
  {
    "q": "メールのフィッシングや添付ファイル脅威対策に関係する製品は（確認1）？",
    "c": [
      "Microsoft Defender for Office 365",
      "Azure File Sync",
      "Windows Admin Center",
      "Azure Virtual Desktopのみ"
    ],
    "a": "Microsoft Defender for Office 365",
    "e": "Defender for Office 365はExchange Online等の脅威保護を担う。"
  },
  {
    "q": "IDベースのリスク検知に関係するサービスは（確認1）？",
    "c": [
      "Visual Studio App Center",
      "Azure Cost Management",
      "Microsoft Stream",
      "Microsoft Entra ID Protection"
    ],
    "a": "Microsoft Entra ID Protection",
    "e": "Entra ID Protectionはサインインリスクやユーザーリスクを扱う。"
  },
  {
    "q": "Sentinelで外部ログを取り込む設定単位は（確認1）？",
    "c": [
      "データコネクタ",
      "予定表",
      "DNSゾーン",
      "メールボックスルールのみ"
    ],
    "a": "データコネクタ",
    "e": "データコネクタでMicrosoft製品や外部製品のログを接続する。"
  },
  {
    "q": "検知ルールから作成され、調査対象になる単位は（確認1）？",
    "c": [
      "インシデント",
      "Teamsチャネル",
      "サブスクリプション請求書",
      "Azureタグ"
    ],
    "a": "インシデント",
    "e": "インシデントは関連アラートをまとめて調査する単位。"
  },
  {
    "q": "Sentinelで自動対応を組み込む仕組みは（確認1）？",
    "c": [
      "PowerPointテンプレート",
      "プレイブック",
      "ノートパソコン",
      "ストレージアカウント名"
    ],
    "a": "プレイブック",
    "e": "プレイブックはLogic Appsを利用して対応を自動化できる。"
  },
  {
    "q": "脅威ハンティングの目的は（確認1）？",
    "c": [
      "ライセンスを割り当てる",
      "サイトデザインを変更する",
      "請求書を発行する",
      "未知・潜在的な脅威を能動的に探す"
    ],
    "a": "未知・潜在的な脅威を能動的に探す",
    "e": "ハンティングは既存アラートだけに頼らず兆候を探す活動。"
  },
  {
    "q": "KQLで条件に合う行だけ抽出する演算子は（確認1）？",
    "c": [
      "summarize only",
      "join only",
      "where",
      "render only"
    ],
    "a": "where",
    "e": "whereは条件フィルタリングに使う。"
  },
  {
    "q": "KQLで件数集計によく使う演算子は（確認1）？",
    "c": [
      "summarize",
      "sort only",
      "project-away only",
      "take only"
    ],
    "a": "summarize",
    "e": "summarizeはcountなどの集計に使う。"
  },
  {
    "q": "SIEM/SOARとしてログ分析と自動対応を行うMicrosoftサービスは（確認2）？",
    "c": [
      "Microsoft Sentinel",
      "Azure App Service",
      "Microsoft Planner",
      "SharePoint Lists"
    ],
    "a": "Microsoft Sentinel",
    "e": "SentinelはクラウドネイティブSIEM/SOAR。"
  },
  {
    "q": "Microsoft Sentinelでログ検索に使うクエリ言語は（確認2）？",
    "c": [
      "HTML",
      "YAMLのみ",
      "KQL",
      "T-SQLのみ"
    ],
    "a": "KQL",
    "e": "KQLはLog AnalyticsやSentinelの検索で使う。"
  },
  {
    "q": "複数のMicrosoft Defender製品を横断して検知・対応する基盤は（確認2）？",
    "c": [
      "Microsoft Bookings",
      "OneDrive Sync Client",
      "Azure Static Web Apps",
      "Microsoft Defender XDR"
    ],
    "a": "Microsoft Defender XDR",
    "e": "Defender XDRはエンドポイント、ID、メール、クラウドアプリの検知を統合する。"
  },
  {
    "q": "端末のEDRとして利用される代表サービスは（確認2）？",
    "c": [
      "Azure DNS",
      "Microsoft Defender for Endpoint",
      "Power Automate Desktopのみ",
      "Microsoft Forms"
    ],
    "a": "Microsoft Defender for Endpoint",
    "e": "Defender for Endpointは端末の検知・調査・対応に使う。"
  },
  {
    "q": "メールのフィッシングや添付ファイル脅威対策に関係する製品は（確認2）？",
    "c": [
      "Microsoft Defender for Office 365",
      "Windows Admin Center",
      "Azure Virtual Desktopのみ",
      "Azure File Sync"
    ],
    "a": "Microsoft Defender for Office 365",
    "e": "Defender for Office 365はExchange Online等の脅威保護を担う。"
  },
  {
    "q": "IDベースのリスク検知に関係するサービスは（確認2）？",
    "c": [
      "Visual Studio App Center",
      "Azure Cost Management",
      "Microsoft Entra ID Protection",
      "Microsoft Stream"
    ],
    "a": "Microsoft Entra ID Protection",
    "e": "Entra ID Protectionはサインインリスクやユーザーリスクを扱う。"
  },
  {
    "q": "Sentinelで外部ログを取り込む設定単位は（確認2）？",
    "c": [
      "予定表",
      "メールボックスルールのみ",
      "データコネクタ",
      "DNSゾーン"
    ],
    "a": "データコネクタ",
    "e": "データコネクタでMicrosoft製品や外部製品のログを接続する。"
  },
  {
    "q": "検知ルールから作成され、調査対象になる単位は（確認2）？",
    "c": [
      "サブスクリプション請求書",
      "インシデント",
      "Teamsチャネル",
      "Azureタグ"
    ],
    "a": "インシデント",
    "e": "インシデントは関連アラートをまとめて調査する単位。"
  },
  {
    "q": "Sentinelで自動対応を組み込む仕組みは（確認2）？",
    "c": [
      "ノートパソコン",
      "ストレージアカウント名",
      "プレイブック",
      "PowerPointテンプレート"
    ],
    "a": "プレイブック",
    "e": "プレイブックはLogic Appsを利用して対応を自動化できる。"
  },
  {
    "q": "脅威ハンティングの目的は（確認2）？",
    "c": [
      "サイトデザインを変更する",
      "未知・潜在的な脅威を能動的に探す",
      "請求書を発行する",
      "ライセンスを割り当てる"
    ],
    "a": "未知・潜在的な脅威を能動的に探す",
    "e": "ハンティングは既存アラートだけに頼らず兆候を探す活動。"
  },
  {
    "q": "KQLで条件に合う行だけ抽出する演算子は（確認2）？",
    "c": [
      "where",
      "render only",
      "join only",
      "summarize only"
    ],
    "a": "where",
    "e": "whereは条件フィルタリングに使う。"
  },
  {
    "q": "KQLで件数集計によく使う演算子は（確認2）？",
    "c": [
      "project-away only",
      "sort only",
      "take only",
      "summarize"
    ],
    "a": "summarize",
    "e": "summarizeはcountなどの集計に使う。"
  },
  {
    "q": "SIEM/SOARとしてログ分析と自動対応を行うMicrosoftサービスは（確認3）？",
    "c": [
      "SharePoint Lists",
      "Azure App Service",
      "Microsoft Planner",
      "Microsoft Sentinel"
    ],
    "a": "Microsoft Sentinel",
    "e": "SentinelはクラウドネイティブSIEM/SOAR。"
  },
  {
    "q": "Microsoft Sentinelでログ検索に使うクエリ言語は（確認3）？",
    "c": [
      "T-SQLのみ",
      "KQL",
      "YAMLのみ",
      "HTML"
    ],
    "a": "KQL",
    "e": "KQLはLog AnalyticsやSentinelの検索で使う。"
  },
  {
    "q": "複数のMicrosoft Defender製品を横断して検知・対応する基盤は（確認3）？",
    "c": [
      "Azure Static Web Apps",
      "OneDrive Sync Client",
      "Microsoft Bookings",
      "Microsoft Defender XDR"
    ],
    "a": "Microsoft Defender XDR",
    "e": "Defender XDRはエンドポイント、ID、メール、クラウドアプリの検知を統合する。"
  },
  {
    "q": "端末のEDRとして利用される代表サービスは（確認3）？",
    "c": [
      "Microsoft Forms",
      "Azure DNS",
      "Power Automate Desktopのみ",
      "Microsoft Defender for Endpoint"
    ],
    "a": "Microsoft Defender for Endpoint",
    "e": "Defender for Endpointは端末の検知・調査・対応に使う。"
  },
  {
    "q": "メールのフィッシングや添付ファイル脅威対策に関係する製品は（確認3）？",
    "c": [
      "Azure Virtual Desktopのみ",
      "Microsoft Defender for Office 365",
      "Windows Admin Center",
      "Azure File Sync"
    ],
    "a": "Microsoft Defender for Office 365",
    "e": "Defender for Office 365はExchange Online等の脅威保護を担う。"
  },
  {
    "q": "IDベースのリスク検知に関係するサービスは（確認3）？",
    "c": [
      "Microsoft Stream",
      "Microsoft Entra ID Protection",
      "Visual Studio App Center",
      "Azure Cost Management"
    ],
    "a": "Microsoft Entra ID Protection",
    "e": "Entra ID Protectionはサインインリスクやユーザーリスクを扱う。"
  },
  {
    "q": "Sentinelで外部ログを取り込む設定単位は（確認3）？",
    "c": [
      "メールボックスルールのみ",
      "予定表",
      "データコネクタ",
      "DNSゾーン"
    ],
    "a": "データコネクタ",
    "e": "データコネクタでMicrosoft製品や外部製品のログを接続する。"
  },
  {
    "q": "検知ルールから作成され、調査対象になる単位は（確認3）？",
    "c": [
      "サブスクリプション請求書",
      "Azureタグ",
      "インシデント",
      "Teamsチャネル"
    ],
    "a": "インシデント",
    "e": "インシデントは関連アラートをまとめて調査する単位。"
  },
  {
    "q": "Sentinelで自動対応を組み込む仕組みは（確認3）？",
    "c": [
      "ノートパソコン",
      "PowerPointテンプレート",
      "ストレージアカウント名",
      "プレイブック"
    ],
    "a": "プレイブック",
    "e": "プレイブックはLogic Appsを利用して対応を自動化できる。"
  },
  {
    "q": "脅威ハンティングの目的は（確認3）？",
    "c": [
      "請求書を発行する",
      "未知・潜在的な脅威を能動的に探す",
      "ライセンスを割り当てる",
      "サイトデザインを変更する"
    ],
    "a": "未知・潜在的な脅威を能動的に探す",
    "e": "ハンティングは既存アラートだけに頼らず兆候を探す活動。"
  },
  {
    "q": "KQLで条件に合う行だけ抽出する演算子は（確認3）？",
    "c": [
      "where",
      "join only",
      "summarize only",
      "render only"
    ],
    "a": "where",
    "e": "whereは条件フィルタリングに使う。"
  },
  {
    "q": "KQLで件数集計によく使う演算子は（確認3）？",
    "c": [
      "project-away only",
      "summarize",
      "take only",
      "sort only"
    ],
    "a": "summarize",
    "e": "summarizeはcountなどの集計に使う。"
  }
];
