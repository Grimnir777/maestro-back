import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { MusiqueInfoService } from './musique-info.service';
import { CreateMusiqueInfoDto} from '../dto/create-musique-info.dto';


//var rp = require('request-promise');


@Controller('musiqueInfo')
export class MusiqueInfoController {

    constructor(private musiqueInfoService: MusiqueInfoService) {}

    @Post()
    postMusiqueInfo(@Body() musiqueInfo: CreateMusiqueInfoDto): any{
       /* rp('http://www.google.com')
        .then(function (htmlString) {
            // Process html...
            console.log(htmlString)
        })
        .catch(function (err) {
            // Crawling failed...
            console.log(err)
        });
        */
        //console.log

        return this.musiqueInfoService.create(musiqueInfo);
    }
}