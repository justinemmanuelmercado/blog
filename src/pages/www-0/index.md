---
title: "WWW[0] - Snowpack, Puppeteer, TailwindCSS"
description: What is it, what do I use it for, and what are my thoughts on Snowpack, Puppeteer, TailwindCSS
date: "2021-02-01"
cover: 'cover.png'
thumb: 'thumb.png'
active: 1
---

Hey reader! I'm starting a brand new series of posts where I discuss tech I've discovered or used in the past week.

It's called the "What is it, What do I use it for, and What are my thoughts" or "WWW[]". With the index going in-between [ ]. 

Since arrays start at 0, this is WWW[0].

# Snowpack

## What is it

Snowpack is a new-ish (It's on version 3 as of writing) front-end build tool. If you're familiar with Webpack, you can to use this in its place.

## What do I use it for

I've been building a personal project. On the front-end, I wanted to start from a blank slate. I'm not saying using `create-react-app` (or similar tools) is wrong, since both methods have pros and cons.

I looked to Webpack first, but I remembered listening to `ShopTalkShow` discuss Snowpack. They mentioned how it has faster bundling speeds and was easier to configure. Both of which were pain points from my time working with Webpack.

## What are my thoughts

I have been using Snowpack for a few days now. The developer experience is much better compared to what I remember from using Webpack. Installing and using plugins is straightforward, just run `npm install` and slap the plugin name onto the config file, and the config file is simple JSON. After reading through the docs once, I ended up with a Typescript, React, Tailwind, and PostCSS development environment with hot reloading. My favorite part is that after the initial bundling, loading module changes with React is almost instant!

Bundling for production with Snowpack is something else, and I might run into production issues later. But right now development experience is A+.

## Links

[Snowpack page](https://www.snowpack.dev/)

[Snowpack on github](https://github.com/snowpackjs/snowpack)

# Puppeteer

## What is it

Puppeteer is a Node library, it provides an API that allows users to do tasks on a website without having to open a browser. It's seen in projects scraping data or dealing with boring tasks.

## What do I use it for

I've been collecting news articles from local newspaper websites the past month. Scraping from news sites isn't easy, like requesting data from APIs, and news people have no reason to provide simple ways to get that data.

This is where Puppeteer comes in. First to scrape for list of recent articles, and then to scrape the data from the pages (images, URLs, author, links, tags, etc.).

## What are my thoughts

I don't use the whole functionality of what Puppeteer can offer. My guess is most people need Puppeteer to open up a page, run some JavaScript, store results, and nothing else.

Puppeteer does its job well. The API is easy to understand, well documented, big community support, and it's got built in TS types.

I have not used other libraries occupying the same role as Puppeteer, but I can still endorse it because it's popular right now. Which means better involvement from the community.

## Links

[Puppeteer page](https://pptr.dev/)

[Puppeteer on github](https://github.com/puppeteer/puppeteer)

# TailwindCSS

## What is it

TailwindCSS is a CSS framework with utility in mind. Instead of having classes that style full components, Tailwind gives you classes that only do a single thing, and it's up to the user to join them together to style their site.

I can't describe TailwindCSS well enough, check out their homepage (linked below) to see what it can do.

## What do I use it for

Ever since I stumbled upon Tailwind late last year, I've been using it for almost everything. It does things differently but I noticed it feels more natural compared to other libraries.

It has a bit of a learning curve but I find myself working faster with it. I feel like I'm more in control and that's how I prefer working with CSS.

The biggest impact Tailwind had was changing the way I think with design systems. I used to have distinct classes that had varying values between other classes. Now I can be sure that if I wanted to space an element with the 2nd biggest margin value available, it'll be consistent throughout the site. This isn't Tailwind exclusive, but using it showed significance design systems can be on the overall look of the site.

Some features I also find notable are built-in PurgeCSS, and powerful configurability. 

## What are my thoughts

The opinion on Tailwind right now is very polarized. I'm on the "it's the greatest thing ever" side, but I understand it's not everyone's cup of tea.

If you're looking to explore a new way of doing things, or are dissatisfied with Bootstrap-like libraries, consider picking up Tailwind for your next project.

Links

[Tailwind homepage - Check out the demos on their page before forming an opinion](https://tailwindcss.com/)

[Tailwind github](https://github.com/tailwindlabs/tailwindcss)

# Final thoughts

This isn't an informative series, more of a "look at this cool thing! And here's why it's interesting" series.

I hope I can keep this up! Mostly to keep track of things I found interesting as time goes on.