import { defineNuxtPlugin } from '#app';

import mdit from 'markdown-it';

import sub from 'markdown-it-sub';
import sup from 'markdown-it-sup';
import fn from 'markdown-it-footnote';
import emo from 'markdown-it-emoji';
import def from 'markdown-it-deflist';
import ins from 'markdown-it-ins';
import container from 'markdown-it-container';

const markdownit = new mdit({
    html:         true,
    xhtmlOut:     true,
    breaks:       true,
    langPrefix:   'language-',
    linkify:      true,
    typographer:  true,
    quotes: '“”‘’',
  })
  .use(sub)
  .use(sup)
  .use(fn)
  .use(emo)
  .use(def)
  .use(ins)
  .use(container,'codeblock',{marker:'@'});
  
  markdownit.linkify.set({ fuzzyEmail: false }); 

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.provide('mdit',markdownit);
})



// import md from "markdown-it";

// export default defineNuxtPlugin(() => {
//   const renderer = md({
//     html: true,
//     preset: 'default',
//     linkify: true,
//     breaks: true,
//     use: [
//       'markdown-it-div',
//       'markdown-it-attrs'
//     ]
//   });
//   return {
//     provide: {
//       mdRenderer: renderer,
//     },
//   };
// });