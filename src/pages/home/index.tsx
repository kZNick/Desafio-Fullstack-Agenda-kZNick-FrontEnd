import { useContext } from "react";
import { HopmePage } from "../../styles/home";
import { HomeContext } from "../../contexts/contexHome";
import { RxExit } from "react-icons/rx";
import { FaUserEdit } from "react-icons/fa";
import { AnimetionBackgraud } from "../../components/animention";
import { Contacts } from "./contactsList";
import { CreateContcts, EditContcts, EditProfile } from "./modalsHome";

export const Home = () => {
  const {navigate, user, openModlaEdit, setOpenModlaEdit,openModlaEditContact,openModlaCreate }: any = useContext(HomeContext);
  return (
    <>
    {openModlaEdit? <EditProfile/> : null}
    {openModlaEditContact? <EditContcts/> : null}
    {openModlaCreate? <CreateContcts/> :null}
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
      <FaUserEdit className="editProfile" onClick={()=>setOpenModlaEdit(!openModlaEdit)}/>
      <h1>{user.fullName}</h1>
      <Contacts/>
    </HopmePage>
    </>
  );
};
