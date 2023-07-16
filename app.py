import json
from flask import Flask, render_template, request
import cv2
import os
from PIL import Image
import matplotlib.pyplot as plt
import matplotlib.image as mpimg

# app = Flask(__name__)
app = Flask(__name__, static_folder="static", static_url_path="/static")


@app.route("/")
def index():
    text = "類似画像検索システム"

    return render_template("index.html", text=text)


@app.route("/send", methods=["POST"])
def process_data():
    # リクエストからデータを取得
    data = request.get_json().get("data")

    # 受け取ったデータの処理
    path = "static/card/" + data + ".png"
    # ...

    max_file = search_images(path, data)

    # 応答を返す
    print(max_file)
    return max_file

    # return render_template("index.html", path=path)


def search_images(path, data):
    max_ret = 10000
    max_file = ""

    print("検索:", path)

    dir_path = "static/card/"

    IMG_SIZE = (200, 200)

    # ターゲット画像をグレースケールで読み出し
    target_img = cv2.imread(path, cv2.IMREAD_GRAYSCALE)
    # ターゲット画像を200px×200pxに変換
    target_img = cv2.resize(target_img, IMG_SIZE)

    # BFMatcherオブジェクトの生成
    bf = cv2.BFMatcher(cv2.NORM_HAMMING)

    # AKAZEを適用、特徴点を検出
    detector = cv2.AKAZE_create()
    (target_kp, target_des) = detector.detectAndCompute(target_img, None)

    filepath = os.listdir(dir_path)

    for file in filepath:
        # print(file)
        if file == ".DS_Store" or file == data:
            continue
        # 比較対象の写真の特徴点を検出
        comparing_img_path = dir_path + file
        try:
            comparing_img = cv2.imread(comparing_img_path, cv2.IMREAD_GRAYSCALE)
            comparing_img = cv2.resize(comparing_img, IMG_SIZE)
            (comparing_kp, comparing_des) = detector.detectAndCompute(
                comparing_img, None
            )
            # BFMatcherで総当たりマッチングを行う
            matches = bf.match(target_des, comparing_des)
            # 特徴量の距離を出し、平均を取る
            dist = [m.distance for m in matches]
            if len(dist) == 0:
                continue
            ret = sum(dist) / len(dist)
            if ret == 0:
                continue
            if max_ret > ret:
                max_ret = ret
                max_file = file
                # max_tarfile = None

        except cv2.error:
            # cv2がエラーを吐いた場合の処理
            ret = 100000

        # print(file, ret)

    # print(max_ret, max_file)
    return json.dumps(max_file)


if __name__ == "__main__":
    app.run(debug=True, port=8888, threaded=True)
