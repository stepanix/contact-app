import { useSelector as mainUseSelector, useDispatch as mainUseDispatch } from "react-redux";
export const useSelector = (state: any) => mainUseSelector(state);
export const useDispatch = () => mainUseDispatch();