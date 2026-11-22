"""Build the feature menu from the same links as the visual directory."""
import posixpath
import re
from pathlib import Path

from mkdocs.structure.nav import Link, Section


def on_nav(nav, *, config, files):
    section = next(item for item in nav.items if item.title == "Feature guides")
    index = section.children[0]
    source = Path(index.file.abs_src_path).read_text(encoding="utf-8")
    groups = []
    for heading, content in re.findall(r"^## (.+)\n([\s\S]*?)(?=^## |\Z)", source, re.M):
        links = []
        for title, target in re.findall(r"^-\s+\*\*\[([^\]]+)\]\(([^)]+)\)\*\*", content, re.M):
            path, _, fragment = target.partition("#")
            src = posixpath.normpath(posixpath.join(posixpath.dirname(index.file.src_uri), path))
            dest = files.get_file_from_path(src)
            if dest is None:
                raise ValueError(f"Missing feature guide for {title}: {src}")
            links.append(Link(title, dest.url + (f"#{fragment}" if fragment else "")))
        if links:
            group = Section(heading, links)
            group.parent = section
            for link in links:
                link.parent = group
            groups.append(group)
    if not groups:
        raise ValueError("The feature directory contains no menu entries")
    section.children = [index, *groups]
    return nav
