# shareteam

ShareTeam is a simple application of chat and share files.

#Require

Nodejs

After clone the project :
npm install
npm update

launch

# Documentation Front

Utilisation de CDN bootstrap 4 / Jquery

Technologie utilisé: Javascript / bootstrap4 / Jquery / HTML5 / CSS3

Interface page de connexion => formulaire de connexion

Interface page de discussion:
    - Tooltip de description:
        - Header = description de l'application de chat
        - Footer = membres de la team
    - Champ de visualisation de message
    - Toolbox toggle => modal personnalisation (changement de couleur du théme)
    - Champ input envoie de message / envoie de fichier

Fonction JS:
    - showbrowseFile() => permet de visualiser le champ d'ajout de fichier
    - changeColorConv() => permet de changer la couleur du théme
    - Handler:
        - keypress sur bouton entrée: valide form message
        - Submit du formulaire

# Base de données

Technologie: MySQL

Définition de la table: Message / pseudo / date / heure (timestmap)

Condition: les messages des 30 derniers jour sont sauvegardés.
Utilisation de CDN bootstrap 4 / Jquery


#Documentation Back

app.js, fichier du serveur de l'application:
    - Utilisation du framework Express par le serveur 
    - Utilisation du protocole HTTP pour communiquer avec le client (var http)
    - Les communications se font sur le port 3000 (var port)
    - Utilisation de la méthode post pour le chat
