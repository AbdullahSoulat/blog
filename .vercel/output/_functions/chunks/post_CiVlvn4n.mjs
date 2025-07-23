import { c as createAstro, a as createComponent, d as renderComponent, e as renderTransition, r as renderTemplate, m as maybeRenderHead, j as renderSlot } from './astro/server_1lYeUgex.mjs';
import 'kleur/colors';
import { a as $$Section, $ as $$Base, A as AppConfig } from './Base_BRSuc5Ev.mjs';
import './index_MaT6fT73.mjs';
import { $ as $$Image } from './_astro_assets_B-fMIsV-.mjs';
/* empty css                         */
/* empty css                              */
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';

const formatDate = (pubDate) => {
  var options = {
    weekday: "short",
    year: "numeric",
    month: "long",
    day: "numeric"
  };
  return new Date(pubDate).toLocaleDateString("en-US", options);
};
const sortPostsByDate = (a, b) => {
  const isPinnedA = a.frontmatter.isPinned === true;
  const isPinnedB = b.frontmatter.isPinned === true;
  if (isPinnedA && !isPinnedB) {
    return -1;
  }
  if (!isPinnedA && isPinnedB) {
    return 1;
  }
  const pubDateA = new Date(a.frontmatter.pubDate);
  const pubDateB = new Date(b.frontmatter.pubDate);
  if (pubDateA < pubDateB) {
    return 1;
  }
  if (pubDateA > pubDateB) {
    return -1;
  }
  return 0;
};

const $$Astro$1 = createAstro("https://astro-tech-blog-ten.vercel.app/");
const $$PostHeader = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$PostHeader;
  const { title, pubDate, minutesRead, img, imageObject } = Astro2.props;
  const formattedDate = formatDate(pubDate);
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "data-astro-transition-scope": renderTransition($$result, "e344jvdm", "", img.src) }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col items-center"> <div class="relative px-14 pt-6 pb-4 text-center"> <p class="text-4xl font-bold">${title}</p> </div> <div class="text-sm mb-4"> <span>${formattedDate}</span> - <span>${minutesRead}</span> </div> ${renderComponent($$result2, "Image", $$Image, { "src": imageObject[img.src](), "alt": img.alt, "width": 1e3, "inferSize": true, "format": "avif", "class": "w-full aspect-[16/9]" })} </div> ` })}`;
}, "/home/sloth/Documents/blog/src/components/PostHeader.astro", "self");

const $$PostContent = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Section", $$Section, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="content prose dark:prose-invert prose-code:rounded-lg prose-code:bg-stone-800 prose-code:p-1 prose-code:text-orange-600 prose-img:rounded-lg prose-img:shadow-xl prose-img:dark:shadow-stone-800 mt-8 max-w-none text-base leading-8 text-black dark:text-white text-justify"> ${renderSlot($$result2, $$slots["default"])} </div> ` })} <!-- Tailwind doesn't fully support some of the complex CSS selectors needed for code highlighting,
     so we need to keep some custom CSS but applied through Tailwind's plugin system --> `;
}, "/home/sloth/Documents/blog/src/components/PostContent.astro", void 0);

function Comments({ post_id }) {
  const [comments, setComments] = useState([]);
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(`/api/comments?post_id=${post_id}`).then((res) => res.json()).then((data) => {
      setComments(data);
      setLoading(false);
    });
  }, [post_id]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("/api/comments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ post_id, author_name: author, content })
    });
    setAuthor("");
    setContent("");
    fetch(`/api/comments?post_id=${post_id}`).then((res) => res.json()).then((data) => setComments(data));
  };
  return /* @__PURE__ */ jsxs("div", { class: "px-4 flex flex-col gap-4", children: [
    /* @__PURE__ */ jsx("h3", { class: "text-lg", children: "Add a New Comment" }),
    /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, class: "flex flex-col gap-4", children: [
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "text",
          placeholder: "Your name",
          value: author,
          onChange: (e) => setAuthor(e.target.value),
          class: "w-full px-4 py-2 border-2",
          required: true
        }
      ),
      /* @__PURE__ */ jsx(
        "textarea",
        {
          placeholder: "Add a comment",
          value: content,
          class: "w-full px-4 py-2 border-2 h-30",
          onChange: (e) => setContent(e.target.value),
          required: true
        }
      ),
      /* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsx(
        "button",
        {
          type: "submit",
          class: "bg-neutral-950 text-white px-5 py-3 mb-5 hover:cursor-pointer\n                     hover:bg-blue-300 hover:text-neutral-950 dark:bg-neutral-200 dark:text-neutral-950",
          children: "Add Comment"
        }
      ) })
    ] }),
    /* @__PURE__ */ jsx("h3", { class: "pt-6 border-t-2 border-neutral-500 text-lg dark:border-neutral-400", children: "Existing Comments" }),
    loading ? /* @__PURE__ */ jsx("p", { children: "Loading..." }) : /* @__PURE__ */ jsx("ul", { children: comments.map((c) => /* @__PURE__ */ jsxs("li", { className: "border-2 p-4 mb-2", children: [
      /* @__PURE__ */ jsx("p", { className: "text-neutral-500", children: c.author_name }),
      /* @__PURE__ */ jsx("p", { children: c.content })
    ] }, c.id)) })
  ] });
}

const $$Astro = createAstro("https://astro-tech-blog-ten.vercel.app/");
const $$Post = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Post;
  const { description } = AppConfig;
  const { frontmatter } = Astro2.props;
  const images = /* #__PURE__ */ Object.assign({"/src/images/anohana.jpg": () => import('./anohana_Bb9Xz3BQ.mjs'),"/src/images/black-myth-wukong.jpg": () => import('./black-myth-wukong_ITqvNXRo.mjs'),"/src/images/hero.png": () => import('./hero_Dm0dpby0.mjs'),"/src/images/hong-kong-image.jpg": () => import('./hong-kong-image_BFWOwSPL.mjs'),"/src/images/i'm_tired.png": () => import('./i\'m_tired_BrFC4Z7s.mjs'),"/src/images/naruto.png": () => import('./naruto_DagagIeE.mjs'),"/src/images/pakistan-image.jpg": () => import('./pakistan-image_D2fFm95f.mjs'),"/src/images/random.jpg": () => import('./random_Cth3RIgL.mjs'),"/src/images/rat_race.jpg": () => import('./rat_race_Du5WHgn-.mjs'),"/src/images/silent_voice.jpg": () => import('./silent_voice_DhvwwXVp.mjs'),"/src/images/steinsgate.png": () => import('./steinsgate_CKeHeCX5.mjs'),"/src/images/vinland-saga.png": () => import('./vinland-saga_BrQD9v4W.mjs'),"/src/images/world_disappers.jpg": () => import('./world_disappers_ByC-7DfV.mjs')});
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "head": { title: frontmatter.title, description } }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mx-auto w-full max-w-screen-md"> ${renderComponent($$result2, "PostHeader", $$PostHeader, { "title": frontmatter.title, "author": frontmatter.author, "tags": frontmatter.tags, "minutesRead": frontmatter.minutesRead, "pubDate": frontmatter.pubDate, "isPinned": frontmatter.isPinned, "img": { src: frontmatter.image.src, alt: frontmatter.image.alt }, "imageObject": images })} ${renderComponent($$result2, "PostContent", $$PostContent, {}, { "default": ($$result3) => renderTemplate`${renderSlot($$result3, $$slots["default"])}` })} ${renderComponent($$result2, "Comments", Comments, { "post_id": frontmatter.post_id, "client:visible": true, "client:component-hydration": "visible", "client:component-path": "@/components/Comments", "client:component-export": "default" })} </div> ` })}`;
}, "/home/sloth/Documents/blog/src/layouts/post.astro", void 0);

export { $$Post as $, formatDate as f, sortPostsByDate as s };
