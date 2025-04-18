import React from 'react';
import { Helmet } from 'react-helmet';
import NavBar from './NavBar.tsx';
export default function BaseHead() {
  return (
    <>
      <Helmet>
        {/* Basic SEO */}
        <title>Your Page Title | Brand Name</title>
        <meta name="description" content="A short, compelling description of your page content." />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourwebsite.com/page-url" />
        <meta property="og:title" content="Your Page Title | Brand Name" />
        <meta property="og:description" content="Same description as meta description is fine." />
        <meta property="og:image" content="https://yourwebsite.com/path-to-image.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://yourwebsite.com/page-url" />
        <meta name="twitter:title" content="Your Page Title | Brand Name" />
        <meta name="twitter:description" content="Same description works here too." />
        <meta name="twitter:image" content="https://yourwebsite.com/path-to-image.jpg" />

        {/* robots */}
        <meta name="robots" content="index, follow" />

        {/* Bootstrap  */}
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/js/bootstrap.bundle.min.js" integrity="sha384-k6d4wzSIapyDyv1kpU366/PK5hCdSbCRGRCMv+eplOQJWyd1fbcAu9OCUj5zNLiq" crossorigin="anonymous"></script>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-SgOJa3DmI69IUzQ2PVdRZhwQ+dy64/BUtbMJw1MZ8t5HZApcHrRKUc4W0kG879m7" crossorigin="anonymous" />
      </Helmet>
      <NavBar/>
    </>
  );
}
