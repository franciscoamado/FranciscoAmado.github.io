---
title: "TIL: tailwindcss"
date: "2025-02-15"
description: "For thee who seeketh NOT to master the ungodly art of CSS"
---

This static website has been slowly built with Gatsby and Styled components over the years. How it looks has evolved, but maintaining consistency and flexibility in styling remains a challenge.

I'm no expert of CSS, nor do I want to become one. I'm just trying to keep the website looking consistent and flexible while still having some visual identity.

The website you see here started with a pretty ugly plain HTML, using [SkeletonCSS](http://getskeleton.com/), then moved on to a Gatsby generated website, still using SkeletonCSS. At some point I decided that it was embarassing the codebase was for not taking advantage of what Gatsby offers, and decided to do a refactor with Styled Components.

It took a lot longer than I expected, and in the end it's still incovenient when I need to change some styling, because my biggest deficiency is the CSS itself.

## Enter TailwindCSS

If you've ever wanted to move quickly with UI design, writing custom styles for each component can become tedious. TailwindCSS offers some utility-first classes, which allows for rapid styling without the overhead of maintaining a separate CSS or knowing all its intrincacies. However, I found out that the resources show how to integrate it into a new crispy clean Gatsby project, like many other tutorials out there, and not into some already built Frankenstein, with Styled Components, Skeleton and some custom CSS. This, required a bit more of consideration (head banging).

Here's what went wrong:

* I initially followed the [Shadcn](https://shadcn.com/) tutorial, which uses TailwindCSS, but it was expecting some config files to exist already, which only happens if you go through the official tailwindcss setup and most recent Gatsby project generator.
* CSS conflicted with the already existing Skeleton CSS, making it a mess. I opt-out for removing the Skeleton CSS entirely. Sad goodbye.
* Switching from Styled Components to Tailwind led to an inconsistent codebase. Well, it still is inconsistent in the inside, but at least it's good looking on the outside.

Integrating TailwindCSS into a Gatsby project built with Styled Components was a challenge in the beginning, but I found myself continuously removing references to the custom styled components I have built, and relying more on the tailwind utility classes. It became easier to change components in-place.

## Why does it matter?

Integrating TailwindCSS into a Gatsby project built with Styled Components was a challenge in the beginning, allows for:

* Rapid Prototyping: Faster UI iteration without writing custom CSS. Thank god for the tailwind IntelliSense!
* Consistency: I like how Tailwind provides a structured utility-based design approach. It really grew on me.
* Extensibility: Combining Tailwind’s utility classes with a component library like [Shadcn](https://shadcn.com/) allows me to build complex designs, without the burden of having to learn custom CSS.

If I was to start a new Gatsby project today, I’d likely opt for TailwindCSS from the beginning, leveraging its utility-first approach while avoiding Styled Components. It’s a great way to maintain a scalable, flexible design system while moving fast and shipping faster.

I realise it now. I've been avoiding learning CSS for the last decade, while still learning it the dumb way.
