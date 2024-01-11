export function defaultMetadata(keywords?: string[]) {
    if (!keywords) {
      keywords = [];
    }
  
    return {
      creator: 'David Berezowski',
      authors: [{ name: 'David Berezowski' }],
      publisher: 'David Berezowski',
      keywords: ['code', 'bdav-dev', 'bdav.dev', 'David Berezowski', 'bdav', 'davidb.3d', 'davidb-3d', 'davidb 3d', ...keywords]
    }
  }