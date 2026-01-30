const { Film } = require('../app');

test('getInfo returns correct object', () => {
    const film = new Film(
      123,
      'slogan',
      'productName',
      2023,
      ['action', 'drama']
    );

    expect(film.getInfo()).toEqual({
      duration: 123,
      slogan: 'slogan',
      productName: 'productName',
      releaseYear: 2023,
      genre: ['action', 'drama'],
    });
  });