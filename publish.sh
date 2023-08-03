#!/bin/bash
npm run build
scp -r build/* falke:/media/vol/srv/nginx/public/pico/
curl http://www.google.com/ping?sitemap=https://www.picoscratch.de/sitemap.xml