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

<ul>Interface page de connexion:
<li>- Formulaire où l'utilisateur doit rentrer ses coordonnées </li>
<li>- Le formulaire obligatoire être rempli pour accéder au chat</li></ul>

<ul><p>Interface page de discussion:</p>
    <li><ul><p>- Tooltip de description:</p>
        <li>- Header = description de l'application de chat</li>
        <li>- Footer = membres de la team</li></ul>
    <li>- Champ de visualisation de message
    <li>- Toolbox toggle => modal personnalisation (changement de couleur du théme)
    <li>- Champ input envoie de message / envoie de fichier
    <li>- Script jquery permettant d'envoyer des messages sur le chat et de les réceptionnés</ul>

<ul><p>Fonction JS:</p>
    <li>- showbrowseFile() => permet de visualiser le champ d'ajout de fichier</li>
    <li>- changeColorConv() => permet de changer la couleur du théme</li>
    <li><ul><p>- Handler:</p>
        <li>- keypress sur bouton entrée: valide form message</li>
        <li>- Submit du formulaire</li></ul>

# Documentation Geolocalisation

  Utilisation de l'API Géo d'api.gouv (https://geo.api.gouv.fr )

  Technologie utilisé: Ajax

  Récupération de la latitude et la longitude de l'utilisateur pour récupérer son code postal ou celui d'un département très proche.

# Base de données

Technologie: MySQL

Définition de la table: Message / pseudo / date / heure (timestmap)

Condition: les messages des 30 derniers jour sont sauvegardés.

# Player de audio

Possibité de lire une musique pendant durant la navigation sur le chat

# Documentation Back

<ul><p>app.js, fichier du serveur de l'application:</p>
    <li>- Utilisation du framework Express par le serveur </li>
    <li>- Utilisation du protocole HTTP pour communiquer avec le client (var http)</li>
    <li>- Les communications se font sur le port 3000 (var port)</li>
    <li>- Utilisation de la méthode post pour le chat </li></ul>
