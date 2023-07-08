import { createContext, useRef, useState } from "react";
import { restaurantsData } from "../data/data";

export const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const [data, setData] = useState(restaurantsData);
  const [showRestData, setShowRestData] = useState([]);
  const [addReview, setAddReview] = useState({
    comment: "",
    rating: 0,
    pp: "https://res.cloudinary.com/dgoldjr3g/image/upload/v1687433602/NegProjects/SocialMedia/woman_1_mo7ys3.png",
    revName: "Bhumika",
  });

  const [isModal, setIsModal] = useState(false);
  const restIdReview = useRef("");

  const setRestData = (dataId) => {
    const arr = data.filter(({ cuisine_id }) => cuisine_id === dataId);

    console.log(arr); //
    setShowRestData(arr);
  };

  const addRestReview = () => {
    const findRest = data.map((rest) =>
      rest.id === Number(restIdReview.current)
        ? { ...rest, ratings: [...rest.ratings, addReview] }
        : rest
    );
    setData(findRest);
    setIsModal(false);
    setAddReview({ ...addReview, comment: "", rating: 0 });
  };
  
  return (
    <DataContext.Provider
      value={{
        data,
        setData,
        showRestData,
        setShowRestData,
        setRestData,
        addReview,
        setAddReview,
        isModal,
        setIsModal,
        restIdReview,
        addRestReview,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
