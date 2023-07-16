console.log("Hello JavaScript!!");

var button2 = document.getElementById("submitButton");



var resultElement = document.getElementById("result");

var button3 = document.getElementById("reload");

var regionSelect = document.getElementById("regionSelect");
var selectElement = document.getElementById("prefSelect");


// 一つ目のプルダウンメニューの選択された地域に応じて二つ目のプルダウンメニューのオプションを更新
function updateSubregions() {
    var selectedRegion = regionSelect.value;


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
        var options = [
            { text: "札幌市" },
            // 北海道に属する地域を追加
        ];
    } else if (selectedRegion === "青森県") {
        var options = [
            { text: "" },
            // 青森県に属する地域を追加
        ];
    } else if (selectedRegion === "宮城県") {
        var options = [
            { text: "" },
        ];
    } else if (selectedRegion === "秋田県") {
        var options = [
            { text: "" },
        ];
    } else if (selectedRegion === "山形県") {
        var options = [
            { text: "" },
        ];
    } else if (selectedRegion === "福島県") {
        var options = [
            { text: "棚倉町" },
            { text: "いわき市" },

        ];
    } else if (selectedRegion === "茨城県") {
        var options = [
            { text: "土浦市" },
            { text: "つくば市" },

        ];
    } else if (selectedRegion === "栃木県") {
        var options = [
            { text: "" },
        ];
    } else if (selectedRegion === "群馬県") {
        var options = [
            { text: "明和町" },
        ];
    } else if (selectedRegion === "埼玉県") {
        var options = [
            { text: "飯能市" },
            { text: "鴻巣市" },
            { text: "深谷市" },
            { text: "入間市" },

        ];
    } else if (selectedRegion === "千葉県") {
        var options = [
            { text: "市川市" },
            { text: "大網白里市" },

        ];
    } else if (selectedRegion === "東京都") {
        var options = [
            { text: "東京23区E" },
            { text: "東京23区F" },
            { text: "国分寺市B" },


        ];
    } else if (selectedRegion === "神奈川県") {
        var options = [
            { text: "厚木市" },
            { text: "小田原市D" },

        ];
    } else if (selectedRegion === "新潟県") {
        var options = [
            { text: "長岡市E" },
        ];
    } else if (selectedRegion === "富山県") {
        var options = [
            { text: "" },
        ];
    } else if (selectedRegion === "石川県") {
        var options = [
            { text: "能登町" },
        ];
    } else if (selectedRegion === "福井県") {
        var options = [
            { text: "" },
        ];
    } else if (selectedRegion === "山梨県") {
        var options = [
            { text: "富士河口湖町B" },
        ];
    } else if (selectedRegion === "長野県") {
        var options = [
            { text: "上田市" },
            { text: "小諸市B" },
            { text: "東御市" },

        ];
    } else if (selectedRegion === "岐阜県") {
        var options = [
            { text: "高山市" },
            { text: "各務原市" },

        ];
    } else if (selectedRegion === "静岡県") {
        var options = [
            { text: "下田市" },
            { text: "湖西市" },
            { text: "森町" },


        ];
    } else if (selectedRegion === "愛知県") {
        var options = [
            { text: "西尾市" },
            { text: "知立市" },
            { text: "瀬戸市B" },
            { text: "安城市B" },
            { text: "みよし市B" },

        ];
    } else if (selectedRegion === "三重県") {
        var options = [
            { text: "" },
        ];
    } else if (selectedRegion === "滋賀県") {
        var options = [
            { text: "" },
        ];
    } else if (selectedRegion === "京都府") {
        var options = [
            { text: "八幡市" },
            { text: "向日市B" },

        ];
    } else if (selectedRegion === "大阪府") {
        var options = [
            { text: "岸和田市" },
            { text: "大阪狭山市" },
            { text: "高槻市C" },
            { text: "柏原市B" },
            { text: "摂津市" },
        ];
    } else if (selectedRegion === "兵庫県") {
        var options = [
            { text: "加東市" },
            { text: "神河町" },
            { text: "三木市B" },
        ];
    } else if (selectedRegion === "奈良県") {
        var options = [
            { text: "" },
        ];
    } else if (selectedRegion === "和歌山県") {
        var options = [
            { text: "" },
        ];
    } else if (selectedRegion === "鳥取県") {
        var options = [
            { text: "" },
        ];
    } else if (selectedRegion === "島根県") {
        var options = [
            { text: "松江市" },
            { text: "浜田市B" },
        ];
    } else if (selectedRegion === "岡山県") {
        var options = [
            { text: "高梁市" },
        ];
    } else if (selectedRegion === "広島県") {
        var options = [
            { text: "広島市D" },
            { text: "広島市C" },

        ];
    } else if (selectedRegion === "山口県") {
        var options = [
            { text: "和木町" },
        ];
    } else if (selectedRegion === "徳島県") {
        var options = [
            { text: "" },
        ];
    } else if (selectedRegion === "香川県") {
        var options = [
            { text: "" },
        ];
    } else if (selectedRegion === "高知県") {
        var options = [
            { text: "" },
        ];
    } else if (selectedRegion === "愛媛県") {
        var options = [
            { text: "" },
        ];
    } else if (selectedRegion === "福岡県") {
        var options = [
            { text: "太宰府市C" },
        ];
    } else if (selectedRegion === "佐賀県") {
        var options = [
            { text: "" },
        ];
    } else if (selectedRegion === "長崎県") {
        var options = [
            { text: "長与町" },
        ];
    } else if (selectedRegion === "熊本県") {
        var options = [
            { text: "" },
        ];
    }
    else if (selectedRegion === "大分県") {
        var options = [
            { text: "大分市" },
        ];
    } else if (selectedRegion === "宮崎県") {
        var options = [
            { text: "" },
        ];
    } else if (selectedRegion === "鹿児島県") {
        var options = [
            { text: "鹿屋市" },
        ];
    } else if (selectedRegion === "沖縄県") {
        var options = [
            { text: "" },
        ];
    } else if (selectedRegion === "世界") {
        var options = [
            { text: "シェムリアップ市" },
        ];
    }

    // 以下、他の都道府県の条件分岐を追加


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

// 初回表示時に二つ目のプルダウンメニューを更新
updateSubregions();

// HTTPリクエストを送信
var xhr = new XMLHttpRequest(); // xhr変数を定義

// ボタンがクリックされたときの処理を定義
button2.addEventListener("click", function () {
    // 選択されたオプションの値を取得
    var selectedOption = selectElement.options[selectElement.selectedIndex].text;

    if (selectedOption == "未選択") {
        resultElement.textContent = "自治体が未選択です";
    } else {
        var selectedOption = selectElement.options[selectElement.selectedIndex].text;

        // 結果を表示
        resultElement.textContent = "選択された自治体: " + selectedOption;


        var path = "static/card/" + selectedOption + ".png"

        var img = document.getElementById("image");

        img.style.display = "block"

        img.src = path;
        img.alt = selectedOption + "カード"

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






