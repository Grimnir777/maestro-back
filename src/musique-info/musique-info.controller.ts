import { Controller, Get, Post, Body, Put, Param, Delete, UseGuards } from '@nestjs/common';
import { MusiqueInfoService } from './musique-info.service';
import { CreateMusiqueInfo1Dto} from '../dto/create-musique-info1.dto';
import { CreateMusiqueInfo2Dto} from '../dto/create-musique-info2.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { ApiTags, ApiBearerAuth, ApiOperation, ApiParam, ApiOkResponse, ApiBadRequestResponse, ApiUnauthorizedResponse, ApiNotFoundResponse, ApiBody, ApiCreatedResponse } from '@nestjs/swagger';


@ApiTags('musiqueInfo')
@UseGuards(JwtAuthGuard)
@Controller('musiqueInfo')
export class MusiqueInfoController {

    constructor(private musiqueInfoService: MusiqueInfoService) {}
    
    @Post()
    @ApiBearerAuth()
    @ApiOperation({ summary: 'Create a musiqueInfo' })
    @ApiBody({type: CreateMusiqueInfo1Dto})
    @ApiCreatedResponse({description: 'Return the music informations created', type: CreateMusiqueInfo2Dto})
    postMusiqueInfo(@Body() musiqueInfo: CreateMusiqueInfo2Dto): any{
        
        return this.musiqueInfoService.create2(musiqueInfo);
    }

    @Put()
    @ApiBearerAuth()
    @ApiOperation({summary: 'Update a musiqueInfo'})
    @ApiBody({description:'The content of the musiqueInfo to update with the _id included', type: CreateMusiqueInfo2Dto})
    @ApiOkResponse({description: 'Return the musiqueInfo modified'})
    @ApiBadRequestResponse({description: 'Impossible to update the musiqueInfo'})
    @ApiUnauthorizedResponse({description:'Error with your credentials, have you authenticated yourself ?'})
    
    putMusiqueInfo(@Body() musiqueInfo: CreateMusiqueInfo2Dto): any{
      return this.musiqueInfoService.update(musiqueInfo);
    }

    @Get('musique/:name')
    @ApiBearerAuth()
    @ApiOperation({summary: 'Get a musiqueInfo'})
    @ApiParam({name: 'musique', example:'primo voctoria'})
    @ApiOkResponse({description: 'Return all the musiqueInfo whith have the same name that the param.', type: [CreateMusiqueInfo2Dto]})
    @ApiUnauthorizedResponse({description:'Error with your credentials, have you authenticated yourself ?'})
    getMusiqueInfoMusique(@Param('name') musique: string): any{
        return this.musiqueInfoService.findByMusique(musique);
    }

    @Get('artiste/:artiste')
    @ApiBearerAuth()
    @ApiOperation({summary: 'Get a list of musiqueInfo sung by an artist'})
    @ApiParam({name: 'artiste', example:'Sabaton'})
    @ApiOkResponse({description: 'Return the musiqueInfo of all the music sung by the artist.', type: [CreateMusiqueInfo2Dto]})
    @ApiUnauthorizedResponse({description:'Error with your credentials, have you authenticated yourself ?'})
    getMusiqueInfoArtiste(@Param('artiste') artiste: string): any{
        return this.musiqueInfoService.findByArtiste(artiste);
    }

    @Get('id/:id')
    @ApiBearerAuth()
    @ApiOperation({summary: 'Get a musiqueInfo'})
    @ApiParam({name: 'id', example:'5e934732757e33ce18dd8268'})
    @ApiOkResponse({description: 'Return the musiqueInfo.', type: CreateMusiqueInfo2Dto})
    @ApiNotFoundResponse({description: 'Impossible to retrieve the ticket'})
    @ApiUnauthorizedResponse({description:'Error with your credentials, have you authenticated yourself ?'})
    getMusiqueInfoId(@Param('id') id: string): any{
        return this.musiqueInfoService.findById(id);
    }

    @Get()
    @ApiBearerAuth()
    @ApiOperation({summary: 'Get alls musiqueInfo'})
    @ApiOkResponse({description: 'Return all musiqueInfo', type: [CreateMusiqueInfo2Dto]})
    @ApiUnauthorizedResponse({description:'Error with your credentials, have you authenticated yourself ?'})
    getAllMusiqueInfo(): any{
        return this.musiqueInfoService.findAll();
    }

    @Delete('id/:id')
    @ApiBearerAuth()
    @ApiOperation({summary: 'Delete a musiqueInfo'})
    @ApiParam({name: 'id', example:'5e934732757e33ce18dd8268'})
    @ApiOkResponse({description: 'Return a musiqueInfo deleted'})
    @ApiUnauthorizedResponse({description:'Error with your credentials, have you authenticated yourself ?'})
    deleteMusiqueInfoId(@Param('id') id: string): any{
        return this.musiqueInfoService.deleteById(id);
    }
}