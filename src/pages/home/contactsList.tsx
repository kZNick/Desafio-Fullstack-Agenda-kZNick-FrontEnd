import { useContext, useState } from "react";
import { HomeContext } from "../../contexts/contexHome";
import { ContactsStyled } from "../../styles/contacts";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { AiOutlineEdit } from "react-icons/ai";
import { SiAddthis } from "react-icons/si";
import emoji from "../../assets/gifemoji.gif"

export const Contacts = () => {
  const {
    contactsList,
    openModlaEditContact,
    setOpenModlaEditContact,
    contactSave,
    SetContactSave,
    openModlaCreate,
    setOpenModlaCreate,
  }: any = useContext(HomeContext);

  const [showDetailsMap, setShowDetailsMap] = useState<{
    [id: string]: boolean;
  }>({});

  const toggleDetails = (contactId: string) => {
    setShowDetailsMap((prevState) => ({
      ...prevState,
      [contactId]: !prevState[contactId] || false,
    }));
  };

  return (
    <ContactsStyled>
      <h2>Seus Contatos</h2>
      <SiAddthis
        className="addContacts"
        onClick={() => setOpenModlaCreate(!openModlaCreate)}
      />
      {contactsList.length > 0 ? (
        <ul>
          {contactsList.map((contact: any) => {
            const showDetails = showDetailsMap[contact.id] || false;
            const contactEditSave = {
              id: contact.id,
              fullName: contact.fullName,
              telefone: contact.telefone,
              email: contact.email,
            };
            return (
              <li key={contact.id} onClick={() => toggleDetails(contact.id)}>
                <div>
                  <div>
                    <h3>{contact.fullName}</h3>
                  </div>
                  {showDetails && (
                    <div className="moreInf">
                      <p>
                        <span>Email:</span> {contact.email}
                      </p>
                      <p>
                        <span>Telefone:</span> {contact.telefone}
                      </p>
                      <AiOutlineEdit
                        className="editContacts"
                        onClick={(event: React.MouseEvent) => {
                          event.stopPropagation();
                          SetContactSave(contactEditSave);
                          setOpenModlaEditContact(!openModlaEditContact);
                          console.log(contactSave);
                        }}
                      />
                    </div>
                  )}
                </div>
                {showDetails ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
              </li>
            );
          })}
        </ul>
      ) : (
        <div className="notContacts">
          <h2>Você não tem nem um contato ainda adicionar o icone de +</h2>
          <img src={emoji} alt="" />
        </div>
      )}
    </ContactsStyled>
  );
};
