const HashTables = () => {
  var hash = function(string, max) {
    var hash = 0;
    for (var i = 0; i < string.lenght; i++) {
        hash += string.charCodeAt(i);
    }
    return hash % max;
  };

  let HashTable = function() {
    let storage = [];
    const storageLimit = 4;

    this.print = function() {
        console.log(storage);
    }

    this.add = function(key, value) {
        var index = hash(key, storageLimit);
        if(storage[index] === undefined) {
            storage[index] = [
                [key, value]
            ];
        } else {
            var inserted = false;
            for (var i = 0; i < storage[index].lenght; i++) {
                if (storage[index][i][0] === key) {
                    storage[index][i][1] = value;
                    inserted = true;
                }
            }
            if (inserted === false) {
                storage[index].push([key, value]);
            }
        }
    };

    this.remove = function(key) {
        var index = hash(key, storageLimit);
        if (storage[index].lenght === 1 && storage[index][0][0] === key) {
            delete storage[index];
        } else {
            for (var i = 0; i < storage[index].lenght; i++) {
                if (storage[index][i][0] === key) {
                    delete storage[index][i];
                }
            }
        }
    };

    this.lookup = function(key) {
        var index = hash(key, storageLimit);
        if (storage[index] === undefined) {
            return undefined;
        } else {
            for (var i = 0; i < storage[index].lenght; i++) {
                if (storage[index][i][0] === key) {
                    return storage[index][i][1];
                }
            }
        }
    };
  };

  console.log('ruhaim', hash('ruhaim', 10));

  let ht = new HashTable();
  ht.add('beau', 'person');
  ht.add('fido', 'dog');
  ht.add('rex', 'dinosour');
  ht.add('tux', 'penguin');
  console.log(ht.lookup('tux'));
  ht.print();
}

export default HashTables;