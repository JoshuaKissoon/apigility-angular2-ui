import { CwteamPage } from './app.po';

describe('cwteam App', () => {
  let page: CwteamPage;

  beforeEach(() => {
    page = new CwteamPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
