export class SearchResult {
  result: string;

  constructor(result: string) {
    this.result = result;
  }

  static fromObject(data: any) {
    if (!data || data.length === 0) {
      return new SearchResult('No results');
    }
    return new SearchResult(data[0].website_url);
  }
}
