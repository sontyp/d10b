## Boole'sche Algebra der logischen Operatoren
| x | y |  !x  | x && y | x \|\| y |   !x&&y     |
|---|---|--------|----------|-------------|----------|
| true  | true  | false |  true     |     true     | false |
| true  | false  | false |   false    |    true      | false |
| false  | true  | true |  false    |    true      | true |
|  false | false  | true |  false    |     false     | false |


## Arrays
Ein Array ist ein Datentyp zum Speichern von mehreren Werten in einer einzigen Variable, i.d.R. des gleichen Typs.
```js
const person = ['peter pan', true, 12]; // <--- lieber nicht
const names = ['peter pan', 'mary poppins', 'donald duck', 'cpt. hook'];
const userIds = [12, 99, 1, 56];
```
Arrays mit einer beliebigen Anzahl primitiver Werte als Liste werden auch als "_eindimensionale_" Arrays bezeichnet.

### Mehrdimensionale Arrays (Verschachtelte Arrays)
Sind Arrays, die als Elemente (Items) weitere Arrays speichern.
Beispielhafte Anwendungsfaelle:
- Tabellen (Liste von Datensaetzen)

