import React from 'react';

export function Champion() {
  return (
    <svg height="24" width="24" viewBox="0 0 24 24">
      <defs>
        <radialGradient
          cx="50.0892308%"
          cy="49.9468571%"
          fx="50.0892308%"
          fy="49.9468571%"
          r="59.2830769%"
          gradientTransform="matrix(1 0 0 .74286 0 .128)"
          id="rarities_champion_a">
          <stop stopColor="#FBECE3" offset="0%"></stop>
          <stop stopColor="#E1CEC1" offset="52.48%"></stop>
          <stop stopColor="#C7B0A0" offset="99.3%"></stop>
        </radialGradient>
        <linearGradient
          x1="50.1348837%"
          y1="0.212017167%"
          x2="50.1348837%"
          y2="100.057511%"
          id="rarities_champion_b">
          <stop stopColor="#EDAA2B" offset="0%"></stop>
          <stop stopColor="#EDA929" offset="3.532755%"></stop>
          <stop stopColor="#E9960D" offset="64.74%"></stop>
          <stop stopColor="#E78F02" offset="100%"></stop>
        </linearGradient>
      </defs>
      <g transform="translate(4.1 2)">
        <path
          fill="url(#rarities_champion_a)"
          d="M0.342857143 4.97142857L7.77142857 0 15.2 4.97142857 15.2 14.9714286 7.77142857 20 0.342857143 14.9714286z"></path>
        <path
          stroke="#72572E"
          fill="url(#rarities_champion_b)"
          d="M2.85714286 6.68571429L7.77142857 3.31428571 12.6857143 6.68571429 12.6857143 13.3142857 7.77142857 16.6285714 2.85714286 13.3142857z"></path>
      </g>
    </svg>
  );
}
export function Epic() {
  return (
    <svg height="24" width="24" viewBox="0 0 24 24">
      <defs>
        <radialGradient
          cx="50.0164706%"
          cy="49.9558282%"
          fx="50.0164706%"
          fy="49.9558282%"
          r="51.1690184%"
          gradientTransform="matrix(.95882 0 0 1 .02 0)"
          id="rarities_epic_a">
          <stop stopColor="#FBECE3" offset="0%"></stop>
          <stop stopColor="#E5D3C7" offset="33.83%"></stop>
          <stop stopColor="#CFBAAB" offset="75.35%"></stop>
          <stop stopColor="#C7B0A0" offset="99.3%"></stop>
        </radialGradient>
        <linearGradient
          x1="49.8903766%"
          y1="-0.0620087336%"
          x2="49.8903766%"
          y2="99.9244541%"
          id="rarities_epic_b">
          <stop stopColor="#A833E6" offset="0%"></stop>
          <stop stopColor="#9318D5" offset="62.35%"></stop>
          <stop stopColor="#8B0DCF" offset="99.58%"></stop>
        </linearGradient>
      </defs>
      <g transform="translate(2 2.4)">
        <path
          fill="url(#rarities_epic_a)"
          d="M19.7142857 11.4285714L9.88571429 18.7428571 0.285714286 11.4285714 3.77142857 0.114285714 15.6571429 0.114285714z"></path>
        <path
          stroke="#592677"
          fill="url(#rarities_epic_b)"
          d="M16.9142857 10.6857143L10 15.8285714 3.25714286 10.6857143 5.71428571 2.74285714 14.0571429 2.74285714z"></path>
      </g>
    </svg>
  );
}
export function Rare() {
  return (
    <svg height="24" width="24" viewBox="0 0 24 24">
      <defs>
        <radialGradient
          cx="50%"
          cy="50%"
          fx="50%"
          fy="50%"
          r="56.0003497%"
          gradientTransform="matrix(1 0 0 .81714 0 .091)"
          id="rarities_rare_a">
          <stop stopColor="#FBECE3" offset="0%"></stop>
          <stop stopColor="#E5D3C7" offset="33.83%"></stop>
          <stop stopColor="#CFBAAB" offset="75.35%"></stop>
          <stop stopColor="#C7B0A0" offset="99.3%"></stop>
        </radialGradient>
        <linearGradient
          x1="0%"
          y1="50%"
          x2="100.167692%"
          y2="50%"
          id="rarities_rare_b">
          <stop stopColor="#398CF7" offset="0%"></stop>
          <stop stopColor="#2476F2" offset="58.3%"></stop>
          <stop stopColor="#1A6BF0" offset="100%"></stop>
        </linearGradient>
      </defs>
      <g transform="translate(3.66 2)">
        <path
          fill="url(#rarities_rare_a)"
          d="M8.28571429 0L0.114285714 9.88571429 8.17142857 20 16.4571429 9.88571429z"></path>
        <path
          stroke="#365181"
          fill="url(#rarities_rare_b)"
          d="M13.8285714 9.82857143L8.17142857 16.6857143 2.68571429 9.94285714 8.34285714 3.14285714z"></path>
      </g>
    </svg>
  );
}
export function Common() {
  return (
    <svg height="24" width="24" viewBox="0 0 24 24">
      <defs>
        <radialGradient
          cx="50%"
          cy="50%"
          fx="50%"
          fy="50%"
          r="53.4802676%"
          gradientTransform="matrix(.88462 0 0 1 .058 0)"
          id="rarities_common_a">
          <stop stopColor="#FBECE3" offset="0%"></stop>
          <stop stopColor="#E5D3C7" offset="33.83%"></stop>
          <stop stopColor="#CFBAAB" offset="75.35%"></stop>
          <stop stopColor="#C7B0A0" offset="99.3%"></stop>
        </radialGradient>
        <linearGradient
          x1="0.116775114%"
          y1="49.9998821%"
          x2="100.116642%"
          y2="49.9998821%"
          id="rarities_common_b">
          <stop stopColor="#14C87A" offset="0%"></stop>
          <stop stopColor="#0EBE63" offset="59.25%"></stop>
          <stop stopColor="#0BB958" offset="100%"></stop>
        </linearGradient>
      </defs>
      <g transform="translate(2 3.25)">
        <path
          fill="url(#rarities_common_a)"
          d="M0.342857143 0.342857143L19.6571429 0.342857143 10.2857143 17.4285714z"></path>
        <path
          stroke="#295A3F"
          fill="url(#rarities_common_b)"
          d="M10.1714286 13.2L3.71428571 2.11428571 16.2285714 2.11428571z"></path>
      </g>
    </svg>
  );
}
