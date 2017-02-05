---
published: false
---
## Getting Docker up and running on Linode with Ubuntun 16.04 LTS

There're no easy tutorials or documentation about how to setup Docker on Linode, because Linode images come with their custom Linux Kernel installed, and Docker requires AUFS that is part of the linux-image-extra-* packages. So I have to install a Distribution-Supplied Kernel and enable it in order to run Docker on Linode. I tried a several methods, and this are methods or steps what I have found to get Docker up and running successfully on Linode.


