export default class ArrayNotes{
    constructor() {
        this.notes = [];
        this._enrolled = [];
    }

    addNotes(title, text, category) {
        const newNote = new Note(title, text, category);
        this.notes.push(newNote);
        this.notify();
    }

    deleteNotes(index) {
        this.notes.splice(index, 1);
        this.notify()
    }

    register(func) {
        this._enrolled.push(func);
    }

    
    notify() {
        this._enrolled.forEach((func)=> {
            func(this.notes);
        })

    }

}

class Note {
    constructor(title, text, category){
        this.title = title;
        this.text = text;
        this.category = category;
    }

}