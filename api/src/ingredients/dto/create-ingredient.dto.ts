import { Unit } from 'src/units/entities/unit.entity';

export class CreateIngredientDto {
  label: string;
  amount: number;
  unit: Unit;
}
