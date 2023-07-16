import os
import string

directory = "static/card"  # カードディレクトリのパス
file_names = os.listdir(directory)  # カードディレクトリ内のファイル名を取得

for file_name in file_names:
    character_to_remove = ".png"
    file_name = file_name.replace(character_to_remove, "")

    print(file_name)
