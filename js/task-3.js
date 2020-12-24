
class Storage {

   constructor(items) {
      this.items = items;
  }

  getItems = function() {
      return this.items;
  }

  addItem = function(item){
    this.items.push(item);
  }

  removeItem = function(item){
    for (let i = 0; i < this.items.length; i = item) {
     delete this.items[i];
    }
  }
}

const storage = new Storage([
  'Нанитоиды',
  'Пролонгер',
  'Железные жупи',
  'Антигравитатор',
]);

const items = storage.getItems();
console.table(items); 
storage.addItem('Дроид');
console.table(storage.items); 
storage.removeItem('Пролонгер');
console.table(storage.items); 