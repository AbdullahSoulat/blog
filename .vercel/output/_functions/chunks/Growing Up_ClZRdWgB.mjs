import { a as createComponent, d as renderComponent, r as renderTemplate, u as unescapeHTML } from './astro/server_1lYeUgex.mjs';
import 'kleur/colors';
import { $ as $$Post } from './post_CiVlvn4n.mjs';

const html = () => "<p>Man, so much has happened in the last week that I don’t even know where to begin. I’ve technically worked in labor, I’ve gotten lost in the streets of Hong Kong, I’ve had to move out for the second time in two weeks, and I’ve had to fly out of the country.</p>\n<p>I’ll start from the beginning. In a previous blog, I believe I already recounted my moving-out story. I thought that was painful enough, but it was nothing compared to what lay ahead of me. The day we had to move off from the second house, we cleaned everything up, sorted out everything, and were waiting for the landlord to come in and check the property. When she came in, that’s when all our problems started (Firas and me).</p>\n<p>All the furniture didn’t come with the apartment, which meant that we had to get rid of all of it. At first, we couldn’t believe it, because there was so much and all of it was so expensive. There were mattresses, cabinets, tables, carpets, kettle, oven, kitchen utensils, and even an entire sofa. We had one day to clear out the entire apartment. I’ll save you the details, but it was a lot a lot of work. We tried to sell some of the stuff, but in the end, we ended up only selling a mattress. Most of the stuff, we just donated to our neighbors. The last item in the house that we had to move out was a sofa. The sofa was so big that no matter what we tried, we couldn’t get it through the door. They undid every screw that we saw, but it was still too big.</p>\n<p>In the end, we had to tear open the sofa with some scissors, then buy a saw and cut down the sofa into multiple pieces. Oh man, I hated every single second of that. First, I had to walk half an hour to get to the hardware store. Then I had to spend another half an hour to cut through the wood. It was so hot and humid. Sweat dripped off my face and my entire body. At that time, I wanted nothing more than to be cozy up in my bed. In total, it took us two entire days to clear out everything in the apartment.</p>\n<p>Two days after I settled into the new place, I got the news that the visa would take more time to process, which meant that I should probably go back home, since staying in Hong Kong is way too expensive. So I booked the next available flight to Pakistan, and I was off.</p>\n<p>I think it’s all part of growing up. You face more and more problems as you grow up. Recently, I read the light novel, “I Had That Same Dream Again”, by Your Sumino. The protagonist in that book was an elementary school child. The author did a good enough job capturing the essence of child nature. When we were a child, we just wanted to be an adult for stupid reasons. I remember why I wanted to be an adult. I thought that firstly they were cool, they could reach and grab higher things, they were smarter, and they could drive cars and what not. What we didn’t realize at that point was how many problems come with growing up. Problems that we could have never imagined at that point. Problems like the one that I’ve described above.</p>\n<p>Right now I’m writing this blog from my room, back in Pakistan, seated in the chair that I spent hundreds of hours in. As I look back on the past two weeks, I don’t feel sorrow or helplessness. I feel that was very important for me to experience. Important for my growth and was part of growing up.</p>";

				const frontmatter = {"layout":"../../layouts/post.astro","title":"Growing Up","pubDate":"2025-05-20T00:00:00.000Z","description":"This is the first post of my new Astro blog.","author":"nicdun","isPinned":false,"post_id":9,"image":{"src":"/src/images/naruto.png","alt":"some alt text"},"tags":["tag4","tag1","tag2","tag3"],"minutesRead":"4 min read"};
				const file = "/home/sloth/Documents/blog/src/pages/posts/Growing Up.md";
				const url = "/posts/Growing Up";
				function rawContent() {
					return "   \n                                \n                   \n                   \n                                                           \n                \n               \n          \n      \n                               \n                      \n                                      \n   \n\nMan, so much has happened in the last week that I don’t even know where to begin. I’ve technically worked in labor, I’ve gotten lost in the streets of Hong Kong, I’ve had to move out for the second time in two weeks, and I’ve had to fly out of the country.\n\nI’ll start from the beginning. In a previous blog, I believe I already recounted my moving-out story. I thought that was painful enough, but it was nothing compared to what lay ahead of me. The day we had to move off from the second house, we cleaned everything up, sorted out everything, and were waiting for the landlord to come in and check the property. When she came in, that’s when all our problems started (Firas and me).\n\nAll the furniture didn’t come with the apartment, which meant that we had to get rid of all of it. At first, we couldn’t believe it, because there was so much and all of it was so expensive. There were mattresses, cabinets, tables, carpets, kettle, oven, kitchen utensils, and even an entire sofa. We had one day to clear out the entire apartment. I’ll save you the details, but it was a lot a lot of work. We tried to sell some of the stuff, but in the end, we ended up only selling a mattress. Most of the stuff, we just donated to our neighbors. The last item in the house that we had to move out was a sofa. The sofa was so big that no matter what we tried, we couldn’t get it through the door. They undid every screw that we saw, but it was still too big.\n\nIn the end, we had to tear open the sofa with some scissors, then buy a saw and cut down the sofa into multiple pieces. Oh man, I hated every single second of that. First, I had to walk half an hour to get to the hardware store. Then I had to spend another half an hour to cut through the wood. It was so hot and humid. Sweat dripped off my face and my entire body. At that time, I wanted nothing more than to be cozy up in my bed. In total, it took us two entire days to clear out everything in the apartment.\n\nTwo days after I settled into the new place, I got the news that the visa would take more time to process, which meant that I should probably go back home, since staying in Hong Kong is way too expensive. So I booked the next available flight to Pakistan, and I was off.\n\nI think it’s all part of growing up. You face more and more problems as you grow up. Recently, I read the light novel, “I Had That Same Dream Again”, by Your Sumino. The protagonist in that book was an elementary school child. The author did a good enough job capturing the essence of child nature. When we were a child, we just wanted to be an adult for stupid reasons. I remember why I wanted to be an adult. I thought that firstly they were cool, they could reach and grab higher things, they were smarter, and they could drive cars and what not. What we didn’t realize at that point was how many problems come with growing up. Problems that we could have never imagined at that point. Problems like the one that I’ve described above.\n\nRight now I’m writing this blog from my room, back in Pakistan, seated in the chair that I spent hundreds of hours in. As I look back on the past two weeks, I don’t feel sorrow or helplessness. I feel that was very important for me to experience. Important for my growth and was part of growing up.";
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

const __vite_glob_0_0 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
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

export { __vite_glob_0_0 as _ };
