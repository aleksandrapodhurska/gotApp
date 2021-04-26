export default class GotService {
    constructor() {
        this._apiBase = 'https://www.anapioficeandfire.com/api'
    }
    async getResourse(url) {
        const res = await fetch(`${this._apiBase}${url}`);

        if(!res.ok)
            throw new Error(`Could not fetch ${url}, status ${res.status}`)

        return await res.json();
    }
    async getAllCharacters() {
        const res = await this.getResourse(`/characters?page=5&pageSize=10`);
        return res.map(this._transformCharacter);
    }
    async getCharcter(id) {
        const character = await this.getResourse(`/characters/${id}`);
        const keys = Object.keys(character);
        keys.forEach(key=> {
            if(character[key] === '') {
                character[key]= 'Missing data';
            }
        })
        return this._transformCharacter(character);
    }
    async getHouses() {
        const res = await this.getResourse(`/houses`);
        return res.map(this._transformHouse);
    }
    async getHouse(id) {
        const house = await this.getResourse(`/houses/${id}`);
        return this._transformHouse(house);
    }
    async getBooks() {
        const res = await this.getResourse(`/books`);
        return res.map(this._transformBook);
    }
    async getBook(id) {
        const book = await this.getResourse(`/books/${id}`); 
        return this._transformBook(book);
    }
    _transformCharacter(char) {
        return {
            name: char.name,
            gender: char.gender,
            born: char.born,
            died: char.died,
            culture: char.culture
        }
    }
    _transformHouse(house) {
        return {
            name: house.name,
            region: house.region,
            words: house.words,
            titles: house.titles,
            overload: house.overload,
            ancestralWeapons: house.ancestralWeapons
        }
    }
    _transformBook(book) {
        return{
            name: book.name,
            numberOfPages: book.numberOfPages,
            publisher: book.publisher,
            release: book.release
        }

    }
}


// export default class GotService {
//     constructor() {
//         this._apiBase = 'https://www.anapioficeandfire.com/api';
//     }

//     getResource = async (url) => {
//         const res = await fetch(`${this._apiBase}${url}`);
    
//         if (!res.ok) {
//           throw new Error(`Could not fetch ${url}` +
//             `, received ${res.status}`);
//         }
//         return await res.json();
//     }
//     async getAllBooks() {
//         const res = await this.getResource(`/books`);
//         return res.map(this._transformBook);
//     }
//     async getBook(id) {
//         const book = await this.getResource(`/books/${id}`);
//         return this._transformBook(book);
//     }
//     async getAllCharacters() {
//         const res = await this.getResource(`/characters?page=5&pageSize=10`);
//         return res.map(this._transformCharacter);
//     }
//     async getCharacter(id) {
//         const character = await this.getResource(`/characters/${id}`);
//         // const keys = Object.keys(character);
//         // keys.forEach(key => {
//         //     if (character[key] === '') {
//         //         character[key] = 'Missing data';
//         //     }
//         // })
//         return this._transformCharacter(character);
//     }
//     async getAllHouses() {
//         const res = await this.getResource(`/houses`);
//         return res.map(this._transformHouse);
//     }
//     async getHouse (id) {
//         const house = await this.getResource(`/houses/${id}`);
//         return this._transformHouse(house);
//     }
//     _transformBook(book) {
//         return{
//             name: book.name ? book.name : 'unknown',
//             numberOfPages: book.numberOfPages ? book.numberOfPages : 'unknown',
//             publisher: book.publisher ? book.publisher : 'unknown',
//             released: book.released ? book.released : 'unknown'
//         }
//     }
//     _transformCharacter(char) {
//         return{
//             name: char.name ? char.name : 'unknown',
//             gender: char.gender ? char.gender : 'unknown',
//             born: char.born ? char.born : 'unknown',
//             died: char.died ? char.died : 'unknown',
//             culture: char.culture ? char.culture : 'unknown'
//         }
//     }
//     _transformHouse(house) {
//         return{
//             name: house.name ? house.name : 'unknown',
//             region: house.region ? house.region : 'unknown',
//             words: house.words ? house.words : 'unknown',
//             titles: house.titles ? house.titles : 'unknown',
//             overload: house.overload ? house.overload : 'unknown',
//             ancestralWeapons: house.ancestralWeapons? house.ancestralWeapons : 'unknown'
//         }
//     }
// }

// const gotNew = new GotService();

// gotNew.getHouse(3)
// .then(res => console.log(res));