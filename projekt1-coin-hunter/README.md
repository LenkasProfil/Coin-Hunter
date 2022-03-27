# README #

Czechitas Javascript 1 - Projekt zadaný na Lekci 3. Hra, ve které musíš posbírat všechny mince.

Cíl implementace
---

Vytvoř hru, ve které bude možné pohybovat panáčkem pomocí šipek.

Na obrazovce se bude na náhodném místě objevovat mince a pokaždé, když k ní s panáčkem přijdeš, tak se mince přesune na jiné místo a ty získáš jeden bod.

*Bonus: Poté, co dosáhneš pěti bodů, vyhráváš! :)*

Technický popis
---

- Máme panáčka a nastavené absolutní pozicování (už připraveno v CSS) a umíme ho posouvat pomocí **top/left**.
- Vytvoříme proměnné pro startovní souřadnice panáčka a umístíme ho na ně.
- Přidáme na <body> událost **onkeydown** a budeme testovat kurzorové šipky.
- Pro jednotlivé šipky měníme souřadnice a vždy znovu umístíme panáčka.
- Panáček leze z obrazovky - omezíme jeho pohyb na 0 - **window.innerWidth/innerHeight**.

- Přidáme minci (je v HTML v komentáři).
- Na startu hry umístíme minci na náhodnou pozici.
- Při každém pohybu testujeme, zda se panáček neprotíná s mincí - v JS připravená podmínka pro průnik dvou obdélníků.
- Pokud panáček sebere minci, posuneme minci na jinou náhodnou pozici.

Možná vylepšení, pro ultimátní zážitek ze hry!
---

- V průběhu hry bude hrát zvukový podkres.
- Při sebrání mince přehrajeme zvuk.
- Přidáme score a při sebrání mince přičítáme.
- Při score > 5 přehrajeme fanfáru a zobrazíme vítěznou hlášku.
- Při posunu panáčka ho natočíme do správného směru.