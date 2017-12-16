import { ColegioPage } from './app.po';

describe('colegio App', function() {
  let page: ColegioPage;

  beforeEach(() => {
    page = new ColegioPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
