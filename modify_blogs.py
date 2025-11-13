import re
from html.parser import HTMLParser

class TableParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.in_table = False
        self.in_thead = False
        self.in_tbody = False
        self.in_tr = False
        self.in_th = False
        self.in_td = False
        self.rows = []
        self.current_row = []
        self.current_cell = ''

    def handle_starttag(self, tag, attrs):
        if tag == 'table':
            self.in_table = True
            self.rows = []
        elif tag == 'thead':
            self.in_thead = True
        elif tag == 'tbody':
            self.in_tbody = True
        elif tag == 'tr':
            self.in_tr = True
            self.current_row = []
        elif tag == 'th':
            self.in_th = True
            self.current_cell = ''
        elif tag == 'td':
            self.in_td = True
            self.current_cell = ''

    def handle_endtag(self, tag):
        if tag == 'table':
            self.in_table = False
        elif tag == 'thead':
            self.in_thead = False
        elif tag == 'tbody':
            self.in_tbody = False
        elif tag == 'tr':
            self.in_tr = False
            self.rows.append(self.current_row)
        elif tag == 'th':
            self.in_th = False
            self.current_row.append(self.current_cell.strip())
        elif tag == 'td':
            self.in_td = False
            self.current_row.append(self.current_cell.strip())

    def handle_data(self, data):
        if self.in_th or self.in_td:
            self.current_cell += data

def html_table_to_ascii(html):
    parser = TableParser()
    parser.feed(html)
    if not parser.rows:
        return html
    # Calculate column widths
    col_widths = [max(len(cell) for cell in col) for col in zip(*parser.rows)]
    # Create ASCII
    lines = []
    # Top border
    lines.append('+' + '+'.join('-' * (w + 2) for w in col_widths) + '+')
    # Rows
    for row in parser.rows:
        line = '| ' + ' | '.join(cell.ljust(w) for cell, w in zip(row, col_widths)) + ' |'
        lines.append(line)
        lines.append('+' + '+'.join('-' * (w + 2) for w in col_widths) + '+')
    return '\n'.join(lines)

def modify_content(content):
    # Convert tables first
    def replace_table(match):
        table_html = match.group(0)
        ascii_table = html_table_to_ascii(table_html)
        return '<pre>\n' + ascii_table + '\n</pre><br><br>'
    content = re.sub(r'<table>.*?</table>', replace_table, content, flags=re.DOTALL)
    # Then, add <br><br> after </p>, </h2>, </h3>, </h4>, </ul>
    content = re.sub(r'</(p|h2|h3|h4|ul)>', r'</\1><br><br>', content)
    return content

# Read the file
with open('politixmatrix/lib/blogs-data.ts', 'r', encoding='utf-8') as f:
    text = f.read()

# Find all content: ` ... `,
pattern = r'content: `([^`]*)`'

def replace_content(match):
    original = match.group(1)
    modified = modify_content(original)
    return 'content: `' + modified + '`'

new_text = re.sub(pattern, replace_content, text, flags=re.DOTALL)

# Write back
with open('politixmatrix/lib/blogs-data.ts', 'w', encoding='utf-8') as f:
    f.write(new_text)
