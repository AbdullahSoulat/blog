import { c as createAstro, a as createComponent, m as maybeRenderHead, r as renderTemplate } from './astro/server_1lYeUgex.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro("https://astro-tech-blog-ten.vercel.app/");
const $$Heading = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Heading;
  const { title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<p class="text-bold pt-6 text-center text-4xl">${title}</p>`;
}, "/home/sloth/Documents/blog/src/components/Heading.astro", void 0);

export { $$Heading as $ };
