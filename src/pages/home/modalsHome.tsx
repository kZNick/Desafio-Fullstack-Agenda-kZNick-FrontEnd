import { FormUpdat } from "../../styles/forms";
import { ModalEditProfile } from "../../styles/modals";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { UpdateFormData } from "../../@types/types";
import { useContext } from "react";
import { HomeContext } from "../../contexts/contexHome";
import { AvatarStyled } from "../../styles/avatar";
import Avatar, { genConfig } from "react-nice-avatar";
import { AvatarComponet } from "../../components/avatar";

export const EditProfile = () => {
  const { user, openModlaEdit, setOpenModlaEdit, editUser }: any =
    useContext(HomeContext);

  const handlePhoneInput = (event: any) => {
    const phoneValue = event.target.value;

    const onlyNumbers = phoneValue.replace(/\D/g, "");

    const formattedPhone = onlyNumbers.replace(
      /(\d{2})(\d{5})(\d{4})/,
      "($1) $2-$3"
    );

    event.target.value = formattedPhone;
  };

  const formSchema = yup.object().shape({
    fullName: yup.string().required("Nome Obrigatório"),
    email: yup.string().required("Email Obrigatório").email(),
    telefone: yup
      .string()
      .required("Telefone Obrigatório")
      .matches(
        /^\(\d{2}\) \d{5}-\d{4}$/,
        "Telefone inválido. Use o formato (XX) XXXXX-XXXX"
      ),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UpdateFormData>({
    resolver: yupResolver(formSchema),
  });

  return (
    <ModalEditProfile>
      <FormUpdat onSubmit={handleSubmit(editUser)}>
        <span
          className="closeModal"
          onClick={() => setOpenModlaEdit(!openModlaEdit)}
        >
          X
        </span>
        <div className="HeaderForm">
          <h2>Editar Perfil</h2>
        </div>
        <AvatarComponet/>
        <div className="Inpults">
          <input
            type="text"
            id="fullName"
            {...register("fullName")}
            defaultValue={user.fullName}
          />
          <label htmlFor="fullName">Nome</label>
          <span className="error">{errors.fullName?.message}</span>
        </div>
        <div className="Inpults">
          <input
            type="text"
            id="email"
            {...register("email")}
            defaultValue={user.email}
          />
          <label htmlFor="email">Email</label>
          <span className="error">{errors.email?.message}</span>
        </div>
        <div className="Inpults">
          <input
            type="tel"
            id="telefone"
            onInput={handlePhoneInput}
            {...register("telefone")}
            className={errors.telefone && "inputError"}
            defaultValue={user.telefone}
          />
          <label htmlFor="telefone">Telefone</label>
          <span className="error">{errors.telefone?.message}</span>
        </div>
        <button className="buttonLogin" type="submit">
          Salvar alterações
        </button>
      </FormUpdat>
    </ModalEditProfile>
  );
};

export const CreateContcts = () => {
  const { openModlaCreate, setOpenModlaCreate, creatContacts }: any =
    useContext(HomeContext);

  const handlePhoneInput = (event: any) => {
    const phoneValue = event.target.value;

    const onlyNumbers = phoneValue.replace(/\D/g, "");

    const formattedPhone = onlyNumbers.replace(
      /(\d{2})(\d{5})(\d{4})/,
      "($1) $2-$3"
    );

    event.target.value = formattedPhone;
  };

  const formSchema = yup.object().shape({
    fullName: yup.string().required("Nome Obrigatório"),
    email: yup.string().required("Email Obrigatório").email(),
    telefone: yup
      .string()
      .required("Telefone Obrigatório")
      .matches(
        /^\(\d{2}\) \d{5}-\d{4}$/,
        "Telefone inválido. Use o formato (XX) XXXXX-XXXX"
      ),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UpdateFormData>({
    resolver: yupResolver(formSchema),
  });

  return (
    <ModalEditProfile>
      <FormUpdat onSubmit={handleSubmit(creatContacts)}>
        <span
          className="closeModal"
          onClick={() => setOpenModlaCreate(!openModlaCreate)}
        >
          X
        </span>
        <div className="HeaderForm">
          <h2>Criar Contato</h2>
        </div>
        <div className="Inpults">
          <input type="text" id="fullName" {...register("fullName")} />
          <label htmlFor="fullName">Nome</label>
          <span className="error">{errors.fullName?.message}</span>
        </div>
        <div className="Inpults">
          <input type="text" id="email" {...register("email")} />
          <label htmlFor="email">Email</label>
          <span className="error">{errors.email?.message}</span>
        </div>
        <div className="Inpults">
          <input
            type="tel"
            id="telefone"
            onInput={handlePhoneInput}
            {...register("telefone")}
            className={errors.telefone && "inputError"}
          />
          <label htmlFor="telefone">Telefone</label>
          <span className="error">{errors.telefone?.message}</span>
        </div>
        <button className="buttonLogin" type="submit">
          Criar Contato
        </button>
      </FormUpdat>
    </ModalEditProfile>
  );
};

export const EditContcts = () => {
  const {
    openModlaEditContact,
    setOpenModlaEditContact,
    editContacts,
    contactSave,
    modalDeleteContact,
    setModalDeleteContact,
  }: any = useContext(HomeContext);

  const handlePhoneInput = (event: any) => {
    const phoneValue = event.target.value;

    const onlyNumbers = phoneValue.replace(/\D/g, "");

    const formattedPhone = onlyNumbers.replace(
      /(\d{2})(\d{5})(\d{4})/,
      "($1) $2-$3"
    );

    event.target.value = formattedPhone;
  };

  const formSchema = yup.object().shape({
    fullName: yup.string().required("Nome Obrigatório"),
    email: yup.string().required("Email Obrigatório").email(),
    telefone: yup
      .string()
      .required("Telefone Obrigatório")
      .matches(
        /^\(\d{2}\) \d{5}-\d{4}$/,
        "Telefone inválido. Use o formato (XX) XXXXX-XXXX"
      ),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UpdateFormData>({
    resolver: yupResolver(formSchema),
  });

  return (
    <ModalEditProfile>
      <FormUpdat onSubmit={handleSubmit(editContacts)}>
        <span
          className="closeModal"
          onClick={() => setOpenModlaEditContact(!openModlaEditContact)}
        >
          X
        </span>
        <div className="HeaderForm">
          <h2>Editar Contato</h2>
        </div>
        <div className="Inpults">
          <input
            type="text"
            id="fullName"
            {...register("fullName")}
            defaultValue={contactSave.fullName}
          />
          <label htmlFor="fullName">Nome</label>
          <span className="error">{errors.fullName?.message}</span>
        </div>
        <div className="Inpults">
          <input
            type="text"
            id="email"
            {...register("email")}
            defaultValue={contactSave.email}
          />
          <label htmlFor="email">Email</label>
          <span className="error">{errors.email?.message}</span>
        </div>
        <div className="Inpults">
          <input
            type="tel"
            id="telefone"
            onInput={handlePhoneInput}
            {...register("telefone")}
            className={errors.telefone && "inputError"}
            defaultValue={contactSave.telefone}
          />
          <label htmlFor="telefone">Telefone</label>
          <span className="error">{errors.telefone?.message}</span>
        </div>
        <button
          type="button"
          onClick={() => {
            setOpenModlaEditContact(!openModlaEditContact);
            setModalDeleteContact(!modalDeleteContact);
          }}
        >
          Deletar Contato
        </button>
        <button className="buttonLogin" type="submit">
          Salvar alterações
        </button>
      </FormUpdat>
    </ModalEditProfile>
  );
};

export const DeleteContacts = () => {
  const { modalDeleteContact, setModalDeleteContact, deleteContacts }: any =
    useContext(HomeContext);
  return (
    <ModalEditProfile>
      <div className="deleteContact">
        <h2>Tem certeza de que deseja excluir</h2>
        <div>
          <button className="buttonYes" onClick={() => deleteContacts()}>
            Sim
          </button>
          <button onClick={() => setModalDeleteContact(!modalDeleteContact)}>
            Não
          </button>
        </div>
      </div>
    </ModalEditProfile>
  );
};

export const AvatarModal = () => {
  const { configAvatar, setConfigAvatar,saveAvatar }: any = useContext(HomeContext);

  const handleAttributeChange = (attribute: string, options: string[]) => {
    const currentValue = configAvatar[attribute];
    const currentIndex = options.indexOf(currentValue);
    const nextIndex = (currentIndex + 1) % options.length;
    const nextValue = options[nextIndex];
    setConfigAvatar((prevConfig: any) => ({
      ...prevConfig,
      [attribute]: nextValue,
    }));
  };
  const myConfig = genConfig(configAvatar);
  return (
    <AvatarStyled>
      <div className="conteiner">
        <div className="avatarTex">
          <h2>
            "Olá! Seja bem-vindo(a)! Antes de começarmos a criar seus contatos,
            vamos deixar seu avatar com a sua cara. Personalize-o do jeito que
            mais te representa!"
          </h2>
        </div>
        <Avatar
          style={{ width: "150px", height: "150px" }}
          {...myConfig}
          className="avatarConfig"
        />
        <div className="buttons">
          <button
            onClick={() =>
              handleAttributeChange("faceColor", ["#AC6651", "#F9C9B6"])
            }
          >
            Cor
          </button>
          <button
            onClick={() =>
              handleAttributeChange("hairStyle", [
                "normal",
                "thick",
                "mohawk",
                "womanLong",
                "womanShort",
              ])
            }
          >
            Penteado
          </button>
          <button
            onClick={() =>
              handleAttributeChange("hatStyle", ["none", "beanie", "turban"])
            }
          >
            Chapéu
          </button>
          <button
            onClick={() =>
              handleAttributeChange("eyeStyle", ["circle", "oval", "smile"])
            }
          >
            Olho
          </button>
          <button
            onClick={() =>
              handleAttributeChange("glassesStyle", ["none", "round", "square"])
            }
          >
            Óculos
          </button>
          <button
            onClick={() =>
              handleAttributeChange("noseStyle", ["short", "long", "round"])
            }
          >
            Nariz
          </button>
          <button
            onClick={() =>
              handleAttributeChange("mouthStyle", ["laugh", "smile", "peace"])
            }
          >
            Boca
          </button>
          <button
            onClick={() =>
              handleAttributeChange("shirtStyle", ["hoody", "short", "polo"])
            }
          >
            Camisa
          </button>
        </div>
        <button className="SaveAvatar" onClick={()=> saveAvatar()}>Salvar Avatar</button>
      </div>
    </AvatarStyled>
  );
};
