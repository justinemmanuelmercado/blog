---
title: "Moving from email to Pushbullet for notifications"
description: My old Reddit bot used notifications to notify me, now I switched to Pushbullet and here's how I did it
date: "2019-03-18"
thumb: cover.png
cover: cover.png
active: 1
---

#### change cover picture

In my [previous post](/android-reddit-bot) I made a Reddit bot that notifies me through email when a certain post is contains a certain text in certain subreddits. I use it mostly to chime in where I can help and promote my blog post, but I can think of a few more uses where this is useful i.e. get notified when a job you want gets posted or when someone posts a freebie you're interested in.

I was using email and it worked okay for the most part. I was being notified on time and I did get a notification which is the most important part. The downside is it's filling up my inbox and it doesn't look pretty. I knew before hand that I'd switch to something else for notifications and that's where [Pushbullet](https://www.pushbullet.com/about) comes in.

## What's Pushbullet?

In the about page of Pushbullet, it describes itself as a "bridge between your devices". So one notification from your Phone can be seen on your tablet/laptop and vice-versa. It can also be used to transfer files, share links and other stuff. 

The share links part is what I'm most interested in, and their API allows your application to sort-of be a device on its own and share links to your devices (in my case share links to my phone).

## How's it working out for you?

Well it's definitely an improvement. I rarely get spammed with emails now, and a seemingly insignificant upside that is actually a big improvement comes from actually having the notification as a link itself, so if I click the notification I get redirected to the actual Reddit thread itself whereas in the previous iteration, I had to actually open the email and check out the link itself.

Also since Pushbullet has a website, a desktop app and an Android app, I can access those notifications from all my devices just like with emails

## How to use Pushbullet?

1. Well first create your Pushbullet account.
2. Install the apps on the devices you want to get notified on.
3. Create your access token, and if for example you have different notifications that you want grouped, you could create different devices for each group and give them different device names. From there you're going to use your device's  `iden`  which is basically an ID for the device sending the notification. You can get the device IDs by hitting this endpoint

```bash

curl --header 'Access-Token: <your_access_token_here>' \
     https://api.pushbullet.com/v2/devices

```

#### Screenshot of the different devices

4. Get the `iden` of the device you want to use and get your access token.
5. Create the app. Basically any language that can send a `get` and `post` request will do. But since I wrote my bot in Node, I'll be using Node.

## Actual code

So I only ever want to share links and get notified, and luckily enough with a single `post` request to the `create-push` endpoint you can do that, no need to install any other libraries.

[Documentation for `create-push`](https://docs.pushbullet.com/#create-push)

My notification code. I used [Axios](https://github.com/axios/axios) for my HTTP requests. You can use `fetch` if you want, it's down to preference

```javascript

notify: async (title, body, url) => {
    await axios.post(`${pbBase}/v2/pushes`,
        {
            "body": body,
            "title": title,
            "type": "link",
            "url": url,
            "sender_iden": iden
        },
        {
            headers: {
                "Access-Token": key
            }
        });
}

```

And that code runs everytime I want to get notified. My notifications now look something like this

#### insert screenshot for axios messages here

## Final thoughts

There are definitely more experiments I can think of doing with Pushbullet. Especially filesharing between my devices seems especially useful. 

That's all and I hope you got something from all of this!