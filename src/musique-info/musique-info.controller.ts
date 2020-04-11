import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { MusiqueInfoService } from './musique-info.service';
import { CreateMusiqueInfo2Dto} from '../dto/create-musique-info2.dto';



@Controller('musiqueInfo')
export class MusiqueInfoController {

    constructor(private musiqueInfoService: MusiqueInfoService) {}

    @Post()
    postMusiqueInfo(@Body() musiqueInfo: CreateMusiqueInfo2Dto): any{
        
        return this.musiqueInfoService.create2(musiqueInfo);
    }

    @Get(':id')
    getMusiqueInfo(@Param('id') id: string): any{
        return this.musiqueInfoService.findById(id);
    }

    @Get()
    getAllMusiqueInfo(): any{
        return this.musiqueInfoService.findAll();
    }

    @Delete(':id')
    deleteMusiqueInfo(@Param('id') id: string): any{
        return this.musiqueInfoService.deleteById(id);
    }
}