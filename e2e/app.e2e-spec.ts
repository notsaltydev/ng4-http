import { Ng4HttpPage } from './app.po';

describe('ng4-http App', () => {
  let page: Ng4HttpPage;

  beforeEach(() => {
    page = new Ng4HttpPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
