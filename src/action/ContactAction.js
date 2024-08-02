import { redirect } from "react-router-dom";
import { createContact, deleteContact, updateContact } from "../contactsData";

export async function contactCreateAction() {
  const contact = await createContact();
  return { contact };
}

export async function contactUpdateAction({ request, params }) {
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);
  await updateContact(params.contactId, updates);
  return redirect(`/contacts/${params.contactId}`);
}

export async function contactDeleteAction({ params }) {
  await deleteContact(params.contactId);
  return redirect("/");
}

export async function updateFovourate({ request, params }) {
  const formData = await request.formData();
  return updateContact(params.contactId, {
    favorite: formData.get("favorite") === "true",
  });
}
