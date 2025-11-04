export interface BackgroundImage {
  hotlink: string;
  sourceUrl: string;
  description: string;
  id: string;
}

export interface BackgroundPreferences {
  currentIndex: number;
  lastRotationTime: number;
  rotationIntervalMinutes: number; // TODO: Make configurable by user in settings UI
  enabled: boolean;
}
