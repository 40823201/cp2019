var tipuesearch = {"pages": [{'title': '計算機程式', 'text': '倉儲:\xa0 https://github.com/40823201/cp2019 \n 課程網頁: http://mde.tw/cp2019/content/index.html \n Gist: https://gist.github.com/40823201/d9f7bc5daa98a11de2e1fd3c02a469d9 \n Dartpad: https://dartpad.dartlang.org/?id=d9f7bc5daa98a11de2e1fd3c02a469d9 \n \n  取 Dart 程式的按鈕  \n 放大   回復   Hello   For Loop   Mass_Spring_Damping \n  內建放入的 Dart 原始碼  \n \n', 'tags': '', 'url': '計算機程式.html'}, {'title': 'Work', 'text': '', 'tags': '', 'url': 'Work.html'}, {'title': 'W3', 'text': '\n 遇到問題:使用非教室電腦時，無法將修改內容push上遠端 \n 解決辦法:在 SCiTE中，將伺服器位址刪除。 \n \n 原始碼 \n void main() {\n    print("喔耶");\n} \n \n', 'tags': '', 'url': 'W3.html'}, {'title': 'W4', 'text': '上傳圖檔 \n \n', 'tags': '', 'url': 'W4.html'}, {'title': 'W6', 'text': '原始碼 \n int i;\nint sum;\n\nmain(){\n  sum = 0;\n  for(i=1;i <= 10 ;i++){\n    sum += i;\n    print("$sum");\n  }\n  print(\'sum = $sum\');\n} \n \n', 'tags': '', 'url': 'W6.html'}, {'title': 'W7', 'text': "原始碼 \n rungeKutta(t0, x0, t, h) {\n  int n = ((t - t0) / h).toInt();\n  double x = x0;\n  for (int i = 1; i <= n; i++) {\n    double k1 = h * dxdt(t0, x);\n    double k2 = h * dxdt(t0 + 0.5 * h, x + 0.5 * k1);\n    double k3 = h * dxdt(t0 + 0.5 * h, x + 0.5 * k2);\n    double k4 = h * dxdt(t0 + h, x + k3);\n    x = x + (1.0 / 6.0) * (k1 + 2 * k2 + 2 * k3 + k4);\n    t0 = t0 + h;\n  }\n  return x;\n}\n\ndxdt(t, x) {\n  return ((t - x) / 2);\n}\n\nmain() {\n  num t0 = 0;\n  num x = 1;\n  num t = 2;\n  double h = 0.2;\n  print('The value of x at t=$t is: ${rungeKutta(t0, x, t, h)}');\n}\n \n \n", 'tags': '', 'url': 'W7.html'}, {'title': '期中考', 'text': '\n 遇到問題:無法執行python \n 解決方法:這是 Windows 10 1903 更新後造成的問題, 只要將 start.bat 中第一個 %path% 刪除後存檔, 再開一次 SCiTE 後即可。 \n \n 第一次上傳(無字幕無浮水印，僅有CC字幕) \n https://youtu.be/_CbytFJU-cg \xa0 \n \n 遇到問題:無法執行ffmpeg \n 解決方法:找出隨身系統中，ffmpeg檔所在位置，並在cmd中打上所在位置再執行一次。 \n \n 第二次上傳(無浮水印) \n https://youtu.be/6OZTQdMrGZI \xa0 \n \n 遇到問題:無法用上字幕方式上浮水印 \n 解決方法:在Aegisub中先打上浮水印並調整好位置後，利用ShareX再錄一次。 \n \n 第三次上傳(最終檔) \n https://youtu.be/lKS8ot7ggpQ \n', 'tags': '', 'url': '期中考.html'}, {'title': 'W11', 'text': '純 Dart 程式 \n Hello   For Loop   Sum   Runge-Kutta   RK ex1   Mass Spring Damping    temperature \n Html 程式 \n ROC Flag   Grid   X-Y Plot   Slithery \n Flutter 程式 \n Flutter1   Flutter2   Flutter3 \n  內建放入的 Dart 原始碼  \n 放大   回復 \n \n', 'tags': '', 'url': 'W11.html'}, {'title': 'W12', 'text': '純 Dart 程式 \n Hello   For Loop   Sum   Runge-Kutta   RK ex1   Mass Spring Damping    temperature   cf_change temp1 \n Html 程式 \n ROC Flag   Grid   X-Y Plot   Slithery \n Flutter 程式 \n Flutter1   Flutter2   Flutter3 \n  內建放入的 Dart 原始碼  \n 放大   回復 \n \n', 'tags': '', 'url': 'W12.html'}, {'title': 'W13', 'text': '純 Dart 程式 \n temp1 \n Html 程式 \n temp2 \n  內建放入的 Dart 原始碼  \n 放大   回復 \n \n', 'tags': '', 'url': 'W13.html'}, {'title': 'W14', 'text': 'import \'dart:html\';\nimport \'dart:math\' as Math;\n  \nCanvasElement canvas;\nCanvasRenderingContext2D ctx;\nint flag_w = 300;\nint flag_h = 200;\nnum circle_x = flag_w / 4;\nnum circle_y = flag_h / 4;\n  \nvoid main() {\n  canvas = querySelector(\'#canvas\');\n  ctx = canvas.getContext(\'2d\');\n  \n  drawROC(ctx);\n  querySelector("#roc").onClick.listen((e) => drawROC(ctx));\n  querySelector("#usa").onClick.listen((e) => drawUSA(ctx));\n  querySelector("#button").onClick.listen((e) => clearCanvas());\n}\n  \nvoid drawUSA(ctx){\n  // 請畫出美國國旗\n  ctx.clearRect(0, 0, flag_w, flag_h);\n  ctx.font = "30px Arial";\n  ctx.strokeStyle = \'rgb(255, 0, 0)\';\n  ctx.strokeText("請畫出美國國旗", flag_w/6, flag_w/4);\n}\n  \nvoid drawROC(ctx){\n  // 先畫滿地紅\n  ctx.clearRect(0, 0, flag_w, flag_h);\n  ctx.fillStyle = \'rgb(255, 0, 0)\';\n  ctx.fillRect(0, 0, flag_w, flag_h);\n  // 再畫青天\n  ctx.fillStyle = \'rgb(0, 0, 150)\';\n  ctx.fillRect(0, 0, flag_w / 2, flag_h / 2);\n  // 畫十二道光芒白日\n  ctx.beginPath();\n  num star_radius = flag_w / 8;\n  num angle = 0;\n  for (int i = 0; i < 25; i++) {\n    angle += 5 * Math.pi * 2 / 12;\n    num toX = circle_x + Math.cos(angle) * star_radius;\n    num toY = circle_y + Math.sin(angle) * star_radius;\n    // 只有 i 為 0 時移動到 toX, toY, 其餘都進行 lineTo\n    if (i != 0)\n      ctx.lineTo(toX, toY);\n    else\n      ctx.moveTo(toX, toY);\n  }\n  ctx.closePath();\n  // 將填色設為白色\n  ctx.fillStyle = \'#fff\';\n  ctx.fill();\n  // 白日:藍圈\n  ctx.beginPath();\n  ctx.arc(circle_x, circle_y, flag_w * 17 / 240, 0, Math.pi * 2, true);\n  ctx.closePath();\n  // 填色設為藍色\n  ctx.fillStyle = \'rgb(0, 0, 149)\';\n  ctx.fill();\n  // 白日:白心\n  ctx.beginPath();\n  ctx.arc(circle_x, circle_y, flag_w / 16, 0, Math.pi * 2, true);\n  ctx.closePath();\n  // 填色設為白色\n  ctx.fillStyle = \'#fff\';\n  ctx.fill();\n}\n  \nvoid clearCanvas(){\n  ctx.clearRect(0, 0, flag_w, flag_h);\n} \n \n \n  取 Dart 程式的按鈕  \n Html 程式 \n ROC_FLAG \n  內建放入的 Dart 原始碼  \n 放大   回復 \n \n', 'tags': '', 'url': 'W14.html'}, {'title': 'W15', 'text': 'Html 程式 \n 亂數分組 \n  內建放入的 Dart 原始碼  \n 放大   回復 \n \n \n \n 學員名單 URL:   每組人數:      \n \n  ##############################  \n 設一乙亂數分組 \n', 'tags': '', 'url': 'W15.html'}, {'title': 'W16 查驗考試', 'text': 'YouTube連結； https://www.youtube.com/watch?v=q4S4nXjf2yk \n', 'tags': '', 'url': 'W16 查驗考試.html'}, {'title': 'W17考試', 'text': '純 Dart 程式 \n 重量 \n Html 程式 \n 重量轉換   各國國旗 \n  內建放入的 Dart 原始碼  \n 放大   回復 \n \n 請輸入所要轉換的重量以數字加上 KG 或 LB:     轉換結果: \n \n \n \n \n Clear Canvas   Draw Cuba   Draw CHINA   Draw SAN   Draw USA   Draw UK   Draw Canada \n \n \n', 'tags': '', 'url': 'W17考試.html'}, {'title': '上課筆記', 'text': 'Python相關 \n IPv6 \n \n 慣用伺服器 -> 2001:b000:168::1 \n 位址 -> 2001:288:6004::17 \n \n 隨身系統 \n \n 開啟 -> start_mde \n 關閉 -> stop.bat \n \n CMD \n \n ipconfig/all (叫出所有與網路相關資訊) \n git add . (新增) \n git commit -m "MESSAGE" \n \n initial add 全部新增 \n add graphics files 新增相片 \n add repository link 新增倉儲連結 \n add embedding dartpad 新增Dartpad \n \n git push (從近端推上遠端) \n git pull (從遠端拉回近端) \n \n \n Proxy \n \n 伺服器位址 -> [2001:288:6004:17::7]:3128\xa0 \xa0 (:3128為連接阜) \n \n 連接Github \n \n Https -> home/.gitconfig \n Ssh -> home/.ssh/config \n \n 設定Proxy \n \n (cmd) git config --global http.proxy [2001:288:6004:17::7]:3128 \n \n 設定身分 \n \n (cmd) git config --global user.name "學號 " \n (cmd) git config --global user.email "學號@mde.tw" \n \n clone到cp 2019 \n \n (cmd) git clone https://github.com/學號/cp2019.git \n \n 新增CMSiMDE \n \n (cmd) git submodule add  https://github.com/mdecourse/cmsimde.git \xa0cmsimde \n \n 啟動近端動態網站 \n \n (cmd) tmp/cp2019/cmsimde/python wsgi.py \n 近端動態網址:https://localhost:9443 \n \n 啟動近端靜態網站 \n \n (SCiTE)開啟 http-server.py \n 使用Tools中的Go來啟動靜態網站 \n 近端靜態網址:https:localhost:8444 \n \n Blog相關 \n 每篇文章的Slug不能相同 -> 會產生疊合導致網頁錯誤 \n Leo 節點操作指令\xa0 \n \n ctrl + I -> 新增 \n ctrl + U\xa0->\xa0往上 (Up) \n ctrl + D\xa0->\xa0往下 (Down) \n ctrl + L\xa0->\xa0往左 (Left) \n ctrl + R\xa0->\xa0往右 (Right) \n \n 提交Leo \n \n local blog -> goto script(近端) \n github blog ->\xa0 goto script(遠端) \n \n ShareX相關 \n 時間點操作 \n \n ctrl + 3 \xa0->\xa0字幕開頭時間落點 \n ctrl +\xa04\xa0->\xa0字幕結尾時間落點 \n \n \n', 'tags': '', 'url': '上課筆記.html'}]};