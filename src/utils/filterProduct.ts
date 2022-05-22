import { Dict } from "../types";

/**
 * for a given filters key/value object, generates a callback function
 * @param filters
 * @returns (item: Dict) => boolean
 */
const filterProduct =
  (filters: Dict) =>
  (product: Dict): boolean => {
    // implement filter by `price` and `quantity` : done
    // make filter by `name` a case-insensitive : done

    // Product data
    let productName = product.name.toLowerCase();
    let productPrice = product.price;
    let productQty = product.quantity;

    // Filters

    let nameFilter = filters.name ? filters.name.toLowerCase() : "";
    let priceFilter = filters.price;
    let qtyFilter = filters.quantity;

    // Conditions
    let cond1 = !nameFilter || productName.includes(nameFilter);
    let cond2 = !priceFilter || productPrice <= priceFilter;
    let cond3 = !qtyFilter || productQty >= qtyFilter;

    return cond1 && cond2 && cond3;
  };

export default filterProduct;
