export type GalleryFolderDetails = {
  clientName: string;
  country: string;
  title: string;
};

const multiWordCountries = [
  'united arab emirates',
  'dominican republic',
  'united kingdom',
  'united states',
  'northern ireland',
  'south african',
  'saudi arabian',
  'new zealander',
  'costa rican',
  'south korean',
  'sri lankan',
  'south africa',
  'saudi arabia',
  'new zealand',
  'costa rica',
  'south korea',
  'hong kong',
].sort((first, second) => second.length - first.length);

const uppercaseLocations = new Set(['uk', 'usa', 'us', 'uae']);

function titleCaseWord(word: string) {
  return word
    .split(/([-'’])/)
    .map((part) => {
      if (part === '-' || part === "'" || part === '’') return part;
      return part ? `${part[0].toUpperCase()}${part.slice(1).toLowerCase()}` : part;
    })
    .join('');
}

function titleCasePhrase(value: string) {
  return value
    .trim()
    .split(/\s+/)
    .map(titleCaseWord)
    .join(' ');
}

function formatClientName(value: string) {
  const cleaned = value.replace(/_/g, ' ').replace(/\s+/g, ' ').trim();
  const couple = /^mr\.?\s*(?:&|and)?\s*mrs\.?\s+(.+)$/i.exec(cleaned);

  if (couple) return `Mr & Mrs. ${titleCasePhrase(couple[1])}`;

  const honorific = /^(mr|mrs|ms|dr)\.?\s+(.+)$/i.exec(cleaned);
  if (honorific) {
    const labels: Record<string, string> = { mr: 'Mr.', mrs: 'Mrs.', ms: 'Ms.', dr: 'Dr.' };
    return `${labels[honorific[1].toLowerCase()]} ${titleCasePhrase(honorific[2])}`;
  }

  return titleCasePhrase(cleaned).replace(/\s+And\s+/g, ' & ');
}

function formatCountry(value: string) {
  const cleaned = value.replace(/[_-]+/g, ' ').replace(/\s+/g, ' ').trim();
  const lowercase = cleaned.toLowerCase();
  return uppercaseLocations.has(lowercase) ? lowercase.toUpperCase() : titleCasePhrase(cleaned);
}

function splitFolderName(folderName: string): [string, string] | null {
  const cleaned = folderName.replace(/\s+/g, ' ').trim();
  if (!cleaned) return null;

  const explicitlySeparated = /^(.*?)\s+(?:-|–|—|\|)\s+(.+)$/.exec(cleaned);
  if (explicitlySeparated) return [explicitlySeparated[1], explicitlySeparated[2]];

  const words = cleaned.replace(/[_-]+/g, ' ').trim().split(/\s+/);
  if (words.length < 2) return null;

  const normalized = words.join(' ').toLowerCase();
  const matchedCountry = multiWordCountries.find((country) => normalized.endsWith(` ${country}`));

  if (matchedCountry) {
    return [
      words.slice(0, -matchedCountry.split(' ').length).join(' '),
      matchedCountry,
    ];
  }

  return [words.slice(0, -1).join(' '), words.at(-1) ?? ''];
}

export function parseGalleryFolderDetails(folderName: string): GalleryFolderDetails | null {
  const parts = splitFolderName(folderName);
  if (!parts) return null;

  const clientName = formatClientName(parts[0]);
  const country = formatCountry(parts[1]);
  if (!clientName || !country) return null;

  return {
    clientName,
    country,
    title: `${clientName} – ${country}`,
  };
}
