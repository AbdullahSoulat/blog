import rss, { pagesGlobToRssItems } from '@astrojs/rss';
export { renderers } from '../renderers.mjs';

async function GET(context) {
  return rss({
    title: 'nicdun.dev - blog',
    description: 'Crafting the Digital Future with Web Development Wonders',
    site: context.site,
    items: await pagesGlobToRssItems(
      /* #__PURE__ */ Object.assign({"./posts/Growing Up.md": () => import('../chunks/Growing Up_ClZRdWgB.mjs').then(n => n._),"./posts/I'm tired.md": () => import('../chunks/I\'m tired_BZ-r2OGL.mjs').then(n => n._),"./posts/Judgement.md": () => import('../chunks/Judgement_B2SyhnDq.mjs').then(n => n._),"./posts/My First Blog: Let's play an AAA Game.md": () => import('../chunks/My First Blog_ Let\'s play an AAA Game_CxF8fDBR.mjs').then(n => n._),"./posts/Sonder Effect.md": () => import('../chunks/Sonder Effect_DukTLRL2.mjs').then(n => n._),"./posts/The World Does Disappear When You Close Your Eyes.md": () => import('../chunks/The World Does Disappear When You Close Your Eyes_ytoFWSow.mjs').then(n => n._),"./posts/Unplugged.md": () => import('../chunks/Unplugged_DIu8woGX.mjs').then(n => n._),"./posts/Vemödalen.md": () => import('../chunks/Vemödalen_CaXPkJvP.mjs').then(n => n._),"./posts/We Are All Broken - Friendships.md": () => import('../chunks/We Are All Broken - Friendships_B1au9lvx.mjs').then(n => n._)}),
    ),
    stylesheet: './rss/styles.xsl',
    customData: `<language>en-us</language>`,
  });
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
