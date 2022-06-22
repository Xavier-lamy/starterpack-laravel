# Starter Pack laravel/docker

Objectif: réaliser un starterpack pour des projets laravel tournant avec des containers docker, grâce à sail

Utilisation:
>Sous windows:
>- Eviter windows
>- Installer WSL2 et une distro UNIX comme ubuntu par exemple


- On clone le repo: ``git clone https://gitlab.com/UserName/ProjectName``, attention sous windows si on clone via ssh, il faut utiliser la commande powershell, autrement les CLI wsl2 risquent de ne pas trouver notre clé ssh

- Installer composer grâce au mini container:
```bash
# Sous unix
docker run --rm \
    -u "$(id -u):$(id -g)" \
    -v $(pwd):/var/www/html \
    -w /var/www/html \
    laravelsail/php81-composer:latest \
    composer install --ignore-platform-reqs

#Sous windows (marche pas complètement voir pas du tout, vue que c'est windows)
    docker run --rm -v ${pwd}:/var/www/html -w /var/www/html laravelsail/php81-composer:latest composer install --ignore-platform-reqs
```

- Créer un fichier ``.env``
- Lancer le container sail: ``./vendor/bin/sail up`` ou ``sail up`` si on a un alias
> Note si sous windows avec wsl2, le chemin ``./vendor/bin/sail``, ne fonctionne pas, cela peut etre du à un probleme dans le dossier bin de vendor (les fichiers .bat ne sont pas générés), on peut alors utiliser le path complet pour accéder à sail : ``./vendor/laravel/sail/bin/sail``

- Installer les dépendances NPM: ``sail npm install``
- Générer la clé avec ``sail artisan key:generate``

- On peut ensuite avoir notre site sur ``localhost``, le hot reload semble fonctionner sous les OS type UNIX, mais pas sous tous les windows

