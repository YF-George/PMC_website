export const commands = [
  { id: 1, name: '/res create [領地名]', description: '創建一個名為[領地名]的領地。', category: '領地管理' },
  { id: 2, name: '/res remove [領地名]', description: '移除一個名為[領地名]的領地。', category: '領地管理' },
  { id: 3, name: '/res removeall', description: '移除所有領地。', category: '領地管理' },
  { id: 4, name: '/res confirm', description: '確認移除領地。', category: '領地管理' },
  { id: 5, name: '/res list', description: '列出目前所擁有的領地。', category: '領地管理' },
  { id: 6, name: '/res expand', description: '擴增面向的位置格數。', category: '領地管理' },
  { id: 7, name: '/res set', description: '設定你當前站的領地權限。', category: '領地管理' },
  { id: 8, name: '/res info', description: '獲取有關當前領地的資訊。', category: '領地管理' },
  { id: 9, name: '/res padd [玩家ID]', description: '添加該名玩家至領地。', category: '領地管理' },
  { id: 10, name: '/res pset [玩家ID]', description: '設置該名玩家特定的領地權限。', category: '領地管理' },
  { id: 11, name: '/res pdel [玩家ID]', description: '刪除該名玩家的領地權限。', category: '領地管理' },
  { id: 12, name: '/res tp [領地名]', description: '傳送至指定的領地。', category: '領地管理' },
  { id: 13, name: '/res tpset', description: '在自己的領地中設置傳送點。', category: '領地管理' },
  { id: 14, name: '/res rc [領地名]', description: '加入當前或定義的住宅聊天頻道。', category: '領地管理' },
  { id: 15, name: '/res rc leave', description: '離開當前住所的聊天頻道。', category: '領地管理' },
  { id: 16, name: '/res rc setprefix [新名稱]', description: '設置住宅聊天頻道前綴。', category: '領地管理' },
  { id: 17, name: '/res rc kick [玩家ID]', description: '從頻道踢出玩家。', category: '領地管理' },
  { id: 18, name: '/res give [領地名] [玩家ID]', description: '轉讓領地給其他玩家。', category: '領地管理' },
  { id: 19, name: '/res show', description: '以粒子效果顯示當前站立的領地範圍。', category: '領地管理' },
  { id: 20, name: '/register <密碼> <重複密碼>', description: '註冊密碼', category: '系統指令' },
  { id: 21, name: '/login <密碼>', description: '登入伺服器', category: '系統指令' },
  { id: 22, name: '/menu', description: '開啟伺服器統合介面', category: '系統指令' },
  { id: 23, name: '/report <玩家名稱>', description: '檢舉玩家 (對方需要在線上)', category: '系統指令' },
  { id: 24, name: '/spawn', description: '返回重生點 (主城)', category: '傳送指令' },
  { id: 25, name: '/sethome (名稱)', description: '設置HOME點，可設置多個點', category: '傳送指令' },
  { id: 26, name: '/home', description: '傳送至已設置的HOME點', category: '傳送指令' },
  { id: 27, name: '/homes', description: '查看已設置的HOME點', category: '傳送指令' },
  { id: 28, name: '/tpa <玩家>', description: '請求傳送至玩家身邊', category: '傳送指令' },
  { id: 29, name: '/tpahere <玩家>', description: '請求玩家傳送至自己身邊', category: '傳送指令' },
  { id: 30, name: '/tpaccept', description: '接受目前的傳送請求', category: '傳送指令' },
  { id: 31, name: '/tpdeny', description: '拒絕目前的傳送請求', category: '傳送指令' },
  { id: 32, name: '/res tp <領地名稱>', description: '傳送至領地', category: '傳送指令' },
  { id: 33, name: '/ah', description: '開啟全球商城', category: '商城指令' },
  { id: 34, name: '/market sell <價格> (數量)', description: '將手中物品上架至全球商城', category: '商城指令' },
  { id: 35, name: '/market buy <訂金> (數量)', description: '發布收購至全球商城', category: '商城指令' },
  { id: 36, name: '/market bid <起拍價>', description: '拍賣手中的物品', category: '商城指令' },
  { id: 37, name: '/balance', description: '查詢自己持有多少錢', category: '經濟指令' },
  { id: 38, name: '/bal', description: '查詢自己持有多少錢', category: '經濟指令' },
  { id: 39, name: '/baltop', description: '查詢目前富有排行榜', category: '經濟指令' },
  { id: 40, name: '/pay <玩家> <金額>', description: '支付一定的金額給指定玩家', category: '經濟指令' },
  { id: 41, name: '/cheque <金額>', description: '將持有的錢轉變成支票', category: '經濟指令' },
  { id: 42, name: '/prewards', description: '領取線上獎勵', category: '經濟指令' },
  { id: 43, name: '/mcability', description: '啟用 / 關閉 滑鼠右鍵啟動技能', category: '技能指令' },
  { id: 44, name: '/mcstats', description: '顯示 MCMMO 記分板', category: '技能指令' },
  { id: 45, name: '/mcsb keep', description: '懸停 MCMMO 記分板', category: '技能指令' },
  { id: 46, name: '/mcsb clear', description: '清空懸停的 MCMMO 記分板', category: '技能指令' },
  { id: 47, name: '/bottle get [數值]', description: '轉換多少瓶經驗', category: '技能指令' },
  { id: 48, name: '/plt shop', description: '開啟稱號商城', category: '稱號指令' },
  { id: 49, name: '/plt open', description: '開啟稱號倉庫', category: '稱號指令' },
  { id: 50, name: '/afk', description: '主動宣告你正在掛機', category: '其他指令' },
  { id: 51, name: '/pvp (on/off)', description: '開啟/關閉 PVP 模式（管理員無法強制更動）', category: '其他指令' },
  { id: 52, name: '/sit', description: '輸入後可直接坐下', category: '其他指令' },
  { id: 53, name: '/co i', description: '方塊查詢。', category: '其他指令' },
  { id: 54, name: '/hat', description: '將手持的物品戴到頭上。', category: '其他指令' },
  { id: 55, name: '/ec', description: '開啟隨身終界箱。', category: '其他指令' },
  { id: 56, name: '/fly', description: '任意飛行，不需要開啟領地飛行。限建築用！', category: '其他指令' },
  { id: 57, name: '/nick', description: '將自己的名稱隱藏並改為指定名稱。清除目前使用的暱稱。請勿使用不當言詞或過長名稱！！', category: '其他指令' },
  { id: 58, name: '/armorstand', description: '修改盔甲架。', category: '其他指令' },
  { id: 59, name: '/crawl', description: '原地趴下。', category: '其他指令' },
  { id: 60, name: '/lay', description: '原地躺下。', category: '其他指令' },
  { id: 61, name: '/ride', description: '坐在你看的玩家或實體上，可堆疊。', category: '其他指令' },
  { id: 62, name: '/shakeitoff', description: '將坐在你頭上的玩家甩下來。', category: '其他指令' },
  { id: 63, name: '/pp gui', description: '開啟粒子特效界面。', category: '其他指令' },
  { id: 64, name: '/bottle get max', description: '將所有經驗轉換成瓶子。', category: '其他指令' }
];
