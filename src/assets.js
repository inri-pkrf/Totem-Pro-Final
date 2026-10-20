// כל הקבצים נמצאים בתיקיית public/ ונטענים לפי הנתיב היחסי (עובד גם ב-GitHub Pages)
const BASE = import.meta.env.BASE_URL;

export const img = (name) => `${BASE}images/${name}`;
export const video = (name) => `${BASE}video/${name}`;
