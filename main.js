console.log("Hello JavaScript!!");

var button2 = document.getElementById("submitButton");

var button3 = document.getElementById("reload");


var selectElement = document.getElementById("prefSelect");
var resultElement = document.getElementById("result");


// ボタンがクリックされたときの処理を定義
button2.addEventListener("click", function () {
    // 選択されたオプションの値を取得
    var selectedOption = selectElement.options[selectElement.selectedIndex].text;

    // 結果を表示
    resultElement.textContent = "選択された文字: " + selectedOption;
});

// ボタンがクリックされたときの処理を定義
button3.addEventListener("click", function () {
    location.reload(); // ページをリロード    
});






