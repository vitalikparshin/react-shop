import { gql } from "react-apollo/lib";


export const CATEGORY_QUERY = gql`
  query category($id: Int) {
    category(id: $id) {
      id
      name
      alias
      products {
        id
        name
        shortDescription
        description
        brand {
          id
          name
        }
        category {
          id
          name
        }
        images {
          id
          image
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


export const CATEGORIES_QUERY = gql`
  query categories($id: Int) {
    categories(id: $id) {
      products {
        id
        name
        shortDescription
        description
        brand {
          id
          name
        }
        category {
          id
          name
        }
        images {
          id
          image
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


export const PRODUCT_QUERY = gql`
  query product($id: Int) {
    product(id: $id) {
      id
      name
      shortDescription
      description
      brand {
        id
        name
      }
      category {
        id
        name
      }
      images {
        id
        image
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
`;

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
        titleImage {
          id
          image
          width
          height
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


