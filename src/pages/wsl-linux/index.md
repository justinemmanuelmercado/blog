---
title: "Web development on Windows, to Dual Booting Linux, to WSL and then back to Dual Booting Linux"
description: I tried dual booting then WSL then back to dual booting
date: "2019-02-17"
image: cover.png
active: 1
---

#### change cover picture

## The times I made websites on Windows

For most of my life I've been using Windows as my main OS of choice. I've sort of gotten used to it and it was only 3 years ago did I actually switch to using Linux as my main work OS.

For the whole 4 years of college and about 1 year in my first job I was making websites only on Windows machines with WAMP, Sublime Text and Visual Studio IDE. At the time I didn't know that I was handicapping myself by sticking to Windows.

It was when I wanted to try actually deploying a website did I start to take an interest in Linux, mainly Ubuntu. I always read about experienced web developers always suggesting that to host your site, you could use DigitalOcean or Linode or any other VPS provider, saying things like it's the most flexible and a definite upgrade to your web dev skills, with the caveat that it would take a bit more time to learn compared to shared hosting.

With that in mind, I thought that before I wasted $5 - $10/month buying a VPS (I was dirt poor at the time), I decided that I'd atleast learn Ubuntu first to get an idea of what I was getting into. So I took the plunge and installed Ubuntu on my laptop. 

## Post-Linux

I was a Windows die-hard during that time but only because I didn't know that there was a better, far more efficient way to work. I was always curious about using Linux so I started reading up on it. Blogs, where to get started, what's the best distro and so on. I ended up installing Ubuntu since it was one of the recommended beginner distros and it was just a name that I knew when hearing Linux, just like how I think of Colgate when I hear toothpaste.

The first few days with learning Ubuntu was great, I was excited and enthusiastic just like how a toddler feels after buying a new toy. After a few weeks I got kinda bored since Ubuntu, but it wasn't because of Ubuntu but mostly because I wanted to experience more personalization. So I installed Arch Linux.

For people who don't know, Arch Linux is basically the living embodiement of this meme

![Arch Linux in picture form](bday.jpg "Arch Linux in picture form")

Where Ubuntu gives you the whole cake right out of the box, Arch Linux gives you the ingredients but it's up to you to choose what flour you need, what frosting you want to cover the whole cake in and you have to do all that while reading and comprehensive documentation on your phone, which is basicaly how I did it since I jumped in a bit blind.

Arch Linux was great and for the time I actually didn't mind that if I wanted most of the basic functionality to work I had to work for it. This experience had given me the intuition needed to work with basic debugging of most of the problems I would eventually experience while on Linux

## Web Development on Linux

Web development

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

And with that, I bought a bigger SSD and went back to Dual Booting

## Comfortable with just dual booting -- for now

I reinstalled Ubuntu this time and have barely touched WSL since then. Currently don't have any problems witht this setup though and I feel much better working on Ubuntu than I did with WSL

Honestly I really wanted to see WSL be the "one". But it just wasn't polished enough. Maybe in the near future, I'd give WSL another chance and by then it has improved more than it's current state. Hopefully to be just as snappy to using BASH on Ubuntu

