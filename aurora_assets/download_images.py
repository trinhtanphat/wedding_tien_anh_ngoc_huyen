#!/usr/bin/env python3
import csv, pathlib, urllib.request
BASE = pathlib.Path(__file__).resolve().parent.parent
CSV = BASE / 'aurora_assets' / 'aurora_image_links.csv'
OUT = BASE / 'aurora_assets' / 'images'
OUT.mkdir(parents=True, exist_ok=True)
with CSV.open(encoding='utf-8') as f:
    for row in csv.DictReader(f):
        url = row['url']
        path = BASE / row['suggested_path']
        path.parent.mkdir(parents=True, exist_ok=True)
        try:
            req = urllib.request.Request(url, headers={'User-Agent':'Mozilla/5.0'})
            with urllib.request.urlopen(req, timeout=20) as r:
                data = r.read()
            path.write_bytes(data)
            print('OK', row['index'], path)
        except Exception as e:
            print('FAILED', row['index'], url, e)
print('Done')
