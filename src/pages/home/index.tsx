import { useContext} from "react";
import { HopmePage } from "../../styles/home";
import { HomeContext } from "../../contexts/contexHome";
import { RxExit } from "react-icons/rx";
import { FaUserEdit } from "react-icons/fa";
import { AnimetionBackgraud, Loading } from "../../components/animention";
import { Contacts } from "./contactsList";
import {
  AvatarModal,
  CreateContcts,
  DeleteContacts,
  EditContcts,
  EditProfile,
} from "./modalsHome";
import Avatar, { genConfig } from "react-nice-avatar";

export const Home = () => {
  const {
    navigate,
    user,
    openModlaEdit,
    setOpenModlaEdit,
    openModlaEditContact,
    openModlaCreate,
    modalDeleteContact,
    modalAvatar,
    userAvatar,
    loading
  }: any = useContext(HomeContext);
  const myConfig = genConfig(userAvatar);
  return (
    <>
      {loading? <Loading/>:null}
      {openModlaEdit ? <EditProfile /> : null}
      {openModlaEditContact ? <EditContcts /> : null}
      {openModlaCreate ? <CreateContcts /> : null}
      {modalDeleteContact ? <DeleteContacts /> : null}
      {modalAvatar ? <AvatarModal /> : null}
      <HopmePage>
        <AnimetionBackgraud />
        <header>.</header>
        <RxExit
          className="buttonExit"
          onClick={() => {
            localStorage.removeItem("ContactsTokenUser");
            navigate("/Login");
          }}
        />
        <FaUserEdit
          className="editProfile"
          onClick={() => setOpenModlaEdit(!openModlaEdit)}
        />
        <div className="avatarDiv">
          <Avatar style={{ width: "150px", height: "150px" }} {...myConfig} />
        </div>
        <h1>{user.fullName}</h1>
        <Contacts />
      </HopmePage>
    </>
  );
};
