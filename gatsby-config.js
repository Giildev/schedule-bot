module.exports = {
  siteMetadata: {
    title: 'Free React Admin dashboard template based on Gatsby',
    description: 'Admin dashboard template based on Gatsby with @paljs/ui component package.',
    author: 'Wapp',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-typescript',
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/Layouts/index.tsx`),
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'oah-admin',
        short_name: 'OAH',
        start_url: '/dashboard',
        display: 'minimal-ui',
        icon: 'src/images/OAH.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-171177495-3',
      },
    },
    {
      resolve: 'gatsby-plugin-firebase',
      options: {
        credentials: {
          apiKey: 'AIzaSyA5VK6QvWRefWi6-WHGwCpc0jc4VHwNfwM',
          authDomain: 'wapp-0001.firebaseapp.com',
          databaseURL: 'https://wapp-0001.firebaseio.com',
          projectId: 'wapp-0001',
          storageBucket: 'wapp-0001.appspot.com',
          messagingSenderId: '945135580824',
          appId: '1:945135580824:web:bb4d7f21ad302bea5502ed',
          measurementId: 'G-7CQ5PVS4HR',
        },
      },
    },
  ],
};
