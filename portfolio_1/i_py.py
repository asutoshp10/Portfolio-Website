import cv2
import numpy as np
import os

path=r'C:\Users\asuto\Desktop\Portfolio_web\portfolio_1\assets\images'
for i in os.listdir(path):
    if i.startswith('WhatsApp'):
        continue
    img_path=os.path.join(path,i)
    img=cv2.imread(img_path)
    a=max(img.shape[0],img.shape[1])
    img_scaled=cv2.resize(img,(a,a),interpolation=cv2.INTER_CUBIC)
    scaled_path=os.path.join(r'C:\Users\asuto\Desktop\Portfolio_web\portfolio_1\assets','scaled_images',i)
    print(scaled_path)
    # if not os.path.exists(os.path.dirname(scaled_path)):
    #     os.makedirs(os.path.dirname(scaled_path))
    cv2.imwrite(scaled_path,img_scaled)
    print(f"Image {i} scaled and saved to {scaled_path}")