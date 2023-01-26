import React from 'react';
import ContentLoader from 'react-content-loader';
import { ContLoader } from './Skeleton.styled';

export default function Skeleton() {
  return (
    <ContLoader>
      <ContentLoader
        speed={2}
        width={300}
        height={200}
        viewBox="0 0 400 160"
        backgroundColor="#d3d1f1"
        foregroundColor="#c5c0c0"
      >
        <rect x="342" y="45" rx="3" ry="3" width="88" height="6" />
        <rect x="321" y="87" rx="3" ry="3" width="52" height="6" />
        <rect x="30" y="149" rx="3" ry="3" width="410" height="6" />
        <rect x="59" y="124" rx="3" ry="3" width="380" height="6" />
        <rect x="0" y="88" rx="3" ry="3" width="178" height="6" />
        <circle cx="246" cy="48" r="47" />
        <rect x="29" y="51" rx="3" ry="3" width="88" height="6" />
        <circle cx="157" cy="21" r="18" />
      </ContentLoader>
    </ContLoader>
  );
}
