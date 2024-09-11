export default {
	title: "Dockar",
	url: "http://localhost:8080",
	language: "en",
	description: "Documentation site project built with 11ty",
	image: "/media/11tyimage.svg",
	favicon: "/media/11tyimage.svg",
	show_social_icon: true, // change false if you do not want to show social icon navbar
	show_footer: true, // change false if you do not want to show footer
	show_search: true, // change false if you do not want to show search widget
    search_widget: {
                        nav_title: "Search",
                        modal_title: "Search"
                    },
    github_project: {
                        repo: "https://github.com/mesinkasir/dockar",
                        branch: "main"
                    },
	nav: 
          [
            {
        		name: "Home",
		        link: "/"
	         },
            {
        		name: "About",
		        link: "/about/"
	         },
            {
        		name: "Docs",
		        link: "/doc/introduction/"
	         },
            {
        		name: "Blog",
		        link: "/blog/"
	         },
            {
        		name: "Contact",
		        link: "/contact/"
	         }
        ],
	social:
            [
             {
        		title: "Github Repo",
        		icon: "github",
		        link: "https://github.com/mesinkasir/dockar/"
	         },
             {
        		title: "Visit Main Site",
        		icon: "rocket-takeoff",
		        link: "https://www.hockeycomputindo.com/en/jamstack/"
	         },
           ],
	footer:
            [
             {
        		title: "Get Start",
        		nav: [
                        { 
                            name: "Download",
                            link: "/doc/getstart/download/"
                        },
                        { 
                            name: "Installation",
                            link: "/doc/getstart/install/"
                        },
                        { 
                            name: "Guides",
                            link: "/doc/guides/"
                        },
                        { 
                            name: "Run Project",
                            link: "/doc/runproject/"
                        }
                     ]
	         },
             {
        		title: "11ty Themes",
        		nav: [
                        { 
                            name: "Eleventy Themes",
                            link: "https://www.hockeycomputindo.com/themes/eleventy/"
                        },
                        { 
                            name: "Company 11ty",
                            link: "https://www.hockeycomputindo.com/themes/eleventy/captaline/"
                        },
                        { 
                            name: "Minimalist 11ty",
                            link: "https://www.hockeycomputindo.com/themes/eleventy/litov-jamstack-cms/"
                        },
                        { 
                            name: "All Themes",
                            link: "https://www.hockeycomputindo.com/themes/"
                        }
                     ]
	         },
             {
        		title: "Sponsor",
        		nav: [
                        { 
                            name: "Hc Com",
                            link: "https://www.hockeycomputindo.com/en/jamstack/"
                        },
                        { 
                            name: "Axcora",
                            link: "https://www.axcora.com/en/websitedeveloper/"
                        },
                        { 
                            name: "Creativitas",
                            link: "https://creativitas.dev"
                        },
                        { 
                            name: "Hire Dev",
                            link: "https://creativitas.dev/service/build-develop-website-with-jekyll-eleventy-astro-static-site-generator/"
                        }
                     ]
	         },
             {
        		title: "Support Us",
        		nav: [
                        { 
                            name: "Paypal",
                            link: "https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=JVZVXBC4N9DAN"
                        },
                        { 
                            name: "Gumroad",
                            link: "https://creativitaz.gumroad.com/coffee"
                        },
                        { 
                            name: "Github",
                            link: "https://github.com/sponsors/mesinkasir?frequency=one-time"
                        }
                     ]
	         },
           ],
	author: {
		name: "Your Name Here",
		email: "youremailaddress@example.com",
		facebook: "https://fb.com",
		twitter: "https://twitter.com",
		twitter_user: "@tweetuser",
		url: "https://example.com/about-me/"
	}
}
