---
Layout: 
Title: "npm and yarn."
date: "2021-11-08"
---

# Introduction.
 
In this blog post i will just share the different between npm and yarn, when i was introduced to react i knew only one way to run or install thing in my apllication which is npm, then not long ago i learn that we can also use yarn.

# Body.

What is npm(node package manager). 

is an online repository for the publishing of open-source Node.js project, also it is a command-line utility for interacting with said repository that aids in the package installation, version management, and dependency management.

This is why we use npm it puts modules in place so that node can find them, and manage dependency conflicts intelligently. Like i said we use it to publish, discover and develop node programs.

Yarn is a new package manager replaces the existing workflow for the npm client while remaining compatible with the npm registry.It has the same feature set as existing workflows while operating faster, more securely, and more reliable.

My terminal already had npm so for me to use yarn i had to install it, i'm using ubuntu latest version 21.10,  this is how i install yarn using my terminal which you can open by using the shortcut Ctrl + Alt + T then copy what is below and paste it in terminal and press enter.

sudo apt remove cmdtest
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt update
sudo apt install yarn

# Conclusion.

I think it is important to be familiar with both of them, but in terms of using npm and yarn i dont have that experience to judge, what i have notice is how we use them which is different.