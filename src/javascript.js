// JAVASCRIPT
// Y U NO DO THIS

Array.prototype.remove = function(object) {
    var index = this.indexOf(object);
    if (index >= 0) {
        return this.splice(index, 1);
    }
    else {
        return this;
    }
};
