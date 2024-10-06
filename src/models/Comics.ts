export interface thumbnailData {
  extension: string;
  path: string;
}

export interface ComicsData {
  id: number;
  title: string;
  thumbnail: thumbnailData;
}

export interface Comicstate {
  loading: boolean;
  error: string | null;
  data: ComicsData[] | null;
} 