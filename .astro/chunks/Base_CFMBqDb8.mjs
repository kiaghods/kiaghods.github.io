import { c as createComponent, d as addAttribute, h as renderHead, a as renderTemplate, i as renderSlot, b as createAstro } from './astro/server_CbBtvlQf.mjs';
import 'piccolore';
import 'clsx';
/* empty css                             */

const $$Astro = createAstro();
const $$Base = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Base;
  const { title = "Kia Ghods", description = "cs + math @ princeton" } = Astro2.props;
  const currentPath = Astro2.url.pathname;
  const navLinks = [
    { href: "/", label: "about" },
    { href: "/publications", label: "publications" },
    { href: "/projects", label: "projects" },
    { href: "/academics", label: "academics" },
    { href: "/blog", label: "blog" }
  ];
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="description"${addAttribute(description, "content")}><title>${title === "Kia Ghods" ? title : `${title} / kia ghods`}</title><link rel="icon" type="image/jpeg" href="/img/prof_pic_circ.jpg"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;600&display=swap" rel="stylesheet">${renderHead()}</head> <body> <nav> <a href="/" class="site-name">kia ghods</a> ${navLinks.map((link) => renderTemplate`<a${addAttribute(link.href, "href")}${addAttribute(currentPath === link.href || link.href !== "/" && currentPath.startsWith(link.href) ? "active" : "", "class")}> ${link.label} </a>`)} <div class="separator"></div> </nav> <main> ${renderSlot($$result, $$slots["default"])} </main> <footer> <span>&copy; ${(/* @__PURE__ */ new Date()).getFullYear()} kia ghods</span> <span class="cursor">kia.ghods [at] princeton (dot) edu</span> </footer> </body></html>`;
}, "/Users/kiaghods/Desktop/Academics/Projects/kiaghods-site/src/layouts/Base.astro", void 0);

export { $$Base as $ };
