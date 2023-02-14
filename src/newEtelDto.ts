/* eslint-disable prettier/prettier */

import { IsDefined, IsNegative, IsPositive } from "class-validator";

export default class NewEtelDto {
  @IsDefined({message: 'A név megadása kötelező'})
  nev: string;

  @IsPositive({message: 'A kalória értéke nem lehet negatív'})
  kaloria: number;
}
