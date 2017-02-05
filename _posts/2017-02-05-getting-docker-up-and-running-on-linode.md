---
published: true
layout: post
image-lg: /assets/docker-linode-lg.png
image-sm: /assets/docker-linode-sm.png
---
## Getting Docker up and running on Linode with Ubuntun 16.04 LTS

There're no easy tutorials or documentation about how to setup Docker on Linode, because Linode images come with their custom Linux Kernel installed, and Docker requires AUFS that is part of the linux-image-extra-* packages. So I have to install a Distribution-Supplied Kernel and enable it in order to run Docker on Linode. 

I tried a several methods, and this are methods or steps what I have found to get Docker up and running successfully on Linode.

- **Create a Ubuntu 16.04 LTS image** by clicking *Deploy an Image* in the Dashboard page.
- Follow the instructions to **setup the image** in this tutorial [https://www.linode.com/docs/getting-started](https://www.linode.com/docs/getting-started).
- **Install custom Distribution-Supplied Kernel** by following the steps in this tutorial [https://www.linode.com/docs/tools-reference/custom-kernels-distros/run-a-distribution-supplied-kernel-with-kvm](https://www.linode.com/docs/tools-reference/custom-kernels-distros/run-a-distribution-supplied-kernel-with-kvm)
- **Install Docker for the Ubuntu image** by following the steps in the Docker offical documentation, [https://docs.docker.com/engine/installation/linux/ubuntu/](https://docs.docker.com/engine/installation/linux/ubuntu/)
- And finally **securely setup the Ubuntu image** to ensure you have harden your server. [https://www.linode.com/docs/security/securing-your-server](https://www.linode.com/docs/security/securing-your-server)
- That's all and good luck ;)
