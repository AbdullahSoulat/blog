import { _ as __vite_glob_0_0 } from '../chunks/Growing Up_SWw2PC8U.mjs';
import { _ as __vite_glob_0_1 } from '../chunks/I\'m tired_9r8BIDfy.mjs';
import { _ as __vite_glob_0_2 } from '../chunks/Judgement_CfgU3sSq.mjs';
import { _ as __vite_glob_0_3 } from '../chunks/My First Blog_ Let\'s play an AAA Game_CiVBrEfV.mjs';
import { _ as __vite_glob_0_4 } from '../chunks/Sonder Effect_BEMsXg7C.mjs';
import { _ as __vite_glob_0_5 } from '../chunks/The World Does Disappear When You Close Your Eyes_CKk-zbeG.mjs';
import { _ as __vite_glob_0_6 } from '../chunks/Unplugged_DWbFO_4R.mjs';
import { _ as __vite_glob_0_7 } from '../chunks/Vemödalen_CMU91VQg.mjs';
import { _ as __vite_glob_0_8 } from '../chunks/We Are All Broken - Friendships_BWJfdYIU.mjs';
import { a as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead, c as createAstro, l as renderScript } from '../chunks/astro/server_CuAn_-OB.mjs';
import 'kleur/colors';
import { a as $$Section, $ as $$Base, A as AppConfig } from '../chunks/Base_CqsbpIij.mjs';
import '../chunks/index_MaT6fT73.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_Cpd4C8ki.mjs';
import heroImage from '../chunks/hero_Dm0dpby0.mjs';
import { $ as $$Card } from '../chunks/Card_eos-JQZH.mjs';
import { s as sortPostsByDate } from '../chunks/post_DxFaWH7s.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Section", $$Section, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex gap-10 md:flex-row flex-col justify-center items-center"> ${renderComponent($$result2, "Image", $$Image, { "src": heroImage, "alt": "Hero", "width": "400", "height": "400", "loading": "lazy", "decoding": "async", "format": "avif", "class": "aspect-square object-cover" })} <div> <h1 class="pb-2 pt-6 text-5xl">Thoughts of NO longer a teenager!</h1> <div class="text-sm"> <p class="px-2 py-6 text-lg">
For the past few years I've been writing and recording my thoughts on my phone. All of us have these <span class="font-black text-blue-600 dark:text-blue-300">thoughts</span>, or as I like to call them conversations with oneself, but nobody cares to express them on paper. Don't worry they're all chill thoughts.
</p> </div> </div> </div> ` })}`;
}, "/home/sloth/Documents/blog/src/components/Hero.astro", void 0);

const $$Astro = createAstro("https://astro-tech-blog-ten.vercel.app/");
const $$LatestPosts = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$LatestPosts;
  const { posts } = Astro2.props;
  const images = /* #__PURE__ */ Object.assign({"/src/images/anohana.jpg": () => import('../chunks/anohana_Bb9Xz3BQ.mjs'),"/src/images/black-myth-wukong.jpg": () => import('../chunks/black-myth-wukong_ITqvNXRo.mjs'),"/src/images/hero.png": () => import('../chunks/hero_Dm0dpby0.mjs'),"/src/images/hong-kong-image.jpg": () => import('../chunks/hong-kong-image_BFWOwSPL.mjs'),"/src/images/i'm_tired.png": () => import('../chunks/i\'m_tired_BrFC4Z7s.mjs'),"/src/images/naruto.png": () => import('../chunks/naruto_DagagIeE.mjs'),"/src/images/pakistan-image.jpg": () => import('../chunks/pakistan-image_D2fFm95f.mjs'),"/src/images/random.jpg": () => import('../chunks/random_Cth3RIgL.mjs'),"/src/images/rat_race.jpg": () => import('../chunks/rat_race_Du5WHgn-.mjs'),"/src/images/silent_voice.jpg": () => import('../chunks/silent_voice_DhvwwXVp.mjs'),"/src/images/steinsgate.png": () => import('../chunks/steinsgate_CKeHeCX5.mjs'),"/src/images/vinland-saga.png": () => import('../chunks/vinland-saga_BrQD9v4W.mjs'),"/src/images/world_disappers.jpg": () => import('../chunks/world_disappers_ByC-7DfV.mjs')});
  return renderTemplate`${renderComponent($$result, "Section", $$Section, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex justify-between pb-4"> <p class="text-2xl font-bold">Latest Posts</p> <a href="/posts" class="underline hover:text-blue-600 dark:hover:text-blue-300">all posts →</a> </div> <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2"> ${posts.map((post) => renderTemplate`<div class=""> ${renderComponent($$result2, "Card", $$Card, { "post": post, "image": images })} </div>`)} </div> ` })}`;
}, "/home/sloth/Documents/blog/src/components/LatestPosts.astro", void 0);

const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "data-astro-cid-xmivup5a": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<form method="post" id="contact-form" name="contact" class="flex flex-col gap-3" data-astro-cid-xmivup5a> <p data-astro-cid-xmivup5a> <label class="flex flex-col gap-2" data-astro-cid-xmivup5a>Email Address
<input required type="email" name="email" placeholder="e.g. johndoe@gmail.com" class="w-full border-2 px-4 py-2 bg-neutral-200 dark:bg-neutral-700
						   dark:border-white" data-astro-cid-xmivup5a> </label> </p> <p data-astro-cid-xmivup5a> <button type="submit" id="submit-button" class="bg-neutral-950 text-white px-8 py-2 hover:cursor-pointer hover:bg-blue-300
					   w-full md:w-auto dark:bg-neutral-50 dark:text-black" data-astro-cid-xmivup5a>Send</button> </p> </form>  <div id="success-popup" class="hidden fixed inset-0 flex items-center justify-center z-50 bg-black/60" data-astro-cid-xmivup5a> <div class="bg-white text-black flex flex-col gap-2 py-8 px-10" data-astro-cid-xmivup5a> <p class="mb-6" data-astro-cid-xmivup5a>Form submitted successfully</p> <button id="close-popup" class="bg-black px-6 py-2 text-white hover:bg-neutral-600 hover:cursor-pointer" data-astro-cid-xmivup5a>Close</button> </div> </div>  <div id="loading-popup" class="hidden fixed inset-0 flex items-center justify-center z-50 bg-black/60" data-astro-cid-xmivup5a> <div class="flex flex-col bg-white text-black px-12 py-8 justify-center items-center" data-astro-cid-xmivup5a> <p class="mb-6" data-astro-cid-xmivup5a>Submitting Form</p> <div class="loader" data-astro-cid-xmivup5a></div> </div> </div> ` })}  ${renderScript($$result, "/home/sloth/Documents/blog/src/components/Contact.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/sloth/Documents/blog/src/components/Contact.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const { title } = AppConfig;
  const { description } = AppConfig;
  const allPosts = Object.values(
    [__vite_glob_0_0,__vite_glob_0_1,__vite_glob_0_2,__vite_glob_0_3,__vite_glob_0_4,__vite_glob_0_5,__vite_glob_0_6,__vite_glob_0_7,__vite_glob_0_8]
  );
  allPosts.sort(sortPostsByDate);
  const latestPosts = allPosts.slice(0, 4);
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "head": { title, description } }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "LatestPosts", $$LatestPosts, { "posts": latestPosts })} ${renderComponent($$result2, "Contact", $$Contact, {})} ` })}`;
}, "/home/sloth/Documents/blog/src/pages/index.astro", void 0);

const $$file = "/home/sloth/Documents/blog/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
