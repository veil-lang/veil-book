import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Veil Lang",
  tagline:
    "A modern programming language designed for simplicity and performance",
  favicon: "img/favicon.ico",

  future: {
    v4: true,
  },

  url: "https://veil-lang.org",
  baseUrl: "/",

  organizationName: "veil-lang",
  projectName: "veil",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",

      {
        docs: {
          sidebarPath: "./sidebars.ts",
        },

        blog: {
          showReadingTime: true,

          feedOptions: {
            type: ["rss", "atom"],

            xslt: true,
          },

          onInlineTags: "warn",

          onInlineAuthors: "warn",

          onUntruncatedBlogPosts: "warn",
        },

        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      "@docusaurus/plugin-client-redirects",
      {
        redirects: [
          {
            to: "/docs/intro/installation",
            from: "/docs/",
          },
        ],
      },
    ],
  ],

  themeConfig: {
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "Veil",
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Docs",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Learn",
          items: [
            {
              label: "Getting Started",

              to: "/docs/",
            },

            {
              label: "Language Basics",
              to: "/docs/intro/language-basics",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/veil-lang/veil",
            },
            {
              label: "Discord",
              href: "https://dsc.gg/velang",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Veil Lang. All rights reserved.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ["powershell", "bash"],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
