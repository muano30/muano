---
Layout: 
Title: "How to prevent clickjacking and iframe in our website from hackers."
date: "2022-02-25"
---

# Introduction.

As we know that there are hackers out there always looking for opportunities to steal our user information or to fool our user in our website without the owner of the website giving them permission. Thats were the security comes in, there are ways to protect our website from such hackers or problems.
In this blog post i will share some of the tools we can use to avoid such mistakes to happen in our website.

# Body.

## Explanation.

### Clickjacking.

Is an attack that fools user into thinking that they are clicking on one thing when they are actually clicking on another.

This is an attack that tricks a user into clicking a webpage element which is invisible or disguised as another element. This can cause users to unwittingly download malware(software that is specifically designed to disrupt, damage, or gain unauthorized access to a computer system.), visit malicious web pages, provide credentials or sensitive information, transfer money, or purchase products online.

### What is used to prevent clickjacking?

There are three main ways to prevent clickjacking: Sending the proper Content Security Policy (CSP) frame-ancestors directive response headers that instruct the browser to not allow framing from other domains. The older X-Frame-Options HTTP headers is used for graceful degradation and older browser compatibility.


### Iframe

Is used to insert content from another source, such as an advertisement, into a web page. The hackers insert iframe code into saved search results of the legitimate website.


### iFrame Blocking Methods

We can protect our site from being iFramed by incorporating the correct HTTP response headers on our website. There are two different response headers that are used to block iFrame loading – X-Frame-Options and Content-Security-Policy.

### Why do some websites not allow iframe?

We have to check for HTTP response header X-Frame-Option of those sites. if its value is "DENY or SAMEORIGIN", then you can not load those website in the iframes. DENY = No one can load the website in iframe. Even the same domain page wont be able to load.



# Conclusion.

Learn more about clickjacking in this link: https://www.imperva.com/learn/application-security/clickjacking/, and learn also how to prevent the website from being iframed in this link: https://ziplineb2b.com/blog/how-to-prevent-a-website-from-being-loaded-in-an-iframe/