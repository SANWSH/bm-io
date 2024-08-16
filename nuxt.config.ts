export default defineNuxtConfig({
  //Head
  app: {
    head: {
      viewport: "width=360, initial-scale=1",
    },
  },

  // Disable server-side rendering (SSR)
  ssr: false,

  // Configure image settings
  image: {
    // Set the directory for images
    dir: "assets/images",
  },

  // Enable devtools
  devtools: {
    enabled: true,
  },

  // Configure PostCSS plugins
  postcss: {
    plugins: {
      // Use Tailwind CSS with a custom configuration file
      tailwindcss: {
        configs: "./tailwind.config.js",
      },

      // Use Autoprefixer
      autoprefixer: {},
    },
  },

  // Enable TypeScript type checking
  typescript: {
    typeCheck: false,
  },

  // Configure runtime settings
  runtimeConfig: {
    public: {
      // Set the API token from an environment variable
      api_token: process.env.API_TOKEN,
    },
  },

  // Import global CSS files
  css: ["~/assets/styles/main.scss", "~/assets/styles/tailwind.css"],

  // Enable Nuxt modules
  modules: [
    "@pinia/nuxt",
    "@vueuse/nuxt",
    "@nuxt/image",
    "@nuxtjs/tailwindcss",
    "nuxt-swiper",
    "nuxt-highcharts",
    "@nuxt/eslint",
    [
      "@vee-validate/nuxt",
      {
        componentNames: {
          Form: "VeeForm",
          Field: "VeeField",
          FieldArray: "VeeFieldArray",
          ErrorMessage: "VeeErrorMessage",
        },
      },
    ],
  ],

  // Configure Pinia settings
  pinia: {
    // Set the directory for Pinia stores
    storesDirs: ["./store/**"],
  },

  swiper: {
    // Swiper options
    //----------------------
    prefix: "Swiper",
    styleLang: "scss",
  },

  // Define an alias for the images directory
  alias: {
    "@images": "./assets/images",
  },

  server: {
    port: 3000,
    host: "secretHost",
  },

  routeRules: {
    "/api/**": { proxy: import.meta.env.API_URL },
    "/api/v2/**": { proxy: import.meta.env.API_URL_V2 },
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "sass:math"; @import "~/assets/styles/_vars";',
        },
      },
    },
  },

  eslint: {},

  compatibilityDate: "2024-08-06",
});
