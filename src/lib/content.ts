import siteData from "@/content/site.json";
import activitiesData from "@/content/activities.json";
import publicationsData from "@/content/publications.json";
import galleryData from "@/content/gallery.json";

export type SiteContent = typeof siteData;
export type Activity = (typeof activitiesData.items)[number];
export type Publication = (typeof publicationsData.items)[number];
export type GalleryItem = (typeof galleryData.items)[number];

export function getSiteContent(): SiteContent {
  return siteData;
}

export function getActivities(): Activity[] {
  return [...activitiesData.items].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getLatestActivities(limit = 3): Activity[] {
  return getActivities().slice(0, limit);
}

export function getPublications(): Publication[] {
  return [...publicationsData.items].sort((a, b) => b.date.localeCompare(a.date));
}

export function getPublicationById(id: string): Publication | undefined {
  return publicationsData.items.find((p) => p.id === id);
}

export function getGalleryItems(): GalleryItem[] {
  return [...galleryData.items].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}
