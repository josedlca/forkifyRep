// import str from './models/Search';
// all usar el as, el nombre que le das es el que se usara en la pagina que estes
// trabajando
// import{add as a, multiply as m, ID} from './views/searchView';

// console.log(`Using imported functions! ${a(ID, 2)} and ${m(3,5)}. ${str}`);

// otra forma de importar
// llamas al archivo en si , pero a la hora de usar los elementos que este contiene
// debes llamarlos, como si de un objeto se tratase
// import * as searchView from './views/searchView';

// console.log(`Using imported functions! ${searchView.add(searchView.ID, 2)} and ${searchView.multiply(3,5)}. ${str}`);

// callFix http://cors-anywhere.herokuapp.com/
// key a99a003d48f1747bda0c426443dc5a40 
// url https://www.food2fork.com/api/search
import Search from './models/Search';

const state = {};

const controlSearch =async () =>{
    const query = 'pizza' //todo

    if(query){
        // 2)new search object and add to state
        state.search = new Search(query);

        // 3 prepare

        // 4 search recipes
        await state.search.getResults();

        // 5 render results on ui
        console.log(state.search.result)
    }
}

document.querySelector('.search').addEventListener('submit',e=>{
    e.preventDefault();
    controlSearch();
});