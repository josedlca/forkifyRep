// export default 'I am an exported string.';
import axios from 'axios';
export default class Search{
    constructor(query){
        this.query = query;
    }

    async getResults(){
        const proxy = 'http://cors-anywhere.herokuapp.com/';
        const key = 'a99a003d48f1747bda0c426443dc5a40';
        try{
            const res = await axios(`${proxy}https://www.food2fork.com/api/search?key=${key}&q=${this.query}`);
            this.result = res.data.recipes;
            // console.log(this.result);
        } catch(error){
            alert(error)
        }
    }
}