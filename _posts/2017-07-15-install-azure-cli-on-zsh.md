---
published: true
layout: post
title: Install Azure CLI 2.0 on Oh My Zsh
image-lg: /assets/azure-cli-lg.png
image-sm: /assets/azure-cli-sm.png
---
## Install Azure CLI 2.0 on Oh My Zsh
If you are trying to install Azure CLI 2.0 on Mac Oh My Zsh(zsh shell), you may get the following error after installation.
You entered 
````bash 
~  az
````
then you get 

````bash
~  zsh: command not found az
````
This is because by default, Azure CLI 2.0 will update the bash profile or .bash_profile in order to load the Azure CLI environment setup.
If you didn't read the last prompt carefully during the installation, you just hit the enter key for it, then you didn't configure your zsh shell properly,
that's why zsh did not know where to find the `az` command.

In order to get zsh shell to know where to find the Azure CLI environment. You simply enter the path for your .zshrc location when the last prompt comes up,
````bash
===> Enter a path to an rc file to update (leave blank to use '/Users/username/.bash_profile'): ~/.zshrc
````

If you run `az` again in your terminal,
you should see Azure CLI is now up and running!! 
````bash
     /\
    /  \    _____   _ _ __ ___
   / /\ \  |_  / | | | \'__/ _ \
  / ____ \  / /| |_| | | |  __/
 /_/    \_\/___|\__,_|_|  \___|


Welcome to the cool new Azure CLI!
...
..
.
````
