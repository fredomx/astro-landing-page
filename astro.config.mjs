import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://astro-moon-landing.netlify.app/",
  integrations: [
    tailwind(),
    NetlifyCMS({
      
      config: {
    
        backend: {
          name: 'git-gateway',
          branch: 'main',
        },
        collections: [
          // Define a blog post collection
    {
      name: 'posts',
      label: 'Blog Posts',
      folder: 'src/pages/posts',
      create: true,
      delete: true,
      fields: [
        { name: 'title', widget: 'string', label: 'Post Title' },
        { name: 'body', widget: 'markdown', label: 'Post Body' },
      ],
    },
        ],
        adminPath: '/admin',
      },
    }),
  
  ],
  vite: {
    ssr: {
      external: ["svgo"],
    },

  },
});
