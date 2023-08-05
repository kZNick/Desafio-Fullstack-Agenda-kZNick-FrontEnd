import { Outlet, useNavigate } from "react-router-dom";
import { HomeContextData } from "../@types/types";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { apiContacts } from "../services/api";

export const HomeContext = createContext<HomeContextData>(
  {} as HomeContextData
);

export const HomeProvider = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [openModlaEdit, setOpenModlaEdit] = useState<boolean>(false);
  const [openModlaCreate, setOpenModlaCreate] = useState<boolean>(false);
  const [modalDeleteContact, setModalDeleteContact] = useState<boolean>(false);
  const [modalAvatar, setModalAvatar] = useState<boolean>(false);
  const [openModlaEditContact, setOpenModlaEditContact] =
    useState<boolean>(false);
  const [user, setUser] = useState({});
  const [contactsList, SetContactsList] = useState([]);
  const [contactSave, SetContactSave] = useState<any>({});
  const [configAvatar, setConfigAvatar] = useState<any>({
    sex: "man",
    faceColor: "#AC6651",
    earSize: "big",
    eyeStyle: "smile",
    noseStyle: "long",
    mouthStyle: "smile",
    shirtStyle: "hoody",
    glassesStyle: "round",
    hairColor: "#000000",
    hairStyle: "thick",
    hatStyle: "none",
    hatColor: "#1b1f4b",
    eyeBrowStyle: "up",
    shirtColor: "#0d1a1c",
    bgColor: "linear-gradient(45deg, #176fff 0%, #68ffef 100%)",
  });
  const [userAvatar, setUserAvatar] = useState<any>({
    sex: "man",
    faceColor: "#AC6651",
    earSize: "big",
    eyeStyle: "smile",
    noseStyle: "long",
    mouthStyle: "smile",
    shirtStyle: "hoody",
    glassesStyle: "round",
    hairColor: "#000000",
    hairStyle: "thick",
    hatStyle: "none",
    hatColor: "#1b1f4b",
    eyeBrowStyle: "up",
    shirtColor: "#0d1a1c",
    bgColor: "linear-gradient(45deg, #176fff 0%, #68ffef 100%)",
  })

  const navigate = useNavigate();
  const token: string | null = localStorage.getItem("ContactsTokenUser");

  const headerApi = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const contactsApi = async () => {
    try {
      setLoading(true);
      const api = await apiContacts.get("/contact/user", headerApi);
      SetContactsList(api.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!token) {
      localStorage.clear();
      navigate("/login");
    }
    const userApi = async () => {
      try {
        setLoading(true);
        const api = await apiContacts.get("/users", headerApi);
        setUser(api.data);
        setModalAvatar(true)
        if (api.data.avatar !== null) {
          setModalAvatar(false);
          const avatar = JSON.parse(api.data.avatar);
          setUserAvatar(avatar);
          setConfigAvatar(avatar)
        }
      } catch (error) {
        console.log(error);
        toast.warn("🤐Sessão expirada", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        console.log("deu erro")
        navigate("/login");
      } finally {
        setLoading(false);
      }
    };

    if (token) {
      userApi();
      contactsApi();
    }
  }, []);

  const creatContacts = async (datas: any) => {
    try {
      setLoading(true);
      const requestResult = await apiContacts.post(
        `/contact`,
        datas,
        headerApi
      );
      contactsApi();
      toast.success("Novo contato criado", {
        position: "top-right",
      });
    } catch (error: any) {
      console.log(error);
      const errorMessage = error.response.data.message;
      const erroPhone = "telefone already exists";
      const erroEmail = "Email already exists";

      if (errorMessage === erroPhone) {
        toast.error("Telefone já esta Cadastrado", {
          position: "top-right",
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
      if (errorMessage === erroEmail) {
        toast.error("Email já esta Cadastrado", {
          position: "top-right",
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }

      if (errorMessage !== erroEmail && errorMessage !== erroPhone) {
        toast.error("😅Ops! Algo deu errado", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    } finally {
      setOpenModlaCreate(!openModlaCreate);
      setLoading(false);
    }
  };

  const editUser = async (datas: any) => {
    const avatarJson = JSON.stringify(configAvatar)
    datas.avatar = avatarJson
    try {
      setLoading(true);
      const requestResult = await apiContacts.patch(`/users`, datas, headerApi);
      setUser(requestResult.data);
      const avatar = JSON.parse(requestResult.data.avatar);
      setUserAvatar(avatar);
      toast.success("Alterações salvas com sucesso", {
        position: "top-right",
      });
    } catch (error: any) {
      console.log(error);
      const errorMessage = error.response.data.message;
      const erroPhone = "telefone already exists";
      const erroEmail = "Email already exists";

      if (errorMessage === erroPhone) {
        toast.error("Telefone já esta Cadastrado", {
          position: "top-right",
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
      if (errorMessage === erroEmail) {
        toast.error("Email já esta Cadastrado", {
          position: "top-right",
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }

      if (errorMessage !== erroEmail && errorMessage !== erroPhone) {
        toast.error("😅Ops! Algo deu errado", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    } finally {
      setOpenModlaEdit(!openModlaEdit);
      setLoading(false);
    }
  };


  const saveAvatar = async () => {
    const avatarJson = JSON.stringify(configAvatar)
    const avatrData =  {
      avatar : avatarJson
    }
    try {
      setLoading(true);
      const requestResult = await apiContacts.patch(`/users`, avatrData, headerApi);
      setUser(requestResult.data);
      const avatar = JSON.parse(requestResult.data.avatar);
      setUserAvatar(avatar);
      toast.success("Avatar salvo", {
        position: "top-right",
      });
    } catch (error) {
      console.log(error)
        toast.error("😅Ops! Algo deu errado", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
    }finally{
      setModalAvatar(false)
      setLoading(false);
    }
  
  }


  const editContacts = async (datas: any) => {
    try {
      setLoading(true);
      const requestResult = await apiContacts.patch(
        `/contact/${contactSave.id}`,
        datas,
        headerApi
      );
      contactsApi();
      toast.success("Alterações salvas com sucesso", {
        position: "top-right",
      });
    } catch (error: any) {
      console.log(error);
      const errorMessage = error.response.data.message;
      const erroPhone = "telefone already exists";
      const erroEmail = "Email already exists";

      if (errorMessage === erroPhone) {
        toast.error("Telefone já esta Cadastrado", {
          position: "top-right",
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
      if (errorMessage === erroEmail) {
        toast.error("Email já esta Cadastrado", {
          position: "top-right",
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }

      if (errorMessage !== erroEmail && errorMessage !== erroPhone) {
        toast.error("😅Ops! Algo deu errado", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    } finally {
      setOpenModlaEditContact(!openModlaEditContact);
      setLoading(false);
    }
  };

  const deleteContacts = async () => {
    try {
      setLoading(true);
      const requestResult = await apiContacts.delete(
        `/contact/${contactSave.id}`,
        headerApi
      );
      contactsApi();
      toast.success("Contato foi deletado Com sucesso", {
        position: "top-right",
      });
    } catch (error: any) {
      console.log(error);
      toast.error("😅Ops! Algo deu errado", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } finally {
      setModalDeleteContact(!modalDeleteContact);
      setLoading(false);
    }
  };

  return (
    <HomeContext.Provider
      value={{
        navigate,
        user,
        contactsList,
        openModlaEdit,
        setOpenModlaEdit,
        editUser,
        openModlaEditContact,
        setOpenModlaEditContact,
        editContacts,
        contactSave,
        SetContactSave,
        creatContacts,
        openModlaCreate,
        setOpenModlaCreate,
        modalDeleteContact,
        setModalDeleteContact,
        deleteContacts,
        configAvatar,
        setConfigAvatar,
        modalAvatar,
        setModalAvatar,
        saveAvatar,userAvatar,
        loading
      }}
    >
      <Outlet />
    </HomeContext.Provider>
  );
};
