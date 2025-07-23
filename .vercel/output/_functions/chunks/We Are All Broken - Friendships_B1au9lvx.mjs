import { a as createComponent, d as renderComponent, r as renderTemplate, u as unescapeHTML } from './astro/server_1lYeUgex.mjs';
import 'kleur/colors';
import { $ as $$Post } from './post_CiVlvn4n.mjs';

const html = () => "<p>About two weeks ago, I started watching a random Chinese drama that showed up on my feed. I started watching for two reasons: one, I wanted to pick up some Chinese phrases, and two, the background music sounded pretty nice. Anyways, the drama turned out to be of the romance genre. I usually avoid this genre (of course, I had watched a few with my family when I was a kid; if you know, you know).</p>\n<p>For some reason, I found that drama to be really heartwarming. I don’t know if I’ve matured or if the drama was just that good (probably because I’ve matured). Don’t worry, this blog isn’t a review of some random drama that I came across in a reel. It’s about friendship and childhood.</p>\n<p>So the drama shows a friend group of five people, each with their own weaknesses. I’ll mention one friend to make sure that this blog isn’t too long. So, this boy was constantly compared to his brother in his childhood because his brother was leagues ahead in his academics. His parents always scolded him for not performing up to the mark. As a result of that, he became very quiet and had low self-esteem, even though he was still a lot better than his peers.</p>\n<p>As he grew older, the quietness and the low self-esteem became part of his personality. That was until he joined highschool. There, he found friends that actually cared for him, understood him, and even appreciated his quietness. Slowly, he started to trust them more and began to open up. He regained his confidence.</p>\n<p>That’s just one example. I got this extract from a Quora post, asking people about high school insecurities:</p>\n<p>‘Then your self-grown insecurities can pop up: not smart enough, can’t take tests, people think I look weird, I can’t make the popular kids like me, will the one I’m attracted to reject me — all that stuff that you make up about yourself and how you appear to others.’</p>\n<p>After thinking about it for a bit, I feel like friendship really comes down to two important things. It’s when you can be yourself around others, like you don’t have to put on an alternative personality just to fit in, when you don’t have to think twice before you say what you want to say, and when you don’t have to think twice before you call or text them. The second is that they care about you and allow you to grow in a good way. They allow you to heal get over your insecurities.</p>\n<p>Most of us are going through their highschool or university days. I did some research, and apparently, this is the time when you make friends for life. After that, people have too many commitments to take out time and make friends. Well, with that I hope that all of us find, or have already found, that friend group.</p>\n<p>P.S.: The drama is called ‘When I Fly Towards You’.</p>\n<p>If you’re looking for a friend, drop me a DM :)</p>";

				const frontmatter = {"layout":"../../layouts/post.astro","title":"We Are All Broken - Friendships","pubDate":"2025-01-15T00:00:00.000Z","description":"This is the first post of my new Astro blog.","author":"nicdun","isPinned":false,"post_id":2,"image":{"src":"/src/images/anohana.jpg","alt":"anohana cover image"},"tags":["tag4","tag1","tag2","tag3"],"minutesRead":"3 min read"};
				const file = "/home/sloth/Documents/blog/src/pages/posts/We Are All Broken - Friendships.md";
				const url = "/posts/We Are All Broken - Friendships";
				function rawContent() {
					return "   \n                                \n                                        \n                   \n                                                           \n                \n               \n          \n      \n                                \n                            \n                                      \n   \n\nAbout two weeks ago, I started watching a random Chinese drama that showed up on my feed. I started watching for two reasons: one, I wanted to pick up some Chinese phrases, and two, the background music sounded pretty nice. Anyways, the drama turned out to be of the romance genre. I usually avoid this genre (of course, I had watched a few with my family when I was a kid; if you know, you know).\n\nFor some reason, I found that drama to be really heartwarming. I don't know if I've matured or if the drama was just that good (probably because I've matured). Don't worry, this blog isn't a review of some random drama that I came across in a reel. It's about friendship and childhood.\n\nSo the drama shows a friend group of five people, each with their own weaknesses. I'll mention one friend to make sure that this blog isn't too long. So, this boy was constantly compared to his brother in his childhood because his brother was leagues ahead in his academics. His parents always scolded him for not performing up to the mark. As a result of that, he became very quiet and had low self-esteem, even though he was still a lot better than his peers.\n\nAs he grew older, the quietness and the low self-esteem became part of his personality. That was until he joined highschool. There, he found friends that actually cared for him, understood him, and even appreciated his quietness. Slowly, he started to trust them more and began to open up. He regained his confidence.\n\nThat's just one example. I got this extract from a Quora post, asking people about high school insecurities:\n\n'Then your self-grown insecurities can pop up: not smart enough, can’t take tests, people think I look weird, I can’t make the popular kids like me, will the one I’m attracted to reject me — all that stuff that you make up about yourself and how you appear to others.'\n\nAfter thinking about it for a bit, I feel like friendship really comes down to two important things. It's when you can be yourself around others, like you don't have to put on an alternative personality just to fit in, when you don't have to think twice before you say what you want to say, and when you don't have to think twice before you call or text them. The second is that they care about you and allow you to grow in a good way. They allow you to heal get over your insecurities.\n\nMost of us are going through their highschool or university days. I did some research, and apparently, this is the time when you make friends for life. After that, people have too many commitments to take out time and make friends. Well, with that I hope that all of us find, or have already found, that friend group.\n\nP.S.: The drama is called 'When I Fly Towards You'.\n\nIf you're looking for a friend, drop me a DM :)";
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

const __vite_glob_0_8 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
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

export { __vite_glob_0_8 as _ };
