import { SuprematismSelectedUpdatePage } from './app.po';

describe('suprematism-selected-update App', () => {
  let page: SuprematismSelectedUpdatePage;

  beforeEach(() => {
    page = new SuprematismSelectedUpdatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('supre works!');
  });
});
