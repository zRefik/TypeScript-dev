function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key]
  // obj[key] değerini döndürün
}

const user = { name: "Ali", age: 30 };

console.log(getProperty(user, "name"));
console.log(getProperty(user, "age"));

// BEKLENEN EKRAN ÇIKTISI:
// Ali
// 30
