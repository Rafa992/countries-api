export class ChemicalElementsDto {
	order:       number;
	country: string;
	capital: string;
	learned: boolean;
	unlearned: boolean;
	repetitions: number;
}

export class EditChemicalElementsDto extends ChemicalElementsDto {
	id: string
}
