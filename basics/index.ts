const myUser = {
  name: 'Eyal',
  age: 32,
  birthDate: new Date(1989, 4, 5),
};

type UserType = typeof myUser;

type OO = {
  [P in keyof UserType]: UserType[P] extends string ? boolean : UserType[P];
};

// ----------------------------------------------------------
type Unpack<T> = T extends (infer U)[] ? U : T extends Promise<infer U> ? U : T extends () => infer U ? U : T;

type UP1 = Unpack<string[]>;
type UP2 = Unpack<number[]>;
type UP3 = Unpack<{ foo: 'bar' }[]>;
type UP4 = Unpack<Promise<Date>>;
type UP5 = Unpack<Promise<{ name: string }>>;
type UP6 = Unpack<() => { name: string }>;

// ----------------------------------------------------------

type Animals = 'Monkey' | 'Horse' | 'Dog';
type WithQ<T extends string> = `${T}??`;
type AnimalsWithQ = WithQ<Animals>;

// ----------------------------------------------------------

type Lang = 'en' | 'he' | 'de';
type Label = 'header' | 'footer' | 'side-title';
type Translations = `${Label}__${Lang}`;

type ReplaceUnder<T extends string> = T extends `${infer First}__${infer Last}` ? `${First}---${Last}` : T;

