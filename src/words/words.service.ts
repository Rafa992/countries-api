import { Injectable } from '@nestjs/common'
import { chemicalElementsStatic } from 'src/data/countries'
import { PrismaService } from 'src/prisma.service'
import {
	EditChemicalElementsDto,
	ChemicalElementsDto
} from './dto/staticChemicalElements.dto'

@Injectable()
export class WordsService {
	constructor(private readonly prisma: PrismaService) {}

	async createWords() {
		try {
			function shuffle(arr: ChemicalElementsDto[]) {
				// функция перемешивания
				for (let i = arr.length - 1; i > 0; i--) {
					const j = Math.floor(Math.random() * (i + 1))
					;[arr[i], arr[j]] = [arr[j], arr[i]]
				}
				return arr
			}

			const shuffledArray = shuffle(chemicalElementsStatic)

			const createdElements = await this.prisma.elements.createMany({
				data: shuffledArray
			})
			return createdElements
		} catch (error) {
			throw new Error('Error while creating static elements: ' + error.message)
		}
	}

	async getAllWords() {
		try {
			const allWords = await this.prisma.elements.findMany()
			return allWords
		} catch (error) {
			throw new Error('Error fetching all elements: ' + error.message)
		}
	}

	async getWordById(id: string) {
		try {
			return await this.prisma.elements.findUnique({
				where: { id }
			})
		} catch (error) {
			throw new Error('Error fetching element by id: ' + error.message)
		}
	}

	async editWord(elementsData: EditChemicalElementsDto) {
		try {
			return await this.prisma.elements.update({
				where: { id: elementsData.id },
				data: {
					order: elementsData.order,
					country: elementsData.country,
					capital: elementsData.capital,
					learned: elementsData.learned,
					unlearned: elementsData.unlearned,
					repetitions: elementsData.repetitions
				}
			})
		} catch (error) {
			throw new Error('error while editing element: ' + error.message)
		}
	}

	async restartWord(){
		try {
			await this.prisma.elements.deleteMany();
			const newElements = await this.createWords();
			return newElements
		} catch (error) {
			throw new Error('error while delete elements: ' + error.message)
		}
	}
}
