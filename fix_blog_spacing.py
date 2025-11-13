import re

# Read the file
with open('lib/blogs-data.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Remove all <br><br> tags
content = re.sub(r'<br><br>\s*', '', content)

# Write back to file
with open('lib/blogs-data.ts', 'w', encoding='utf-8') as f:
    f.write(content)

print("Successfully removed all <br><br> tags from blogs-data.ts")
