**Memory Game**

L'applicazione consiste nel riprodurre un gioco molto popolare, in cui il giocatore deve trovare le coppie delle immagini ricordandosi della loro esatta posizione e senza fare troppi errori. E' molto usato per tenere allenata la memoria.

**Regole del gioco:**

- le card di gioco sono mescolate in maniera casuale a ogni caricamento di pagina (ogni gioco in pratica è sempre diverso)
- a inizio gioco tutte le carte sono coperte
- clicca su una carta per scoprirla
- ogni volta che una coppia di carte viene scoperta, controlla se sono uguali:
    - se lo sono, le carte restano scoperte
    - se non lo so, le carte tornano a nascondersi
- c’è un counter per contare gli errori commessi
- il gioco finisce quando tutte le carte sono state scoperte

Questo piccolo progetto è stato realizzato attraverso HTML, CSS, JavaScript puro, seguendo queste fasi:

1) **creazione del layout statico**. E' stato realizzato il template grafico in modo statico per osservare e testare le proporzioni e gli stili, comprese le caselle di gioco con le immagini da mostrare al click del giocatore, che sono state nascoste temporaneamente
2) **inserimento dinamico delle immagini**. Una volta testate le proporzioni e gli stili grafici, è stato creato un array con le cards includendo già in ordine casuale le coppie delle stesse immagini; le cards si rimescolano all'avvio di ogni sessione
3) **mostrare le immagini al click**. Le card sono state abilitate a mostrare le immagini nascoste al click del giocatore e a nascondere le immagini del retro, aggiungendo delle classi che mostrassero e nascondessero alternativamente gli elementi selezionati
4) **confrontare le immagini cliccate**. Una volta cliccate, le due immagini vengono confrontate: se corrispondono, restano scoperte, altrimenti si nascondono di nuovo dopo essersi mostrate brevemente
5) **conteggio degli errori**. Se il giocatore clicca su due carte che non corrispondono, il sistema segna un errore
6) **fine del gioco**. il gioco finisce quando tutte le carte sono state scoperte oppure se sono stati individuati più di 5 errori; un messaggio comunicherà al giocatore se ha vinto o ha perso

La realizzazione di questo piccolo gioco è finalizzato a consolidare le competenze già acquisite in merito ad HTML, CSS, e JavaScript e a sperimentare nuove logiche o ragionamenti