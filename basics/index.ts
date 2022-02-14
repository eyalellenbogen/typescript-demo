const myUser = {
  name: 'Eyal',
  age: 32,
  birthDate: new Date(1989, 4, 5),
};

type UserType = typeof myUser;

// utility types

// ----------------------------------------------------------
type Unpack<T> = T;

type UP1 = Unpack<string[]>;
type UP2 = Unpack<number[]>;
type UP3 = Unpack<{ foo: 'bar' }[]>;
type UP4 = Unpack<Promise<Date>>;
type UP5 = Unpack<Promise<{ name: string }>>;
type UP6 = Unpack<() => { name: string }>;

// ----------------------------------------------------------

type Animals = 'Monkey' | 'Horse' | 'Dog';

// ----------------------------------------------------------

type Lang = 'en' | 'he' | 'de';
type Label = 'header' | 'footer' | 'side-title';
type Translations = ``;
