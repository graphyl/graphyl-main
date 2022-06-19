export const aboutInfo = [
{
  title:'Culture',
  desc: 'Graphyl strives to create a culture that empowers a humble, creative, and independent workforce. We are passionate about our customers and believe that collaboration and creativity are powerful tools to help them make their dreams a reality. We believe that what makes us different makes us stronger. Building a more diverse, inclusive, and equitable organization is good for our teams, our customers, and our community. We empower each other to bring unique perspectives and experiences to work, and we continually seek new ways to do so.',
},
{
  title:'Work flow ',
  desc:'We combine sharp design with rich technology to craft exciting brands. Strong Follower of Agile Methodology to Ship Software Apps.'
},
{
  title: 'About us',
  desc: 'Graphyl is a Team of Under-rated but Enthusiastic developers aiming to provide optimal solutions to their clients.We work together to design, create and produce work that we are proud of for folks that we believe in. Graphylis an all-in-one IT Solutions Platform for small business. We empower small Scale Businesses and Startups around the 	world to start and grow their businesses with our smart development technologies, scalable Support, and inspiring content.',
},
{
  title: 'History',
  desc: 'About 6 months back in Jan 2022, The trio Ubed Shaikh, Saad Shaikh and Laique Mirza laid the foundation of Graphyl. After working for around 5 years and holding prominent positions in IT industry the feeling of being Under-Valued bowed the seeds for launching or own firm with the root motive to provide Affordable, Well Structured Solutions to Businesses and startups powered by Industry Leading technologies avoiding Legacy Havocs and Mugups.',
}
]
export const serviceCardData = [
  {
    icon: 'https://res.cloudinary.com/graphyl/image/upload/v1654417835/graphyl-website-assets/services/web-dev_gnmcyu.png',
    title: 'Website Development',
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vita exercitationem illo suscipit. Dignissimos minima, maiores harum asperiore animi sunt. Provident ab perferendis velit unde harum.',
  },
  {
    icon: `https://res.cloudinary.com/graphyl/image/upload/v1654417820/graphyl-website-assets/services/mobile-app_n73jqp.png`,
    title: 'Mobile Application Development',
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vita exercitationem illo suscipit. Dignissimos minima, maiores harum asperiore animi sunt. Provident ab perferendis velit unde harum.',
  },
  {
    icon: `https://res.cloudinary.com/graphyl/image/upload/v1654417821/graphyl-website-assets/services/desktop_bw2mso.png`,
    title: 'Desktop Application Development',
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vita exercitationem illo suscipit. Dignissimos minima, maiores harum asperiore animi sunt. Provident ab perferendis velit unde harum.',
  },
  {
    icon: `https://res.cloudinary.com/graphyl/image/upload/v1654417838/graphyl-website-assets/services/ui-ux_blgvti.png`,
    title: 'UI/UX Development',
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vita exercitationem illo suscipit. Dignissimos minima, maiores harum asperiore animi sunt. Provident ab perferendis velit unde harum.',
  },
  {
    icon: `https://res.cloudinary.com/graphyl/image/upload/v1654417839/graphyl-website-assets/services/maintenance_retimg.png`,
    title: 'Maintenance',
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vita exercitationem illo suscipit. Dignissimos minima, maiores harum asperiore animi sunt. Provident ab perferendis velit unde harum.',
  },
  {
    icon: `https://res.cloudinary.com/graphyl/image/upload/v1654417837/graphyl-website-assets/services/testing_atvjb3.png`,
    title: 'Testing',
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vita exercitationem illo suscipit. Dignissimos minima, maiores harum asperiore animi sunt. Provident ab perferendis velit unde harum.',
  },
]

export interface Project {
  name: string
  imgUrl: string
  liveUrl?: string
}

export const Projects: Project[] = [
  {
    name: 'Bookmark Landing Page',
    imgUrl:
      'https://res.cloudinary.com/graphyl/image/upload/v1654685259/graphyl-website-assets/projects/BookMark_Landing_Page_fosubr.png',
    liveUrl: 'https://ubed90.github.io/bookmark-landing-page',
  },
  {
    name: 'Natours',
    imgUrl:
      'https://res.cloudinary.com/graphyl/image/upload/v1654685261/graphyl-website-assets/projects/Natours_h8qzyh.png',
    liveUrl: 'https://ubed90.github.io/Natours',
  },

  {
    name: 'SunnySide Landing Page',
    imgUrl:
      'https://res.cloudinary.com/graphyl/image/upload/v1654685259/graphyl-website-assets/projects/SunnySide_whgd85.png',
    liveUrl: 'https://ubed90.github.io/sunnyside-landing-page-FE-mentor',
  },

  {
    name: 'KhoobSurat',
    imgUrl:
      'https://res.cloudinary.com/graphyl/image/upload/v1654685960/graphyl-website-assets/projects/Khoobsurat_nath0t.png',
    liveUrl: 'https://www.khooobsooorat.com/',
  },

  {
    name: 'Nizami Darbar',
    imgUrl:
      'https://res.cloudinary.com/graphyl/image/upload/v1654686379/graphyl-website-assets/projects/Nizami_Darbar_e4c0mv.png',
    liveUrl: 'https://alnizamidarbar.com/',
  },

  {
    name: 'Static Landing Page',
    imgUrl:
      'https://res.cloudinary.com/graphyl/image/upload/v1654685259/graphyl-website-assets/projects/Tracking_u3jczj.png',
    liveUrl: 'https://ubed90.github.io/Project-tracking-intro-component/',
  },
]

export const accordionData = [
  {
    question: 'How much does a website cost?',
    answer:
      'The cost of a website depends on the number of pages of a website. As the number of pages increases, the cost increases. The cost also depends on whether the website is static or dynamic.',
  },
  {
    question: "What are the different types of websites you'll develop?",
    answer:
      'We develop Static websites, Dynamic websites, E-Commerce websites, MLM websites, Blogging websites as per client requirement.',
  },
  {
    question: 'Will my website be mobile-friendly?',
    answer:
      'Absolutely! Having a mobile-friendly website is more important than ever! We work hard to ensure your website looks great on a mobile devices too.',
  },
  {
    question: 'How long does it take to build a website?',
    answer:
      'Every business has unique requirements and every customer has different objectives. Some sites can take few days for development and some can take more than a month. How much input you can provide during the initial stages, your availability with feedback, how soon the content is ready – all this affects the speed of completion. Through meetings, planning and discussion we’ll be able to understand your requirements and then we can be able to estimate a project timeline.',
  },
  {
    question: 'Do you offer hosting services?',
    answer:
      "All of our websites plan come with hosting packages. Our Linux Web Hosting features: SSL certificate (Let's Encrypt) Modsecurity, Imunify360, free daily backup, Litespeed SSD server with 99% uptime guarantee.",
  },
  {
    question: 'Why are you so affordable?',
    answer: 'This is because our charges depends on work and not on client.',
  },
  {
    question: 'Do you create WordPress websites?',
    answer:
      'Yes, WordPress is a great content management system that now powers more than 33% of the web. Its huge market share is due to it’s flexibility and ease of use.',
  },
  {
    question: "Will I be able to update the site myself when it's finished?",
    answer:
      'Yes! We love it when our clients take control of their website and learn to manage it on their own. We’ll conduct a virtual training session via Skype or Any desk to help get you on your way.',
  },
  {
    question: 'Will you maintain my site for me?',
    answer:
      'Yes, we do provide AMC services and currently providing on-going support for many of our clients',
  },
]
