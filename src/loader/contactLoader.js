import { getContact, getContacts } from "../contactsData";

export async function getContactsLoader({ request }) {
  const url = new URL(request.url);
  const q = url.searchParams.get("q");
  const contacts = await getContacts(q);

  return { contacts, q };
}

export async function getContactloader({ params }) {
  const contact = await getContact(params.contactId);
  return { contact };
}
