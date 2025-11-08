// SADECE BU SATIRI DEĞİŞTİRİN
type GetReturnType<T> = T extends (...args:any[]) => infer U ? U:T

// ---- KOD BLOKU (DOKUNMAYIN) ----
const fn1 = () => "hello";
const fn2 = (a: number) => a * 2;

let ret1: GetReturnType<typeof fn1> = "world";
let ret2: GetReturnType<typeof fn2> = 100;

// @ts-expect-error - Bu satırın HATA vermesi beklenir
let error1: GetReturnType<typeof fn1> = 123;

console.log("Soru 12 Başarılı!", ret1, ret2);
// BEKLENEN "EKRAN ÇIKTISI":
// (Derleyicide hata olmaması ve konsolda "Soru 12 Başarılı!" yazması)
