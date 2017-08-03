import { ValcodinPage } from './app.po';

describe('valcodin App', () => {
  let page: ValcodinPage;

  beforeEach(() => {
    page = new ValcodinPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
