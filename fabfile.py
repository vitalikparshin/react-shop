import os
from fabric.api import cd, env, run, sudo, get, put, local

# Common VARS
PROJECT_NAME = "react-shop"

# Remote VARS
REMOTE_HOME_DIR = "/var/www"
REMOTE_PROJECT_DIR = os.path.join(REMOTE_HOME_DIR, PROJECT_NAME)

env.warn_only = True

def prod():
    env.user = 'root'
    env.hosts = ['shop.serga.name']

def update():
    with cd(REMOTE_PROJECT_DIR):
        local('git push')
        run('git reset --hard')
        run('git pull')
        run('yarn')
        run('yarn run publish')
