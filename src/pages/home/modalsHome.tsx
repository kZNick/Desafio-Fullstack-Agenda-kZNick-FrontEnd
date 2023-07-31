import { FormUpdat } from "../../styles/forms";
import { ModalEditProfile } from "../../styles/modals";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { UpdateFormData } from "../../@types/types";
import { useContext } from "react";
import { HomeContext } from "../../contexts/contexHome";

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
        <button className="buttonLogin" type="submit">
          Salvar alterações
        </button>
      </FormUpdat>
    </ModalEditProfile>
  );
};
