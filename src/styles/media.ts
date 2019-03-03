import { generateMedia } from 'styled-media-query';

const customMedia = generateMedia({
  widescreen: '1920px',
  largeScreen: '1200px',
  computer: '992px',
  tablet: '768px',
  smallMobile: '330px'
});

export default {
  widescreen: customMedia.greaterThan('widescreen'),
  largeScreen: customMedia.between('largeScreen', 'widescreen'),
  underLargeScreen: customMedia.lessThan('largeScreen'),
  desk: customMedia.greaterThan('computer'),
  computer: customMedia.between('computer', 'largeScreen'),
  underComputer: customMedia.lessThan('computer'),
  tablet: customMedia.between('tablet', 'computer'),
  aboveMobile: customMedia.greaterThan('tablet'),
  mobile: customMedia.lessThan('tablet'),
  smallMobile: customMedia.lessThan('smallMobile')
};
