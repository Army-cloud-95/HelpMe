import { useState, useEffect } from "react";
import { saveData, getData } from "./utils/storage";

const EmergencyContacts = () => {
  const [form, setForm] = useState({ name: "", phone: "" });
  const [contacts, setContacts] = useState([]);

  // Load existing contacts
  useEffect(() => {
    const loadContacts = async () => {
      const saved = await getData("emergency_contacts");
      if (saved) setContacts(saved);
    };
    loadContacts();
  }, []);

  // Handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Save contact
  const handleSave = async () => {
    const updatedContacts = [...contacts, form];
    setContacts(updatedContacts);
    await saveData("emergency_contacts", updatedContacts);
    setForm({ name: "", phone: "" });
  };

  // Delete contact
  const handleDelete = async (indexToDelete) => {
    const updatedContacts = contacts.filter((_, index) => index !== indexToDelete);
    setContacts(updatedContacts);
    await saveData("emergency_contacts", updatedContacts);
  };

  return (
    <div className="max-w-md mx-auto p-4 border rounded-lg shadow-md mt-4 bg-white">
      <h2 className="text-xl font-bold mb-4">Emergency Contacts</h2>

      <input
        type="text"
        name="name"
        placeholder="Contact Name"
        value={form.name}
        onChange={handleChange}
        className="w-full mb-2 p-2 border rounded"
      />
      <input
        type="tel"
        name="phone"
        placeholder="Phone Number"
        value={form.phone}
        onChange={handleChange}
        className="w-full mb-2 p-2 border rounded"
      />
      <button
        onClick={handleSave}
        className="bg-green-600 text-white px-4 py-2 rounded mb-4"
      >
        Save Contact
      </button>

      <div>
        <h3 className="text-lg font-semibold mb-2">Saved Contacts:</h3>
        {contacts.length === 0 ? (
          <p className="text-gray-500">No contacts added yet.</p>
        ) : (
          <ul className="space-y-2">
            {contacts.map((c, index) => (
              <li
                key={index}
                className="p-2 bg-gray-100 rounded border flex justify-between items-center"
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-2">
  <span>📞 {c.name} - {c.phone}</span>

  <div className="flex gap-2">
    <a
      href={`tel:${c.phone}`}
      className="text-blue-600 text-sm hover:underline"
    >
      Call
    </a>
    <a
      href={`sms:${c.phone}?body=Help%20me!%20I%20need%20assistance.`}
      className="text-green-600 text-sm hover:underline"
    >
      SMS
    </a>
    <button
      onClick={() => handleDelete(index)}
      className="text-red-600 text-sm hover:underline"
    >
      Delete
    </button>
  </div>
</div>

              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default EmergencyContacts;
