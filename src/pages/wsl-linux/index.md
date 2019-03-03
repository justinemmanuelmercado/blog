---
title: "Why I went from dual booting to pure Windows + WSL back to dual booting"
description: I tried dual booting then WSL then back to dual booting
date: "2019-02-17"
image: cover.png
active: 1
---

#### change cover picture

## Pre-Linux

For the past 4 years, I've been working as a web developer. At my first job used Windows machines, using Sublime Text and pushing changes using Source Tree. I like to call this my Pre-Unix era, before I saw the light that is "Web Development on a Unix based machine". I used PHP and Javascript, and for a time my main test environment was the WAMP software, where you installed a .exe file and modifying conf files done through WAMP. 

At the time I didn't actually undertand how PHP worked or how the whole AMP stack worked. All I know was to put in .php files in the www folder and we're golden.

At the time, I was fine with how things worked. I was happy as long as I was somewhere I actually got to practice development. I ran into problems I couldn't quite fix but with a workaround here another workaround there, and sometimes when I needed to use a library I would download the libraries whole build folder and "require" everywhere because composer was a foreign topic to me.

Eventually I had to deploy my first PHP project (The client could only afford a lone junior developer at that time, me, which was really not the best way to build a website looking back now) I was given shared cPanel hosting, filezilla access an extremely outdated PHP server. 

I started running into problems just trying to get the website run, libraries didn't work, and errors were everywhere since I didn't configure PHP to suppress errors, I didn't configure PHP at all actually. The client was not happy, the launch was delayed, I was pullng all nighters trying to fix problems that led to other problems that led to bigger underlying problems.

Eventually things started working when I asked the hosting site tot update it's PHP, and things were working fine. A few problems with PHP were fixed by editing the .ini file (which this was the first time I have ever touched). But eventually the client wanted changes.

Because I was limited to only filezilla and cPanel whenever a change happened I had to manually upload files to the server and sometimes when I lose track of all the changes I did I actually zipped the whole thing (about 700 mb in size thanks to the libraries) and uploaded it to a different folder with the folder name as the only version control (I did use git but only because I was required to, I had absolutely zero clue how to actually use it, and I really didn't use the SourceTree GUI that much)

This went on for another few months or so, and eventually the project finished with a garbage dump for code. It worked but I wasn't proud of it.

## Post-Linux

I was a Windows die-hard during that time but only because I didn't know that there was a better, far more efficient way to work. I was always curious about using Linux so I started reading up on it. Blogs, where to get started, what's the best distro and so on. I ended up installing Ubuntu since it was one of the recommended beginner distros and it was just a name that I knew when hearing Linux, just like how I think of Colgate when I hear toothpaste.

The first few days with learning Ubuntu was great, I was excited and enthusiastic just like how a toddler feels after buying a new toy. After a few weeks I got kinda bored since Ubuntu, but it wasn't because of Ubuntu but mostly because I wanted to experience more personalization. So I installed Arch Linux.

For people who don't know, Arch Linux is basically the living embodiement of this meme

![Arch Linux in picture form](bday.jpg "Arch Linux in picture form")

Where Ubuntu gives you the whole cake right out of the box, Arch Linux gives you the ingredients but it's up to you to choose what flour you need, what frosting you want to cover the whole cake in and you have to do all that while reading and comprehensive documentation on your phone, which is basicaly how I did it since I jumped in a bit blind.

Arch Linux was great and for the time I actually didn't mind that if I wanted most of the basic functionality to work I had to work for it. This experience had given me the intuition needed to work with basic debugging of most of the problems I would eventually experience while on Linux

## Web Development on Linux

## Dual Booting

After being on Arch Linux for another few weeks, I eventually missed gaming, and using Adobe Photoshop. I sort of got some of my games to work and I got a buggy Photoshop CS6 to work using Wine and PlayOnLinux, it was fine for the most part but it wasn't as smooth an experience as I wanted, with random crashes and a weird bugs with Photoshop. After half a day of reading, I decided to install Windows 10 alongside Arch.

Installing Windows was mostly painless, the only difficulty I faced was reconfiguring Syslinux as the default bootloader. I gave Windows most the drive space leaving Arch with about 50GB, I never use more than 30GB on my Linux installs anyway.

This is where I felt I had the most comfortable setup. When I was working on web development I booted to Linux. I wanted to play some games or edit some pictures in Photoshop, I boot to Windows

## Moving to Windows only but with WSL

Eventually I upgraded my laptop went from a 1TB HDD to a 120GB SSD. It was a used older laptop but it was a way better laptop solely because of the SSD upgrade.

With my limited amount of storage space I decided to stick with one OS only, and since I still wanted all that Photoshop and light gaming on my device, I decided to settle with Windows. Since I still had remote work I needed to do, and there was no way I wanted to go back to web development without a decent command line, I decided on some way emulating BASH onto Windows, I thought that it's highly likely that someone else had figured out a way to do this. Lo and behold my research brings me to WSL (Windows Subsystem for Linux).

What WSL basically does is allow Windows to run Linux binaries natively. That means I can get a Windows terminal emulator to actually run the Linux programs I need to work on web development.

The following months of using WSL was okay, it had a few kinks like the experience wasn't buttery smooth or I couldn't get some programs to run on solely on WSL like Docker (I had to install this on Windows). Besides that though things were good. I was productive and everything without a serious hitch.

###### Insert WSL Logo here or Ubuntu <3 Windows

After about 2 months with this setup the problems become more and more apparent, most of the problems that convinced me to switch back to dual booting were easy to ignore at first but they were still there. The problems that got me to switch were the following

1. I'm not sure what the problem with rendering the text is when the emulator first starts but about 80% of the time, when I open a new instance of Hyper (the terminal emulator I used) I would need to press CTRL + C just to get anything to appear.
2. When I'm making APIs I use Node.js, and my debugging method includes `console.log`ing out a few lines and inspecting them, if for example I want to debug something in the console, the log gets outputted on the terminal. Often what happens is I run the app and have it run continously, sometimes the terminal will only show a blank screen and again I'd need to press CTRL + C to get something to show, closing the node instance running my app which would mean rerunning the app and retesting what I wanted to test
3. The command line is sluggish compared to running native Linux. Like whenever opening a new terminal instance works, it'll usually take a few seconds before showing anything, compared to opening a new command line on Ubuntu where it's instant. Also printing things out take painfully slow, things will usually take noticeably slower to print out each line compared to printing out the whole thing instantly like on Linux
4. I couldn't get Docker to work on WSL.
5. I missed working with a tiling windows manager like [i3](https://i3wm.org/)