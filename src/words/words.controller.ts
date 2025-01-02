import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { WordsService } from './words.service';
import {EditChemicalElementsDto} from './dto/staticChemicalElements.dto'

@Controller('chemical-elements')
export class WordsController {
  constructor(private readonly wordsService: WordsService) {}

  @Post('static')
  async createWords() {
    return this.wordsService.createWords();
  }

  @Auth()
  @Get('all')
  async getAllProduct() {
    return this.wordsService.getAllWords()
  }

  @Auth()
  @Post(':id')
  async getProductById(@Param('id') id: string) {
    return this.wordsService.getWordById(id)
  }

  @Auth()
  @Put('edit-element')
  async editWord(@Body() wordData: EditChemicalElementsDto) {
    return await this.wordsService.editWord(wordData);
  }
  
  @Auth()
  @Delete('delete-element')
  async restartWord() {
    return await this.wordsService.restartWord();
  }
}
