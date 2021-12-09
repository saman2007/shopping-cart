import React, { useReducer, useState } from "react";

//context with
const Context = React.createContext({
  allAddedToCart: 0,
  productsList: [],
  addToCart: () => {},
  initializeProductList: (product) => {},
  open: false,
  setOpen: (open) => {},
  allPrice: 0,
});

//context provider to provide context for all components
export const ContextProvider = (props) => {
  // this state is for opening the modal
  const [open, setOpen] = useState(false);

  //reducer for products
  const [productsState, dispatchProducts] = useReducer(
    (prevState, action) => {
      //if action.type is add_to_cart
      if (action.type === "add_to_cart") {
        let allNumber = 0;
        let allPrice = 0;
        prevState.products_list.forEach((element) => {
          if (element.id === action.id) {
            //if do is add_to_cart just add a product to the object and update the all price
            if (action.do === "add_to_cart") {
              element.number++;
              element.allPrice += element.price;
              //if action.do is change_cart, change the number of the product and update the all price
            } else if (action.do === "change_cart" && action.number !== "") {
              if (Number(action.number) >= 0) {
                element.number = Math.round(Number(action.number));
                element.allPrice = Number(
                  (element.number * element.price).toFixed(2)
                );
                //if action.number is negative
              } else if (Number(action.number) < 0) {
                element.number = 1;
                element.allPrice = Number(
                  element.number * element.price
                ).toFixed(2);
              }
            }
          }
          allPrice += element.allPrice;
          allNumber += element.number;
        });
        return {
          allAddedToCart: allNumber,
          products_list: prevState.products_list,
          allPrice: allPrice
        };
      } else if (action.type === "initialize_list") {
        return {
          allAddedToCart: prevState.allAddedToCart,
          //add the new product object to the list
          products_list: [...prevState.products_list, action.product],
          allPrice: 0
        };
      }
    },
    {
      allAddedToCart: 0,
      products_list: [],
      allPrice: 0
    }
  );
  return (
    <Context.Provider
      value={{
        allAddedToCart: productsState.allAddedToCart,
        productsList: productsState.products_list,
        addToCart: (id, toDo, number = "") => {
          dispatchProducts({
            type: "add_to_cart",
            id: id,
            do: toDo,
            number: number,
          });
        },
        initializeProductList: (product) => {
          dispatchProducts({ type: "initialize_list", product: product });
        },
        open: open,
        setOpen: (open) => {
          setOpen(open);
        },
        allPrice: productsState.allPrice
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default Context;
