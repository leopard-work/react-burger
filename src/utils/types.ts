export type ItemProps = {
  _id: string;
  name: string;
  type: string;
  proteins: number;
  fat: number;
  carbohydrates: number;
  calories: number;
  price: number;
  image: string;
  image_mobile: string;
  image_large: string;
  __v?: any;
  count?: any;
};

export type AuthRouteProps = {
  path: string;
  children: JSX.Element;
  page?: string;
  exact?: boolean;
};

export type IngredientsProps = Array<string>;

export type RegisterUserProps = {
  email: string;
  password: string;
  name: string;
};

export type LoginUserProps = {
  email: string;
  password: string;
};

export type TokenUserProps = {
  token: string;
};

export type UpdateUserProps = {
  email?: string;
  password?: string;
  name?: string;
};

export type ForgotUserProps = {
  email: string;
};

export type ResetUserProps = {
  password: string;
  token: string;
};
