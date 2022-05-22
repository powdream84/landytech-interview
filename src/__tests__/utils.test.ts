import filterProduct from "../utils/filterProduct";

const data = [
  {
    id: 1,
    name: "test",
    price: 10,
    quantity: 6,
  },
  {
    id: 2,
    name: "foobar",
    price: 6,
    quantity: 10,
  },
  {
    id: 3,
    name: "foobartest",
    price: 19,
    quantity: 3,
  },
];

describe("filter products", () => {
  // fix test : done
  it("filter by name", () => {
    expect(data.filter(filterProduct({ name: "Test" })).length).toBe(2);
  });

  // test multi-filters e.g. by `name` and `price` : done
  it("filter by name and price", () => {
    expect(data.filter(filterProduct({ name: "foobar", price: 15 })).length).toBe(1);
  });

  it("filter by name and quantity", () => {
    expect(data.filter(filterProduct({ name: "test", quantity: 15 })).length).toBe(0);
  });

  it("filter by price and quantity", () => {
    expect(data.filter(filterProduct({ name: "", price: 20, quantity: 5 })).length).toBe(2);
  });

  it("filter by name, price and quantity", () => {
    expect(data.filter(filterProduct({ name: "Test", price: 15, quantity: 2 })).length).toBe(1);
  });

  it("no matches", () => {
    expect(data.filter(filterProduct({ name: "javascript" })).length).toBe(0);
  });
});
