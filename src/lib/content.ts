import siteData from "@/content/site.json";
import activitiesData from "@/content/activities.json";
import publicationsData from "@/content/publications.json";

export type SiteContent = typeof siteData;
export type Activity = (typeof activitiesData)[number];
export type Publication = (typeof publicationsData)[number];

export function getSiteContent(): SiteContent {
  return siteData;
}

export function getActivities(): Activity[] {
  return [...activitiesData].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getLatestActivities(limit = 3): Activity[] {
  return getActivities().slice(0, limit);
}

export function getPublications(): Publication[] {
  return [...publicationsData].sort((a, b) => b.date.localeCompare(a.date));
}

export function getPublicationById(id: string): Publication | undefined {
  return publicationsData.find((p) => p.id === id);
}
