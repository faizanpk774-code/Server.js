import os

file_path = r'g:\ideo web coures b91\Bckend\server.js'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace('src="assets/', 'src="https://www.fgz.worldupdates.us/assets/')

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print('Image URLs updated successfully!')
print('All image sources now point to: https://www.fgz.worldupdates.us/assets/')
