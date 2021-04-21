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