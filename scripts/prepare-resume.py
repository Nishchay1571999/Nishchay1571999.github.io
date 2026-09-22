"""Prepare the supplied resume for public download; requires PyMuPDF.

Run with: PYTHONPATH=/private/tmp/portfolio-pdf-tools python3 scripts/prepare-resume.py
The original private source document is never changed.
"""

from pathlib import Path
import pymupdf

source = Path('docs/Nishchay Bhatt.pdf')
destination = Path('public/resume.pdf')
destination.parent.mkdir(parents=True, exist_ok=True)
document = pymupdf.open(source)
page = document[0]
contact = None
for block in page.get_text('dict')['blocks']:
    for line in block.get('lines', []):
        text = ''.join(span['text'] for span in line['spans'])
        if 'Bengaluru' in text and '@gmail.com' in text:
            contact = pymupdf.Rect(line['bbox'])
            break
if contact is None:
    raise RuntimeError('Expected contact line not found; inspect the source PDF.')

page.add_redact_annot(contact, fill=(1, 1, 1))
page.apply_redactions()
public_contact = 'Bengaluru | nishchay.bhat@gmail.com | github.com/Nishchay1571999 | linkedin.com/in/nishchay-bhatt/'
result = page.insert_textbox(
    pymupdf.Rect(contact.x0, contact.y0, page.rect.width - 25, contact.y1 + 4),
    public_contact, fontsize=8.4, fontname='helv', color=(0.15, 0.17, 0.2),
)
if result < 0:
    raise RuntimeError('Corrected contact text does not fit.')

# Remove stale URI targets left by the original PDF, then add current links.
for link in page.get_links():
    page.delete_link(link)
for label, uri in [
    ('nishchay.bhat@gmail.com', 'mailto:nishchay.bhat@gmail.com'),
    ('github.com/Nishchay1571999', 'https://github.com/Nishchay1571999'),
    ('linkedin.com/in/nishchay-bhatt/', 'https://www.linkedin.com/in/nishchay-bhatt/'),
]:
    for rect in page.search_for(label):
        page.insert_link({'kind': pymupdf.LINK_URI, 'from': rect, 'uri': uri})
document.set_metadata({'title': 'Nishchay Bhatt - Frontend Engineer', 'author': 'Nishchay Bhatt'})
document.save(destination, garbage=4, deflate=True)
page.get_pixmap(matrix=pymupdf.Matrix(1.5, 1.5)).save('/private/tmp/portfolio-resume-review.png')
print(f'Prepared {destination}; original retained at {source}.')
