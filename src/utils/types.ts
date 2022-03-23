export type TIngredients = {
  type: string;
  _id: string;
  index: number;
  price: number;
  name: string;
  image_mobile: string;
  image: string;
  count: number;
  isAdded: boolean;
  image_large: string;
  calories: string;
  carbohydrates: string;
  proteins: string;
  fat: string;
};
export type TConstructorIngredients = {
  constructorIngredients: Array<TIngredients>;
  constructorIngredient: TIngredients;
};

export type TMainIngredients = {
  ingredientsRequest: boolean;
  ingredientsFailed: boolean;
  ingredients: Array<TIngredients>;
  dragStart: boolean;
  dragEnd: boolean;
};

export type TResetPassword = {
  answer: {
    message: string;
    success: boolean;
  };
  pathName: string;
};

export type TUser = {
  user: {
    success: boolean;
    user: {
      email: string;
      name: string;
    };
    accessToken: string | undefined;
    refreshToken: string;
  };
  isAuth: boolean;
};
