from PIL import Image, ImageDraw, ImageFont
import numpy as np

# Dimensões da imagem: 140x140 pixels
width, height = 140, 140

# Cria uma nova imagem com fundo preto
img = Image.new("RGB", (width, height), "#000000")
draw = ImageDraw.Draw(img)

# Gerando um gradiente vertical (azul escuro para preto)
for i in range(height):
    ratio = i / height
    r = 0
    g = 0
    b = int(80 * (1 - ratio))
    draw.line([(0, i), (width, i)], fill=(r, g, b))

# Tenta carregar uma fonte personalizada; se não conseguir, usa a fonte padrão
# Fontes com tamanho adequado para 140x140
try:
    font_title = ImageFont.truetype("arial.ttf", 12)
    font_subtitle = ImageFont.truetype("arial.ttf", 10)
except IOError:
    font_title = ImageFont.load_default()
    font_subtitle = ImageFont.load_default()

# Função para calcular o tamanho do texto usando textbbox
def get_text_size(text, font):
    bbox = draw.textbbox((0, 0), text, font=font)
    return bbox[2] - bbox[0], bbox[3] - bbox[1]

# Textos ajustados para caber na imagem pequena
title_text = "Websites com JavaScript"
subtitle_text = "Helder da Rocha"

# Calcula o tamanho dos textos
title_w, title_h = get_text_size(title_text, font_title)
subtitle_w, subtitle_h = get_text_size(subtitle_text, font_subtitle)

# Define as posições para centralizar os textos
title_x = (width - title_w) / 2
title_y = height / 2 - title_h
subtitle_x = (width - subtitle_w) / 2
subtitle_y = title_y + title_h + 2

# Adiciona sombra ao título (opcional)
shadow_color = "black"
offsets = [(1, 1), (-1, -1), (1, -1), (-1, 1)]
for offset in offsets:
    draw.text((title_x + offset[0], title_y + offset[1]), title_text, font=font_title, fill=shadow_color)

# Desenha o título em branco
draw.text((title_x, title_y), title_text, font=font_title, fill="white")

# Adiciona sombra ao subtítulo
for offset in offsets:
    draw.text((subtitle_x + offset[0], subtitle_y + offset[1]), subtitle_text, font=font_subtitle, fill=shadow_color)
# Desenha o subtítulo em branco
draw.text((subtitle_x, subtitle_y), subtitle_text, font=font_subtitle, fill="white")

# Adiciona alguns elementos gráficos simples (linhas abstratas) – quantidade reduzida para o espaço menor
for i in range(5):
    x0 = np.random.randint(0, width)
    y0 = np.random.randint(0, height)
    x1 = x0 + np.random.randint(5, 20)
    y1 = y0 + np.random.randint(5, 20)
    draw.line([(x0, y0), (x1, y1)], fill=(255, 255, 255), width=1)

# Salva a imagem e informa o usuário
img.save("capa_li.png")
print("Imagem salva como 'capa_li.png'")
img.show()
