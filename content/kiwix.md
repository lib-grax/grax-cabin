---
title: "Kiwix"
date: 2024-09-02T13:34:47+10:00
---

## Why would you want this?
A great step toward digital sovereignty is having an offline repository of information. Whilst books are invaluable, having a dedicated offline server that stores basically an encyclopedia for you is very handy. This is where I'd like to talk about Kiwix.

# Getting started with Kiwix
[Kiwix](https://kiwix.org/en/) is open source software that is aimed at providing 'the internet' in places where it might not be available. It does this by allowing the user to download certain websites as .zim files locally on your device. The greatest example of this is ***Wikipedia***. The original goal of Kiwix was to make Wikipedia available offline. \
Once installed, preferably on linux, you can use it's UI interface to [explore](https://library.kiwix.org/#lang=eng) a range of offline wikis. Pick a couple you like. I recommend:

- Wikipedia (about 50gb without images)
- Based.cooking (luke smith's cooking website)
- Urban Prepper (emergency preparedness topics)

## Running Kiwix
Once you have your chosen .zim files, run the kiwix-serve command. This repository will now be running on port localhost:8080. If the device is on the local network, even better. Find out your ip (On Debian this is `hostname -I`) and go to another device on your network, visiting `x.x.x.x:8080` should show your Kiwix server. This is especially useful if you have a home server on a Raspberry Pi or similar. Personally I use my [Thinkpad](/thinkpad/) to host Kiwix.

