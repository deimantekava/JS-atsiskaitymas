/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri gebės sukurti objektus 3 savybėm ir 1 metodu.

Savybės:
title: string
director: string
budget: number

Metodas: 
wasExpensive() - jeigu filmo "budget" yra daugiau nei 100 000 000 mln USD, tada grąžins true, kitu atveju false. 
------------------------------------------------------------------------------------------------------ */

function Movie() {
  class Movies {
    constructor(title, director, budget) {
      this.title = title;
      this.director = director;
      this.budget = budget;
    }
    wasExpensive() {
      if (this.budget > 100000000) {
        console.log('True');
      } else {
        console.log('False');
      }
    }
  }

  const newMovie = new Movies('xxx', 'xxx', 200000000);
  console.log(newMovie);
  newMovie.wasExpensive();
}

Movie();
