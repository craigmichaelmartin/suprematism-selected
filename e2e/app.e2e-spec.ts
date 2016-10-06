import { SuprematismSelectedPage } from './app.po';

describe('suprematism-selected App', function() {
  let page: SuprematismSelectedPage;

  beforeEach(() => {
    page = new SuprematismSelectedPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
