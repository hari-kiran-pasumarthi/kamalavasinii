"""
Generate 2 premium watercolor illustrations for the Kamalavasinii hero
section using Google's Imagen 4 (via Emergent Universal Key + LiteLLM).

Saves PNGs to /app/public/images/hero/
"""
import base64
import os
import sys
import traceback
from pathlib import Path

from dotenv import load_dotenv

load_dotenv("/app/.env")

API_KEY = os.environ.get("EMERGENT_LLM_KEY")
assert API_KEY, "EMERGENT_LLM_KEY missing"

from emergentintegrations.llm.utils import get_integration_proxy_url
import litellm

PROXY_BASE = get_integration_proxy_url() + "/llm"
OUT_DIR = Path("/app/public/images/hero")
OUT_DIR.mkdir(parents=True, exist_ok=True)

WOMAN_PROMPT = (
    "A luxurious hand-painted watercolor illustration of an elegant South Indian woman in a "
    "graceful three-quarter portrait pose, with a serene dignified expression and softly "
    "closed eyes. Refined delicate facial features, warm ivory-golden skin, subtle blush on "
    "cheeks, long dark lashes, small red bindi on forehead, delicate nose ring. "
    "She wears a rich pink Kanchipuram silk saree with intricate gold zari borders and "
    "brocade motifs draped over a matching pink silk blouse. Traditional South Indian temple "
    "jewellery: layered gold haaram necklace set with maroon rubies and green emeralds, an "
    "ornate choker, ornate jhumka earrings with pearl danglers, gold maang tikka with drop, "
    "and stacks of fine gold bangles on both wrists. Her hair is styled in a traditional bun "
    "adorned with a full cascading strand of white jasmine (mogra veni) flowers. She gently "
    "holds a single blooming pink lotus flower near her face. Soft luxury watercolor style, "
    "painterly brush strokes, delicate soft edges, warm ivory and pastel pink watercolor "
    "wash background with faint gold sparkles and delicate botanical leaves, arch-shaped "
    "soft blush backdrop behind her. Elegant, refined, premium Indian bridal aesthetic. "
    "Isolated subject on a plain warm off-white background suitable for background removal. "
    "NO TEXT, NO WATERMARK, NO BORDERS, NO LOGOS. "
    "Vertical portrait composition, ultra high detail, cinematic soft lighting."
)

SAREES_PROMPT = (
    "A luxurious hand-painted watercolor illustration of a neatly folded stack of five to six "
    "Kanchipuram silk sarees, viewed from a slight three-quarter angle. Rich silk textures "
    "with visible woven sheen and luxurious folds. Each saree in a distinct color: coral pink "
    "on top, then emerald green, then mustard yellow, then royal purple, then deep maroon at "
    "the bottom. Each saree has an ornate gold zari border with traditional South Indian "
    "temple motifs, paisley and peacock feather patterns. In front, a heavy traditional gold "
    "temple necklace with a large maroon ruby pendant and green emerald accents is draped "
    "elegantly across the stack. Beside the sarees, two ornate gold jhumka earrings with "
    "pearl danglers, a gold ring with a large ruby, gold bangles with fine engraving, and "
    "three loose faceted gemstones: an emerald, a ruby and a sapphire. Small blooming pink "
    "lotus flowers and green leaves are scattered around the composition, with a few tiny "
    "birds and delicate botanical vines in the upper corner. Soft warm ivory watercolor "
    "background wash, gold sparkles, luxury painterly brush strokes, delicate soft edges. "
    "Elegant premium Indian heritage aesthetic. "
    "Isolated subject on a plain warm off-white background suitable for background removal. "
    "NO TEXT, NO WATERMARK, NO BORDERS, NO LOGOS. "
    "Ultra high detail, cinematic soft lighting."
)


def generate(prompt: str, out_path: Path, model_candidates):
    last_err = None
    for model in model_candidates:
        try:
            print(f"\n>>> {out_path.name}: trying {model}")
            resp = litellm.image_generation(
                model=model,
                prompt=prompt,
                n=1,
                api_key=API_KEY,
                api_base=PROXY_BASE,
                size="1024x1024",
            )
            data = resp.data[0]
            b64 = getattr(data, "b64_json", None)
            url = getattr(data, "url", None)
            if b64:
                raw = base64.b64decode(b64)
            elif url:
                import requests
                raw = requests.get(url).content
            else:
                raise RuntimeError(f"no bytes in response: {data}")
            out_path.write_bytes(raw)
            print(f"    wrote {out_path} ({len(raw)} bytes) via {model}")
            return
        except Exception as e:
            print("    failed:", str(e)[:220])
            last_err = e
    raise last_err


MODELS = [
    "vertex_ai/imagen-4.0",
    "vertex_ai/imagen-4.0-ultra",
    "vertex_ai/imagen-4.0-fast",
    "vertex_ai/imagen-3.0",
    "gpt-image-1",  # last resort
]


def main():
    generate(WOMAN_PROMPT, OUT_DIR / "hero-woman.png", MODELS)
    generate(SAREES_PROMPT, OUT_DIR / "hero-sarees.png", MODELS)


if __name__ == "__main__":
    try:
        main()
    except Exception as e:
        traceback.print_exc()
        sys.exit(1)
