import { Controller, Get, Post, Body, Put, Param, Delete, UseGuards } from '@nestjs/common';
import { MusiqueInfoService } from './musique-info.service';
import { CreateMusiqueInfo2Dto} from '../dto/create-musique-info2.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';



@Controller('musiqueInfo')
export class MusiqueInfoController {

    constructor(private musiqueInfoService: MusiqueInfoService) {}
    
    //@UseGuards(JwtAuthGuard)
    @Post()
    postMusiqueInfo(@Body() musiqueInfo: CreateMusiqueInfo2Dto): any{
        
        return this.musiqueInfoService.create2(musiqueInfo);
    }

    //@UseGuards(JwtAuthGuard)
    @Put()
    putMusiqueInfo(@Body() musiqueInfo: CreateMusiqueInfo2Dto): any{
      return this.musiqueInfoService.update(musiqueInfo);
    }

    //@UseGuards(JwtAuthGuard)
    @Get('musique/:name')
    getMusiqueInfoMusique(@Param('name') musique: string): any{
        return this.musiqueInfoService.findByMusique(musique);
    }
    //@UseGuards(JwtAuthGuard)
    @Get('artiste/:artiste')
    getMusiqueInfoArtiste(@Param('artiste') artiste: string): any{
        return this.musiqueInfoService.findByArtiste(artiste);
    }

    //@UseGuards(JwtAuthGuard)
    @Get('id/:id')
    getMusiqueInfoId(@Param('id') id: string): any{
        return this.musiqueInfoService.findById(id);
    }

    //@UseGuards(JwtAuthGuard)
    @Get()
    getAllMusiqueInfo(): any{
        return this.musiqueInfoService.findAll();
    }

    //@UseGuards(JwtAuthGuard)
    @Delete('id/:id')
    deleteMusiqueInfoId(@Param('id') id: string): any{
        return this.musiqueInfoService.deleteById(id);
    }
}