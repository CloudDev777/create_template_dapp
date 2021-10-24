import { useDispatch, useSelector } from "react-redux";
import { clearError, selectError } from "../state/errorSlice";
import Popup from "./Popup";

const Error = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectError);

  if (!error) return <></>;

  return (
    <Popup
      show={true}
      header={error.header}
      subHeader={error.subHeader}
      close={() => dispatch(clearError())}
    />
  );
};

export default Error;
