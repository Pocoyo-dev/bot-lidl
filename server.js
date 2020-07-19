const express = require('express');

const server = express();

server.all('/', (req, res)=>{
    res.send('Your bot is alive!')
    console.log("Request done")
})

server.all('/mee6/', (req, res)=>{
    res.send(`LEVELS\n!levels\n

Obtiens un lien vers le classement\n

!rank (optional member)\n

Obtiens le rang de n'importe quel membre\n

MUSIC\n!add [search]\n

Ajouter une musique à la file d'attente\n

!clear-queue\n

Vider la file d'attente actuelle\n

!join\n

Rejoindre le salon vocal de l'utilisateur\n

!leave\n

Quitter le salon vocal actuel\n

!np\n

Affiche le morceau en cours\n

!pause\n

Mettre en pause la lecture\n

!play (optional search)\n

Ajouter une musique à la file d'attente et la jouer si la file est vide\n

!previous\n

Jouer la piste précédente\n

!queue\n

Afficher la file d'attente actuelle\n

!replay\n

Rejouer la musique actuelle\n

!resume\n

Reprendre la lecture\n

!search [search]\n

Rechercher une musique qui peut être ajoutée plus tard à la file d'attente\n

!seek [position]\n

Changer la position de la piste actuelle\n

!skip\n

Passe à la musique suivante dans la file d'attente\n

!stop\n

Arrêter la musique en cours de lecture et quitter le salon vocal\n

!vote-skip\n

Lancer un vote pour passer à la prochaine piste`);
    console.log("Request done")
})

function keepAlive(){
    server.listen(3000, ()=>{console.log("Server is Ready!")});
}

module.exports = keepAlive;