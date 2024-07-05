---
title: Datenausgabe über USB
description: Datenausgabe über eine USB-C Verbindung mit dem PicoScratch MINT Messgerät
---

<script>
	import SupportPost from "$lib/SupportPost.svelte";
</script>

Schalten Sie zunächst das Messgerät über den An/Aus-Schalter hinten ein.

Wählen Sie auf Display angezeigtem Menü die Option "USB-Ausgang" aus. Nutzen Sie dafür die Hoch/Runter und OK Tasten.

<br />

*Bild folgt*

<br />

Verbinden Sie nun das Messgerät mit einem Computer über ein USB-C Kabel. Beachten Sie, dass Ihr USB-C Kabel auch Datenübertragung unterstützt.

Öffnen Sie danach in Ihrem Browser die Seite [https://mint.picoscratch.de](https://mint.picoscratch.de), wählen Sie dort "über USB verbinden" und folgen Sie den Anweisungen.

Es werden nun alle am Messgerät angeschlossenen Sensoren und deren Werte angezeigt.

## Probleme mit der USB-Verbindung

Bei der Verbindung über USB kann es zu Problemen kommen. Hier sind einige häufige Probleme und Lösungen:

<div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 15px;">
	<SupportPost title="Messgerät wird über USB nicht erkannt" description="" link="../errors/usb-not-detecting" />
	<SupportPost title="Browser unterstützt die WebSerial-API nicht" description="" link="../errors/webserial-unsupported" />
</div>
