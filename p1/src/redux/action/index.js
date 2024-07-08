// import Product from "../../components/Product";

//for add item to card
export const addCart = (product) => {
  return {
    type: "ADDITEM",
    payload: product,
  };
};
//for Delete item to card
export const delCart = (product) => {
  return {
    type: "DELITEM",
    payload: product,
  };
};
