import re

file_path = r'g:\ideo web coures b91\Bckend\server.js'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Replace image URLs to use proxy route
# For img src tags
content = re.sub(r'src="https://www\.fgz\.worldupdates\.us/assets/([^"]+)"', 
                 r'src="/proxy-image/\1"', content)

# For background-image URLs
content = re.sub(r"url\('https://www\.fgz\.worldupdates\.us/assets/([^']+)'\)", 
                 r"url('/proxy-image/\1')", content)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print('All image URLs converted to use proxy route!')
print('Images will now load via: /proxy-image/[imageName]')
