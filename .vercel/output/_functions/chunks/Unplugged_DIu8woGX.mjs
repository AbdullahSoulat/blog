import { a as createComponent, d as renderComponent, r as renderTemplate, u as unescapeHTML } from './astro/server_1lYeUgex.mjs';
import 'kleur/colors';
import { $ as $$Post } from './post_CiVlvn4n.mjs';

const html = () => "<p>Following from my previous blog Vemödalen, I know that the idea of this blog is not new, in fact I heard someone today talking about it. Still, I feel like it’s important and worth mentioning again.</p>\n<p>As a race humans have come so far. When you think about it, it’s kind of insane. We have heavy objects flying in the sky, buildings that are hundreds of meters high and instant communication to anywhere in the world. But the hunger still lasts, as we are chasing after more and more e.g. AI.</p>\n<p>What was the point of all these inventions and discoveries: to make the human life easier, right? I’ll admit that some of them truly have. For example, I can’t imagine living without my phone and unable to talk to my family back in Pakistan. But (you knew there was a ‘but’ coming), we’ve introduced new problems for ourselves.</p>\n<p>There are several factors why most people are unhappy despite the advances in technology. I’m not making this up - suicide rates have been rising, and if you study in UST then you now what I’m talking about. In my opinion, all of this can be boiled down to one word - rush.</p>\n<p>Modern life is so fast-paced: we are in the rush to catch the next train, in a rush to catch the next bus, in a rush to catch the next elevator, in a rush to catch the next deadline, in a rush to catch the next internship, in a rush to catch the next job or in a rush to complete that assignment.</p>\n<p>One way to end this rat race is to leave everything behind and go out into the mountains. On first glance this doesn’t look like a very good idea but when you think about it a little more, it’s actually not bad. All you’d have to worry about is food, water and nothing else. Money wouldn’t matter, working wouldn’t matter, studying wouldn’t matter. You could do anything that you want. This is what I call “unplugging”.</p>\n<p>However, there are times in our life when unplugging is not a choice, it’s mandatory! You realize that everything that you’ve been working towards is volatile. I’ll give a few examples here that may cause you to unplug: a loved one passes away, you get into a life-threatening accident, or some world ending event is about to occur. In that moment you realize that none of the things that you did in this world matter, or at least they didn’t matter as much as you thought.</p>\n<p>Here is what I propose - slow down every once in a while. Start with the small things. It doesn’t matter if you miss that elevator, another one will be there in half a minutes. Every once in a while stop and look around. Look at the trees, the sky, the clouds, the sun.</p>\n<p>I actually wrote this blog a few weeks ago, but I didn’t have time to post it, because of midterms. However, that complements the theme of this blog quite well. I’ve seen around me pull off all-nighters, sacrifice their sleep, their health, social connections and so much more. I think we can all agree that exams are a product of modern society. I’m in no way saying that you shouldn’t study hard for your exams, you should! What I’m saying is to pause once in a while, go out into the nature, stand under the sun, or find shade under a tree and reflect on your actions.</p>\n<p>I guess what this blog boils down to is that, sometimes life can be depressing and whenever that happens, you can always take a step back, you can always ‘unplug’ from the world.</p>";

				const frontmatter = {"layout":"../../layouts/post.astro","title":"Unplugged","pubDate":"2025-03-29T00:00:00.000Z","description":"Unplugged","author":"nicdun","isPinned":false,"post_id":6,"image":{"src":"/src/images/vinland-saga.png","alt":"some alt text"},"tags":["tag4","tag1","tag2","tag3"],"minutesRead":"4 min read"};
				const file = "/home/sloth/Documents/blog/src/pages/posts/Unplugged.md";
				const url = "/posts/Unplugged";
				function rawContent() {
					return "   \n                                \n                  \n                   \n                        \n                \n               \n          \n      \n                                     \n                      \n                                      \n   \n\nFollowing from my previous blog Vemödalen, I know that the idea of this blog is not new, in fact I heard someone today talking about it. Still, I feel like it's important and worth mentioning again.\n\nAs a race humans have come so far. When you think about it, it's kind of insane. We have heavy objects flying in the sky, buildings that are hundreds of meters high and instant communication to anywhere in the world. But the hunger still lasts, as we are chasing after more and more e.g. AI.\n\nWhat was the point of all these inventions and discoveries: to make the human life easier, right? I'll admit that some of them truly have. For example, I can't imagine living without my phone and unable to talk to my family back in Pakistan. But (you knew there was a 'but' coming), we've introduced new problems for ourselves.\n\nThere are several factors why most people are unhappy despite the advances in technology. I'm not making this up - suicide rates have been rising, and if you study in UST then you now what I'm talking about. In my opinion, all of this can be boiled down to one word - rush.\n\nModern life is so fast-paced: we are in the rush to catch the next train, in a rush to catch the next bus, in a rush to catch the next elevator, in a rush to catch the next deadline, in a rush to catch the next internship, in a rush to catch the next job or in a rush to complete that assignment.\n\nOne way to end this rat race is to leave everything behind and go out into the mountains. On first glance this doesn't look like a very good idea but when you think about it a little more, it's actually not bad. All you'd have to worry about is food, water and nothing else. Money wouldn't matter, working wouldn't matter, studying wouldn't matter. You could do anything that you want. This is what I call \"unplugging\".\n\nHowever, there are times in our life when unplugging is not a choice, it's mandatory! You realize that everything that you've been working towards is volatile. I'll give a few examples here that may cause you to unplug: a loved one passes away, you get into a life-threatening accident, or some world ending event is about to occur. In that moment you realize that none of the things that you did in this world matter, or at least they didn't matter as much as you thought.\n\nHere is what I propose - slow down every once in a while. Start with the small things. It doesn't matter if you miss that elevator, another one will be there in half a minutes. Every once in a while stop and look around. Look at the trees, the sky, the clouds, the sun.\n\nI actually wrote this blog a few weeks ago, but I didn't have time to post it, because of midterms. However, that complements the theme of this blog quite well. I've seen around me pull off all-nighters, sacrifice their sleep, their health, social connections and so much more. I think we can all agree that exams are a product of modern society. I'm in no way saying that you shouldn't study hard for your exams, you should! What I'm saying is to pause once in a while, go out into the nature, stand under the sun, or find shade under a tree and reflect on your actions.\n\nI guess what this blog boils down to is that, sometimes life can be depressing and whenever that happens, you can always take a step back, you can always 'unplug' from the world.";
				}
				async function compiledContent() {
					return await html();
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${renderComponent(result, 'Layout', $$Post, {
								file,
								url,
								content,
								frontmatter: content,
								headings: getHeadings(),
								rawContent,
								compiledContent,
								'server:root': true,
							}, {
								'default': () => renderTemplate`${unescapeHTML(html())}`
							})}`;
				});

const __vite_glob_0_6 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content,
	compiledContent,
	default: Content,
	file,
	frontmatter,
	getHeadings,
	rawContent,
	url
}, Symbol.toStringTag, { value: 'Module' }));

export { __vite_glob_0_6 as _ };
