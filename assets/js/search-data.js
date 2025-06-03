// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "publications by categories in reversed chronological order. *,^ denotes equal author contribution.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "Amalgamation of various short and long-term undertakings.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-academics",
          title: "academics",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/academics";
          },
        },{id: "post-on-the-question-of-values",
        
          title: "On the Question of Values",
        
        description: "This post abstractly discusses how advancing AI challenges societal values, prompting a redefinition of intelligence and mastery while urging deeper reflection on human purpose in a technologically transformed world.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/values/";
          
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/kiaghods", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/kia-ghods", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=maFTcpkAAAAJ", "_blank");
        },
      },];
