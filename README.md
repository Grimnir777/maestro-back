# maestro-back

Application communautaire de partage de tablatures et partitions.

## API

 - NestJS https://docs.nestjs.com/
 - Mongoose https://docs.nestjs.com/recipes/mongodb
 - Pour la musique : https://www.last.fm/api/

## Stockage

### Stockage users/auteurs/titres

 * Mongodb, 3 tables :
 - Utilisateur (nom, prenom, pseudo, email, pswd, typeU)
 - Musique (auteur, liste de titres)
 - Tickets (idUser, idMusique, détail, état)
 - Commentaire (idUser, idMusique, commentaire)
 - Partition (idMusique, liste d'instruments, difficulté, lien vers COS)

### Stockage partitions

Cloud Object Storage : MinIO  https://docs.min.io/docs/minio-quickstart-guide.html

## Test

Tests unitaires via Moka, Jest ?

## Docker

Séparer les services par container
 - 1 gestion utilisateur
 - 1 gestion partition (dl/upload)
 - 1 gestion tickets

## Kubernetes

Pffzgjzrknh,b


## Commandes de l'application 

### Installation

```sh
npm install
npm install -g @nestjs/cli
```
### Build
```sh
nest build
```
### Dev
Lancer la commande
```sh
npm run start:dev
```

