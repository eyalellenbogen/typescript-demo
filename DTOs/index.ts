type CannotCreate<T = unknown> = T & { __dummy1: boolean };
type CannotUpdate<T = unknown> = T & { __dummy2: boolean };
type CannotCreateOrUpdate<T = unknown> = CannotUpdate<T> & CannotCreate<T>;

interface UserDto {
  id: CannotCreateOrUpdate<number>;
  name: CannotUpdate<string>;
  title: string;
  age?: number;
}

type OmitOfType<T extends {}, O> = {
  [P in keyof T as T[P] extends O ? never : P]: T[P];
};

type Strip<T extends {}> = {
  [P in keyof T]: T[P] extends CannotCreateOrUpdate<infer U>
    ? U
    : T[P] extends CannotCreate<infer U>
    ? U
    : T[P] extends CannotUpdate<infer U>
    ? U
    : T[P];
};

export type Dto<T> = Strip<T>;
export type CreateDto<T> = Strip<OmitOfType<T, CannotCreate>>;
export type UpdateDto<T> = Strip<OmitOfType<T, CannotUpdate>>;

export type Contact = Dto<UserDto>;
export type ContactCreate = CreateDto<UserDto>;
export type ContactUpdate = UpdateDto<UserDto>;
