function mergeArrays<T, U>(arr1: T[], arr2: U[]): (T | U)[] {
  return [...arr1,...arr2]
  // arr1 ve arr2'yi birleştirip döndürün
}

const numArr = [1, 2, 3];
const strArr = ["a", "b", "c"];

console.log(mergeArrays(numArr, strArr));

// BEKLENEN EKRAN ÇIKTISI:
// [ 1, 2, 3, 'a', 'b', 'c' ]
