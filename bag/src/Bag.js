function Bag() {
  this._items = [];
}

Bag.prototype.isEmpty = function() {
  return this._items.length == 0;
};

Bag.prototype.add = function(item) {
  if (this.contains(item)) {
    return;
  }

  this._items.push(item);
};

Bag.prototype.remove = function(item) {
  this._items.splice(this._items.indexOf(item), 1);
};

Bag.prototype.getSize = function() {
  return this._items.length;
};

Bag.prototype.contains = function(item) {
  return this._items.indexOf(item) != -1;
};