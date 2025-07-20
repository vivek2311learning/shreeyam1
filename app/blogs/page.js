import Blogs from '@/component/Blogs';
import React from 'react';

export const metadata = {
  title: "Blogs | Shreeyam Consultancy",
  description:
    "Explore expert insights and stories in law, business, and architecture. Stay informed with our latest updates and thought leadership.",
  keywords: [
    "legal blogs",
    "business consulting articles",
    "architectural insights",
    "Shreeyam news",
    "Shreeyam Consultancy blogs"
  ],
  openGraph: {
    title: "Blogs | Shreeyam Consultancy",
    description:
      "Discover expert blogs and news from Shreeyam Consultancy covering legal advice, business strategy, and architectural innovation.",
    url: "https://www.shreeyamconsultancy.com/blogs",
    type: "website",
    images: [
      {
        url: "https://www.shreeyamconsultancy.com/images/blog-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Shreeyam Consultancy Blog Cover",
      },
    ],
  },
};

const BlogsRoute = () => {
  return <Blogs />;
};

export default BlogsRoute;
