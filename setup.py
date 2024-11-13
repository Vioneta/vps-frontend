from pathlib import Path

from setuptools import setup, find_packages

setup(
    name="vps-frontend",
    version="main",
    description="The VPS frontend",
    url="https://github.com/Vioneta/vps-frontend",
    author="Vioneta",
    author_email="admin@vioneta.com",
    packages=find_packages(include=["vps_frontend", "vps_frontend.*"]),
    include_package_data=True,
    zip_safe=False,
    long_description=Path("README.md").read_text(),
    long_description_content_type="text/markdown",
)