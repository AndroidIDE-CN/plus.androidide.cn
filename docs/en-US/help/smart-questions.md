# The Art of Asking Smart Questions

**How To Ask Questions The Smart Way**

Copyright © 2001,2006,2014 Eric S. Raymond, Rick Moen

The original English version of this guide is copyrighted by Eric S. Raymond and Rick Moen.

Original URL: [http://www.catb.org/~esr/faqs/smart-questions.html](http://www.catb.org/~esr/faqs/smart-questions.html)

Copyleft 2001 by D.H.Grand(nOBODY/Ginux), 2010 by Gasolin, 2015 by Ryan Wu

This Chinese guide is based on the original version 3.10 and the latest translation from the 2010 version translated by [Gasolin](https://github.com/gasolin); this document is sourced from [How-To-Ask-Questions-The-Smart-Way](https://github.com/ryanhanwu/How-To-Ask-Questions-The-Smart-Way)

To assist in pointing out translation issues, **please [submit an issue](https://github.com/ryanhanwu/How-To-Ask-Questions-The-Smart-Way/issues/new), or directly [send a pull request](https://github.com/ryanhanwu/How-To-Ask-Questions-The-Smart-Way/compare) to me.**

## Table of Contents
* [Disclaimer](#disclaimer)
* [Introduction](#introduction)
* [Before You Ask](#before-you-ask)
* [When You Ask](#when-you-ask)
  * [Choose Your Forum Carefully](#choose-your-forum-carefully)
  * [Stack Overflow](#stack-overflow)
  * [Web Forums and IRC Channels](#web-forums-and-irc-channels)
  * [Step Two: Use Project Mailing Lists](#step-two-use-project-mailing-lists)
  * [Use Meaningful and Specific Subject Headings](#use-meaningful-and-specific-subject-headings)
  * [Make It Easy to Reply](#make-it-easy-to-reply)
  * [Write in Clear, Grammatical, and Correctly-Spelled Language](#write-in-clear-grammatical-and-correctly-spelled-language)
  * [Send Questions in Accessible and Standard Formats](#send-questions-in-accessible-and-standard-formats)
  * [Be Precise and Informative About Your Problem](#be-precise-and-informative-about-your-problem)
  * [Volume is Not Precision](#volume-is-not-precision)
  * [Don't Rush to Claim You Found a Bug](#dont-rush-to-claim-you-found-a-bug)
  * [Groveling is Not a Substitute for Doing Your Homework](#groveling-is-not-a-substitute-for-doing-your-homework)
  * [Describe the Problem's Symptoms, Not Your Guesses](#describe-the-problems-symptoms-not-your-guesses)
  * [Describe the Problem's Symptoms in Chronological Order](#describe-the-problems-symptoms-in-chronological-order)
  * [Describe the Goal, Not the Step](#describe-the-goal-not-the-step)
  * [Don't Ask for Private Replies](#dont-ask-for-private-replies)
  * [Be Explicit About Your Question and Needs](#be-explicit-about-your-question-and-needs)
  * [When Asking About Code](#when-asking-about-code)
  * [Don't Post Homework Questions](#dont-post-homework-questions)
  * [Prune Pointless Queries](#prune-pointless-queries)
  * [Don't Flag Your Question as "Urgent," Even If It Is](#dont-flag-your-question-as-urgent-even-if-it-is)
  * [Courtesy Never Hurts, and Sometimes Helps](#courtesy-never-hurts-and-sometimes-helps)
  * [Follow Up with a Brief Note on the Solution](#follow-up-with-a-brief-note-on-the-solution)
* [How to Interpret Answers](#how-to-interpret-answers)
  * [RTFM and STFW: How to Tell You've Seriously Screwed Up](#rtfm-and-stfw-how-to-tell-youve-seriously-screwed-up)
  * [If You Still Don't Understand](#if-you-still-dont-understand)
  * [Dealing with Rudeness](#dealing-with-rudeness)
* [How to Avoid Looking Like a Loser](#how-to-avoid-looking-like-a-loser)
* [Questions Not to Ask](#questions-not-to-ask)
* [Good and Bad Questions](#good-and-bad-questions)
* [If You Don't Get an Answer](#if-you-dont-get-an-answer)
* [How to Answer Questions Well](#how-to-answer-questions-well)
* [Related Resources](#related-resources)
* [Acknowledgments](#acknowledgments)

## Disclaimer

Many projects link to this guide in their help documentation. This is great, and exactly the kind of use we want. But if you are a project administrator and are trying to create a hyperlink to this guide, please prominently note near the hyperlink:

**This guide does not provide actual support services for this project!**

We have learned the hard way that the lack of such a statement leads to endless harassment from fools who believe that publishing this guide means we are obligated to solve all the world's technical problems.

If you are reading this guide seeking help with something and leave thinking you can get direct assistance from the authors, then you are one of the fools we mentioned earlier. Don't ask us questions; we will ignore you. This guide is intended to teach you how to get help from people who actually understand the software or hardware issues you are facing, and 99% of the time, that won't be us. Unless you are sure that one of the authors of this guide happens to be an expert in the area of your problem, please don't bother us, and everyone will be happier.

## Introduction

In the world of [hackers](http://www.catb.org/~esr/faqs/hacker-howto.html), the quality of the answers you get to your technical questions depends largely on how you ask them and the difficulty of the question. This guide will teach you how to ask questions in a way that will get you satisfactory answers.

With the rise of Open Source software, you can often get answers from more experienced users that are just as good as those from hackers, which is a **good thing**; compared to hackers, users are often more tolerant of the common problems faced by beginners. Nevertheless, treating these experienced users in the way we recommend here is usually the most effective way to get useful answers from them.

First, you should understand that hackers love challenging problems or questions that stimulate their thinking. If we weren't like this, we wouldn't be the people you want to ask. If you give us an interesting question to chew on, we'll be grateful. Good questions are a stimulus and a gift. Good questions can improve our understanding and often reveal issues we hadn't considered or thought about before. For hackers, "Good question!" is a sincere and hearty compliment.

That said, hackers have a reputation for being dismissive or arrogant towards simple questions, which can make us seem hostile to beginners or the ignorant, but that's not really the case.

We are unapologetically contemptuous of people who don't want to think or who don't do their homework before asking questions. Such people are time sinks — they take without giving back, and they waste time we could have spent on more interesting questions or more deserving people. We call such people `losers` (for historical reasons, we sometimes spell it `lusers`).

We are aware that many people just want to use the software we write, and they have no interest in learning technical details. For most people, computers are just tools, a means to an end. They have lives and more important things to do. We understand this, and we don't expect everyone to be interested in the technical issues that fascinate us. Nevertheless, we tailor our style of answering questions to those who are genuinely interested and willing to actively participate in solving problems. This won't change, nor should it: otherwise, we would be less efficient at what we do best.

We are (mostly) volunteers. We take time out of our busy lives to answer questions, and we are often overwhelmed by the volume of questions. So we ruthlessly filter out certain topics, especially those that look like they come from losers, so we can spend our time more efficiently answering questions from `winners`.

If you dislike our attitude, arrogance, or condescension, try to put yourself in our shoes. We are not asking you to bow to us — in fact, most of us are more than willing to engage with you as equals, as long as you put in a little effort to meet the basic requirements. But it is inefficient for us to help those who won't help themselves. Ignorance is fine, but feigning stupidity is not.

So, you don't have to be technically competent to get our attention, but you must demonstrate the qualities that will lead you to competence — intelligence, thoughtfulness, attentiveness, and a willingness to actively participate in solving problems. If you can't do these things that set you apart, we recommend that you pay for a commercial support contract rather than asking hackers to help you for free.

If you decide to ask us for help, you certainly don't want to be seen as a loser, much less become one. The best way to get a quick and effective answer is to ask like a winner — smart, confident, and with a clear idea of how to solve the problem, but needing a little help with a specific issue.

(We welcome suggestions for improving this guide. You can send your suggestions to [esr@thyrsus.com](esr@thyrsus.com) or [respond-auto@linuxmafia.com](respond-auto@linuxmafia.com). However, please note that this is not a general guide to [netiquette](http://www.ietf.org/rfc/rfc1855.txt), and we generally reject suggestions that do not help in getting useful answers in technical forums).

## Before You Ask

Before you ask a technical question via email, newsgroup, or chat room, please do the following:

1. Try to find the answer by searching the archives of the forum you plan to ask.
2. Try to find the answer by searching the web.
3. Try to find the answer by reading the manual.
4. Try to find the answer by reading the FAQ.
5. Try to find the answer by inspecting or experimenting.
6. Try to find the answer by asking a skilled friend.
7. If you're a programmer, try to find the answer by reading the source code.

When you ask your question, state that you've done these things first; this will help establish that you're not a lazy sponge wasting people's time. Better yet, also mention what you've **learned** from doing these things. We like answering questions from people who have demonstrated that they can learn from the answers.

Use tactics like Googling for error messages (searching [Google Groups](http://groups.google.com/) as well as the web), which might lead you straight to a document or mailing list thread that solves your problem. Even if it doesn't, saying `I googled for the following phrase but didn't find anything useful` in an email or newsgroup posting is a good thing to do, even if it just indicates that search engines can't help. Doing this (and including the search terms you used) also helps others who have similar problems find your question via search engines.

Don't rush. Don't expect to solve a complex problem with a few seconds of Googling. Before asking experts, read the FAQ, relax, sit back, and take some time to think about the problem. Trust us, they will be able to tell from your question how much reading and thinking you've done, and if you are well-prepared, you are more likely to get an answer. Don't throw all your questions out at once just because your first search didn't find an answer (or found too many).

Prepare your question, and think it through carefully. Hasty questions get hasty answers, or none at all. The more effort you show in trying to solve the problem before asking for help, the more likely you are to get real help.

Be careful not to ask the wrong question. If your question is based on faulty assumptions, a typical hacker (J. Random Hacker) is likely to think `stupid question...` and reply with a useless literal answer, hoping you'll learn from the reply (rather than the answer you wanted).

Never assume you are **entitled** to an answer; you aren't. After all, you aren't paying for this service. You will **earn** an answer by asking a substantive, interesting, and thought-provoking question — one that has the potential to contribute to the community's experience, rather than just passively extracting knowledge from others.

On the other hand, showing that you are willing to do some work to find the answer is a great start. `Can someone give me a hint?`, `What am I missing in this example?`, and `Where should I look next?` are more likely to get a response than `Please post the exact steps I need to follow.` Because you show that if someone can point you in the right direction, you have the ability and determination to complete the task.

## When You Ask

### Choose Your Forum Carefully

Be careful where you ask your question. If you do the following, you are likely to be ignored or labeled a loser:

* Posting your question in a forum that is off-topic.
* Posting a very elementary question in a forum for advanced technical discussions, or vice versa.
* Cross-posting the same question to too many different newsgroups.
* Sending private email to people who are neither acquaintances nor obligated to help you.

Hackers will filter out questions that are off-topic to protect their communication channels from being flooded with irrelevant stuff. You don't want this to happen to you.

So, the first step is to find the right forum. Again, Google and other search engines are your friends; use them to find the websites most closely related to the hardware or software problem you're having. Usually, there are links to FAQs, mailing lists, and related documentation. If your efforts (including **reading** the FAQ) don't yield results, the site may have a bug-reporting process or link; if so, follow it.

Sending email to strangers or forums is probably the riskiest thing you can do. For example, don't assume that the author of a content-rich webpage wants to be your free consultant. Don't be too optimistic about whether your question will be welcome — if you're not sure, send it elsewhere, or don't send it at all.

When choosing a forum, newsgroup, or mailing list, don't rely too much on its name; check the FAQ or license to see if your question is on-topic. Before posting, browse through existing threads to get a feel for the culture. In fact, searching the archives of the newsgroup or mailing list for keywords related to your question is an excellent idea; you might find the answer there. Even if you don't, it will help you formulate a better question.

Don't shotgun all the help channels at once; this is like shouting and is annoying. Take it one at a time.

Know your topic! One of the classic mistakes is asking about Unix or Windows program interfaces in a forum dedicated to a language, toolkit, or tool that is cross-platform. If you don't understand why this is a mistake, you'd better not ask anything until you understand the difference.

Generally, asking questions in carefully selected public forums is more likely to get useful answers than asking the same question in private forums. There are several reasons for this: one is the number of potential respondents, and the other is the size of the audience. Hackers are more willing to answer questions that will help many people.

Understandably, seasoned hackers and authors of popular software are receiving too many misdirected messages. Like the straw that breaks the camel's back, your addition might be the one that pushes the situation over the edge — it has happened several times that authors of popular software have stopped providing support due to the flood of unbearable junk in their private mailboxes.

### Stack Overflow

Search, *then* ask on Stack Exchange.

In recent years, the Stack Exchange community has become a major channel for answering technical and other questions, especially for open-source projects.

Since Google indexes are up-to-date, search on Google before looking at Stack Exchange. There's a high chance someone has already asked a similar question, and Stack Exchange sites often appear at the top of search results. If you don't find any answers on Google, then go to the specific site related to your topic. Using tags can help narrow your search results.

If you still can't find anything useful for your question, post your question on the most relevant site. When asking, make good use of formatting tools, especially for code, and add relevant tags (particularly programming languages, operating systems, or library/package names). When someone asks for more information, edit your post to add it [Note: don't post a reply or answer!]. If you find an answer helpful, click the up arrow to vote for it; if an answer provides the correct solution to your problem, click the checkmark below the vote button to mark it as the accepted answer.

Stack Exchange has grown to [over a hundred sites](https://stackexchange.com/sites), and here are the most commonly used ones:

* Super User is for general computer questions. If your question is not about code or programming but about things like network connections, go here.
* Stack Overflow is for programming-related questions.
* Server Fault is for server and network administration-related questions.

### Web Forums and IRC Channels

Local user groups, or the Linux distribution you use, might be advertising their web forums or IRC channels and offering help for beginners (in some non-English-speaking countries, beginner forums are likely to be mailing lists). These are good places to start asking questions, especially if you think your problem might be relatively simple or common. Ad-sponsored IRC channels are openly welcoming places to ask questions and often provide immediate responses.

In fact, if the problem occurs only with a specific Linux distribution's version (which is common), it's better to ask in that distribution's forum or mailing list before asking in the program's own forum or mailing list. Otherwise, the project's hackers might just reply with "Use **our** version."

Before posting in any forum, check if there's a search function. If there is, try searching for a few keywords related to your problem; it might help. If you've already done a general web search (which you should have), search the forum as well; search engines might not have indexed all the forum's content.

There's a growing trend for user support to be provided via forums or IRC channels, with email mostly reserved for communication among project developers. So, it's best to seek help related to a project in its forum or IRC channel first.

When using IRC, it's best not to post a long problem description right away; some people call this channel flooding. It's better to start the conversation with a one-sentence description of the problem.

### Step Two: Use Project Mailing Lists

When a project provides a developer mailing list, ask the list rather than individual members, even if you're sure the individual can best answer your question. Check the project's documentation and homepage to find the project's mailing list and use it. There are several good reasons for this:

* Any question good enough to ask an individual developer will benefit the entire project group. Conversely, if you think your question is too stupid for the entire project group, it's no excuse to harass an individual developer.
* Asking the list distributes the burden among the developers; individual developers (especially project leaders) might be too busy to answer your question.
* Most mailing lists are archived, and the archives are indexed by search engines. If you ask the list and get an answer, others can find your question and answer via web search in the future, avoiding the need to ask again.
* If certain questions are frequently asked, developers can use this information to improve the documentation or the software itself to make it clearer. If you ask privately, no one can see the full context of the most common questions.

If a project has both "user" and "developer" (or "hacker") mailing lists or forums, and you're not working with the source code, ask the "user" list or forum. Don't assume you'll be welcome in the developer list; most developers will see your question as noise interfering with their work.

However, if you're **sure** your question is special and hasn't gotten a response in the "user" list or forum after a few days, try the "developer" list or forum. It's a good idea to lurk for a few days before posting to understand the local customs (this is actually good advice for participating in any private or semi-private list).

If you can't find a project's mailing list but only the project maintainer's email address, go ahead and email them. Even in this case, don't assume the (project) mailing list doesn't exist. In your email, state that you've tried but couldn't find a suitable mailing list and that you don't mind your email being forwarded to others (many people believe that private emails, even if not secret, shouldn't be made public. By allowing your email to be forwarded, you give the recipient the option to handle your email as they see fit).

### Use Meaningful and Specific Subject Headings

In mailing lists, newsgroups, or forums, a subject line of about 50 characters or less is a good opportunity to grab the attention of experienced experts. Don't waste this opportunity with chatter like `Help`, `Please`, or `Urgent` (let alone `HELP!!!!`; such subject lines are reflexively ignored). Don't try to impress us with your level of distress; instead, use this space to describe the problem in a concise and specific way.

A good subject line follows the `Goal -- Deviation` pattern, as many technical support organizations do. In the `Goal` part, specify which thing or group of things is having a problem, and in the `Deviation` part, describe the deviation from expected behavior.

> Stupid question: Help! My laptop screen isn't working!

> Smart question: X.org 6.8.1 mouse pointer is distorted on MV1005 chipset, Brand X video card.

> Smarter question: X.org 6.8.1 mouse pointer is distorted on Brand X video card with MV1005 chipset.

The process of writing a `Goal -- Deviation` description helps you organize your thoughts about the problem. What is affected? Just the mouse pointer or other graphics too? Only in X.org's X version? Or only in version 6.8.1? Only on Brand X video cards? Or only the MV1005 model? A hacker can immediately understand your environment **and** your problem at a glance.

In summary, imagine you're searching an archive of thread titles. Make your subject line reflect the problem so that the next person searching for a similar problem can find the thread without having to ask the same question again.

If you're asking a question in a reply, remember to change the subject line to indicate you're asking a question. A subject line like `Re: Test` or `Re: New bug` won't get much attention. Also, when quoting previous messages, trim unnecessary content to leave a trail for new readers.

For threads, don't just click reply to start a new thread; this limits your audience. Some mail readers, like mutt, allow users to sort by thread and hide messages by collapsing threads, so people who do this won't see your message.

Just changing the subject line isn't enough. Mutt and some other mail readers also check other information outside the subject line to assign threads. So, it's better to send a new message.

On web forums, good question-asking practices are slightly different because threads are tightly coupled to specific messages, and content outside the thread is usually invisible. So, asking a question by replying, rather than changing the subject line, is acceptable. Not all forums allow separate subject lines in replies, and even if they do, hardly anyone will look at them. However, asking a question by replying is inherently ambiguous because it will only be read by people currently viewing the thread. So, unless you **only** want to ask the currently active people in the thread, it's better to start a new thread.

### Make It Easy to Reply

Ending your question with `Please reply to...` will likely get you no answer. If you think it's too much trouble to set up your mail client to reply to a specific address, we think it's too much trouble to think about your question. If your mail program doesn't support this, [get a better one](http://linuxmafia.com/faq/Mail/muas.html); if your operating system doesn't support such a mail program, get a better one.

In forums, asking for replies via email is very rude unless you think the reply might be sensitive (someone might want you, not the entire forum, to know the answer). If you just want an email notification when someone replies to the thread, ask the web forum to send it to you. Almost all forums support features like `Track this thread` or `Email me when there's a reply`.

### Write in Clear, Grammatical, and Correctly-Spelled Language

We've found from experience that sloppy questioners usually write sloppy code and think sloppily (I bet on it). Answering careless people is not worth the time; we'd rather spend it elsewhere.

Correct spelling, punctuation, and capitalization are important. Generally, if you find it too much trouble to care about these, we find it too much trouble to care about your question. Spend a little extra effort to polish your language; it doesn't need to be stiff or formal — in fact, hacker culture values the accurate use of informal, slang, and humorous language. But it **must be** accurate, and it should show that you're thinking and paying attention to the problem.

Spell correctly, use proper punctuation and capitalization, don't confuse `its` with `it's`, `loose` with `lose`, or `discrete` with `discreet`. Don't **TYPE IN ALL CAPS**, which is considered rude shouting (all lowercase is almost as bad because it's hard to read. [Alan Cox](http://en.wikipedia.org/wiki/Alan_Cox) might get away with it, but you can't).

More plainly, if you write like a semi-literate [Note: [noob](http://zh.wikipedia.org/wiki/小白)], you'll likely be ignored. Don't use instant messaging shorthand or [leetspeak](http://zh.wikipedia.org/wiki/火星文), like abbreviating `的` as `d`, which makes you look like a noob trying to save keystrokes. Worse, if you write like a child scribbling, you're definitely asking for trouble; no one will take you seriously (or at most, you'll get a lot of sarcastic replies).

If you're asking in a non-native language forum, you can make minor spelling and grammar mistakes, but never skimp on thinking (yes, we can usually tell the difference). Also, unless you know the respondent's language, use English. Busy hackers will usually delete messages in languages they don't understand. English is the lingua franca of the internet; using it minimizes the chance your question will be deleted unread.

If English is your second language, it's good to alert potential respondents to potential language difficulties:
[Note: The following is provided in English for use]

> English is not my native language; please excuse typing errors.

* English is not my native language; please excuse my typos or grammar.

> If you speak $LANGUAGE, please email/PM me;
> I may need assistance translating my question.

* If you speak **a certain language**, please email/PM me;
* I need someone to help me translate my question.

> I am familiar with the technical terms,
> but some slang expressions and idioms are difficult for me.

* I'm familiar with technical terms, but I struggle with slang or idiomatic expressions.

> I've posted my question in $LANGUAGE and English.
> I'll be glad to translate responses, if you only use one or the other.

* I've posted my question in **a certain language** and English.
* If you reply in only one language, I'll gladly translate the response into the other.

### Send Questions in Accessible and Standard Formats

If you make your question hard to read, it will likely be ignored. People prefer to read questions that are easy to understand, so:

* Use plain text, not HTML ([turning off HTML](http://archive.birdhouse.org/etc/evilmail.html) isn't hard).
* MIME attachments are usually okay if they have real content (like source code or patches), not just mail program templates (like copies of the message body).
* Don't send emails with lines that are one sentence but wrap to multiple lines (this makes it hard to reply to parts of the message). Assume your readers are using 80-character-wide terminals; set your line wrap to less than 80 characters.
* However, **don't** set a fixed width for special files (like log files or session records). Include the data as-is so respondents can be confident they're seeing what you saw.
* In English forums, don't use `Quoted-Printable` MIME encoding. This encoding might be necessary for non-ASCII languages, but many mail programs don't support it. When they handle line breaks, the `=20` symbols scattered throughout the text are ugly, distracting, and can even break the meaning.
* Never, **ever**, expect hackers to read documents in closed formats like Microsoft Word or Excel. Most hackers react to this like someone dumping steaming pig manure on your doorstep. Even if they can handle it, they hate doing so.
* If you're sending email from a Windows machine, turn off Microsoft's stupid `Smart Quotes` feature (from [Options] > [Proofing] > [AutoCorrect Options], uncheck the `Smart Quotes` box) to avoid scattering garbage characters in your email.
* In forums, don't overuse `emoticons` and `HTML` features (when available). One or two emoticons are usually fine, but fancy colored text tends to make you look like a clown. Excessive use of emoticons, colors, and fonts makes you look like a giggling schoolgirl. This is usually not a good idea unless you're more interested in sex than answers.

If you're using a graphical mail program (like Microsoft Outlook or similar), note that their default settings might not meet these requirements. Most such programs have a menu-based `View Source` command; use it to check the mail in your Sent folder to ensure it's plain text and free of weird characters.

### Be Precise and Informative About Your Problem

* Carefully and clearly describe the symptoms of your problem or bug.
* Describe the environment where the problem occurs (machine configuration, operating system, application, and related information), including vendor distribution and version numbers (e.g., `Fedora Core 4`, `Slackware 9.1`, etc.).
* Describe how you researched and understood the problem before asking.
* Describe the diagnostic steps you took to identify the problem before asking.
* Describe any recent hardware or software changes that might be relevant.
* Provide a way to `reproduce the problem in a controlled environment` if possible.

Try to anticipate the questions a hacker might ask and answer them in advance.

Of these points, providing a way to reproduce the problem is especially important when reporting what you think might be a code issue. Doing so greatly increases your chances of getting a useful answer quickly.

[Simon Tatham](http://www.chiark.greenend.org.uk/~sgtatham/) has written an excellent essay titled [How to Report Bugs Effectively](http://www.chiark.greenend.org.uk/~sgtatham/bugs-cn.html). I highly recommend reading it.

### Volume is Not Precision

You need to provide precise, informative content. This doesn't mean simply dumping huge chunks of error code or data into your question. If you have a large, complex test case that reproduces a program crash, try to trim it down to the smallest possible size.

This has at least three benefits.
First, it shows you've made an effort to simplify the problem, which increases your chances of getting an answer;
Second, simplifying the problem makes it more likely you'll get a **useful** answer;
Third, in the process of refining your bug report, you might find the solution or a workaround yourself.

### Don't Rush to Claim You Found a Bug

When you encounter a problem using software, unless you are very, **very** sure, don't claim you've found a bug. Hint: Unless you can provide a source code patch that fixes the problem or a regression test showing that the previous version behaved incorrectly, you're probably not completely sure. The same applies to web pages and documents; if you (claim to) have found a `Bug` in a document, you should be able to provide a fix or an alternative document.

Remember, many other users haven't encountered the problem you found, or you would have found it while reading the documentation or searching the web (you **did** do these before complaining, right?). This also means it's more likely you're wrong than the software is.

Software authors work very hard to make their software as perfect as possible. Claiming you've found a bug questions their competence, and even if you're right, it might offend some of them. This is especially true if you shout `Bug` in your subject line.

When asking, even if you're privately very sure you've found a real bug, it's better to write as if **you** did something wrong. If there really is a bug, you'll see it in the replies. This way, if there is a bug, the maintainer will apologize to you, which is better than annoying someone and then owing them an apology.

### Groveling is Not a Substitute for Doing Your Homework

Some people understand they shouldn't be rude or arrogant when asking for help, but they choose the opposite extreme — groveling: `I know I'm just a pathetic newbie, a loser, but...`. This is both annoying and useless, especially when accompanied by a vague description of the actual problem.

Don't waste your time and mine with primitive primate tricks. Instead, describe the background conditions and your problem as clearly as possible. This better positions you than groveling.

Some web forums have sections specifically for newbie questions. If you really think you have a beginner's problem, go there, but don't grovel there either.

### Describe the Problem's Symptoms, Not Your Guesses

It's not helpful to tell hackers what you think is causing the problem. (If your diagnosis is so good, why are you asking for help?), so make sure you tell them the symptoms of the problem, not your interpretations or theories; let the hackers do the diagnosing. If you think stating your guesses is important, clearly state that they are guesses and describe why they don't work.

**Stupid question**

> I keep getting SIG11 errors when compiling the kernel,
> I suspect a stray wire is touching the motherboard's traces, what's the best way to check this?

**Smart question**
> My homebuilt FIC-PA2007 motherboard with an AMD K6/233 CPU (VIA Apollo VP2 chipset),
> 256MB Corsair PC133 SDRAM, keeps getting SIG11 errors when compiling the kernel,
> but only after 20 minutes of uptime. Rebooting doesn't help, but leaving it off overnight does.
> I've replaced all the memory, no effect. Here's the relevant portion of the standard compile log…

Since this point seems hard for many to grasp, here's a phrase to remind you: `All diagnosticians come from Missouri.` The official motto of the U.S. State Department is: `Show me` (from Congressman Willard D. Vandiver's 1899 speech: `I come from a state that raises corn and cotton and cockleburs and Democrats, and frothy eloquence neither convinces nor satisfies me. I am from Missouri. You have got to show me.`) For diagnosticians, this isn't skepticism but a real and useful need to see the raw evidence as close as possible to what you saw, not your guesses and conclusions. So, show us!

### Describe the Problem's Symptoms in Chronological Order

The sequence of events leading up to the problem is often the most useful clue for finding the cause. So, your description should include the steps you took and the machine and software's responses until the problem occurred. For command-line issues, providing a session log (e.g., generated by a script tool) and referencing relevant lines (e.g., 20 lines) is very helpful.

If the failing program has diagnostic options (like -v for verbose output), try selecting options that add debugging information to the log. Remember, `more` isn't `better`. Choose an appropriate debugging level to provide useful information without drowning the reader in garbage.

If your description is long (more than four paragraphs), it helps to summarize the problem at the beginning and then detail it chronologically. This way, hackers know what to look for when reading your log.

### Describe the Goal, Not the Step

If you're trying to figure out how to do something (rather than reporting a bug), describe your goal first, then the specific steps where you're stuck.

People often seeking technical help have a higher-level goal in mind and get stuck on what they think is the specific path to it, without realizing the path itself might be flawed. This leads to a lot of wasted effort.

**Stupid question**
> How do I get the hex RGB value from the color picker in this drawing program?

**Smart question**
> I'm trying to replace the color table in an image with one of my own choosing. The only way I know to do this is by editing each color table slot,
> but I can't get the hex RGB value from the color picker in this drawing program.

The second question is smarter; you might get a reply like `suggest using a different, more suitable tool`.

### Don't Ask for Private Replies

Hackers believe the problem-solving process should be open and transparent, so if more experienced people notice something incomplete or incorrect, the initial reply can and should be corrected. Also, the helper gets some reward: their competence and knowledge are seen by their peers.

When you ask for a private reply, this process and reward are interrupted. Don't do this; let the **respondent** decide whether to reply privately — if they do, it's usually because they think the question is too poorly written or shallow to interest others.

There's a limited exception to this rule: if you're sure the question will generate many identical replies, the magic phrase is `Email me, and I'll summarize the replies for the forum`. Trying to save the mailing list or newsgroup from a flood of identical replies is very polite — but you must keep your promise.

### Be Explicit About Your Question and Needs

Open-ended questions are nearly endless time sinks. The people most likely to give you useful answers are usually the busiest (they're busy because they do most of the work themselves). Such people have little tolerance for open-ended time sinks, so they tend to dislike open-ended questions.

If you explicitly state what you need the respondent to do (e.g., provide guidance, send a piece of code, review your patch, or something else), you're most likely to get a useful answer. This sets a time and effort limit, allowing the respondent to focus on helping you. This is great.

To understand the experts' world, think of expertise as an abundant resource and reply time as a scarce resource. The less time you ask them to spend, the more likely you are to get an answer from a truly expert and busy person.

So, define your question to minimize the time experts need to identify and answer it. This skill is quite helpful in getting useful answers — but it's usually different from simplifying the problem. So, asking `I'd like to understand X better; can you point me to a good explanation?` is usually better than `Can you explain X?` If your code doesn't work, asking someone to look at where it's going wrong is usually wiser than asking them to fix it for you.

### When Asking About Code

Don't ask others to debug problematic code without giving them a starting point. Posting hundreds of lines of code and saying `It doesn't work` will get you ignored. Posting a few dozen lines and saying `After line 7, I expected <x>, but got <y>` is more likely to get a response.

The most effective way to describe a program problem is to provide the smallest possible bug-demonstrating test case. What's the smallest test case? It's the essence of the problem; a small program fragment that **just** demonstrates the abnormal behavior without including other distracting content. How do you make the smallest test case? If you know which line or block of code causes the abnormal behavior, copy it and add just enough code to reproduce the issue (e.g., enough to compile/interpret/process the code). If you can't narrow it down to a specific block, copy the code and remove parts that don't affect the problem behavior. In short, the smaller the test case, the better (see [Volume is Not Precision](#volume-is-not-precision)).

Generally, creating a small test case isn't easy, but it's a good habit to try first. This approach can help you understand how to solve the problem yourself — and even if your attempt fails, hackers will see you've made an effort to find the answer, making them more willing to help.

If you just want someone to review your code, say so at the beginning, and be sure to mention which part you think needs special attention and why.

### Don't Post Homework Questions

Hackers are good at spotting homework questions; most of us have solved them ourselves. These problems are for **you** to solve; you'll learn from them. You can ask for hints, but don't ask for complete solutions.

If you suspect you have a homework problem but can't solve it, try asking in user groups, forums, or (as a last resort) the project's **user** mailing list or forum. Although hackers **will** spot it, some experienced users might still give you hints.

### Prune Pointless Queries

Avoid ending questions with pointless phrases like `Can someone help me?` or `Is there an answer?`.

First: If your question description isn't good, this is just adding insult to injury.

Second: Since this is redundant, hackers will be annoyed — and usually reply with logically correct but meaningless answers like `Yes, someone can help you` or `No, there's no answer`.

Generally, avoid yes/no, true/false, or have/don't have questions unless you want [yes/no answers](https://strcat.de/questions-with-yes-or-no-answers.html).

### Don't Flag Your Question as "Urgent," Even If It Is

This is your problem, not ours. Claiming `Urgent` is likely to backfire: most hackers will delete rude and selfish attempts to get immediate attention. Worse, the word `Urgent` (or other attention-grabbing titles) is often filtered by spam filters — the people you hope will see your question might never see it.

There's a half-exception: if you're in a high-profile place that excites hackers, it might be worth doing. In this case, if you're under time pressure, politely mention it, and people might be interested in answering faster.

Of course, this is risky because what excites hackers might not excite you. For example, posting from the NASA International Space Station (ISS) with such a title is fine, but using self-important charity or political reasons is not. In fact, posting something like `Urgent: Help me save this furry little seal!` will definitely get you ignored or annoy hackers, even if they think furry little seals are important.

If you find this hard to believe, read the rest of this guide a few more times until you understand before posting.

### Courtesy Never Hurts, and Sometimes Helps

Be polite. Use `Please` and `Thank you for your attention` or `Thank you for your consideration`. Let people know you appreciate their time and free help.

Frankly, this isn't as important as being clear, correct, precise, grammatical, and avoiding proprietary formats (and doesn't replace them). Hackers generally prefer slightly brusque but technically sharp bug reports over polite but vague ones. (If this confuses you, remember we value questions based on what they can teach us.)

However, if you have a series of questions to solve, being polite will definitely increase your chances of getting useful responses.

(We've noticed that since this guide was published, the only serious negative feedback from seasoned hackers has been about pre-thanking. Some hackers feel `Thanks in advance` implies no need to thank anyone later. Our advice is to either say `Thanks in advance` **and** thank respondents later, or express gratitude differently, like `Thank you for your attention` or `Thank you for your consideration`.)

### Follow Up with a Brief Note on the Solution

After your problem is solved, send a note to everyone who helped you, letting them know how it was resolved and thanking them again. If the problem attracted widespread attention in a newsgroup or mailing list, it's appropriate to post a follow-up there.

The best way to do this is to reply to the original message with a subject line including `FIXED`, `RESOLVED`, or an equally obvious marker. In a busy mailing list, a potential respondent seeing threads `Problem X` and `Problem X - RESOLVED` knows not to waste time (unless they personally find `Problem X` interesting), so they can spend time on other problems.

The follow-up doesn't need to be long or detailed; a simple `Hi, it turned out to be a cable problem! Thanks everyone – Bill` is better than nothing. In fact, unless the conclusion is highly technical, a short and sweet summary is better than a lengthy one. Describe how the problem was solved, but don't replay the entire troubleshooting process.

For deep problems, posting a debugging log summary is helpful. Describe the final state, explain what solved the problem, and **then** note any pitfalls to avoid. The pitfalls section should come after the correct solution and other summary material, not be presented as a detective story. Listing the names of those who helped will earn you more friends.

Besides being polite and informative, this type of follow-up helps others in the mailing list/newsgroup/forum find the solution to your problem, benefiting them too.

At the very least, this follow-up gives everyone who helped a sense of satisfaction from seeing the problem resolved. If you're not a technical expert or hacker, trust us, this feeling is very important to the masters or experts you asked for help. Unsolved problems are frustrating; hackers love to see problems solved. Good deeds are rewarded; satisfy their desire, and you'll reap the benefits next time you ask.

Think about how to prevent others from encountering similar problems in the future. Ask yourself if writing a document or adding a FAQ would help. If so, send them to the maintainers.

In the hacker community, this kind of good follow-up is actually more important than traditional courtesy and is how you build a good reputation by treating others well. This is a very valuable asset.

## How to Interpret Answers

<a id="rtfm"></a>
### RTFM and STFW: How to Tell You've Seriously Screwed Up

There's an ancient and hallowed tradition: if you get a `RTFM (Read The Fucking Manual)` response, the respondent thinks you **should have read the fucking manual**. And basically, they're right; you should have.

RTFM has a younger relative. If you get a `STFW (Search The Fucking Web)` response, the respondent thinks you **should have searched the fucking web**. They're probably right too; go search. (A gentler version is **[Google is your friend](http://lmgtfy.com/)**!)

In forums, you might also be asked to search the archives. In fact, someone might even kindly provide a thread where the problem was solved before. But don't rely on this kindness; search the archives before asking.

Usually, people who reply with one of these phrases will give you a manual or URL containing what you need, and they're probably reading it while typing. These responses mean the respondent thinks:

* **The information you need is easily available**;
* **You'll learn more by searching for it yourself than by having it spoon-fed to you**.

You shouldn't be offended; **by hacker standards, they've shown you some attention and haven't ignored your request**. You should thank them for their grandmotherly kindness.

### If You Still Don't Understand

If you don't understand the response, don't immediately ask for an explanation. Try to understand it as you did when trying to solve the problem yourself (using manuals, FAQs, the web, or skilled friends). If you really need an explanation, show that you've learned something from the response.

For example, if I reply: `It seems the zentry is stuck; you should clear it first.`, then, this is a **bad** follow-up question: `What's a zentry?` A **good** follow-up would be: `Oh~~~ I read the manual but only the -z and -p parameters mention zentries, and neither clearly explains how to clear it. Do you mean one of these two? Or did I miss something?`

### Dealing with Rudeness

Much of what seems like rudeness in hacker circles isn't meant to offend. Rather, it's a direct, no-nonsense communication style that focuses on solving problems rather than making people feel comfortable but being vague.

If you feel offended, try to react calmly. If someone really steps out of line, elders in the mailing list, newsgroup, or forum will likely call them out. If this **doesn't** happen and you get angry, then your target's words probably seem normal in the hacker community, and **you** will be seen as the one at fault, which will hurt your chances of getting information or help.

On the other hand, you might occasionally encounter truly rude and obnoxious behavior. Unlike the above, it's acceptable to strike back hard at genuine offenders, using sharp language to tear them apart. However, be very, very sure before doing so. Correcting rudeness and starting a pointless flame war are separated by a thin line, and hackers themselves often recklessly cross it. If you're a newbie or outsider, your chances of avoiding such recklessness aren't high. If you want information, not entertainment, it's best not to risk it by typing.

(Some people assert that many hackers have mild autism or Asperger's syndrome, lacking the neural wiring needed for the **normal** lubrication of human social interaction. This may or may not be true. If you're not a hacker yourself, perhaps thinking we're mentally ill will help you cope with our odd behavior. Go ahead; we don't care. We **like** being the way we are, and we're usually skeptical of medical labels.)

Jeff Bigler's observations and summaries on this topic are also worth reading (**[tact filters](http://www.mit.edu/~jcb/tact.html)**).

In the next section, we'll discuss another issue: the `offense` you'll receive when **you** behave badly.

## How to Avoid Looking Like a Loser

In hacker community forums, you might screw up a few times in the way this guide describes or similarly. And you'll be told publicly how you screwed up, perhaps with some colorful language.

When this happens, the worst thing you can do is whine about your experience, claim you were verbally attacked, demand an apology, scream, sulk, threaten legal action, complain to their employer, leave the toilet seat up, etc. Instead, do this:

Get over it. It's normal. In fact, it's healthy and appropriate.

Community standards aren't self-enforcing; they're maintained by participants actively and **publicly** enforcing them. Don't whine that all criticism should have been sent privately; that's not how it works. When someone points out a mistake in your statement or offers a different view, insisting you were personally attacked is pointless; these are loser attitudes.

There are other hacker forums, misled by high courtesy requirements, that ban participants from posting any messages criticizing others' posts, claiming `If you don't want to help users, shut up.` The result is that thoughtful participants leave, and the forums become meaningless chatter and useless technical discussions.

The exaggerated version is: Do you want `nice` (in the above sense) or useful? Pick one.

Remember: When a hacker says you screwed up and (however harshly) tells you not to do it again, they're acting out of concern for **you** and **their community**. For them, ignoring you and filtering you out of their life is easier. If you can't be grateful, at least have some dignity; don't whine loudly or expect to be treated like a fragile doll just because you're a dramatic, hypersensitive soul and a self-entitled newbie.

Sometimes, even if you didn't screw up (or only in their imagination), some people will attack you personally for no reason. In this case, complaining really **will** screw things up.

These troublemakers are either useless wannabe experts or psychological experimenters testing if you'll really screw up. Other readers will either ignore them or deal with them in their own way. These troublemakers are creating trouble for themselves, and you shouldn't worry about it.

Don't get involved in flame wars; it's best to ignore most of them — of course, this is after you've verified they're just flame wars and don't point out where you screwed up or cleverly hide the real answer (which is also possible).

## Questions Not to Ask

Here are some classic stupid questions and what hackers think when they don't answer:

Question: [Where can I find program X or resource X?](#q1)

Question: [How do I use X to do Y?](#q2)

Question: [How do I set up my shell prompt?](#q3)

Question: [Can I use the Bass-o-matic file converter to convert AcmeCorp files to TeX format?](#q4)

Question: [My program/setting/SQL statement doesn't work](#q5)

Question: [I'm having a problem with my Windows PC, can you help me?](#q6)

Question: [My program has stopped working, I think system tool X is the problem](#q7)

Question: [I'm having trouble installing Linux (or X), can you help me?](#q8)

Question: [How can I crack the root account/steal OP privileges/read someone else's email?](#q9)

---

<a id="q1"></a>
> Question: Where can I find program X or resource X?

Answer: Where I found it, idiot — on the other end of a search engine. Good grief! Doesn't anyone know how to use [Google](https://www.google.com) anymore?

<a id="q2"></a>
> Question: How do I use X to do Y?

Answer: If you want to solve Y, don't ask with a possibly inappropriate method. This question shows the asker is completely ignorant of X, confused about what Y is supposed to solve, and trapped by a specific situation. It's best to ignore such people until they figure out what they're asking.

<a id="q3"></a>
> Question: How do I set up my shell prompt?

Answer: If you're smart enough to ask this, you're smart enough to [RTFM](#RTFM) and find out for yourself.

<a id="q4"></a>
> Question: Can I use the Bass-o-matic file converter to convert AcmeCorp files to TeX format?

Answer: Try it and see. If you try, you'll know the answer and won't waste my time.

<a id="q5"></a>
> Question: My {program/setting/SQL statement} doesn't work

Answer: This isn't a question, and I'm not interested in playing twenty questions to figure out what your real problem is — I have more interesting things to do. When I see such questions, my reaction is usually one of the following:

* Do you have anything to add?
* That's too bad, hope you figure it out.
* What's it to me?

<a id="q6"></a>
> Question: I'm having a problem with my Windows PC, can you help me?

Answer: Yes, throw out Microsoft's junk and switch to an open-source OS like Linux or BSD.

Note: If the program has an official Windows version or interacts with Windows (like Samba), you **can** ask Windows-related questions, but don't be surprised if the answer is that the problem is caused by Windows and not the program itself, because Windows is generally so bad that this is usually true.

<a id="q7"></a>
> Question: My program has stopped working, I think system tool X is the problem

Answer: You might be the first person to notice a glaring flaw in a system call or library file used by thousands of users, but it's more likely you're completely wrong. Extraordinary claims require extraordinary evidence; when you make such claims, you must have clear and detailed documentation of the flaw.

<a id="q8"></a>
> Question: I'm having trouble installing Linux (or X), can you help me?

Answer: No, I'd have to be at your computer to find the problem. Go to your local Linux user group for hands-on help (you can find a list of user groups [here](http://www.linux.org/groups/index.html)).

Note: If the installation problem is related to a specific Linux distribution, asking in its mailing list, forum, or local user group might be appropriate. In this case, describe the exact details of the problem. Before doing so, search carefully using `Linux` and **all** suspected hardware as keywords.

<a id="q9"></a>
> Question: How can I crack the root account/steal OP privileges/read someone else's email?

Answer: Wanting to do this shows you're a scoundrel; asking a hacker to help shows you're an idiot!

## Good and Bad Questions

Finally, I'll illustrate how to ask questions smartly by comparing examples of stupid and smart questions.

**Stupid question**:

> Where can I find information on the Foonly Flurbamatic?

This question is just begging for a [STFW](#RTFM) response.

**Smart question**:

> I searched Google for "Foonly Flurbamatic 2600" but didn't find anything useful. Does anyone know where to find programming documentation for this device?

This question shows the asker has already STFWed and seems genuinely stuck.

**Stupid question**:

> The source code I got from the foo project won't compile. Why is it so bad?

This arrogant question blames others.

**Smart question**:

> The foo project code won't compile under Nulix 6.2. I read the FAQ, but it doesn't mention Nulix. Here's my compilation log; what am I doing wrong?

This question specifies the environment, mentions reading the FAQ, lists the error, and doesn't blame others. It deserves attention.

**Stupid question**:

> My motherboard is broken; can someone help me?

A typical hacker response to this is: `Sure, should I also pat your back and change your diaper?`, followed by hitting the delete key.

**Smart question**:

> I tried X, Y, and Z on my S2464 motherboard, but nothing worked. Then I tried A, B, and C. Note the strange behavior when I tried C. Clearly, florbish is grommicking, but the results are unexpected. What usually causes grommicking on Athlon MP motherboards? Does anyone know what tests I should do next to find the problem?

This person, from another perspective, is worth answering. They show problem-solving ability, not just waiting for answers.

In the last question, note the subtle but important difference between `tell me the answer` and `give me a hint about what diagnostic work I should do next`.

In fact, the last question is based on a real question asked on the Linux kernel mailing list (lkml) in August 2001. I (Eric) was the one who asked it. I observed an unexplained lockup on a Tyan S2464 motherboard, and list members provided crucial information to solve the problem.

By asking the way I did, I gave people something to chew on; I made it easy for them to participate and get involved. I showed I had the same abilities as them and invited them to explore with me. By telling them the dead ends I'd already tried, I saved them time and showed respect for their valuable time.

Later, when I thanked everyone and praised the good discussion, a Linux kernel mailing list member said he thought my question was solved not because I was a **famous** person on the list, but because I asked in the right way.

Hackers are, in a way, very knowledgeable but impersonal people; I believe he was right. If I had asked **like** a beggar, no matter who I was, I would have annoyed some people or been ignored. He suggested I write this down, which directly led to this guide.

## If You Don't Get an Answer

If you still don't get an answer, don't assume we think we can't help you. Sometimes the people who see your question just don't know the answer. No response doesn't mean you're being ignored, though admittedly it's hard to tell the difference.

In general, simply reposting the question is a bad idea. This will be seen as meaningless noise. Be patient; the person who knows the answer might be in a different time zone, asleep, or your question might not have been well-organized in the first place.

You can seek help through other channels, which are often more suitable for beginners.

There are many online and local user groups, made up of enthusiastic software enthusiasts (even if they've never written any software themselves). Usually, people form such groups to help each other and newcomers.

Also, you can seek help from many commercial companies, big or small. Don't feel bad about paying for help! After all, if your car's engine cylinder seal blows — which is entirely possible — you'll have to take it to a repair shop and pay for the repair. Even if the software didn't cost you a penny, you can't expect free technical support all the time.

For popular software like Linux, each developer corresponds to at least tens of thousands of users. It's impossible for one person to handle help requests from tens of thousands of users. Know that even if you pay for this help, compared to similar commercial software, what you pay is negligible (usually, proprietary software's technical support costs are much higher than open-source software's, and the content isn't as rich).

## How to Answer Questions Well

**Be kind.** The stress of questions often makes people seem rude or stupid, but they're not.

**Reply privately to first-time offenders.** There's no need to publicly humiliate someone who made an honest mistake; a true newbie might not even know how to search or where to find FAQs.

**If you're not sure, say so!** An authoritative-sounding wrong answer is worse than no answer. Don't give bad advice just because it's fun to sound like an expert. Be humble and honest; set a good example for the asker and your peers.

**If you can't help, don't hinder.** Don't joke about actual steps; it might ruin the asker's setup — some poor fool will take it as a real instruction.

**Ask probing questions to elicit more details.** If you do this well, the asker can learn something — and so can you. Try to turn a stupid question into a good one; remember, we were all newbies once.

While it's fair to complain about lazy people with an RTFM, it's better to provide a link to the documentation (even if it's just suggesting a Google search term).

**If you decide to answer, give a good answer.** Don't suggest clumsy workarounds when someone is using the wrong tool or method; recommend better tools and redefine the problem.

**Answer positively!** If the asker has already done extensive research and shows they've tried X, Y, Z, A, B, and C without success, answering `Try A or B` or `Try X, Y, Z, A, B, and C` with a link is useless.

**Help your community learn from questions.** When answering a good question, ask yourself `How can the relevant documentation or FAQ be modified to avoid answering the same question again?` Then send a patch to the documentation maintainer.

If you researched before answering, **show your skills rather than just giving the answer**. After all, `Give a man a fish and you feed him for a day; teach a man to fish and you feed him for a lifetime.`

## Related Resources

If you need basic knowledge about how personal computers, Unix systems, and networks work, see [Unix and Internet Fundamentals](http://en.tldp.org/HOWTO/Unix-and-Internet-Fundamentals-HOWTO/).

When releasing software or patches, try to follow [Software Release Practice](http://en.tldp.org/HOWTO/Software-Release-Practice-HOWTO/index.html).

## Acknowledgments

Evelyn Mitchel contributed some examples of stupid questions and inspired the section on `How to Answer Questions Well`. Mikhail Ramendik contributed some particularly valuable suggestions and improvements.