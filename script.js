/* Scrivi un programma che stampi i numeri da 1 a 100 ma per i multipli di 3 stampi “Fizz” al posto del numero
 e per i multipli di 5 stampi Buzz Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”*/

 for (i= 1; i <= 100; i++){
   //Stampo fizz buzz con && unendo due condizioni (3 e 5 )
    if( i % 3 === 0 && i % 5 === 0){
      console.log("FizzBuzz");
      //Stampo la condizione con 5
    } else if (i % 5 === 0){
      console.log("Buzz");
      //Stampo la condizione con 3
    } else if (i % 3 === 0 ){
      console.log("Fizz");
      //Stampo unendo tutte le condizioni
    } else{
      console.log(i);
    }
  }