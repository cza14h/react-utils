function is(x: any, y: any) {
  return (
    (x === y && (x !== 0 || 1 / x === 1 / y)) || (x !== x && y !== y) // eslint-disable-line no-self-compare
  );
}

var objectIs = typeof Object.is === 'function' ? Object.is : is;

var hasOwnProperty$2 = Object.prototype.hasOwnProperty;


/** Shallow Equal with depth detection */
export function shallowEqual(objA: any, objB: any, depth: number = 0) {
  if (objectIs(objA, objB)) {
    return true;
  }

  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    // console.log('length');
    return false;
  } // Test for A's keys different from B.

  for (var i = 0; i < keysA.length; i++) {
    if (depth) {
      if (
        !hasOwnProperty$2.call(objB, keysA[i]) ||
        !shallowEqual(objA[keysA[i]], objB[keysA[i]], depth - 1)
      ) {
        return false;
      }
    } else {
      if (!hasOwnProperty$2.call(objB, keysA[i]) || !objectIs(objA[keysA[i]], objB[keysA[i]])) {
        return false;
      }
    }
  }

  return true;
}
