---
title: "TIL: Retool"
date: "2025-01-31"
description: "When you want to prototype fast and ship faster"
---

I've been using Retool for the last couple of years (not exactly TIL) and every time I find it more useful and powerful.

If you’ve ever needed to prototype a new feature quickly in your Product, starting from the frontend may be the wrong approach.
You'd first want to make it functional, connect to the database to extract, transform and load your data. [Retool](https://retool.com/) has been the first thing I grab to build these internal applications with minimal barriers.

Retool is a low-code platform with a solution to drag and drop pre-built UI components, integrate with your databases, APIs or a 3rd-party, and a straightforward deploy.

In general, I've been using Retool to:

- **Rapid Prototyping:** Quickly assemble a functional feature using its simple UI components. For me, this the big advantage of having a "strict" design system.
- **Accessing data directly:** Connect directly to a Postgres or MySQL database, avoiding the need to build a custom API for it. This is a quick first run, followed normally by designing an API for it.
- **Custom Scripting:** Sometimes the data comes close to what you'd need for the Frontend client, but not exactly right. Extending the prototype with some JavaScript allows me to understand some assumptions of the Frontend and design a better API without the fear of breaking changes.
- **Integration testing:** Testing how the Backend will behave, even before we have a Frontend deployed. Coming from an iOS background, I'm used to seeing things working outside of the data bubble and I get to have a feel for the ergonomics of the API.

## Why does it matter?

If I was to start an idea or business today I'd simply start with Retool (or some open-source alternative to it, [Budibase](https://www.opensourcealternative.to/project/budibase)) and build from there. Either way, it's a great tool to have in your toolbox, especially when you have limited time/effort and want to prototype fast and ship faster.
