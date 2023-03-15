import Cart from '../service/Cart';
import Book from '../domain/Book';
import MusicAlbum from '../domain/MusicAlbum';
import Movie from '../domain/Movie';

test('new card should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

test('after adding two product, the cart shoul contain two item', () => {
  const cart = new Cart();

  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));

  expect(cart.items.length).toBe(2);
});

test('after adding movie, the cart should contain this movie', () => {
  const cart = new Cart();

  cart.add(new Movie(
    1010,
    'The Avenger',
    2012,
    'USA',
    'Avengers Assemble!',
    ['action', 'fantastic', 'adventure', 'fantasy'],
    137,
    200
  ));

  expect(cart.items[0]).toEqual({
    id: 1010,
    name: 'The Avenger',
    year: 2012,
    country: 'USA',
    slogan: 'Avengers Assemble!',
    genre: ['action', 'fantastic', 'adventure', 'fantasy'],
    runningTime: 137,
    price: 200,
  });
});

test('delete method should remove product from cart', () => {
  const cart = new Cart();

  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.deleteById(1001);

  expect(cart.items.length).toBe(1);
});

test('shoul return total cost of product from cart withou discount', () => {
  const cart = new Cart();

  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(new Movie(
    1010,
    'The Avenger',
    2012,
    'USA',
    'Avengers Assemble!',
    ['action', 'fantastic', 'adventure', 'fantasy'],
    137,
    200
  ));

  expect(cart.getTotalCost()).toBe(3100);
});

test('shoul return total cost of product from cart with discount 10%', () => {
  const cart = new Cart();

  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(new Movie(
    1010,
    'The Avenger',
    2012,
    'USA',
    'Avengers Assemble!',
    ['action', 'fantastic', 'adventure', 'fantasy'],
    137,
    200
  ));

  expect(cart.getTotalCostWithDiscount(10)).toBe(2790);
});