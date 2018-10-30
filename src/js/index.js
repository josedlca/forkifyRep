import str from './models/Search';
// all usar el as, el nombre que le das es el que se usara en la pagina que estes
// trabajando
// import{add as a, multiply as m, ID} from './views/searchView';

// console.log(`Using imported functions! ${a(ID, 2)} and ${m(3,5)}. ${str}`);

// otra forma de importar
// llamas al archivo en si , pero a la hora de usar los elementos que este contiene
// debes llamarlos, como si de un objeto se tratase
import * as searchView from './views/searchView';

console.log(`Using imported functions! ${searchView.add(searchView.ID, 2)} and ${searchView.multiply(3,5)}. ${str}`);