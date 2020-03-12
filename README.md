# maestro-back

Application communautaire de partage de tablatures et partitions.

## API

 - NestJS https://docs.nestjs.com/
 - Mongoose https://docs.nestjs.com/recipes/mongodb
 - Pour la musique : https://www.last.fm/api/

## Stockage

### Stockage users/auteurs/titres

  Mongodb, 5 tables :
 - Utilisateur (nom, prenom, pseudo, email, pswd, typeU)
 - Tickets (idUser, idMusique, titre, détail, état)
 - Commentaire (idUser, idMusique, commentaire)
 - Partition (auteur last.fm, titre last.fm, liste d'instruments, difficulté, lien vers COS)

 Endpoints : create, update, delete, gestion

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

