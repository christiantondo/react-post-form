# Obiettivo
Creare un'app React con un form per gestire l'inserimento di un nuovo post all'interno di un ipotetico blog.

Il form dovrà gestire questi dati:
- author (string) - L’autore del post
- title (string) - Il titolo del post
- body (string) - Il testo del post
- public (boolean) - Se il post deve essere pubblico (true) o una bozza (false)

## PASSAGGI CONSIGLIATI:
- Creiamo una nuova app react dichiariamo una serie di state per salvare i dati mostriamo i {dati} in pagina
- Creiamo una serie di input per gestire i dati colleghiamo le input ai dati col binding bidirezionale
- Verifichiamo che i dati vengano aggiornati (anche con l'aiuto di react dev tools)

## BONUS:
Per gestire il campo "public" proviamo a usare una checkbox, invece di un input in cui scrivere "true" o "false".
Possiamo distinguere il campo public verificando il suo .name (o il suo .type) con un if.
A cose fatte possiamo provare a usare un solo state (un oggetto) che contenga tutti i dati.