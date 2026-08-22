# -*- coding: utf-8 -*-
"""
MG Eye Foundation - Business Proposal Body PDF
Glossy Teal-Gold Theme based on Logo Colors
"""
import os, sys, hashlib, re
import platform

# --- Paths ---
PDF_SKILL_DIR = '/home/z/my-project/skills/pdf'
OUTPUT_BODY = '/home/z/my-project/scripts/mg_body.pdf'
OUTPUT_COVER = '/home/z/my-project/scripts/mg_cover.pdf'
OUTPUT_FINAL = '/home/z/my-project/download/MG_Eye_Foundation_Business_Proposal.pdf'

# --- Font Setup ---
_IS_MAC = platform.system() == 'Darwin'
FONT_DIR = os.path.expanduser('~/.openclaw/workspace/fonts') if _IS_MAC else '/usr/share/fonts'

from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfbase.pdfmetrics import registerFontFamily

pdfmetrics.registerFont(TTFont('FreeSerif', f'{FONT_DIR}/truetype/freefont/FreeSerif.ttf'))
pdfmetrics.registerFont(TTFont('FreeSerif-Bold', f'{FONT_DIR}/truetype/freefont/FreeSerifBold.ttf'))
pdfmetrics.registerFont(TTFont('FreeSerif-Italic', f'{FONT_DIR}/truetype/freefont/FreeSerifItalic.ttf'))
pdfmetrics.registerFont(TTFont('FreeSerif-BoldItalic', f'{FONT_DIR}/truetype/freefont/FreeSerifBoldItalic.ttf'))
pdfmetrics.registerFont(TTFont('DejaVuSans', f'{FONT_DIR}/truetype/dejavu/DejaVuSansMono.ttf'))

registerFontFamily('FreeSerif', normal='FreeSerif', bold='FreeSerif-Bold',
                    italic='FreeSerif-Italic', boldItalic='FreeSerif-BoldItalic')
registerFontFamily('DejaVuSans', normal='DejaVuSans', bold='DejaVuSans')

# --- Teal-Gold Cascade Palette (Logo-based) ---
from reportlab.lib import colors

# XL tier: backgrounds
PAGE_BG       = colors.HexColor('#f4f9fb')
SECTION_BG    = colors.HexColor('#e8f3f7')

# L tier: surfaces
CARD_BG       = colors.HexColor('#dfeef4')
TABLE_STRIPE  = colors.HexColor('#eaf4f8')

# M tier: structural fills
HEADER_FILL   = colors.HexColor('#0a4d6b')
COVER_BLOCK   = colors.HexColor('#0c5a7a')

# S tier: edges & icons
BORDER        = colors.HexColor('#9ec5d4')
ICON          = colors.HexColor('#1a7a9a')

# XS tier: emphasis
ACCENT        = colors.HexColor('#0080c0')
ACCENT_2      = colors.HexColor('#c9a800')

# Typography
TEXT_PRIMARY  = colors.HexColor('#0a2a3a')
TEXT_MUTED    = colors.HexColor('#5a8a9a')

# Table colors
TABLE_HEADER_COLOR = HEADER_FILL
TABLE_HEADER_TEXT  = colors.white
TABLE_ROW_EVEN     = colors.white
TABLE_ROW_ODD      = TABLE_STRIPE

# Gold accent for highlights
GOLD = colors.HexColor('#c9a800')
GOLD_LIGHT = colors.HexColor('#f5e6a0')

# --- Imports ---
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, PageBreak, Table, TableStyle,
    KeepTogether, CondPageBreak, HRFlowable
)
from reportlab.platypus.tableofcontents import TableOfContents
from reportlab.lib.pagesizes import A4
from reportlab.lib.units import inch, mm
from reportlab.lib.enums import TA_LEFT, TA_CENTER, TA_JUSTIFY, TA_RIGHT
from reportlab.lib.styles import ParagraphStyle
from reportlab.pdfgen import canvas

# --- Content Sanitization ---
def content_sanitize(text):
    text = re.sub(r'[\x00-\x08\x0b\x0c\x0e-\x1f\x7f]', '', text)
    text = re.sub(r'[\u200b-\u200f\u2028-\u202f\u2060\ufeff]', '', text)
    text = text.replace('\ufffd', '')
    text = re.sub(r'[\ufe00-\ufe0f]', '', text)
    text = re.sub(r'[\ue000-\uf8ff]', '', text)
    return text

# --- Styles ---
PAGE_W, PAGE_H = A4
L_MARGIN = 0.85 * inch
R_MARGIN = 0.85 * inch
T_MARGIN = 0.75 * inch
B_MARGIN = 0.75 * inch
AVAIL_W = PAGE_W - L_MARGIN - R_MARGIN

styles = {}

styles['Heading1'] = ParagraphStyle(
    name='H1', fontName='FreeSerif-Bold', fontSize=20, leading=28,
    textColor=ACCENT, spaceBefore=18, spaceAfter=10,
    alignment=TA_LEFT
)
styles['Heading2'] = ParagraphStyle(
    name='H2', fontName='FreeSerif-Bold', fontSize=14, leading=20,
    textColor=TEXT_PRIMARY, spaceBefore=14, spaceAfter=8,
    alignment=TA_LEFT
)
styles['Heading3'] = ParagraphStyle(
    name='H3', fontName='FreeSerif-Bold', fontSize=11.5, leading=17,
    textColor=ICON, spaceBefore=10, spaceAfter=6,
    alignment=TA_LEFT
)
styles['Body'] = ParagraphStyle(
    name='Body', fontName='FreeSerif', fontSize=10.5, leading=17,
    textColor=TEXT_PRIMARY, spaceBefore=0, spaceAfter=6,
    alignment=TA_JUSTIFY
)
styles['Bullet'] = ParagraphStyle(
    name='Bullet', fontName='FreeSerif', fontSize=10.5, leading=17,
    textColor=TEXT_PRIMARY, spaceBefore=2, spaceAfter=3,
    leftIndent=24, bulletIndent=10,
    alignment=TA_LEFT
)
styles['Muted'] = ParagraphStyle(
    name='Muted', fontName='FreeSerif-Italic', fontSize=10, leading=16,
    textColor=TEXT_MUTED, spaceBefore=4, spaceAfter=4,
    alignment=TA_LEFT
)
styles['TOCTitle'] = ParagraphStyle(
    name='TOCTitle', fontName='FreeSerif-Bold', fontSize=22, leading=30,
    textColor=ACCENT, spaceBefore=0, spaceAfter=18,
    alignment=TA_LEFT
)
styles['TOCLevel0'] = ParagraphStyle(
    name='TOC0', fontName='FreeSerif', fontSize=12, leading=22,
    leftIndent=20, textColor=TEXT_PRIMARY
)
styles['TOCLevel1'] = ParagraphStyle(
    name='TOC1', fontName='FreeSerif', fontSize=11, leading=20,
    leftIndent=40, textColor=TEXT_MUTED
)

# Table cell styles
th_style = ParagraphStyle(
    name='TH', fontName='FreeSerif-Bold', fontSize=10,
    textColor=TABLE_HEADER_TEXT, alignment=TA_CENTER, leading=14
)
td_style = ParagraphStyle(
    name='TD', fontName='FreeSerif', fontSize=10,
    textColor=TEXT_PRIMARY, alignment=TA_LEFT, leading=14
)
td_center = ParagraphStyle(
    name='TDC', fontName='FreeSerif', fontSize=10,
    textColor=TEXT_PRIMARY, alignment=TA_CENTER, leading=14
)
td_right = ParagraphStyle(
    name='TDR', fontName='FreeSerif', fontSize=10,
    textColor=TEXT_PRIMARY, alignment=TA_RIGHT, leading=14
)

# --- TOC Document Template ---
class TocDocTemplate(SimpleDocTemplate):
    def afterFlowable(self, flowable):
        if hasattr(flowable, 'bookmark_name'):
            level = getattr(flowable, 'bookmark_level', 0)
            text = getattr(flowable, 'bookmark_text', '')
            key = getattr(flowable, 'bookmark_key', '')
            self.notify('TOCEntry', (level, text, self.page, key))

def add_heading(text, style, level=0):
    key = f'h_{hashlib.md5(text.encode()).hexdigest()[:8]}'
    p = Paragraph(f'<a name="{key}"/>{text}', style)
    p.bookmark_name = key
    p.bookmark_level = level
    p.bookmark_text = text
    p.bookmark_key = key
    return p

# --- Page decoration ---
def page_bg(canvas_obj, doc):
    canvas_obj.saveState()
    # Subtle top accent line
    canvas_obj.setStrokeColor(ACCENT)
    canvas_obj.setLineWidth(1.5)
    canvas_obj.line(L_MARGIN, PAGE_H - T_MARGIN + 15, PAGE_W - R_MARGIN, PAGE_H - T_MARGIN + 15)
    # Header text
    canvas_obj.setFont('FreeSerif', 7.5)
    canvas_obj.setFillColor(TEXT_MUTED)
    canvas_obj.drawString(L_MARGIN, PAGE_H - T_MARGIN + 22, 'MG Eye Foundation  |  Business Proposal')
    # Footer
    canvas_obj.setStrokeColor(BORDER)
    canvas_obj.setLineWidth(0.5)
    canvas_obj.line(L_MARGIN, B_MARGIN - 15, PAGE_W - R_MARGIN, B_MARGIN - 15)
    canvas_obj.setFont('FreeSerif', 7.5)
    canvas_obj.setFillColor(TEXT_MUTED)
    canvas_obj.drawString(L_MARGIN, B_MARGIN - 27,
        'www.mgeyefoundation.com  |  Prepared by Amit Parik: 7991146771')
    canvas_obj.drawRightString(PAGE_W - R_MARGIN, B_MARGIN - 27, f'Page {doc.page}')
    # Small gold accent at bottom-left
    canvas_obj.setFillColor(GOLD)
    canvas_obj.rect(L_MARGIN, B_MARGIN - 30, 20, 1.5, fill=1, stroke=0)
    canvas_obj.restoreState()

def first_page(canvas_obj, doc):
    pass  # TOC page - minimal

# --- Build Story ---
story = []

def bullet(text):
    return Paragraph(f'<bullet>•</bullet> {content_sanitize(text)}', styles['Bullet'])

def body(text):
    return Paragraph(content_sanitize(text), styles['Body'])

def muted(text):
    return Paragraph(content_sanitize(text), styles['Muted'])

def h1(text):
    return add_heading(f'<b>{text}</b>', styles['Heading1'], level=0)

def h2(text):
    return add_heading(f'<b>{text}</b>', styles['Heading2'], level=1)

def h3(text):
    return Paragraph(f'<b>{text}</b>', styles['Heading3'])

def make_table(data, col_widths=None):
    if col_widths is None:
        col_widths = [AVAIL_W / len(data[0])] * len(data[0])
    t = Table(data, colWidths=col_widths, hAlign='CENTER')
    style_cmds = [
        ('BACKGROUND', (0, 0), (-1, 0), TABLE_HEADER_COLOR),
        ('TEXTCOLOR', (0, 0), (-1, 0), TABLE_HEADER_TEXT),
        ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
        ('LEFTPADDING', (0, 0), (-1, -1), 8),
        ('RIGHTPADDING', (0, 0), (-1, -1), 8),
        ('TOPPADDING', (0, 0), (-1, -1), 6),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 6),
        ('GRID', (0, 0), (-1, -1), 0.5, BORDER),
    ]
    for i in range(1, len(data)):
        bg = TABLE_ROW_ODD if i % 2 == 0 else TABLE_ROW_EVEN
        style_cmds.append(('BACKGROUND', (0, i), (-1, i), bg))
    t.setStyle(TableStyle(style_cmds))
    return t

# ===================== TOC =====================
toc = TableOfContents()
toc.levelStyles = [styles['TOCLevel0'], styles['TOCLevel1']]
story.append(Paragraph('<b>Table of Contents</b>', styles['TOCTitle']))
story.append(HRFlowable(width='100%', color=ACCENT, thickness=1, spaceAfter=12))
story.append(toc)
story.append(PageBreak())

# ===================== CHAPTER 1: Project Overview =====================
story.append(h1('1. Project Overview'))
story.append(Spacer(1, 6))
story.append(body(
    'We propose to design and develop a premium, modern and highly informative 8-page static website '
    'for M G Eye Foundation using Next.js. The website will be specially designed for an eye-care/hospital '
    'brand with a clean medical interface, strong visual presentation, easy navigation and clear '
    'patient-focused information. This proposal outlines every aspect of the project, from the technology '
    'stack and page structure to the timeline, cost breakdown and long-term hosting strategy.'
))
story.append(Spacer(1, 6))
story.append(body(
    'The primary objective will be to create a website that builds trust and professional credibility, '
    'clearly presents eye-care services and facilities, highlights doctors and specialists, makes contact '
    'and appointment enquiries easy, works perfectly on mobile, tablet and desktop, loads fast and provides '
    'a modern user experience, and presents M G Eye Foundation as a professional and trustworthy '
    'eye-care centre. The website design will take inspiration from the best elements of leading '
    'eye-hospital websites while maintaining a completely original visual identity for M G Eye Foundation.'
))

# ===================== CHAPTER 2: Proposed Website =====================
story.append(h1('2. Proposed Website - 8 Pages'))
story.append(Spacer(1, 6))

story.append(h2('01. Home'))
story.append(body(
    'A premium homepage designed to immediately establish trust and communicate the hospital\'s key strengths. '
    'The homepage will feature a professional hero banner, M G Eye Foundation introduction, key eye-care '
    'services, a "Why Choose Us" section, advanced eye-care and technology highlights, a doctor/specialist '
    'preview, a patient-focused care journey, hospital and facility highlights, patient testimonials, a quick '
    'contact and appointment call-to-action, location with Google Maps integration, and phone/WhatsApp '
    'call-to-action buttons. The homepage will be visually rich but clean, avoiding unnecessary information '
    'overload while ensuring every visitor can quickly find what they need.'
))

story.append(h2('02. About M G Eye Foundation'))
story.append(body(
    'A dedicated page explaining the organisation and its vision. This page will include comprehensive '
    'information about the foundation\'s mission, its commitment to eye care, a patient-first approach, '
    'quality and compassionate care philosophy, a hospital/centre overview, key highlights, and various '
    'trust-building information. The content will be structured to give patients and their families complete '
    'confidence in the foundation\'s capabilities and dedication to restoring and preserving vision.'
))

story.append(h2('03. Eye Care Services'))
story.append(body(
    'A structured service page presenting the major treatments and eye-care services offered by the foundation. '
    'The services will be organised into clear, easy-to-navigate categories so that patients can quickly '
    'understand the full range of care available. Each service category will be presented with its own '
    'dedicated card or section, making it easy for both new and returning patients to find relevant information.'
))
story.append(Spacer(1, 6))
service_data = [
    [Paragraph('<b>Service Category</b>', th_style), Paragraph('<b>Description</b>', th_style)],
    [Paragraph('Cataract Care and Surgery', td_style), Paragraph('Advanced cataract diagnosis and surgical treatment with modern techniques', td_style)],
    [Paragraph('Glaucoma Care', td_style), Paragraph('Comprehensive glaucoma screening, monitoring and treatment', td_style)],
    [Paragraph('Retina and Vitreous Care', td_style), Paragraph('Specialised retinal diagnostics and vitreous procedures', td_style)],
    [Paragraph('Cornea Care', td_style), Paragraph('Corneal health assessment, treatment and transplant services', td_style)],
    [Paragraph('Pediatric Eye Care', td_style), Paragraph('Dedicated eye care services for children and infants', td_style)],
    [Paragraph('Comprehensive Eye Check-up', td_style), Paragraph('Thorough eye examinations and vision assessments', td_style)],
    [Paragraph('Refractive / Vision Correction', td_style), Paragraph('Glasses, contact lenses and refractive surgery options', td_style)],
    [Paragraph('Diabetic Eye Care', td_style), Paragraph('Specialised care for diabetes-related eye conditions', td_style)],
    [Paragraph('Dry Eye Management', td_style), Paragraph('Diagnosis and treatment for chronic dry eye conditions', td_style)],
    [Paragraph('General Ophthalmic Consultation', td_style), Paragraph('Routine eye consultations and specialist referrals', td_style)],
]
story.append(make_table(service_data, [AVAIL_W * 0.35, AVAIL_W * 0.65]))

story.append(h2('04. Doctors and Specialists'))
story.append(body(
    'A professional doctor and specialist showcase page designed to build patient confidence. Each doctor will '
    'be presented with a premium medical-profile style card featuring their photograph, qualifications, '
    'specialisation, experience, areas of expertise and a direct consultation call-to-action button. This page '
    'is critical for establishing the credibility and expertise that patients look for when choosing an '
    'eye-care provider, and it will be designed to convey professionalism and trust at every level.'
))

story.append(h2('05. Facilities and Technology'))
story.append(body(
    'A visually attractive page highlighting the hospital\'s infrastructure and diagnostic capabilities. The page '
    'will cover modern eye-care infrastructure, diagnostic facilities, surgical facilities, eye examination '
    'equipment, patient comfort features, a clean and safe environment, technology highlights and a facility '
    'image gallery. Actual equipment and facility details provided by M G Eye Foundation will be '
    'incorporated into the final website content to ensure accuracy and authenticity.'
))

story.append(h2('06. Patient Information / Eye Health'))
story.append(body(
    'An informative, patient-focused page presenting common eye problems, cataract awareness, glaucoma '
    'awareness, retina and diabetic eye care information, children\'s eye care guidance, guidance on when to '
    'visit an eye specialist, basic eye-care tips and frequently asked questions. The information will be '
    'presented in simple language so that normal patients can understand it easily, empowering them to make '
    'informed decisions about their eye health and encouraging preventive care.'
))

story.append(h2('07. Gallery / Patient Experience'))
story.append(body(
    'A visual presentation of M G Eye Foundation featuring the hospital gallery, doctors, facilities, equipment, '
    'events and camps, patient-care moments and community activities. The gallery will use a modern grid and '
    'lightbox style for a premium appearance, allowing visitors to browse through high-quality images that '
    'showcase the foundation\'s commitment to excellence in eye care and community service.'
))

story.append(h2('08. Contact and Appointment'))
story.append(body(
    'A strong conversion-focused contact page that makes it very easy for a patient to contact the hospital '
    'from both mobile and desktop. Features include the M G Eye Foundation address, phone numbers, email, '
    'Google Maps integration, WhatsApp and call-now call-to-action buttons, an appointment enquiry form, '
    'hospital timings, directions and a quick enquiry section. Every element is designed to reduce friction '
    'and encourage patients to reach out and book their appointments with ease.'
))

# ===================== CHAPTER 3: Design Highlights =====================
story.append(h1('3. Website Design Highlights'))
story.append(Spacer(1, 6))
story.append(body(
    'The website will be designed with a premium healthcare visual language that reflects the professionalism '
    'and trustworthiness of M G Eye Foundation. The design approach combines modern medical UI principles with '
    'the specific branding elements of the foundation to create a cohesive, premium digital presence that '
    'stands out in the healthcare sector. The supplied M G Eye Foundation logo and branding will be '
    'seamlessly incorporated into every aspect of the design.'
))
story.append(Spacer(1, 6))
highlights = [
    'Modern medical UI with clean, professional aesthetics',
    'Clean typography optimised for readability and accessibility',
    'Professional colour palette based on M G Eye Foundation branding',
    'Eye-care themed visual elements and imagery',
    'Premium hero sections with compelling imagery and messaging',
    'Smooth animations and micro-interactions for enhanced user experience',
    'Modern cards and content sections for intuitive information architecture',
    'Interactive hover effects that provide visual feedback to users',
    'Mobile-first responsive design that works on all devices',
    'Clear call-to-action buttons for appointments and contact',
    'Easy navigation with intuitive menu structure',
    'Professional footer with complete contact information',
    'WhatsApp and phone call integration for instant communication',
    'Google Maps integration for easy location finding',
    'Fast-loading pages optimised for performance and SEO',
]
for h in highlights:
    story.append(bullet(h))

# ===================== CHAPTER 4: Technology =====================
story.append(h1('4. Technology'))
story.append(Spacer(1, 6))
story.append(body(
    'The website will be built on a modern, reliable technology stack designed for performance, security and '
    'scalability. The primary framework is Next.js, which provides an excellent developer experience and '
    'produces fast, optimised static websites. The site will be developed as a static website, which makes it '
    'lightweight, secure and fast. Static websites do not require server-side processing for each request, '
    'resulting in faster load times, lower hosting costs and reduced security vulnerabilities.'
))
story.append(Spacer(1, 6))
tech_data = [
    [Paragraph('<b>Component</b>', th_style), Paragraph('<b>Technology</b>', th_style), Paragraph('<b>Details</b>', th_style)],
    [Paragraph('Framework', td_style), Paragraph('Next.js', td_style), Paragraph('React-based static site generator', td_style)],
    [Paragraph('Library', td_style), Paragraph('React', td_style), Paragraph('Component-based UI architecture', td_style)],
    [Paragraph('Styling', td_style), Paragraph('Modern CSS', td_style), Paragraph('Responsive UI with custom design system', td_style)],
    [Paragraph('Images', td_style), Paragraph('Optimised', td_style), Paragraph('Compressed and properly sized images', td_style)],
    [Paragraph('SEO', td_style), Paragraph('Built-in', td_style), Paragraph('SEO-friendly page structure and meta tags', td_style)],
    [Paragraph('Responsive', td_style), Paragraph('Mobile-first', td_style), Paragraph('Mobile, tablet and desktop layouts', td_style)],
]
story.append(make_table(tech_data, [AVAIL_W * 0.22, AVAIL_W * 0.28, AVAIL_W * 0.50]))

# ===================== CHAPTER 5: SEO =====================
story.append(h1('5. SEO and Performance Foundation'))
story.append(Spacer(1, 6))
story.append(body(
    'The website will be structured with basic technical SEO in mind to ensure that M G Eye Foundation has a '
    'strong foundation for search engine visibility from day one. While SEO is an ongoing process that '
    'requires continuous effort, the technical foundation laid during development will ensure that the website '
    'is fully prepared for future SEO campaigns and content marketing strategies. The following SEO-friendly '
    'features will be included as part of the standard development package.'
))
story.append(Spacer(1, 6))
seo_items = [
    'SEO-friendly page URLs with clean structure and relevant keywords',
    'Proper page titles for every page optimised for search engines',
    'Meta descriptions crafted to improve click-through rates',
    'Heading structure (H1, H2, H3) for content hierarchy and SEO',
    'Image optimisation with proper alt tags and compressed file sizes',
    'Mobile responsiveness as a core ranking factor',
    'Fast-loading architecture for better user experience and rankings',
    'Search-engine-friendly static pages with clean HTML output',
    'Social sharing metadata for better visibility on social platforms',
    'Basic Google Search and Analytics integration support',
]
for item in seo_items:
    story.append(bullet(item))

# ===================== CHAPTER 6: Hosting =====================
story.append(h1('6. Hosting'))
story.append(Spacer(1, 6))
story.append(body(
    'The website will be hosted on GoDaddy Economy Hosting Plan, a reliable, secure and fully managed hosting '
    'solution well suited to an 8-page static Next.js website. GoDaddy provides robust infrastructure with '
    'excellent uptime, making it an ideal choice for a healthcare website that needs to be consistently '
    'available to patients. The hosting plan includes an SSL/HTTPS security certificate, which is essential '
    'for patient trust and search engine rankings, ensuring that all data transmitted between the website '
    'and its visitors is encrypted and secure.'
))
story.append(Spacer(1, 6))
story.append(body(
    'The hosting package provides fast and reliable server performance with a 99.9% uptime guarantee, '
    'easy deployment and management capabilities, suitability for static Next.js websites, and technical '
    'support from GoDaddy. Hosting pricing and the full payment calculation are provided in the Project Cost '
    'section of this proposal. The 5-year hosting arrangement ensures long-term stability and eliminates '
    'the need for frequent renewal or migration.'
))

# ===================== CHAPTER 7: Domain =====================
story.append(h1('7. Domain Registration'))
story.append(Spacer(1, 6))
story.append(body(
    'The domain www.mgeyefoundation.com will be registered for M G Eye Foundation as per the agreed ownership '
    'and account details. The domain will be registered for a period of 5 years, ensuring long-term stability '
    'and consistent online presence for the foundation. A 5-year registration period also provides cost '
    'savings compared to annual renewals and eliminates the risk of accidental domain expiration, which '
    'could result in website downtime and loss of search engine rankings.'
))
story.append(Spacer(1, 6))
domain_data = [
    [Paragraph('<b>Detail</b>', th_style), Paragraph('<b>Information</b>', th_style)],
    [Paragraph('Domain Name', td_style), Paragraph('www.mgeyefoundation.com', td_style)],
    [Paragraph('Registration Period', td_style), Paragraph('5 Years', td_center)],
    [Paragraph('Domain Cost', td_style), Paragraph('8,900', td_right)],
]
story.append(make_table(domain_data, [AVAIL_W * 0.45, AVAIL_W * 0.55]))

# ===================== CHAPTER 8: Timeline =====================
story.append(h1('8. Project Timeline'))
story.append(Spacer(1, 6))
story.append(body(
    'The entire website development project will be completed within 7 working days from the date of '
    'requirement finalisation. This accelerated timeline is made possible by the use of Next.js with its '
    'efficient development workflow, the static nature of the website which eliminates complex backend '
    'development, and a streamlined design-to-deployment process. Each day has been carefully planned to '
    'ensure quality is not compromised while maintaining the aggressive delivery schedule.'
))
story.append(Spacer(1, 8))
timeline_data = [
    [Paragraph('<b>Day</b>', th_style), Paragraph('<b>Activity</b>', th_style)],
    [Paragraph('Day 1', td_center), Paragraph('Requirement finalisation, website structure, branding and UI direction', td_style)],
    [Paragraph('Day 2-3', td_center), Paragraph('Homepage and core inner-page design and development', td_style)],
    [Paragraph('Day 4-5', td_center), Paragraph('Remaining pages: services, doctors, facilities, gallery and contact sections', td_style)],
    [Paragraph('Day 6', td_center), Paragraph('Responsive optimisation, content integration, animations and browser testing', td_style)],
    [Paragraph('Day 7', td_center), Paragraph('Final testing, corrections, deployment and live website setup', td_style)],
]
story.append(make_table(timeline_data, [AVAIL_W * 0.15, AVAIL_W * 0.85]))

# ===================== CHAPTER 9: Project Cost =====================
story.append(h1('9. Project Cost'))
story.append(Spacer(1, 6))
story.append(body(
    'All charges including website development, domain registration and hosting are consolidated into a '
    'single transparent cost structure. There are no hidden fees or additional charges beyond what is '
    'listed in the table below. The total investment covers the complete website from design to deployment '
    'and five years of online presence through domain registration and hosting. This comprehensive '
    'pricing ensures that M G Eye Foundation can plan its budget with complete certainty.'
))
story.append(Spacer(1, 10))
cost_data = [
    [Paragraph('<b>Particular</b>', th_style), Paragraph('<b>Calculation / Details</b>', th_style), Paragraph('<b>Amount</b>', th_style)],
    [Paragraph('Website Design and Development', td_style), Paragraph('Next.js, 8 pages, responsive', td_style), Paragraph('17,500', td_right)],
    [Paragraph('Domain Registration (5 Years)', td_style), Paragraph('www.mgeyefoundation.com', td_style), Paragraph('8,900', td_right)],
    [Paragraph('Hosting - GoDaddy Economy Plan (5 Years)', td_style), Paragraph('1st Year Free + 4 Years x 3,500', td_style), Paragraph('14,000', td_right)],
    [Paragraph('<b>Total Project Cost</b>', td_style), Paragraph('', td_style), Paragraph('<b>40,400</b>', td_right)],
]
cost_table = make_table(cost_data, [AVAIL_W * 0.38, AVAIL_W * 0.37, AVAIL_W * 0.25])
# Bold the total row
cost_table.setStyle(TableStyle([
    ('BACKGROUND', (0, 0), (-1, 0), TABLE_HEADER_COLOR),
    ('TEXTCOLOR', (0, 0), (-1, 0), TABLE_HEADER_TEXT),
    ('BACKGROUND', (0, 1), (-1, 1), TABLE_ROW_EVEN),
    ('BACKGROUND', (0, 2), (-1, 2), TABLE_ROW_ODD),
    ('BACKGROUND', (0, 3), (-1, 3), TABLE_ROW_EVEN),
    ('BACKGROUND', (0, 4), (-1, 4), GOLD_LIGHT),
    ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
    ('LEFTPADDING', (0, 0), (-1, -1), 8),
    ('RIGHTPADDING', (0, 0), (-1, -1), 8),
    ('TOPPADDING', (0, 0), (-1, -1), 6),
    ('BOTTOMPADDING', (0, 0), (-1, -1), 6),
    ('GRID', (0, 0), (-1, -1), 0.5, BORDER),
    ('LINEABOVE', (0, 4), (-1, 4), 1.5, GOLD),
]))
story.append(cost_table)
story.append(Spacer(1, 10))
story.append(body(
    'The website development amount includes UI/UX design, Next.js development, all 8 website pages, '
    'responsive design, content structuring, image optimisation, basic SEO structure, testing, browser '
    'compatibility testing, mobile optimisation, deployment and final live website setup. This is a '
    'comprehensive package that covers every aspect of creating a professional, production-ready website.'
))

# ===================== CHAPTER 10: Deliverables =====================
story.append(h1('10. Deliverables'))
story.append(Spacer(1, 6))
story.append(body(
    'Upon successful completion of the project, M G Eye Foundation will receive a complete, production-ready '
    'website package. The deliverables are designed to provide everything needed for a successful online '
    'launch and long-term operation. Each deliverable has been carefully planned to ensure that the '
    'foundation receives maximum value from its investment and has a solid foundation for future growth.'
))
story.append(Spacer(1, 6))
deliverables = [
    'Complete 8-page responsive website with professional medical UI',
    'Responsive mobile, tablet and desktop design with seamless user experience',
    'Next.js static website with fast loading and modern architecture',
    'Integrated M G Eye Foundation branding throughout the website',
    'Contact and enquiry functionality with appointment request form',
    'WhatsApp and call buttons for instant patient communication',
    'Google Maps integration showing the hospital location',
    'Basic SEO setup for search engine visibility',
    'Performance optimisation for fast page loading',
    'Domain configuration for www.mgeyefoundation.com',
    'Live deployment on GoDaddy hosting with SSL certificate',
    'Final testing across all major browsers and devices',
]
for d in deliverables:
    story.append(bullet(d))

# ===================== CHAPTER 11: Important Note =====================
story.append(h1('11. Important Note'))
story.append(Spacer(1, 6))
story.append(body(
    'The website will be developed as a static informational website focused on presenting M G Eye '
    'Foundation\'s services, doctors, facilities, treatments, patient information and contact/appointment '
    'enquiry options. This approach ensures maximum performance, security and reliability for the foundation\'s '
    'online presence. However, as the foundation grows and its digital needs evolve, there are several '
    'advanced features that can be developed separately in future phases.'
))
story.append(Spacer(1, 6))
story.append(body(
    'Any future requirements such as online payment integration, patient login portals, hospital management '
    'systems, online medical records, dynamic appointment management, admin panels, database-driven content '
    'or patient portals can be developed separately as an advanced phase. These features require server-side '
    'infrastructure, database design and ongoing maintenance that go beyond the scope of this initial '
    'static website proposal. The current website is designed to be easily extensible when the foundation '
    'is ready to add these advanced capabilities.'
))

# ===================== CHAPTER 12: Final Proposal =====================
story.append(h1('12. Final Proposal Summary'))
story.append(Spacer(1, 6))
story.append(body(
    'This proposal presents a comprehensive plan for creating a professionally designed, modern and '
    'informative 8-page Next.js website for M G Eye Foundation. The project includes complete UI/UX design, '
    'responsive development, search engine optimisation foundations, 5-year domain registration and 5-year '
    'GoDaddy Economy hosting. The total investment of 40,400 covers every aspect of the project from '
    'initial design to final deployment and ongoing online presence.'
))
story.append(Spacer(1, 10))
summary_data = [
    [Paragraph('<b>Item</b>', th_style), Paragraph('<b>Details</b>', th_style)],
    [Paragraph('Technology', td_style), Paragraph('Next.js (Static Website)', td_style)],
    [Paragraph('Pages', td_style), Paragraph('8', td_center)],
    [Paragraph('Domain', td_style), Paragraph('www.mgeyefoundation.com (5 Years)', td_style)],
    [Paragraph('Hosting', td_style), Paragraph('GoDaddy Economy Plan (5 Years)', td_style)],
    [Paragraph('Total Investment', td_style), Paragraph('<b>40,400</b>', td_center)],
    [Paragraph('Delivery', td_style), Paragraph('7 Days', td_center)],
]
story.append(make_table(summary_data, [AVAIL_W * 0.35, AVAIL_W * 0.65]))
story.append(Spacer(1, 12))
story.append(muted(
    'A modern digital presence for better visibility, trust and patient communication.'
))

# ===================== CHAPTER 13: Prepared By =====================
story.append(h1('13. Prepared By'))
story.append(Spacer(1, 6))
story.append(body(
    '<b>Amit Parik</b><br/>Senior Software Developer / Designer<br/>Contact: 7991146771'
))
story.append(Spacer(1, 18))
story.append(body(
    'Beyond website design and development, a comprehensive range of technology solutions are available '
    'including modern responsive and SEO-friendly websites, custom enterprise resource planning systems, '
    'customer relationship management platforms, native and cross-platform mobile applications, and '
    'branding, management and digital promotion services. For any of these services, please feel free to '
    'reach out to discuss your specific requirements and explore how technology can help your organisation '
    'achieve its goals.'
))

# ===================== BUILD =====================
doc = TocDocTemplate(
    OUTPUT_BODY,
    pagesize=A4,
    leftMargin=L_MARGIN, rightMargin=R_MARGIN,
    topMargin=T_MARGIN, bottomMargin=B_MARGIN,
    title='MG Eye Foundation - Business Proposal',
    author='Amit Parik',
    subject='Website Design and Development Proposal'
)

doc.multiBuild(story, onFirstPage=first_page, onLaterPages=page_bg)
print(f'Body PDF generated: {OUTPUT_BODY}')
