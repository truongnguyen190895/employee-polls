import { Navigate, Outlet } from "react-router-dom";
import { _getQuestions, _getUsers } from "@/_DATA";
import { useAppSelector, useAppDispatch } from "@/store";
import { getAllQuestion, getAllUsers } from "@/store/actions/questionAction";
import { useEffect } from "react";

export const PrivateRoute = () => {
  const userDetail = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  useEffect(() => {
    _getQuestions().then((response) => {
      const currentQuestions = Object.keys(response).map(
        (key) => response[key]
      );
      dispatch(getAllQuestion(currentQuestions));
    });
    _getUsers().then((response) => {
      const allUserArray = Object.keys(response).map((key) => response[key]);
      dispatch(getAllUsers(allUserArray));
    });
  }, []);
  return userDetail.isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};
