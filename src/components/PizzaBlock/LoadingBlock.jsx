import React from 'react';
import ContentLoader from "react-content-loader";

function LoadingBlock() { 
  // вёрстка для отображения предзагрузачной картинки, пока данные не прогрузились
    return (
        <ContentLoader 
        speed={2}
        width={280}
        height={460}
        viewBox="0 0 280 460"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <rect x="-1" y="287" rx="3" ry="3" width="280" height="26" /> 
        <rect x="0" y="322" rx="6" ry="6" width="280" height="84" /> 
        <rect x="162" y="413" rx="19" ry="19" width="110" height="43" /> 
        <rect x="0" y="423" rx="3" ry="3" width="84" height="27" /> 
        <circle cx="135" cy="145" r="135" />
      </ContentLoader>
      )
}

export default LoadingBlock
