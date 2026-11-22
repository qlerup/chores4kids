"""Save the icon editor's PNG preview to the shared icon library."""
import base64
import hashlib
from io import BytesIO
import os
from pathlib import Path
import tempfile

from PIL import Image


def save_task_icon(directory: str, encoded: str) -> str:
    if not isinstance(encoded, str) or len(encoded) > 128 * 1024:
        raise ValueError("invalid_icon_size")
    with Image.open(BytesIO(base64.b64decode(encoded, validate=True)), formats=["PNG"]) as source:
        if source.size != (128, 128):
            raise ValueError("invalid_icon_size")
        image = source.convert("RGBA")
    digest = hashlib.sha256(image.tobytes()).hexdigest()
    folder = Path(directory)
    folder.mkdir(parents=True, exist_ok=True)
    path = folder / f"{digest}.png"
    if not path.exists():
        tmp = tempfile.NamedTemporaryFile(dir=folder, delete=False)
        try:
            with tmp:
                image.save(tmp, format="PNG")
            os.replace(tmp.name, path)
        finally:
            Path(tmp.name).unlink(missing_ok=True)
    return f"/local/chores4kids/icons/{digest}.png"
