// SADECE BU SATIRI DEĞİŞTİRİN
type DeepReadonly<T> = T extends (...args: any[]) => any ? T : T extends Array<infer U> ? ReadonlyArray<DeepReadonly<U>
>: T extends object? { readonly [K in keyof T]: DeepReadonly<T[K]> }: T;

// ---- KOD BLOKU (DOKUNMAYIN) ----
type Config = { api: { url: string; }, features: string[] };
const config: DeepReadonly<Config> = {
  api: { url: "http://..." },
  features: ["A", "B"]
};

// @ts-expect-error - Bu atamanın HATA vermesi beklenir
config.api.url = "yeni-url";

// @ts-expect-error - Bu atamanın (diziye ekleme) HATA vermesi beklenir
config.features.push("C");

console.log("Soru 14 Başarılı!", config.api.url);
// BEKLENEN "EKRAN ÇIKTISI":
// (Derleyicide hata olmaması ve konsolda "Soru 14 Başarılı!" yazması)
