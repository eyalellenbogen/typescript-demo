type Camelize<T extends string> = T;

type C1 = Camelize<'hello_world_one'>;
type C2 = Camelize<'hello'>;

type CamelizeProps<T = unknown> = T;

// --------------------------------------------

interface ApiUser {
  user_id: string;
  user_age: number;
  // account: { account_number: string; is_admin: boolean };
  // bills?: { order_number?: string; sum?: number }[];
}

type User = CamelizeProps<ApiUser>;

const user: User = {
  userAge: 10,
  userId: '1231413123',
  // account: { accountNumber: '123', isAdmin: true },
  // bills: [{ orderNumber: 'asdas', sum: 123 }],
};
