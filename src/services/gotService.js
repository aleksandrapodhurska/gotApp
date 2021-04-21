export default class GotService {
    constructor() {
        this._apiBase = 'https://www.anapioficeandfire.com/api';
    }

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);
    
        if (!res.ok) {
          throw new Error(`Could not fetch ${url}` +
            `, received ${res.status}`);
        }
        return await res.json();
    }
    async getAllBooks() {
        const res = await this.getResource(`/books`);
        return res.map(this._transformBook);
    }
    async getBook(id) {
        const book = await this.getResource(`/books/${id}`);
        return this._transformBook(book);
    }
    async getAllCharacters() {
        const res = await this.getResource(`/characters?page=5&pageSize=10`);
        return res.map(this._transformCharacter);
    }
    async getCharacter(id) {
        const character = await this.getResource(`/characters/${id}`);
        const keys = Object.keys(character);
        keys.forEach(key => {
            if (character[key] === '') {
                character[key] = 'Missing data';
            }
        })
        return this._transformCharacter(character);
    }
    async getAllHouses() {
        const res = await this.getResource(`/houses`);
        return res.map(this._transformHouse);
    }
    async getHouse (id) {
        const house = await this.getResource(`/houses/${id}`);
        return this._transformHouse(house);
    }
    _transformBook(book) {
        return{
            name: book.name,
            numberOfPages: book.numberOfPages,
            publisher: book.publisher,
            released: book.released
        }
    }
    _transformCharacter(char) {
        return{
            name: char.name,
            gender: char.gender,
            born: char.born,
            died: char.died,
            culture: char.culture
        }
    }
    _transformHouse(house) {
        return{
            name: house.name,
            region: house.region,
            words: house.words,
            titles: house.titles,
            overload: house.overload,
            ancestralWeapons: house.ancestralWeapons
        }
    }
}

// const gotNew = new GotService();

// gotNew.getHouse(3)
// .then(res => console.log(res));