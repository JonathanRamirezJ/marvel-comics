export interface thumbnailData {
  extension: string;
  path: string;
}

export interface ComicsData {
  id: number;
  title: string;
  thumbnail: thumbnailData;
  description: string;
}

export interface Comicstate {
  loading: boolean;
  error: string | null;
  data: ComicsData[] | null;
} 

export interface ComicIdtate {
  loading: boolean;
  error: string | null;
  data: ComicsData[] | null;
} 