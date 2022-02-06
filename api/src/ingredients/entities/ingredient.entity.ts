import { Recipe } from '../../recipes/entities/recipe.entity';
import { Unit } from '../../units/entities/unit.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Ingredient {
  @PrimaryGeneratedColumn()
  ingredientId: number;

  @Column()
  label: string;

  @Column()
  amount: number;

  @ManyToOne(() => Unit)
  unit: Unit;

  @ManyToOne(() => Recipe, (recipe) => recipe.ingredients)
  recipe: Recipe;
}
