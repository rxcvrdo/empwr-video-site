import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint:{
    ignoreDuringBuilds: true,
  },
  typescript:{
    ignoreBuildErrors:true
  },
  images: {
    remotePatterns: [{hostname:'empwr-video-share.b-cdn.net', protocol:'https', port:'', pathname: '/**'},
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '',
        pathname: '/**',
      },
    ],
    
  },
};

export default nextConfig;
