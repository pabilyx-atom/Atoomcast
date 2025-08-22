export type VideoItem = {
  title: string;
  cover: string;     // کاور 16:9 (URL اینترنتی بهتر است)
  url: string;       // لینک ویدیو/اپیزود
  duration?: string; // مثلا 12:34
  tags?: string[];   // ["پادکست", "علم", "اتوم"]
  type?: "youtube" | "spotify" | "file";
  highlight?: string; // یک جمله درباره‌ی هایلایت/بخش‌های مهم
};

export const featured: VideoItem[] = [
  {
    title: "هایلایت‌های علمی از پادکست X",
    cover: "https://img.youtube.com/vi/VIDEO_ID/maxresdefault.jpg",
    url: "https://www.youtube.com/watch?v=VIDEO_ID",
    duration: "08:45",
    tags: ["پادکست", "علم"],
    type: "youtube",
    highlight: "تایم‌استمپ‌های مهم: 01:20 • 03:05 • 06:12"
  },
  {
    title: "ویدیو ادیت‌شده — اتوم و تکنولوژی",
    cover: "https://img.youtube.com/vi/VIDEO_ID2/maxresdefault.jpg",
    url: "https://www.youtube.com/watch?v=VIDEO_ID2",
    duration: "05:10",
    tags: ["اتوم", "ترند"],
    type: "youtube",
    highlight: "کات‌های تیز + افکت‌های ظریف برای تاکید"
  }
];

export const allVideos: VideoItem[] = [
  ...featured,
  // آیتم‌های بیشتر...
];
