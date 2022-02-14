export type CannotCreate<T = unknown> = T;
export type CannotUpdate<T = unknown> = T;
export type CannotCreateOrUpdate<T = unknown> = CannotUpdate<T> & CannotCreate<T>;

export type Dto<T> = T;
export type CreateDto<T> = T;
export type UpdateDto<T> = T;

interface UserDto {
  id: number;
  name: string;
  title: string;
  age?: number;
}

export type Contact = Dto<UserDto>;
export type ContactCreate = CreateDto<UserDto>;
export type ContactUpdate = UpdateDto<UserDto>;
