import { gql } from "react-apollo/lib";
import { IProduct } from "../product/model";

export interface ICatalog {
  viewedProductIds: string[];
  showOnlyViewed: boolean;
}

export interface IAllProduct {
  total: number;
  products: [IProduct];
}

export const ALL_PRODUCTS_QUERY = gql`
  query allProducts($categoryId: Int, $offset: Int, $first: Int) {
    allProducts(categoryId: $categoryId, offset: $offset, first: $first) {
      total
      products {
        id
        name
        shortDescription
        brand {
          id
          name
        }
        category {
          id
          name
        }
        imagesWithColor {
          id
          src
          width
          height
          color
          isTitle
        }
        subProducts {
          id
          article
          price
          oldPrice
          discount
        }
      }
    }
  }
`;
