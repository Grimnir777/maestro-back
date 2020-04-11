import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { MusiqueInfo } from '../interfaces/musique-info.interface';
import { CreateMusiqueInfo1Dto } from '../dto/create-musique-info1.dto';
import { CreateMusiqueInfo2Dto } from '../dto/create-musique-info2.dto';


function getUrl(TitreMusique, ArtisteMusique){
  var rp = require('request-promise');
  var METHOD = "album.search", LIMIT = "1000", API_KEY = "8ef2bb24e72d52a0c58169ba37b79aba", FORMAT = "json";
  var ResultReq, Url, albums, i=0, bonneMusique = false;


  return new Promise((resolve, reject) => {
    rp("http://ws.audioscrobbler.com/2.0/?method=" + METHOD + "&limit=" + LIMIT + "&album=" + (TitreMusique) + "&api_key=" + API_KEY + "&format=" + FORMAT)
      .then(function (htmlString) {
        Url = "Pas d'url trouvée"
        ResultReq = JSON.parse(htmlString)
        albums = ResultReq['results']['albummatches']['album']
        //console.log("Nombre de réponses " + albums.length + " sur " + ResultReq['results']['opensearch:totalResults'] + " " + (albums.length/ResultReq['results']['opensearch:totalResults'])*100) + "\%"
        while (i<albums.length && !bonneMusique){
          bonneMusique = (albums[i].name.toUpperCase() == TitreMusique.toUpperCase() && albums[i].artist.toUpperCase() == ArtisteMusique.toUpperCase());
          //console.log("i: " + i + ", chanson: " + albums[i].name + ", artiste: " + albums[i].artist)
          if (bonneMusique){
            Url = albums[i].url
          }
          i++;
        }
        resolve(Url);
      })
      .catch(function (err) {
        console.log (err)
        reject("Erreur dans la requete: " + err);
      });
  });  
}

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
        const Url = await getUrl(infoChanson.name, infoChanson.artiste)
       console.log("URL: " + Url)
        const createdMusiqueInfo = new this.musiqueInfoModel({
          name: infoChanson.name,
          artiste: infoChanson.artiste,
          url: Url
        });
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