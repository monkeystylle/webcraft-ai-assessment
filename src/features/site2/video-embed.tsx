'use client';

import React, { useEffect } from 'react';

const VideoEmbed: React.FC = () => {
  useEffect(() => {
    // Move the script injection to useEffect to ensure it only runs client-side
    const videoScript = `
      (function (v, i, d, a, l, y, t, c, s) {
          y='_'+d.toLowerCase();c=d+'L';if(!v[d]){v[d]={};}if(!v[c]){v[c]={};}if(!v[y]){v[y]={};}var vl='Loader',vli=v[y][vl],vsl=v[c][vl + 'Script'],vlf=v[c][vl + 'Loaded'],ve='Embed';
          if (!vsl){vsl=function(u,cb){
              if(t){cb();return;}s=i.createElement("script");s.type="text/javascript";s.async=1;s.src=u;
              if(s.readyState){s.onreadystatechange=function(){if(s.readyState==="loaded"||s.readyState=="complete"){s.onreadystatechange=null;vlf=1;cb();}};}else{s.onload=function(){vlf=1;cb();};}
              i.getElementsByTagName("head")[0].appendChild(s);
          };}
          vsl(l+'loader.min.js',function(){if(!vli){var vlc=v[c][vl];vli=new vlc();}vli.loadScript(l+'player.min.js',function(){var vec=v[d][ve];t=new vec();t.run(a);});});
      })(window, document, 'Vidalytics', 'vidalytics_embed_CfEsMd96UjcQPDoU', 'https://fast.vidalytics.com/embeds/liw2XJtk/CfEsMd96UjcQPDoU/');
    `;

    // Create and append the script element
    const script = document.createElement('script');
    script.innerHTML = videoScript;
    document.body.appendChild(script);

    // Cleanup function
    return () => {
      document.body.removeChild(script);
    };
  }, []); // Empty dependency array means this runs once when component mounts

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div
        id="vidalytics_embed_CfEsMd96UjcQPDoU"
        className="w-full aspect-video"
      ></div>
    </div>
  );
};

export default VideoEmbed;
