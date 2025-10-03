/**
 * Comprehensive list of world timezones with country and city information
 */
export const TIMEZONES = [
  // Americas
  { id: 'us-ny', country: 'United States', city: 'New York', timezone: 'America/New_York', region: 'Americas' },
  { id: 'us-la', country: 'United States', city: 'Los Angeles', timezone: 'America/Los_Angeles', region: 'Americas' },
  { id: 'us-chi', country: 'United States', city: 'Chicago', timezone: 'America/Chicago', region: 'Americas' },
  { id: 'us-den', country: 'United States', city: 'Denver', timezone: 'America/Denver', region: 'Americas' },
  { id: 'ca-tor', country: 'Canada', city: 'Toronto', timezone: 'America/Toronto', region: 'Americas' },
  { id: 'ca-van', country: 'Canada', city: 'Vancouver', timezone: 'America/Vancouver', region: 'Americas' },
  { id: 'mx-mex', country: 'Mexico', city: 'Mexico City', timezone: 'America/Mexico_City', region: 'Americas' },
  { id: 'br-sao', country: 'Brazil', city: 'São Paulo', timezone: 'America/Sao_Paulo', region: 'Americas' },
  { id: 'br-rio', country: 'Brazil', city: 'Rio de Janeiro', timezone: 'America/Sao_Paulo', region: 'Americas' },
  { id: 'ar-bue', country: 'Argentina', city: 'Buenos Aires', timezone: 'America/Argentina/Buenos_Aires', region: 'Americas' },
  { id: 'cl-san', country: 'Chile', city: 'Santiago', timezone: 'America/Santiago', region: 'Americas' },
  { id: 'co-bog', country: 'Colombia', city: 'Bogotá', timezone: 'America/Bogota', region: 'Americas' },
  { id: 'pe-lim', country: 'Peru', city: 'Lima', timezone: 'America/Lima', region: 'Americas' },
  { id: 've-car', country: 'Venezuela', city: 'Caracas', timezone: 'America/Caracas', region: 'Americas' },

  // Europe
  { id: 'uk-lon', country: 'United Kingdom', city: 'London', timezone: 'Europe/London', region: 'Europe' },
  { id: 'fr-par', country: 'France', city: 'Paris', timezone: 'Europe/Paris', region: 'Europe' },
  { id: 'de-ber', country: 'Germany', city: 'Berlin', timezone: 'Europe/Berlin', region: 'Europe' },
  { id: 'it-rom', country: 'Italy', city: 'Rome', timezone: 'Europe/Rome', region: 'Europe' },
  { id: 'es-mad', country: 'Spain', city: 'Madrid', timezone: 'Europe/Madrid', region: 'Europe' },
  { id: 'pt-lis', country: 'Portugal', city: 'Lisbon', timezone: 'Europe/Lisbon', region: 'Europe' },
  { id: 'nl-ams', country: 'Netherlands', city: 'Amsterdam', timezone: 'Europe/Amsterdam', region: 'Europe' },
  { id: 'be-bru', country: 'Belgium', city: 'Brussels', timezone: 'Europe/Brussels', region: 'Europe' },
  { id: 'ch-zur', country: 'Switzerland', city: 'Zurich', timezone: 'Europe/Zurich', region: 'Europe' },
  { id: 'at-vie', country: 'Austria', city: 'Vienna', timezone: 'Europe/Vienna', region: 'Europe' },
  { id: 'pl-war', country: 'Poland', city: 'Warsaw', timezone: 'Europe/Warsaw', region: 'Europe' },
  { id: 'ru-mos', country: 'Russia', city: 'Moscow', timezone: 'Europe/Moscow', region: 'Europe' },
  { id: 'gr-ath', country: 'Greece', city: 'Athens', timezone: 'Europe/Athens', region: 'Europe' },
  { id: 'se-sto', country: 'Sweden', city: 'Stockholm', timezone: 'Europe/Stockholm', region: 'Europe' },
  { id: 'no-osl', country: 'Norway', city: 'Oslo', timezone: 'Europe/Oslo', region: 'Europe' },
  { id: 'dk-cop', country: 'Denmark', city: 'Copenhagen', timezone: 'Europe/Copenhagen', region: 'Europe' },
  { id: 'fi-hel', country: 'Finland', city: 'Helsinki', timezone: 'Europe/Helsinki', region: 'Europe' },

  // Asia
  { id: 'jp-tok', country: 'Japan', city: 'Tokyo', timezone: 'Asia/Tokyo', region: 'Asia' },
  { id: 'cn-sha', country: 'China', city: 'Shanghai', timezone: 'Asia/Shanghai', region: 'Asia' },
  { id: 'cn-bei', country: 'China', city: 'Beijing', timezone: 'Asia/Shanghai', region: 'Asia' },
  { id: 'cn-hon', country: 'China', city: 'Hong Kong', timezone: 'Asia/Hong_Kong', region: 'Asia' },
  { id: 'kr-seo', country: 'South Korea', city: 'Seoul', timezone: 'Asia/Seoul', region: 'Asia' },
  { id: 'in-del', country: 'India', city: 'New Delhi', timezone: 'Asia/Kolkata', region: 'Asia' },
  { id: 'in-mum', country: 'India', city: 'Mumbai', timezone: 'Asia/Kolkata', region: 'Asia' },
  { id: 'sg-sin', country: 'Singapore', city: 'Singapore', timezone: 'Asia/Singapore', region: 'Asia' },
  { id: 'th-ban', country: 'Thailand', city: 'Bangkok', timezone: 'Asia/Bangkok', region: 'Asia' },
  { id: 'vn-han', country: 'Vietnam', city: 'Hanoi', timezone: 'Asia/Ho_Chi_Minh', region: 'Asia' },
  { id: 'ph-man', country: 'Philippines', city: 'Manila', timezone: 'Asia/Manila', region: 'Asia' },
  { id: 'id-jak', country: 'Indonesia', city: 'Jakarta', timezone: 'Asia/Jakarta', region: 'Asia' },
  { id: 'my-kua', country: 'Malaysia', city: 'Kuala Lumpur', timezone: 'Asia/Kuala_Lumpur', region: 'Asia' },
  { id: 'tw-tai', country: 'Taiwan', city: 'Taipei', timezone: 'Asia/Taipei', region: 'Asia' },
  { id: 'ae-dub', country: 'UAE', city: 'Dubai', timezone: 'Asia/Dubai', region: 'Asia' },
  { id: 'sa-riy', country: 'Saudi Arabia', city: 'Riyadh', timezone: 'Asia/Riyadh', region: 'Asia' },
  { id: 'il-jer', country: 'Israel', city: 'Jerusalem', timezone: 'Asia/Jerusalem', region: 'Asia' },
  { id: 'tr-ist', country: 'Turkey', city: 'Istanbul', timezone: 'Europe/Istanbul', region: 'Asia' },

  // Oceania
  { id: 'au-syd', country: 'Australia', city: 'Sydney', timezone: 'Australia/Sydney', region: 'Oceania' },
  { id: 'au-mel', country: 'Australia', city: 'Melbourne', timezone: 'Australia/Melbourne', region: 'Oceania' },
  { id: 'au-bri', country: 'Australia', city: 'Brisbane', timezone: 'Australia/Brisbane', region: 'Oceania' },
  { id: 'au-per', country: 'Australia', city: 'Perth', timezone: 'Australia/Perth', region: 'Oceania' },
  { id: 'nz-auc', country: 'New Zealand', city: 'Auckland', timezone: 'Pacific/Auckland', region: 'Oceania' },
  { id: 'fj-suv', country: 'Fiji', city: 'Suva', timezone: 'Pacific/Fiji', region: 'Oceania' },

  // Africa
  { id: 'eg-cai', country: 'Egypt', city: 'Cairo', timezone: 'Africa/Cairo', region: 'Africa' },
  { id: 'za-joh', country: 'South Africa', city: 'Johannesburg', timezone: 'Africa/Johannesburg', region: 'Africa' },
  { id: 'ng-lag', country: 'Nigeria', city: 'Lagos', timezone: 'Africa/Lagos', region: 'Africa' },
  { id: 'ke-nai', country: 'Kenya', city: 'Nairobi', timezone: 'Africa/Nairobi', region: 'Africa' },
  { id: 'ma-cas', country: 'Morocco', city: 'Casablanca', timezone: 'Africa/Casablanca', region: 'Africa' },
]

