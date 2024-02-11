/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
 */


/* SCRIVI QUI LA TUA RISPOSTA  
1.Stringa= una stringa è un insieme di caratteri ovvero di lettere che formano parole e frasi.
 2.Numero=è un numero che può essere intero come 1,2,3 oppure decimale come 1.02
 3.Boolean= è un dato che può assumere solo due valori ovvero vero e falso.
 4.Undefined= una variabile si dice undefined quando viene dichiarata ma non le viene assegnato alcun valore, quindi creiamo una variabile dandole un nome ma la lasciamo senza valore, quindi potrebbe contenere qualunque cosa.
 5.Null= una variabile è null quando non contiene niente, quindi null si usa per svuotare una variabile ed assegnarle un nuovo valore
 6.Bigint= si usa per scrivere numeri molto grandi*/

/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue.
*/

/* SCRIVI QUI LA TUA RISPOSTA 

Un oggetto in Javascript è un insieme di coppie chiave-valore, ovvero è un contenitore che contiene un insieme di caratteristiche appartenenti a qualcosa, ad esempio un insieme di caratteristiche riguardanti un oggetto che può essere car.





*/

/* ESERCIZIO 3
 Scriti il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

let p=12;
let y=20;
let z=p+y;

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x= 12;

/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let name="Giulia";

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

let sottrazione= x-4;

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/

let name1="john";
let name2="John";
console.log(name1===name2);
console.log(name1===name2.toLowerCase());
