import { createContext, useContext } from "react";

const HideImagesContext = createContext({ hideImages: false, setHideImages: () => {} });

export const useHideImages = () => useContext(HideImagesContext);

export default HideImagesContext;
