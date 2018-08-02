import { PowerPipe } from './power.pipe';

fdescribe('PowerPipe', () => {
  it('create an instance', () => {
    const pipe = new PowerPipe();
    expect(pipe).toBeTruthy();

    expect(pipe.transform(3, 2)).toBe(9);
    expect(pipe.transform(5)).toBe(5);
    expect(pipe.transform(5)).not.toBe(1);
  });
});
