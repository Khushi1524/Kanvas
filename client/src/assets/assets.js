import hero from './HeroImg.png';
import logo from './logo.png';
import logoWhite from './logo-white.png';
import logoShort from './logo-short.png';
import logoWithoutBg from './logo-without-bg.png';
import logoWithoutBg1 from './logo-without-bg1.png';
import search from './Search.png';
import track from './Track.png';
import paint from './paint.png';
import searchsvg from './search.svg';
import tracksvg from './tracking.svg';
import paintsvg from './paint.svg';
import featuredArt from './featuredArt.png';
import CTA from './ctaa.png';

export const assets = {
    hero,
    logo,
    logoWhite,
    logoWithoutBg,
    logoWithoutBg1,
    logoShort,
    search,
    track,
    paint,
    searchsvg,
    tracksvg,
    paintsvg,
    featuredArt,
    CTA
}

export const dummyArts = [
  {
    _id: "1",
    name: "Golden Horizon",
    price: 120,
    images: [assets.featuredArt],
    category: "Abstract",
    rating: 4.5,
    artist: "Khushi Arts",
    description: "Beautiful abstract sunset artwork with warm tones.",
  },
  {
    _id: "2",
    name: "Ocean Dreams",
    price: 180,
    images: [assets.hero],
    category: "Nature",
    rating: 4.8,
    artist: "Kanvas Studio",
    description: "Blue ocean inspired modern digital artwork.",
  },
  {
    _id: "3",
    name: "Silent Forest",
    price: 95,
    images: [assets.CTA],
    category: "Landscape",
    rating: 4.3,
    artist: "Artify",
    description: "Minimal forest painting with soft green shades.",
  },
  {
    _id: "4",
    name: "Color Burst",
    price: 150,
    images: [assets.featuredArt],
    category: "Modern",
    rating: 4.7,
    artist: "Canvasly",
    description: "Vibrant colorful artwork for modern interiors.",
  },
];