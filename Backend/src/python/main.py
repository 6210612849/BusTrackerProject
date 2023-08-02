
import numpy as np
import cv2
import sys
import math
from PIL import Image
import base64
import os
import io

from pathlib import Path


def selected(h, w):
    height_dic = {1378: 2}
    width_dic = {1125: 5}
    re_height_true = True
    re_width_true = True
    bias_width = 0
    bias_height = 0
    if h % 4 != 0:
        bias_height = 0
        re_height_true = False
        if h in height_dic.keys():
            bias_height = height_dic[h]
            # print("ans height", bias_height)
        else:
            bias_height = (h - (int(h/4)*4))
            # print("ans height ", bias_height)

    if w % 4 != 0:
        bias_width = 0
        re_width_true = False
        if w in width_dic.keys():
            bias_width = width_dic[w]
            # print("ans width", bias_width)
        else:
            bias_width = (w - (int(w/4)*4))
            # print("ans width ", bias_width)

    return (h, w, re_height_true, re_width_true, bias_height, bias_width)


myPath = sys.argv[1]
newPath = sys.argv[2]
with open(myPath, "r") as f:
    data = f.read()


base64_decoded = base64.b64decode(data)
image = Image.open(io.BytesIO(base64_decoded))
img = np.array(image)
# img_resize = cv2.resize(img,(4500,6400),interpolation = cv2.INTER_AREA)
(rawHeight), (rawWidth), (hey) = img.shape
# print(rawHeight, rawWidth, myPath)
myHeight, myWidth, trueHeight, trueWidth, biasHeight, biasWidth = selected(
    rawHeight, rawWidth)
myHeight_re = int(round(((myHeight-biasHeight)/4)))
myWidth_re = int((myWidth-biasWidth)/4)
new_im = Image.new('RGB', (myWidth, myHeight))
for i in range(0, 4):
    for j in range(0, 4):
        temp_height = int(j*myHeight_re)
        max_temp_height = int((j+1)*myHeight_re)
        temp_width = int(i*myWidth_re)
        max_temp_width = (int((i+1)*myWidth_re))
        my_temp_image = img[temp_height:max_temp_height,
                            temp_width:max_temp_width]
        new_im.paste(Image.fromarray(my_temp_image),
                     (((j*myWidth_re)), i*myHeight_re))

if not trueWidth:
    for k in range(0, 4):
        last_temp_height = int(k*myHeight_re)
        last_max_temp_height = int((k+1)*myHeight_re)
        last_temp_width = int(4*myWidth_re)
        last_max_temp_width = myWidth
        last_temp_image = img[last_temp_height:last_max_temp_height,
                              last_temp_width:last_max_temp_width]
        new_im.paste(Image.fromarray(last_temp_image),
                     (last_temp_width, last_temp_height))
buffered = io.BytesIO()
new_im.save(buffered, format="JPEG")
img_str = base64.b64encode(buffered.getvalue()).decode("utf-8")

# with open(newPath, 'w') as f:
#     f.write(img_str)
print(img_str)
