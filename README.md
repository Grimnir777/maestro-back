# maestro-back

Application communautaire de partage de tablatures et partitions.

## API

NestJS
https://docs.nestjs.com/
Mongoose
https://docs.nestjs.com/recipes/mongodb

## Stockage

### Stockage users/auteurs/titres

Mongodb
2 tables :
Utilisateur (nom, prenom, pseudo, email, pswd, typeU)
Musique (auteur, liste de titres)

### Stockage partitions

Cloud Object Storage : MinIO
https://docs.min.io/docs/minio-quickstart-guide.html


## Test

Tests unitaires via Moka, Jest ?


## Docker

Séparer les services par container
1 container gestion utilisateur, 1 gestion partition (dl/upload)

## Kubernetes

Pffzgjzrknh,b
