export const SECRET_KEY = "Ywj81igAVq6e8wySTvXOOc5u5buXSbhp";
export const PAGE_SIZE = 10;

export function parseHashTag(toParse: string): string[] {
  const hashTagRegex = /#[\w]+/gi;
  const results: string[] = [];
  const replaceFunction = (match: string) => {
    results.push(match.trim().toLowerCase());
    return match;
  };
  toParse.replace(hashTagRegex, replaceFunction);
  return results;
}
