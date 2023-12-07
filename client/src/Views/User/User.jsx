// COMPONENTS
import Form from "../../Components/Form";

// HOOK'S
import { useEffect } from "react";
import { useSelector } from "react-redux";

// REDUX

// LIBRARY

// CSS

// JAVASCRIP
import { messageUpdateAlert } from "../../Utils/toolsFunction";

const User = ({ idUser, idLevel, user }) => {
  const selectAux = useSelector((state) => state.aux);

  useEffect(() => {
    selectAux?.updateUser && messageUpdateAlert(selectAux.message, "success");
  }, [selectAux]);

  return (
    <>
      <h3>My personal information</h3>
      <Form idUser={idUser} user={user} idLevel={idLevel} />
    </>
  );
};

export default User;
