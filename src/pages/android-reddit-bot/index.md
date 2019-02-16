---
title: "Running a Reddit Bot on an old Android Phone"
description: How I repurposed my old Android Phone to run a Reddit Bot 24/7
date: "2019-02-09"
image: cover.png
active: 1
---
This is just to outline my experience building a reddit bot using Node JS

## Start building

To start building the bot I [followed this tutorial](https://blog.syntonic.io/2017/07/07/reddit-bot-nodejs-example/). The tutorial was enough to get started, I then created a separate Reddit account just for the bot (optional, you can use any reddit account), get the security keys from the account settings, hooked it up to the basic test script and eventually ended up with [this. This is the repository for the whole bot as it is running now.](https://github.com/justinemmanuelmercado/salphbot) Most of it is just initial setting up which you could get from the tutorial I linked. But I'll explain my thought process on how I built it up after the initial "pinging [/r/testingground4bots](https://reddit.com/r/testingground4bots)" phase.

## Why build the bot

I originally built this bot to help me look in [/r/suggestalaptop](https://reddit.com/r/suggestalaptop) and [/r/philippines](https://reddit.com/r/philippines) for posts I could possibly chime in with, because the first blog post I posted was [this laptop buying guide to help users from the Philippines buy from the US](/laptop-buying). 

Also I didn't want to spend a significant amount of time searching through reddit, when I could've spent my time doing something more productive, like looking at memes on reddit.

Originally I wanted the bot to reply whenever it detected a certain keyword, but that seemed rude and not as helpful as actually contributing a conversation, and since I wanted to actually help people out I decided to just have the bot send me an email everytime it detected specific keywords in specific subs. The point of the email was to just notify me with the link so that I could visit that post, provide some laptop suggestions, suggest to buy from ebay or amazon to save some $$$, and link to my the blog post.

## Building the bot

The bot is built mainly by using `Snoowrap` a JavaScript wrapper for the Reddit API and `Snoostorm` which is an event based wrapper for `Snoowrap`.

I ended up with a structure like this.

```
const { CLIENT_ID: clientId,
    CLIENT_SECRET: clientSecret,
    REDDIT_USER: username,
    REDDIT_PASS: password,
    REDDIT_USER_AGENT: userAgent } = process.env;

const bot = new Snoowrap({
    userAgent,
    clientId,
    clientSecret,
    username,
    password
});

const client = new Snoostorm(bot);

const suggestALaptopCommentOpts = {
    subreddit: SUGGEST_A_LAPTOP,
    results: NUMBER_OF_RESULTS,
    pollTime: POLL_TIME
}
const suggestALaptopSubmissionOpts = suggestALaptopCommentOpts;

const suggestALaptopCommentStream = client.CommentStream(suggestALaptopCommentOpts);
const suggestALaptopSumissionStream = client.SubmissionStream(suggestALaptopSubmissionOpts);

suggestALaptopCommentStream.on('comment', (comment) => {
    // do something with `comment`s here
});

suggestALaptopSumissionStream.on('submission', (post) => {
    // do something with `submission`s here
});

```

I took advantage of `Snoowrap`'s `CommentStream` and `SubmissionStream` which accepts two arguments; a string that describes the event to look out for and a callback to call when it receives a `submission` or `comment`. In that callback you manipulate the comment or submission. In my case I checked the comments' body, submissions' self-text and submissions' title for the word "laptop" on [/r/philippines](https://reddit.com/r/philippines), and for the word "philippines" in [/r/suggestalaptop](https://reddit.com/r/suggestalaptop).

To get notified I made it so that when the keyword is detected the bot sends an email using `nodemailer` and passing it through my email providers SMTP. This is temporary and I'm currently looking into other notification options as to not pollute my inbox.

## Setting up the Android device

So I've got the bot ready, I tested it and it works, now how do I keep it running? I had a few options that I realistically knew how to do. Run it on a Raspberry Pi, run it on a VPS or run it on an  phone. Seeing as I already had an old LG G4 just lying around, I though why not put it to use.

I wanted to possibly root the G4 and flash a lightweight ROM, but the LG G4 was too complicated to root, so I settled on resetting to factory settings and installing [Termux](https://play.google.com/store/apps/details?id=com.termux&hl=en). Termux is kind of like a mini terminal emulator with a few linux packages built in, so I installed git, and node on it and I was ready to go.

I pushed the latest changes to git, pulled it onto the phone and set up the environment variables and...

![Reddit bot running on Termux on Android](result1.jpg "Reddit bot running on Termux on Android")

It worked.

## Conclusion

Now I get emails every few hours, and to think I would've missed most of those if I didn't build this. 

It was a decent learning experience and it's a good way to breath some life into an old Android phone. I'm probably going run more on my Android device since Termux supports running multiple instances. Also probably going to move from emails to a sort of push notification. 