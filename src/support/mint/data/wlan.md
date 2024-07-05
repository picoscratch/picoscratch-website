---
title: Datenausgabe über WLAN
description: Datenausgabe über eine WLAN Verbindung mit dem PicoScratch MINT Messgerät
---

<script>
	import SupportPost from "$lib/SupportPost.svelte";
</script>

Schalten Sie zunächst das Messgerät über den An/Aus-Schalter hinten ein.

Wählen Sie auf Display angezeigtem Menü die Option "Netzwerkausgang" aus. Nutzen Sie dafür die Hoch/Runter und OK Tasten.

<br />

*Bild folgt*

<br />

Das Messgerät versucht nun eine WLAN-Verbindung aufzubauen. Warten Sie, bis das Display eine URL und die Seriennummer des Messgeräts anzeigt.

Falls das Display "No AP found" anzeigt, müssen Sie vorerst über eine USB-Verbindung die WLAN-Einstellungen konfigurieren.

Öffnen Sie danach in Ihrem Browser die Seite [https://mint.picoscratch.de](https://mint.picoscratch.de), wählen Sie dort "über WLAN verbinden".
Drücken Sie auf "Neu" und geben Sie die Seriennummer des Messgeräts und einen Namen Ihrer Wahl ein.
Drücken Sie nun auf "Verbinden".

Es werden nun alle am Messgerät angeschlossenen Sensoren und deren Werte angezeigt.
