import { BeautyAppPage } from './app.po';

describe('beauty-app App', () => {
  let page: BeautyAppPage;

  beforeEach(() => {
    page = new BeautyAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
