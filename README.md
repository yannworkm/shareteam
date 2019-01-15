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

Interface page de connexion:
    - Formulaire où l'utilisateur doit rentrer ses coordonnées
    - Le formulaire obligatoire être rempli pour accéder au chat
    
Interface page de discussion:
    - Tooltip de descriptionn (header et footer)
    - Champ de visualisation de message => message box
    - Toolbox topggle => modal personnalisation
    - Champ input envoie de message / envoie de fichier
    - Script jquery permettant d'envoyer des messages sur le chat et de les réceptionnés

#Documentation Back

app.js, fichier du serveur de l'application:
    - Utilisation du framework Express par le serveur 
    - Utilisation du protocole HTTP pour communiquer avec le client (var http)
    - Les communications se font sur le port 3000 (var port)
    - Utilisation de la méthode post pour le chat
    - 