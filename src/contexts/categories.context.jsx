import { createContext, useEffect, useReducer } from "react";
import { getCategoriesAndDocuments } from "./../utils/firebase/firebase.utils.js";

export const CategoriesContext = createContext({
  categoriesMap: {},
});

// export const CategoriesProvider = function ({ children }) {
//   const [categoriesMap, setCategoriesMap] = useState({});

//   useEffect(() => {
//     const getCategoriesMap = async () => {
//       const categoryMap = await getCategoriesAndDocuments();
//       setCategoriesMap(categoryMap);
//     };

//     getCategoriesMap();
//   }, []);

//   const value = { categoriesMap };
//   return (
//     <CategoriesContext.Provider value={value}>
//       {children}
//     </CategoriesContext.Provider>
//   );
// };

export const CATEGORIES_INITIAL_STATE = {
  categoriesMap: {},
};

export const CATEGORIES_ACTIONS_TYPES = {
  SET_CATEGORIES_ITEMS: "SET_CATEGORIES_ITEMS",
};

export const categoriesReducer = function (state, action) {
  const { type, payload } = action;
  switch (type) {
    case CATEGORIES_ACTIONS_TYPES.SET_CATEGORIES_ITEMS:
      return { ...state, categoriesMap: payload };
    default:
      throw new Error(`Unhandled type of ${type} at categoriesReducer`);
  }
};

export const CategoriesProvider = function ({ children }) {
  const [state, dispatch] = useReducer(
    categoriesReducer,
    CATEGORIES_INITIAL_STATE
  );
  const { categoriesMap } = state;

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      dispatch({
        type: CATEGORIES_ACTIONS_TYPES.SET_CATEGORIES_ITEMS,
        payload: categoryMap,
      });
    };

    getCategoriesMap();
  }, []);

  const value = { categoriesMap };
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
