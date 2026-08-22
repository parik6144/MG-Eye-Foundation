# Merge cover + body into final PDF
import sys
sys.path.insert(0, '/home/z/my-project/skills/pdf/scripts')
from pypdf import PdfReader, PdfWriter

A4_W, A4_H = 595.28, 841.89

def normalize_page(page, target_w=A4_W, target_h=A4_H):
    box = page.mediabox
    w, h = float(box.width), float(box.height)
    if abs(w - target_w) > 0.5 or abs(h - target_h) > 0.5:
        page.scale_to(target_w, target_h)
    return page

writer = PdfWriter()

# Cover
cover = PdfReader('/home/z/my-project/scripts/mg_cover.pdf').pages[0]
writer.add_page(normalize_page(cover))

# Body pages
body = PdfReader('/home/z/my-project/scripts/mg_body.pdf')
for page in body.pages:
    writer.add_page(normalize_page(page))

writer.add_metadata({
    '/Title': 'MG Eye Foundation - Business Proposal',
    '/Author': 'Amit Parik',
    '/Creator': 'Z.ai',
    '/Subject': 'Website Design and Development Proposal for MG Eye Foundation'
})

with open('/home/z/my-project/download/MG_Eye_Foundation_Business_Proposal.pdf', 'wb') as f:
    writer.write(f)

print(f'Final PDF merged: {len(writer.pages)} pages')
