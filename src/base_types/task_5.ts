// Як ви визначите змінну в TypeScript, яка може приймати рядок або число (union type)?
let unionType: string | number;
unionType = "Hello";
unionType = 42;

//  так само визначте змінну, яка може приймати тільки одне з двох рядкових значень: 'enable' або 'disable' (literal type)?
let literalType: 'enable' | 'disable';
literalType = 'enable';
literalType = 'disable';