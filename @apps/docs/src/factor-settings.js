module.exports.default = Factor => {
  return {
    docs: {
      pages: [
        {
          group: "Getting Started"
        },
        {
          doc: "",
          name: "Introduction",
          file: require("./docs/introduction/index.md"),
          title: "Introduction: Why Use Factor"
        },
        {
          doc: "quickstart",
          title: "Installation and Quickstart",
          description:
            "Quick start guide on how to install Factor framwork and Vue CMS in less than 5 minutes.",
          file: require("./docs/quickstart.md")
        },
        {
          doc: "dashboard-setup",
          file: require("./docs/dashboard/setup.md"),
          title: "Setting Up the Dashboard and CMS"
        },

        {
          group: "App Development"
        },
        {
          name: "File Structure",
          doc: "file-structure",
          file: require("./docs/structure.md"),
          title: "Factor File Structure"
        },
        {
          name: "Add Extensions",
          doc: "extension-basics",
          file: require("./docs/extension-basics.md"),
          title: "Using Plugins / Themes"
        },

        {
          doc: "customize",
          file: require("./docs/customize.md"),
          title: "Customize Factor Plugins and Themes"
        },

        {
          doc: "config",
          name: "Config",
          file: require("./docs/config.md"),
          title: "Factor Config and Setup CLI"
        },
        {
          doc: "cli",
          name: "Use the CLI",
          file: require("./docs/cli.md"),
          title: "Using Factor CLI and Creating Custom Commands"
        },
        {
          doc: "filters",
          file: require("./docs/framework/filters.md"),
          title: "Factor Filters and Callbacks API"
        },
        {
          doc: "routes-and-stores",
          file: require("./docs/framework/routes-stores.md"),
          title: "Factor Routes and Stores"
        },
        {
          doc: "components",
          file: require("./docs/framework/components.md"),
          title: "Factor Components - Views and Elements"
        },

        {
          name: "Server and Endpoints",
          doc: "server",
          file: require("./docs/server.md"),
          title: "Factor Vue Server Side Rendering (SSR)"
        },

        {
          name: "Hosting Your App",
          doc: "serving",
          file: require("./docs/hosting.md"),
          title: "Hosting and Serving Your Factor App"
        },

        {
          group: "Extension Development"
        },
        {
          name: "Post System",
          doc: "post-system",
          file: require("./docs/posts.md"),
          title: "Working with Posts"
        },
        {
          doc: "create-plugins",
          file: require("./docs/creating-plugins.md"),
          title: "Using and Creating Factor Themes"
        },
        {
          doc: "create-themes",
          file: require("./docs/creating-themes.md"),
          title: "Using and Creating Factor Themes"
        },
        {
          name: "Extend the CLI",
          doc: "extend-the-CLI",
          file: require("./docs/cli-dev.md"),
          title: "Extending the Factor CLI"
        },

        {
          group: "Contributing"
        },
        {
          doc: "guidelines",
          file: require("./docs/contribution.md"),
          title: "Contributing Guidelines"
        }
      ],
      base: "guide"
    },
    site: {
      logo: () => import("./el/logo-factor"),
      nav: [
        {
          path: "/guide",
          name: "Development Guide"
        },
        {
          path: "/themes",
          name: "Themes"
        },
        {
          path: "/plugins",
          name: "Plugins"
        },
        // {
        //   path: "https://gitter.im/factorjs/community",
        //   name: "Community",
        //   icon: "gitter"
        // },
        {
          path: "https://github.com/fiction-com/factor",
          name: "Github",
          icon: "github"
        },
        {
          component: Factor.options.components["plugin-signin-profile-menu"]
        }
      ]
    },

    footer: {
      headline: "Released under the GPL-2 License",
      legal:
        "Copyright &copy; - <a href='https://www.fiction.com'>Fiction.com</a> and The Contibutors",
      logo: () => import("./el/logo-fiction")
    },
    home: {
      meta: {
        title: "Factor.js - VueJS Framework and Web App OS",
        description: "Factor is a modular CMS framework based on Vue.js.."
      },

      headline: "Universal VueJS Framework for Front-End Developers",
      subHeadline:
        "An open-source platform for building impressive universal apps with VueJS, MongoDB and extensions.",
      //graphic: require("./img/cms-engine.png"),
      boxes: [
        {
          icon: require("./img/icon-post.svg"),
          title: "Dashboard and Posts",
          description:
            "Weild a powerful dashboard and post system to build advanced app functionality. "
        },
        {
          icon: require("./img/icon-plugin.svg"),
          title: "Plugins and Themes",
          description:
            "Factor is designed for drop-in, one-click extension. Building and using plugins and themes is easy."
        },
        {
          icon: require("./img/icon-time.svg"),
          title: "Open Source",
          description:
            "Factor is built on the GPL2 license. The same used by projects like WordPress."
        }
      ],
      actions: [
        {
          btn: "primary",
          path: "/guide/quickstart",
          text: "Start Now"
        },
        {
          btn: "tertiary",
          path: "/guide",
          text: "Read the Docs"
        }
      ]
    }
  }
}