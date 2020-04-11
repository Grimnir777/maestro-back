import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { MusiqueInfo } from '../interfaces/musique-info.interface';
import { CreateMusiqueInfo1Dto } from '../dto/create-musique-info1.dto';
import { CreateMusiqueInfo2Dto } from '../dto/create-musique-info2.dto';

var rp = require('request-promise');
var ResultReq, Url= 'pas encore reçu';

@Injectable()
export class MusiqueInfoService {
  constructor(
    @Inject('MUSIQUE-INFO_MODEL')
    private readonly musiqueInfoModel: Model<MusiqueInfo>,
  ) {}

  async create(musiqueInfo: CreateMusiqueInfo2Dto): Promise<MusiqueInfo> {
    const createdMusiqueInfo = new this.musiqueInfoModel(musiqueInfo);
    return createdMusiqueInfo.save();
  }

  async create2(infoChanson: CreateMusiqueInfo1Dto): Promise<MusiqueInfo>{

    rp("http://ws.audioscrobbler.com/2.0/?method=album.search&limit=1&album=" + (infoChanson.name) + "&api_key=8ef2bb24e72d52a0c58169ba37b79aba&format=json")
        .then(function (htmlString) {
            // affichage du resulat
            ResultReq = JSON.parse(htmlString)
            Url = ResultReq['results']['albummatches']['album'][0]['url']
            console.log(Url)

            console.log("Titre: " + infoChanson.name)
            console.log("Artiste: " + infoChanson.artiste)
            console.log("URL: " + Url);
            console.log("URL2: " + String(Url));

            console.log("Oui")

        })
        .catch(function (err) {
            // Affichage de l'erreur
            console.log("Erreurrrr")
            console.log(err)
            Url:"Erreur " + err

        });

        /*
        TODO
        Réussir a attendre la fin de l'éxécution de la requete
        */

        console.log("Non");
        const createdMusiqueInfo = new this.musiqueInfoModel({
          name: infoChanson.name,
          artiste: infoChanson.artiste,
          url:Url
        });
       
        console.log("Titre: " + infoChanson.name);
        console.log("Artiste: " + infoChanson.artiste);
        console.log("URL: " + Url);
        console.log("URL2: " + String(Url));
        return createdMusiqueInfo.save();
 }

 async findById(id: string): Promise<MusiqueInfo>{
  return this.musiqueInfoModel.findById(id);
}

async findAll(): Promise<MusiqueInfo[]> {
  return this.musiqueInfoModel.find();
}

async update(musiqueInfo: CreateMusiqueInfo2Dto): Promise<MusiqueInfo> {
  const musiqueInfoToUpdate = this.findById(musiqueInfo.id);
  return (await musiqueInfoToUpdate).update(musiqueInfo);
}

async deleteById(id: string): Promise<any>{
  return this.musiqueInfoModel.findByIdAndRemove(id);
}

}