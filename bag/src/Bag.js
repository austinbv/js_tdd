function Bag() {
  this._items = [];
  this._size = 0;
}

Bag.prototype.isEmpty = function() {
  return this._size == 0;
};

Bag.prototype.add = function (item) {
  this._size++;
  this._items.push(item);
};

Bag.prototype.getSize = function() {
  return this._size;
};

Bag.prototype.contains = function(item) {
  for(var i = 0; i < this._size; i++) {
     if (this._items[i] == item) return true;
  }
  return false;
};