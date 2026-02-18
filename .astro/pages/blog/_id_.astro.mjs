import { c as createComponent, r as renderComponent, a as renderTemplate, b as createAstro, m as maybeRenderHead } from '../../chunks/astro/server_CbBtvlQf.mjs';
import 'piccolore';
import { $ as $$Base } from '../../chunks/Base_CFMBqDb8.mjs';
import { r as renderEntry, g as getCollection } from '../../chunks/_astro_content_Bfu9kHDx.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
async function getStaticPaths() {
  const posts = await getCollection("blog");
  return posts.map((post) => ({
    params: { id: post.id },
    props: { post }
  }));
}
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { post } = Astro2.props;
  const { Content } = await renderEntry(post);
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": post.data.title, "description": post.data.description }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<article class="post"> <h1>${post.data.title}</h1> <div class="post-meta"> ${new Date(post.data.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  })} </div> <div class="content"> ${renderComponent($$result2, "Content", Content, {})} </div> </article> <hr> <p><a href="/blog">&larr; back to blog</a></p> ` })}`;
}, "/Users/kiaghods/Desktop/Academics/Projects/kiaghods-site/src/pages/blog/[id].astro", void 0);

const $$file = "/Users/kiaghods/Desktop/Academics/Projects/kiaghods-site/src/pages/blog/[id].astro";
const $$url = "/blog/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
