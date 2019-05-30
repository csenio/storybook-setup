import React from 'react';
import { Article, OtherBlogPosts } from 'containers';
import Head from 'next/head';
import { blogPosts } from '../../data';

const Case = () => {
  const { title, text, backButton } = blogPosts[
    'vying-for-vinted-clothing-scale-up-on-the-way-up'
  ];

  const content = {
    title,
    text,
    shareText: 'Share this story',
    backButton,
    backHref: '/blog'
  };

  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, user-scalable=no"
        />
        <title>Vying for Vinted – Clothing Scale Up on the way up.</title>
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Vying for Vinted – Clothing Scale Up on the way up."
        />
        <meta
          property="og:url"
          content="https://oneworks.co/blog/amazon-com/"
        />
        <meta property="og:site_name" content="ONE." />
        <meta
          property="article:publisher"
          content="https://www.facebook.com/WeAreOne.Works/"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Vying for Vinted – Clothing Scale Up on the way up."
        />
      </Head>
      <Article content={content} />
      <OtherBlogPosts />
    </>
  );
};

export default Case;
