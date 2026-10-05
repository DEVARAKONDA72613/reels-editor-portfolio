const VIMEO_THUMBNAIL = (id) => `https://vumbnail.com/${id}.jpg`;

export const REELS = [
  {
    id: "01",
    title: "SALAAR / DRAFT CUT",
    account: "@drifter.cuts",
    category: "FILM EDIT",
    accentColor: "#D66A32",
    tags: ["SHORT-FORM", "FILM EDIT"],
    vimeoId: "1232982757",
    vimeoUrl: "https://player.vimeo.com/video/1232982757",
    poster: VIMEO_THUMBNAIL("1232982757"),
    concept: "A short-form film edit from the @drifter.cuts Vimeo showcase.",
  },
  {
    id: "02",
    title: "DHURANDHAR / 2K CUT",
    account: "@drifter.cuts",
    category: "FILM EDIT",
    accentColor: "#B86B3A",
    tags: ["SHORT-FORM", "FILM EDIT"],
    vimeoId: "1232982421",
    vimeoUrl: "https://player.vimeo.com/video/1232982421",
    poster: VIMEO_THUMBNAIL("1232982421"),
    concept: "A short-form film edit from the @drifter.cuts Vimeo showcase.",
  },
  {
    id: "03",
    title: "FIGHT CLUB × MAHAAN",
    account: "@drifter.cuts",
    category: "MASHUP EDIT",
    accentColor: "#C58A45",
    tags: ["MASHUP", "VISUAL RHYTHM"],
    vimeoId: "1232982422",
    vimeoUrl: "https://player.vimeo.com/video/1232982422",
    poster: VIMEO_THUMBNAIL("1232982422"),
    concept: "A cross-film mashup edit built around visual rhythm, music and contrast.",
  },
  {
    id: "04",
    title: "RETRO / 2K CUT",
    account: "@drifter.cuts",
    category: "FILM EDIT",
    accentColor: "#7E8B52",
    tags: ["SHORT-FORM", "FILM EDIT"],
    vimeoId: "1232982423",
    vimeoUrl: "https://player.vimeo.com/video/1232982423",
    poster: VIMEO_THUMBNAIL("1232982423"),
    concept: "A short-form film edit from the @drifter.cuts Vimeo showcase.",
  },
  {
    id: "05",
    title: "PARADISE / FINAL CUT",
    account: "@drifter.cuts",
    category: "FINAL CUT",
    accentColor: "#4F7B73",
    tags: ["SHORT-FORM", "FINAL CUT"],
    vimeoId: "1232982424",
    vimeoUrl: "https://player.vimeo.com/video/1232982424",
    poster: VIMEO_THUMBNAIL("1232982424"),
    concept: "A finished short-form edit from the @drifter.cuts Vimeo showcase.",
  },
  {
    id: "06",
    title: "FIGHT CLUB × FKN MIND",
    account: "@drifter.cuts",
    category: "MASHUP EDIT",
    accentColor: "#8B5E45",
    tags: ["MASHUP", "VISUAL EDIT"],
    vimeoId: "1232982000",
    vimeoUrl: "https://player.vimeo.com/video/1232982000",
    poster: VIMEO_THUMBNAIL("1232982000"),
    concept: "A short-form mashup edit from the @drifter.cuts Vimeo showcase.",
  },
];

export const REELS_DATA = REELS;

export const ACCOUNTS_DATA = [
  {
    id: "01",
    handle: "@drifter.cuts",
    title: "SHORT-FORM VIDEO EDITOR",
    description:
      "The home for Manoj's short-form editing work, visual experiments and reel-focused portfolio pieces.",
    metrics: "3 YEARS",
    deliverables: "REELS • SOCIAL EDITS • VISUAL STORYTELLING",
    accent: "#D66A32",
    link: "https://www.instagram.com/drifter.cuts/",
    samples: REELS,
  },
];

export const EDITING_STYLES = [
  {
    num: "01",
    label: "PACE",
    title: "CUTS",
    desc:
      "Fast-paced edits that keep the visual rhythm moving without making the timeline feel busy.",
    detail: "PACING / RHYTHM / STORY FLOW",
  },
  {
    num: "02",
    label: "AUDIO",
    title: "SOUND",
    desc:
      "Music, impact, ambience and transitions shaped to make the visual edit feel intentional.",
    detail: "MUSIC / SFX / AUDIO RHYTHM",
  },
  {
    num: "03",
    label: "MOTION",
    title: "TRANSITIONS",
    desc:
      "Clean movement and motivated transitions used when they strengthen the story or energy.",
    detail: "MATCH CUTS / MOTION / FLOW",
  },
  {
    num: "04",
    label: "LOOK",
    title: "COLOR",
    desc:
      "Consistent tone, controlled contrast and a finish that supports the identity of each reel.",
    detail: "CONTRAST / TONE / FINISHING",
  },
];
