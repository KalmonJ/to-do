export default class Category{
    constructor () {
        this.category = [];
        this._enrolled = []
    }

    addCategory(newCategory) {
        this.category.push(newCategory);
        this.notify()
    }

    
    register(func) {
        this._enrolled.push(func);
    }

    
    notify() {
        this._enrolled.forEach((func)=> {
            func(this.category);
        })

    }
}