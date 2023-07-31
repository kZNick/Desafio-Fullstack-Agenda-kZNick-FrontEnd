import { Outlet, useNavigate } from "react-router-dom";
import { HomeContextData } from "../@types/types";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { apiContacts } from "../services/api";
import jwt_decode from "jwt-decode";

export const HomeContext = createContext<HomeContextData>(
  {} as HomeContextData
);

export const HomeProvider = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [openModlaEdit, setOpenModlaEdit] = useState<boolean>(false);
  const [openModlaCreate, setOpenModlaCreate] = useState<boolean>(false);
  const [modalDeleteContact, setModalDeleteContact] = useState<boolean>(false);
  const [openModlaEditContact, setOpenModlaEditContact] =
    useState<boolean>(false);
  const [user, setUser] = useState({});
  const [contactsList, SetContactsList] = useState([]);
  const [contactSave, SetContactSave] = useState<any>({});

  const navigate = useNavigate();
  const token: string | null = localStorage.getItem("ContactsTokenUser");
  let decode: any = "";

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
      navigate("/login");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!token) {
      localStorage.clear();
      navigate("/login");
    }
    if (token) {
      decode = jwt_decode(token);
    }
    setUser(decode.user);

    if (token) {
      contactsApi();
    }
  }, []);

  const creatContacts = async (datas: any) => {
    console.log(datas);
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
      console.log(errorMessage);
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
    try {
      setLoading(true);
      const requestResult = await apiContacts.patch(`/users`, datas, headerApi);
      setUser(requestResult.data);
      toast.success("Alterações salvas com sucesso", {
        position: "top-right",
      });
    } catch (error: any) {
      console.log(error);
      const errorMessage = error.response.data.message;
      console.log(errorMessage);
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

  const editContacts = async (datas: any) => {
    console.log(datas);
    console.log(contactSave.id);
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
      console.log(errorMessage);
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
      const requestResult = await apiContacts.delete(`/contact/${contactSave.id}`,headerApi);
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
      setModalDeleteContact(!modalDeleteContact)
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
        deleteContacts
      }}
    >
      <Outlet />
    </HomeContext.Provider>
  );
};
