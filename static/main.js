console.log("Hello JavaScript!!");

var button2 = document.getElementById("submitButton");



var resultElement = document.getElementById("result");

var button3 = document.getElementById("reload");

var regionSelect = document.getElementById("regionSelect");
var selectElement = document.getElementById("prefSelect");


// 一つ目のプルダウンメニューの選択された地域に応じて二つ目のプルダウンメニューのオプションを更新
function updateSubregions() {
    var selectedRegion = regionSelect.value;

    var initialOption = document.createElement("option");
    initialOption.value = ""; // 値が空
    initialOption.text = "選択してください";
    initialOption.disabled = true;
    initialOption.selected = true;
    selectElement.appendChild(initialOption);

    // 一つ目のプルダウンメニューの選択された地域に応じてオプションを追加
    if (selectedRegion === "0") {
        selectElement.innerHTML = "";
        var options = [
            { text: "未選択" },
        ];
    } else {
        // 二つ目のプルダウンメニューの内容をクリア
        selectElement.innerHTML = "";
    }
    if (selectedRegion === "北海道") {
        // // 初期状態の選択肢を追加
        // var initialOption = document.createElement("option");
        // initialOption.value = ""; // 値が空
        // initialOption.text = "選択してください";
        // initialOption.disabled = true;
        // initialOption.selected = true;
        // selectElement.appendChild(initialOption);

        selectElement.appendChild(initialOption);

        var options = [
            { text: "札幌市" },
            { text: "札幌市B" },
            { text: "函館市" },
            { text: "紋別市" },
            { text: "千歳市" },
            { text: "当麻町" },
            { text: "雄武町" },
            { text: "足寄町" },
            { text: "足寄町B" },
            { text: "稚内市" },
            { text: "稚内市B" },
            { text: "天塩町" },
            { text: "天塩町B" },
            { text: "豊富町" },
            { text: "豊富町B" },
            { text: "豊富町C" },
            { text: "豊富町D" },
            { text: "斜里町" },
            { text: "深川市" },
            { text: "上富良野町" },
            { text: "安平町" },
            { text: "留萌町" },
            { text: "恵庭市" },
            { text: "恵庭市B" },
            { text: "上ノ国町" },
            { text: "利尻町" },
            { text: "南富良野町" },
            { text: "名寄市" },
            { text: "名寄市B" },
            { text: "釧路市" },
            { text: "釧路市B" },
            { text: "帯広市" },
            { text: "滝川市" },
            { text: "富良野市" },
            { text: "恵神楽町" },
            { text: "音更町" },
            { text: "名寄市B" },
            { text: "別海町" },
            { text: "北見市" },
            { text: "北見市B" },
            { text: "赤平市" },
            { text: "浦河町" },
            { text: "当別町" },
            { text: "古平町" },
            { text: "木古内町" },
            { text: "旭川市" },
            { text: "苫小牧市" },
            { text: "芦別市" },
            { text: "江別市" },
            { text: "剣淵町" },
            { text: "小樽市" },
            { text: "小樽市" },
            { text: "北広島市" },
            { text: "石狩市" },
            { text: "岩内町" },
            { text: "奈井江町" },
            { text: "陸別町" },
            { text: "室蘭市" },
            { text: "砂川市" },
            { text: "北斗市" },

            // 北海道に属する地域を追加
        ];
    } else if (selectedRegion === "青森県") {
        selectElement.appendChild(initialOption);

        var options = [
            { text: "青森市" },
            { text: "三戸町" },
            { text: "五所川原市" },
            { text: "三沢市" },
            { text: "弘前市" },
            { text: "十和田市" },
            // 青森県に属する地域を追加
        ];
    }
    else if (selectedRegion === "岩手県") {
        selectElement.appendChild(initialOption);

        var options = [
            { text: "岩手県流域下水道" },
            { text: "盛岡市" },
            { text: "二戸市" },
            { text: "滝沢市" },
            { text: "宮古市" },
            { text: "宮古市B" },
            { text: "遠野市" },
            { text: "釜石市" },
            { text: "釜石市B" },
            { text: "釜石市C" },
            { text: "花巻市" },
            { text: "花巻市B" },
            { text: "花巻市C" },
            { text: "花巻市D" },
            { text: "九戸村" },
            { text: "久慈市" },
        ];
    } else if (selectedRegion === "宮城県") {
        selectElement.appendChild(initialOption);

        var options = [
            { text: "宮城県流域下水道" },
            { text: "宮城県流域下水道B" },
            { text: "宮城県流域下水道C" },
            { text: "仙台市" },
            { text: "亘理町" },
            { text: "小山市" },
            { text: "利府町" },
            { text: "大和町" },
            { text: "石巻市" },
            { text: "涌谷町" },
            { text: "東松島市" },
            { text: "東松島市B" },
            { text: "大衡村" },
            { text: "白石市" },
            { text: "多賀城市" },
            { text: "多賀城市B" },
            { text: "大河原町" },
            { text: "名取市" },
            { text: "七ヶ浜町" },
            { text: "女川町" },
        ];
    } else if (selectedRegion === "秋田県") {
        selectElement.appendChild(initialOption);

        var options = [
            { text: "秋田市" },
            { text: "秋田市B" },
            { text: "大仙市" },
            { text: "男鹿市" },
            { text: "能代市" },
        ];
    } else if (selectedRegion === "山形県") {
        selectElement.appendChild(initialOption);

        var options = [
            { text: "山形県流域下水道" },
            { text: "酒田市" },
            { text: "新庄市" },
            { text: "鶴岡市" },
            { text: "鶴岡市B" },
            { text: "天童市" },
            { text: "上山市" },
            { text: "南陽市" },
            { text: "寒河江市" },
            { text: "東根市" },
            { text: "舟形町" },
            { text: "本宮市" },
            { text: "河北町" },
        ];
    } else if (selectedRegion === "福島県") {
        selectElement.appendChild(initialOption);

        var options = [
            { text: "福島県流域下水道" },
            { text: "福島市" },
            { text: "福島市B" },
            { text: "棚倉町" },
            { text: "いわき市" },
            { text: "いわき市B" },
            { text: "いわき市C" },
            { text: "三春町" },
            { text: "楢葉町" },
            { text: "川内村" },
            { text: "富岡町" },
            { text: "湯川村" },
            { text: "湯川村B" },
            { text: "喜多方市" },
            { text: "須賀川市" },
            { text: "会津若松市" },
            { text: "郡山市" },
            { text: "郡山市B" },
            { text: "白河市" },
            { text: "二本松市" },
            { text: "桑折町" },
            { text: "相馬市" },
            { text: "南相馬市" },
            { text: "田村市" },
            { text: "会津坂下町" },
            { text: "西郷村" },
            { text: "猪苗代町" },

        ];
    } else if (selectedRegion === "茨城県") {
        selectElement.appendChild(initialOption);

        var options = [
            { text: "水戸市" },
            { text: "石岡市" },
            { text: "石岡市B" },
            { text: "土浦市" },
            { text: "土浦市B" },
            { text: "つくば市" },
            { text: "つくば市B" },
            { text: "常陸大宮市" },
            { text: "常陸太田市" },
            { text: "高萩市" },
            { text: "大洗町" },
            { text: "下妻市" },
            { text: "那須塩原市B" },
            { text: "北茨城市" },
            { text: "筑西市" },
            { text: "桜川市" },
            { text: "日立市" },
            { text: "龍ヶ崎市" },
            { text: "那珂市" },
            { text: "鉾田市" },
            { text: "鹿嶋市" },
            { text: "常総市" },
            { text: "守谷市" },
            { text: "取手市" },
            { text: "行方市" },
            { text: "結城市" },

        ];
    } else if (selectedRegion === "栃木県") {
        selectElement.appendChild(initialOption);

        var options = [
            { text: "栃木県流域下水道" },
            { text: "宇都宮市" },
            { text: "宇都宮市B" },
            { text: "大田原市" },
            { text: "さくら市" },
            { text: "壬生町" },
            { text: "壬生町B" },
            { text: "真岡市" },
            { text: "那須塩原市" },
            { text: "鹿沼市" },
            { text: "足利市" },
            { text: "足利市B" },
            { text: "下野市" },
            { text: "日光市" },
            { text: "日光市B" },
            { text: "栃木市" },
            { text: "佐野市" },
        ];
    } else if (selectedRegion === "群馬県") {
        selectElement.appendChild(initialOption);

        var options = [
            { text: "群馬県流域下水道" },
            { text: "前橋市" },
            { text: "館林市" },
            { text: "富岡町" },
            { text: "明和町" },
            { text: "桐生市" },
            { text: "桐生市B" },
            { text: "吉岡町" },
            { text: "渋川市" },
            { text: "渋川市B" },
            { text: "渋川市C" },
            { text: "玉村町" },
            { text: "大泉町" },
            { text: "藤岡市" },
            { text: "沼田市" },
            { text: "草津町" },
            { text: "邑楽町" },
            { text: "みどり市" },
        ];
    } else if (selectedRegion === "埼玉県") {
        selectElement.appendChild(initialOption);

        var options = [
            { text: "埼玉県流域下水道" },
            { text: "埼玉県流域下水道B" },
            { text: "埼玉県流域下水道C" },
            { text: "埼玉県流域下水道D" },
            { text: "埼玉県流域下水道E" },
            { text: "埼玉県流域下水道F" },
            { text: "埼玉県流域下水道G" },
            { text: "埼玉県流域下水道H" },
            { text: "さいたま市" },
            { text: "飯能市" },
            { text: "鴻巣市" },
            { text: "鴻巣市B" },
            { text: "深谷市" },
            { text: "越谷市" },
            { text: "越谷市B" },
            { text: "越谷市C" },
            { text: "入間市" },
            { text: "入間市B" },
            { text: "志木市" },
            { text: "桶川市" },
            { text: "桶川市B" },
            { text: "戸田市" },
            { text: "川越市" },
            { text: "川越市B" },
            { text: "所沢市" },
            { text: "所沢市B" },
            { text: "所沢市C" },
            { text: "所沢市D" },
            { text: "久喜市" },
            { text: "久喜市B" },
            { text: "日高市" },
            { text: "日高市B" },
            { text: "本庄市" },
            { text: "本庄市B" },
            { text: "宮代町" },
            { text: "富士見市" },
            { text: "上尾市" },
            { text: "上尾市B" },
            { text: "川島町" },
            { text: "熊谷市" },
            { text: "熊谷市B" },
            { text: "伊奈町" },
            { text: "行田市" },
            { text: "吉見町" },
            { text: "吉川市" },
            { text: "川口市" },
            { text: "羽生市" },
            { text: "ふじみ野市" },
            { text: "狭山市" },
            { text: "白岡市" },
            { text: "寄居町" },
            { text: "草加市" },
            { text: "草加市B" },
            { text: "坂戸市" },
            { text: "日高市" },
            { text: "北本市" },
            { text: "三郷市" },


        ];
    } else if (selectedRegion === "千葉県") {
        selectElement.appendChild(initialOption);

        var options = [
            { text: "千葉市" },
            { text: "千葉市B" },
            { text: "市川市C" },
            { text: "大網白里市" },
            { text: "市原市" },
            { text: "市川市" },
            { text: "市川市B" },
            { text: "市川市C" },
            { text: "野田市B" },
            { text: "佐倉市" },
            { text: "我孫子市" },
            { text: "浦安市" },
            { text: "館山市" },
            { text: "木更津市" },
            { text: "松戸市" },
            { text: "松戸市B" },
            { text: "船橋市" },
            { text: "柏市" },
            { text: "鎌ヶ谷市" },
            { text: "習志野市" },
            { text: "袖ケ浦市" },
            { text: "銚子市" },
            { text: "八千代市" },
            { text: "白井市" },
            { text: "流山市" },
            { text: "野田市" },




        ];
    } else if (selectedRegion === "東京都") {
        selectElement.appendChild(initialOption);

        var options = [
            { text: "東京都流域下水道" },
            { text: "東京23区" },
            { text: "東京23区B" },
            { text: "東京23区B2" },
            { text: "東京23区C" },
            { text: "東京23区C2" },
            { text: "東京23区D" },
            { text: "東京23区D2" },
            { text: "東京23区E" },
            { text: "東京23区E2" },
            { text: "東京23区F" },
            { text: "東京23区N" },
            { text: "東京23区N" },
            { text: "東京23区Z" },
            { text: "八王子市" },
            { text: "青梅市" },
            { text: "国分寺市" },
            { text: "国分寺市B" },
            { text: "国立市" },
            { text: "国立市B" },
            { text: "福生市" },
            { text: "小笠原村" },


            { text: "東久留米市C" },
            { text: "東久留米市D" },

            { text: "立川市" },
            { text: "立川市B" },
            { text: "立川市C" },
            { text: "府中市" },
            { text: "府中市B" },
            { text: "あきる野市B" },
            { text: "多摩市" },
            { text: "多摩市B" },
            { text: "多摩市C" },
            { text: "多摩市D" },
            { text: "檜原村" },
            { text: "町田市" },
            { text: "町田市B" },
            { text: "調布市" },
            { text: "日野市" },
            { text: "小平市" },
            { text: "羽村市" },
            { text: "羽村市B" },
            { text: "瑞穂町" },
            { text: "小金井市" },
            { text: "狛江市" },
            { text: "昭島市" },


        ];
    } else if (selectedRegion === "神奈川県") {
        selectElement.appendChild(initialOption);

        var options = [
            { text: "横浜市" },
            { text: "横浜市B" },
            { text: "横浜市C" },
            { text: "横浜市D" },
            { text: "厚木市" },
            { text: "厚木市B" },
            { text: "小田原市" },
            { text: "小田原市B" },
            { text: "小田原市C" },
            { text: "小田原市D" },
            { text: "川崎市" },

            { text: "川崎市C" },
            { text: "茅ヶ崎市" },
            { text: "川崎市B" },
            { text: "逗子市" },
            { text: "海老名市" },
            { text: "相模原市" },
            { text: "相模原市B" },
            { text: "相模原市C" },
            { text: "相模原市D" },
            { text: "三浦市" },
            { text: "伊勢原市" },
            { text: "葉山町" },
            { text: "清川村" },
            { text: "藤沢市" },
            { text: "大和市" },
            { text: "座間市" },
            { text: "横須賀市" },

            { text: "中井町" },
            { text: "平塚市" },
            { text: "大井町" },
            { text: "愛川町" },
            { text: "秦野市" },
        ];
    } else if (selectedRegion === "新潟県") {
        selectElement.appendChild(initialOption);

        var options = [
            { text: "新潟県流域下水道" },
            { text: "新潟市" },
            { text: "新潟市B" },
            { text: "長岡市" },
            { text: "長岡市B" },
            { text: "長岡市C" },
            { text: "長岡市D" },
            { text: "長岡市E" },
            { text: "加茂市" },
            { text: "見附市" },
            { text: "燕市" },
            { text: "燕市B" },
            { text: "燕市C" },
            { text: "燕市D" },
            { text: "新発田市" },
            { text: "新発田市B" },
            { text: "新発田市C" },
            { text: "小千谷市" },
            { text: "小千谷市B" },
            { text: "出雲崎町" },
            { text: "柏崎市" },
            { text: "柏原市B" },
            { text: "十日町市" },
            { text: "十日町市B" },
            { text: "十日町市C" },
            { text: "村上市" },
            { text: "村上市B" },
            { text: "村上市C" },
            { text: "村上市D" },
            { text: "村上市E" },
            { text: "糸魚川市" },
            { text: "胎内市" },
            { text: "三条市" },
            { text: "阿賀野市" },

        ];
    } else if (selectedRegion === "富山県") {
        selectElement.appendChild(initialOption);

        var options = [
            { text: "富山市" },
            { text: "富山市B" },
            { text: "富山市C" },
            { text: "富山市D" },
            { text: "富山市E" },
            { text: "富山市Ｆ" },
            { text: "富山市G" },
            { text: "小矢部市" },
            { text: "小矢部市B" },
            { text: "砺波市" },
            { text: "高岡市" },
            { text: "高岡市B" },
            { text: "射水市" },
            { text: "氷見市" },
            { text: "舟橋村" },

        ];
    } else if (selectedRegion === "石川県") {
        selectElement.appendChild(initialOption);

        var options = [
            { text: "かほく市" },
            { text: "輪島市" },
            { text: "輪島市B" },
            { text: "能登町" },
            { text: "能登町B" },
            { text: "能登町C" },
            { text: "中能登町" },
            { text: "志賀町" },

        ];
    } else if (selectedRegion === "福井県") {
        selectElement.appendChild(initialOption);

        var options = [
            { text: "福井市" },
            { text: "福井市B" },
            { text: "敦賀市" },
            { text: "敦賀市B" },
            { text: "高浜市" },
            { text: "大野市" },
            { text: "勝山市" },
            { text: "越前市" },
        ];
    } else if (selectedRegion === "山梨県") {
        selectElement.appendChild(initialOption);

        var options = [
            { text: "甲斐市" },
            { text: "甲斐市B" },
            { text: "中央市" },
            { text: "甲府市" },
            { text: "甲府市B" },
            { text: "富士河口湖町" },
            { text: "富士河口湖町B" },
            { text: "南アルプス市" },
            { text: "上野原市" },
        ];
    } else if (selectedRegion === "長野県") {
        selectElement.appendChild(initialOption);

        var options = [
            { text: "長野県流域下水道" },
            { text: "長野県流域下水道B" },
            { text: "長野県流域下水道C" },
            { text: "長野市" },
            { text: "松本市" },
            { text: "安曇野市" },
            { text: "伊那市" },
            { text: "伊那市B" },
            { text: "伊那市C" },
            { text: "上田市" },
            { text: "上田市B" },
            { text: "小諸市" },
            { text: "小諸市B" },
            { text: "東御市" },
            { text: "佐久市" },
            { text: "佐久市B" },
            { text: "佐久市C" },
            { text: "筑北村" },
            { text: "駒ケ根市" },
            { text: "高森町" },
            { text: "大桑村" },
            { text: "下諏訪町" },
            { text: "飯田市" },
            { text: "飯田市B" },
            { text: "南箕輪村" },
            { text: "岡谷市" },
            { text: "諏訪市" },
            { text: "千曲市" },
            { text: "千曲市B" },
            { text: "千曲市C" },
            { text: "南木曾町" },
            { text: "飯山市" },
            { text: "茅野市" },
            { text: "大町市" },
            { text: "朝日村" },
        ];
    } else if (selectedRegion === "岐阜県") {
        selectElement.appendChild(initialOption);

        var options = [
            { text: "高山市" },
            { text: "高山市B" },
            { text: "高山市C" },
            { text: "高山市D" },
            { text: "高山市E" },
            { text: "高山市F" },
            { text: "高山市G" },
            { text: "高山市H" },
            { text: "各務原市" },
            { text: "郡上市" },
            { text: "郡上市B" },
            { text: "郡上市C" },
            { text: "垂井町" },
            { text: "飛騨市" },
            { text: "飛騨市B" },
            { text: "池田町" },
            { text: "池田町B" },
            { text: "瑞穂市" },
            { text: "中津川市" },
            { text: "大垣市" },
            { text: "関市" },
            { text: "美濃加茂市" },

        ];
    } else if (selectedRegion === "静岡県") {
        selectElement.appendChild(initialOption);

        var options = [
            { text: "静岡市" },
            { text: "静岡市B" },
            { text: "浜松市" },
            { text: "吉田町" },
            { text: "富士市" },
            { text: "富士市B" },
            { text: "富士宮市" },
            { text: "富士宮市B" },
            { text: "富士宮市C" },
            { text: "下田市" },
            { text: "湖西市" },
            { text: "森町" },
            { text: "沼津市" },
            { text: "沼津市B" },
            { text: "三島市" },
            { text: "伊東市" },
            { text: "掛川市" },
            { text: "伊豆の国市" },
            { text: "南伊豆町" },
            { text: "焼津市" },
            { text: "磐田市" },
            { text: "熱海市" },
            { text: "熱海市B" },
            { text: "藤枝市" },
            { text: "長泉町" },
            { text: "小山町" },
            { text: "御殿場市" },


        ];
    } else if (selectedRegion === "愛知県") {
        selectElement.appendChild(initialOption);

        var options = [
            { text: "愛知県流域下水道" },
            { text: "名古屋市" },
            { text: "名古屋市B" },
            { text: "豊川市" },
            { text: "西尾市" },
            { text: "知立市" },
            { text: "瀬戸市" },
            { text: "瀬戸市B" },
            { text: "安城市" },
            { text: "安城市B" },
            { text: "みよし市B" },
            { text: "弥富市" },
            { text: "岡崎市" },
            { text: "岡崎市B" },
            { text: "岡崎市C" },
            { text: "岡崎市D" },
            { text: "岡崎市E" },
            { text: "岡崎市F" },
            { text: "津島市" },
            { text: "半田市" },
            { text: "半田市B" },
            { text: "半田市C" },
            { text: "高浜市" },
            { text: "高浜市B" },
            { text: "大治町" },
            { text: "設楽町" },
            { text: "みよし市" },
            { text: "刈谷市" },
            { text: "小牧市" },
            { text: "知多市" },
            { text: "武豊町" },
            { text: "江南市" },
            { text: "扶桑町" },
            { text: "豊田市" },
            { text: "豊田市B" },
            { text: "大府市" },
            { text: "蟹江町" },
            { text: "豊橋市" },
            { text: "豊橋市B" },
            { text: "豊橋市C" },
            { text: "一宮市" },
            { text: "稲沢市" },
            { text: "尾張旭市" },
            { text: "豊明市" },
            { text: "長久手市" },
            { text: "豊山町" },
            { text: "北名古屋市" },
            { text: "阿久比町" },
            { text: "碧南市" },
            { text: "犬山市" },
            { text: "東浦町" },

        ];
    } else if (selectedRegion === "三重県") {
        selectElement.appendChild(initialOption);

        var options = [
            { text: "伊勢市" },
            { text: "伊勢市B" },
            { text: "四日市市" },
            { text: "四日市市B" },
            { text: "四日市市C" },
            { text: "桑名市" },
            { text: "桑名市B" },
            { text: "松阪市" },
            { text: "松阪市B" },
            { text: "亀山市" },
            { text: "伊賀市" },
            { text: "鈴鹿市" },
            { text: "菰野町" },
            { text: "東員町" },
        ];
    } else if (selectedRegion === "滋賀県") {
        selectElement.appendChild(initialOption);

        var options = [
            { text: "滋賀県流域下水道" },
            { text: "大津市" },
            { text: "草津市" },
            { text: "草津市B" },
            { text: "彦根市" },
            { text: "彦根市B" },
            { text: "栗東市" },
        ];
    } else if (selectedRegion === "京都府") {
        selectElement.appendChild(initialOption);

        var options = [
            { text: "京都府流域下水道" },
            { text: "京都市" },
            { text: "京都市B" },
            { text: "八幡市" },
            { text: "向日市B" },
            { text: "長岡京市B" },
            { text: "綾部市" },
            { text: "舞鶴市" },
            { text: "舞鶴市B" },
            { text: "舞鶴市C" },
            { text: "亀岡市" },
            { text: "亀岡市B" },
            { text: "京丹後市" },
            { text: "宇治田原町" },
            { text: "宇治市" },


        ];
    } else if (selectedRegion === "大阪府") {
        selectElement.appendChild(initialOption);

        var options = [
            { text: "大阪府流域下水道" },
            { text: "大阪市" },
            { text: "大阪市B" },
            { text: "大阪市C" },
            { text: "松原市" },
            { text: "和泉市" },
            { text: "和泉市B" },
            { text: "岸和田市" },
            { text: "岸和田市B" },
            { text: "岸和田市C" },
            { text: "大阪狭山市" },
            { text: "大阪狭山市B" },
            { text: "高槻市" },
            { text: "高槻市B" },
            { text: "高槻市C" },
            { text: "柏原市" },
            { text: "柏原市B" },
            { text: "摂津市" },
            { text: "千早赤阪村" },
            { text: "阪南市" },
            { text: "堺市" },
            { text: "堺市B" },
            { text: "交野市" },
            { text: "交野市B" },
            { text: "泉佐野市" },
            { text: "泉佐野市B" },
            { text: "羽曳野市B" },
            { text: "島本町" },
            { text: "島本町B" },
            { text: "田尻町" },
            { text: "藤井寺市" },
            { text: "藤井寺市B" },
            { text: "茨木市" },
            { text: "池田市" },
            { text: "池田市B" },
            { text: "池田市C" },
            { text: "池田市D" },
            { text: "池田市E" },
            { text: "枚方市" },
            { text: "東大阪市" },
            { text: "豊中市" },
            { text: "能勢町" },
            { text: "富田林市" },
            { text: "大東市" },
            { text: "高石市" },
            { text: "泉南市" },
            { text: "四條畷市" },
            { text: "守口市" },
            { text: "八尾市" },
            { text: "河内長野市" },
            { text: "箕面市" },
            { text: "吹田市" },
            { text: "門真市" },
            { text: "太子町" },
            { text: "寝屋川市" },
            { text: "豊能町" },
            { text: "熊取町" },
            { text: "河南町" },
            { text: "貝塚市" },

        ];
    } else if (selectedRegion === "兵庫県") {
        selectElement.appendChild(initialOption);

        var options = [
            { text: "兵庫県流域下水道" },
            { text: "神戸市" },
            { text: "神戸市B" },
            { text: "西宮市" },
            { text: "芦屋市" },
            { text: "芦屋市B" },
            { text: "加東市" },
            { text: "加東市B" },
            { text: "神河町" },
            { text: "三木市" },
            { text: "三木市B" },
            { text: "洲本市" },
            { text: "伊丹市" },
            { text: "伊丹市B" },
            { text: "伊丹市C" },
            { text: "伊丹市D" },
            { text: "川西市" },
            { text: "川西市B" },
            { text: "川西市C" },
            { text: "尼崎市" },
            { text: "尼崎市B" },
            { text: "丹波市" },
            { text: "加古川市" },
            { text: "宝塚市" },
            { text: "猪名川町" },
            { text: "播磨町" },
            { text: "福崎町" },
            { text: "姫路市" },
            { text: "篠山市" },
            { text: "西脇市" },
            { text: "明石市" },
            { text: "加西市" },
            { text: "高砂市" },
            { text: "たつの市" },
            { text: "市川町" },
            { text: "上郡町" },


        ];
    } else if (selectedRegion === "奈良県") {
        selectElement.appendChild(initialOption);

        var options = [
            { text: "奈良市" },
            { text: "吉野町" },
            { text: "三郷町" },
            { text: "大和郡山市" },
            { text: "斑鳩町" },
            { text: "天理市" },
            { text: "田原本町" },
            { text: "橿原市" },
            { text: "生駒市" },
        ];
    } else if (selectedRegion === "和歌山県") {
        selectElement.appendChild(initialOption);

        var options = [
            { text: "和歌山市" },
            { text: "御坊市" },
            { text: "有田川町" },
            { text: "橋本市" },

        ];
    } else if (selectedRegion === "鳥取県") {
        selectElement.appendChild(initialOption);

        var options = [
            { text: "鳥取市" },
            { text: "北栄町" },
            { text: "倉吉市" },
            { text: "倉吉市B" },
            { text: "江府町" },
            { text: "米子市" },
            { text: "岩美町" },
            { text: "琴浦町" },
        ];
    } else if (selectedRegion === "島根県") {
        selectElement.appendChild(initialOption);

        var options = [
            { text: "島根県流域下水道" },
            { text: "松江市" },
            { text: "浜田市" },
            { text: "浜田市B" },
            { text: "雲南市" },
            { text: "江津市" },
            { text: "出雲市" },
            { text: "吉賀町" },
            { text: "益田市" },
            { text: "大田市" },
            { text: "津和野町" },
            { text: "安来市" },

        ];
    } else if (selectedRegion === "岡山県") {
        selectElement.appendChild(initialOption);

        var options = [
            { text: "岡山市" },
            { text: "高梁市" },
            { text: "里庄町" },
            { text: "美作市" },
            { text: "倉敷市" },
            { text: "倉敷市B" },
            { text: "倉敷市C" },
            { text: "倉敷市D" },
            { text: "倉敷市E" },
            { text: "奈義町" },
            { text: "真庭市" },
            { text: "矢掛町" },
            { text: "矢掛町B" },
            { text: "新見市" },
            { text: "吉備中央町" },
            { text: "津山市" },
            { text: "早島町" },
            { text: "鏡野町" },
            { text: "瀬戸内市" },
            { text: "瀬戸内市B" },
            { text: "笠岡市" },
            { text: "新庄村" },
            { text: "久米南町" },

        ];
    } else if (selectedRegion === "広島県") {
        selectElement.appendChild(initialOption);

        var options = [
            { text: "広島県流域下水道" },
            { text: "広島市" },
            { text: "広島市B" },
            { text: "広島市C" },
            { text: "広島市D" },
            { text: "福山市" },
            { text: "安芸高田市" },
            { text: "安芸高田市B" },
            { text: "安芸高田市C" },
            { text: "竹原市" },
            { text: "竹原市B" },
            { text: "東広島市" },
            { text: "東広島市B" },
            { text: "三原市" },
            { text: "三原市B" },
            { text: "呉市" },
            { text: "呉市B" },
            { text: "廿日市" },
            { text: "坂町" },

        ];
    } else if (selectedRegion === "山口県") {
        selectElement.appendChild(initialOption);

        var options = [
            { text: "山口市" },
            { text: "山口市B" },
            { text: "山口市C" },
            { text: "下関市" },
            { text: "下関市B" },
            { text: "和木町" },
            { text: "和木町B" },
            { text: "宇部市" },
            { text: "宇部市B" },
            { text: "山陽小野田市" },
            { text: "萩市" },
            { text: "下松市" },
            { text: "下松市B" },
            { text: "岩国市" },
            { text: "防府市" },

        ];
    } else if (selectedRegion === "徳島県") {
        selectElement.appendChild(initialOption);

        var options = [
            { text: "徳島県流域下水道" },
            { text: "鳴門市" },
            { text: "松茂町" },
            { text: "松茂町B" },
        ];
    } else if (selectedRegion === "香川県") {
        selectElement.appendChild(initialOption);

        var options = [
            { text: "香川県流域下水道" },
            { text: "香川県流域下水道B" },
            { text: "高松市" },
            { text: "高松市B" },
            { text: "観音寺市" },
            { text: "丸亀市" },
            { text: "丸亀市B" },
            { text: "丸亀市C" },
            { text: "まんのう町" },
            { text: "綾川町B" },
            { text: "三木町" },
            { text: "さぬき市" },
            { text: "東かがわ市" },
            { text: "綾川町" },
            { text: "多度津町" },
        ];
    } else if (selectedRegion === "高知県") {
        selectElement.appendChild(initialOption);

        var options = [
            { text: "高知県流域下水道" },
            { text: "高知市" },
            { text: "須崎市" },
            { text: "須崎市B" },
            { text: "香南市" },
            { text: "香南市B" },
            { text: "香南市C" },
            { text: "香南市D" },
            { text: "土佐町" },
        ];
    } else if (selectedRegion === "愛媛県") {
        selectElement.appendChild(initialOption);

        var options = [
            { text: "松山市" },
            { text: "松山市B" },
            { text: "八幡浜市" },
            { text: "八幡浜市B" },
            { text: "新居浜市" },
            { text: "伊予市" },
            { text: "西条市" },
            { text: "西予市" },
            { text: "砥部町" },
            { text: "四国中央市" },
            { text: "東温市" },
            { text: "東温市B" },
            { text: "今治市" },
            { text: "宇和島市" },
            { text: "大洲市" },


        ];
    } else if (selectedRegion === "福岡県") {
        selectElement.appendChild(initialOption);

        var options = [
            { text: "福岡県流域下水道" },
            { text: "福岡市" },
            { text: "福岡市B" },
            { text: "福岡市C" },
            { text: "北九州市" },
            { text: "北九州市B" },
            { text: "北九州市C" },
            { text: "北九州市D" },
            { text: "古賀市" },
            { text: "宇美町" },
            { text: "太宰府市" },
            { text: "太宰府市B" },
            { text: "太宰府市C" },
            { text: "筑後市" },
            { text: "宗像市" },
            { text: "宗像市B" },
            { text: "志免町" },
            { text: "久留米市" },
            { text: "岡垣町" },
            { text: "大牟田市" },
            { text: "小郡市" },
            { text: "大野城市" },
            { text: "那珂川市" },
            { text: "芦屋町" },

        ];
    } else if (selectedRegion === "佐賀県") {
        selectElement.appendChild(initialOption);

        var options = [
            { text: "佐賀市" },
            { text: "佐賀市B" },
            { text: "武雄市" },
            { text: "みやき町" },
            { text: "神埼市" },
            { text: "江北町" },
            { text: "鹿島市" },
            { text: "白石町" },
        ];
    } else if (selectedRegion === "長崎県") {
        selectElement.appendChild(initialOption);

        var options = [
            { text: "長崎県流域下水道" },
            { text: "長崎市" },
            { text: "長崎市B" },
            { text: "南島原市" },
            { text: "長与町" },
            { text: "諫早市" },
            { text: "大村市" },
            { text: "壱岐市" },
            { text: "佐世保市" },
        ];
    } else if (selectedRegion === "熊本県") {
        selectElement.appendChild(initialOption);

        var options = [
            { text: "熊本市" },
            { text: "熊本市B" },
            { text: "宇城市" },
            { text: "八代市" },
            { text: "八代市B" },
            { text: "水俣市" },
            { text: "荒尾市" },
            { text: "玉名市" },
            { text: "苓北町" },
            { text: "和水町" },
        ];
    }
    else if (selectedRegion === "大分県") {
        selectElement.appendChild(initialOption);

        var options = [
            { text: "大分市" },
            { text: "大分市B" },
            { text: "中津市" },
            { text: "杵築市" },
            { text: "日出町" },
            { text: "佐伯市" },

        ];
    } else if (selectedRegion === "宮崎県") {
        selectElement.appendChild(initialOption);

        var options = [
            { text: "宮崎市" },
            { text: "日向市" },
        ];
    } else if (selectedRegion === "鹿児島県") {
        selectElement.appendChild(initialOption);

        var options = [
            { text: "鹿児島市" },
            { text: "鹿児島市B" },
            { text: "鹿児島市C" },
            { text: "枕崎市" },
            { text: "鹿屋市" },
            { text: "南さつま市" },
            { text: "徳之島町" },
            { text: "霧島市" },
            { text: "霧島市B" },
            { text: "薩摩川内市" },
            { text: "日置市" },
            { text: "知名町" },
            { text: "奄美市" },
            { text: "指宿市" },


        ];
    } else if (selectedRegion === "沖縄県") {
        selectElement.appendChild(initialOption);

        var options = [
            { text: "沖縄県流域下水道" },
            { text: "沖縄県流域下水道B" },
            { text: "那覇市" },
            { text: "那覇市B" },
            { text: "沖縄市" },
            { text: "名護市" },
            { text: "名護市B" },
            { text: "名護市C" },
            { text: "北谷町" },
            { text: "北谷町B" },
            { text: "宜野湾市" },
            { text: "宜野座村" },
            { text: "中城村" },

        ];
    } else if (selectedRegion === "世界") {
        selectElement.appendChild(initialOption);

        var options = [
            { text: "シェムリアップ市" },
        ];
    } else if (selectedRegion === "全国") {
        selectElement.appendChild(initialOption);

        var options = [
            { text: "日本下水道事業団" },
            { text: "UR都市機構" },
        ];

    } else if (selectedRegion === "東京都特別版") {
        selectElement.appendChild(initialOption);

        var options = [
            { text: "千代田区" },
            { text: "世田谷区" },
            { text: "渋谷区" },
            { text: "杉並区" },
            { text: "豊島区" },
            { text: "北区" },
            { text: "足立区" },
            { text: "小金井市B" },
            { text: "小平市B" },
            { text: "東大和市" },
            { text: "東久留米市" },
            { text: "稲城市" },
        ];
    }

    // オプションを二つ目のプルダウンメニューに追加
    for (var i = 0; i < options.length; i++) {
        var option = document.createElement("option");
        // option.value = options[i].value;
        option.text = options[i].text;
        selectElement.appendChild(option);
    }

}

// 一つ目のプルダウンメニューの変更時に二つ目のプルダウンメニューを更新
if (regionSelect) {
    regionSelect.addEventListener("change", function () {

        selectedRegion = regionSelect.value;
        updateSubregions();
    });
}

if (selectElement) {
    selectElement.addEventListener("change", function () {
        var selectedOption = selectElement.options[selectElement.selectedIndex].text;

        // 結果を表示
        resultElement.textContent = "選択された自治体: " + "\n" + selectedOption;
        resultElement.innerHTML = "選択された自治体:<p> <strong>" + selectedOption + "</strong></p>";

        var path = "static/card/" + selectedOption + ".png"
        var img = document.getElementById("image");
        img.style.display = "block"
        img.src = path;
        img.alt = selectedOption + "カード"


    });
}

// 初回表示時に二つ目のプルダウンメニューを更新
updateSubregions();

// HTTPリクエストを送信
var xhr = new XMLHttpRequest(); // xhr変数を定義

// 検索ボタンがクリックされたときの処理を定義
button2.addEventListener("click", function () {
    // image2を非表示にする
    document.getElementById("image2").style.display = "none";
    document.getElementById("return").textContent = "類似カード:";


    // 選択されたオプションの値を取得
    var selectedOption = selectElement.options[selectElement.selectedIndex].text;

    if (selectedOption == "未選択") {
        resultElement.textContent = "自治体が未選択です";
    } else {
        // var selectedOption = selectElement.options[selectElement.selectedIndex].text;

        // // 結果を表示
        // resultElement.textContent = "選択された自治体: " + "\n" + selectedOption;


        // var path = "static/card/" + selectedOption + ".png"

        // var img = document.getElementById("image");

        // img.style.display = "block"

        // img.src = path;
        // img.alt = selectedOption + "カード"

        // AJAXリクエストの作成
        xhr.open("POST", '/send', true);
        xhr.setRequestHeader("Content-Type", "application/json");


        // レスポンスの処理
        xhr.onload = function () {
            if (xhr.status === 200) {
                // リクエスト成功時の処理
                var response = xhr.responseText;
                console.log(response);
            } else {
                // リクエスト失敗時の処理
                console.error('リクエストエラー:', xhr.status);
            }
        };

        // リクエストの送信
        xhr.send(JSON.stringify({ "data": selectedOption }));
    }

});


xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE && selectElement.value != "no") {
        if (xhr.status === 200) {
            var response = JSON.parse(xhr.responseText);
            // 応答の処理
            console.log(response);
            var receivedData = response;
            receivedData = receivedData.replace(".png", "")
            // 受け取ったデータを処理する（例えば、HTMLに追加する）
            var element = document.getElementById('return');
            element.textContent = "類似カード:" + receivedData;
            element.innerHTML = "類似カード:<p><strong>" + receivedData + "</strong></p>";

            var path = "static/card/" + receivedData + ".png"

            var img = document.getElementById("image2");

            img.style.display = "block"

            img.src = path;
            // ... 必要な処理を追加する
        } else {
            console.error("リクエストが失敗しました。ステータスコード: " + xhr.status);
        }
    }
};


// ボタンがクリックされたときの処理を定義
button3.addEventListener("click", function () {
    // img.style.display = "none";
    location.reload(); // ページをリロード    
});






