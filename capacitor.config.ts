import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.aymane.subwaydash',
  appName: 'Subway Dash',
  webDir: '.',
  server: {
    androidScheme: 'https'
  }
};

export default config;
