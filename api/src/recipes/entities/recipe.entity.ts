import { Ingredient } from '../../ingredients/entities/ingredient.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Recipe {
  @PrimaryGeneratedColumn()
  recipeId: number;

  @Column()
  label: string;

  @OneToMany(() => Ingredient, (ingredients) => ingredients.recipe, {
    cascade: true,
  })
  ingredients: Ingredient[];
}
