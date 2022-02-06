import { CreateIngredientDto } from 'src/ingredients/dto/create-ingredient.dto';

export class CreateRecipeDto {
  label: string;
  ingredients: CreateIngredientDto[];
}
