const repeat = 1000000;

let myArray = [1, 2, 3];

function fn1(array) {
  let [a, b, c] = array;
}


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function fn2(array) {
  var _array = _slicedToArray(array, 3),
      a = _array[0],
      b = _array[1],
      c = _array[2];
}

console.time("Function 1 with ES6 features");
for (let i = 0; i < repeat; i++) {
  fn1(myArray);
}
console.timeEnd("Function 1 with ES6 features");

console.time("Function 2 with ES5 features");
for (let i = 0; i < repeat; i++) {
  fn2(myArray);
}
console.timeEnd("Function 2 with ES5 features");