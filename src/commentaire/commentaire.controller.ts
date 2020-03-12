import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { CommentairesService } from './commentaire.service';
import { CreateCommentaireDto } from '../dto/create-commentaire.dto';

@Controller('commentaires')
export class CommentairesController {

    constructor(private commentaireService:CommentairesService) {}

    @Post()
    postTicket(@Body() commentaire: CreateCommentaireDto): any{
        return this.commentaireService.create(commentaire);
    }

    @Put()
    putPartition(@Body() partition: CreateCommentaireDto): any{
        return this.commentaireService.update(partition);
    } 

    @Get(':id')
    getPartitionById(@Param('id') id: string): any{
        return this.commentaireService.findById(id);
    }

    @Get()
    getAllPartitions(): any{
        return this.commentaireService.findAll();
    }

    @Delete(':id')
    deletePartition(@Param('id') id: string): any{
        return this.commentaireService.deleteById(id);
    }
}