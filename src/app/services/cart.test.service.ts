import { Product } from "../models/products.model";
import { CartService } from "./cart.service";

it('should add a product to the empty cart', () => {
  const service = new CartService();
  // Clear the initial cart to make it empty
  service.cart.set([]);

  // Create a test product
  const testProduct: Product = {
    id: 3,
    title: 'Test Product',
    image: 'test-image.jpg',
    price: 999,
    stock: 10
  };

  // Add product to cart
  service.addToCart(testProduct);

  // Assert product was added to cart
  expect(service.cart().length).toBe(1);
  expect(service.cart()[0]).toEqual(testProduct);
});

it('should add multiple products to the cart correctly', () => {
  const service = new CartService();
  // Clear the initial cart to make it empty
  service.cart.set([]);

  // Create test products
  const testProduct1: Product = {
    id: 3,
    title: 'Test Product 1',
    image: 'test-image1.jpg',
    price: 999,
    stock: 10
  };

  const testProduct2: Product = {
    id: 4,
    title: 'Test Product 2',
    image: 'test-image2.jpg',
    price: 799,
    stock: 15
  };

  // Add products to cart
  service.addToCart(testProduct1);
  service.addToCart(testProduct2);

  // Assert products were added to cart
  expect(service.cart().length).toBe(2);
  expect(service.cart()[0]).toEqual(testProduct1);
  expect(service.cart()[1]).toEqual(testProduct2);
});

it('should add duplicate product to the cart resulting in two copies', () => {
  const service = new CartService();
  // Clear the initial cart to make it empty
  service.cart.set([]);

  // Create a test product
  const testProduct: Product = {
    id: 3,
    title: 'Test Product',
    image: 'test-image.jpg',
    price: 999,
    stock: 10
  };

  // Add the same product twice
  service.addToCart(testProduct);
  service.addToCart(testProduct);

  // Assert product was added twice to cart
  expect(service.cart().length).toBe(2);
  expect(service.cart()[0]).toEqual(testProduct);
  expect(service.cart()[1]).toEqual(testProduct);
});

