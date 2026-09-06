// Remove all 'export' keywords below

interface Address {
  street: string;
  city: string;
  postalCode: string;
  country: string;
}

interface User {
  id: number;
  name: string;
  address: Address;
  email: string;
  telephone: string;
}

class AddressClass implements Address {
  constructor(
    public street: string,
    public city: string,
    public postalCode: string,
    public country: string
  ) {}
}

class UserClass implements User {
  constructor(
    public id: number,
    public name: string,
    public address: Address,
    public email: string,
    public telephone: string
  ) {}
}

async function loadJsonFile(url: string): Promise<User[]> {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to load JSON file: ${response.statusText}`);
  }
  const data = await response.json();
  return data.map(
    (u: any) =>
      new UserClass(
        u.id,
        u.name,
        u.address
          ? new AddressClass(
              u.address.street,
              u.address.city,
              u.address.postalCode,
              u.address.country
            )
          : { street: '', city: '', postalCode: '', country: '' },
        u.email,
        u.telephone
      )
  );
}

function userToString(user: User): string {
  const name = user.name || "Unknown name";
  const phone = user.telephone || "N/A";
  const email = user.email || "N/A";
  const address = user.address
    ? `${user.address.street || "?"}, ${user.address.city || "?"}, ${user.address.postalCode || "?"}, ${user.address.country || "?"}`
    : "No address";
  return `name: ${name} - phone: ${phone} - email: ${email} - address: ${address}`;
}

// Main DOM logic
document.addEventListener('DOMContentLoaded', async () => {
  let users: User[] = [];
  try {
    users = await loadJsonFile('http://localhost:8081/users');
  } catch (err) {
    document.getElementById('users')!.textContent = 'Failed to load users.';
    return;
  }
  const usersDiv = document.getElementById('users');
  if (usersDiv) {
    usersDiv.textContent = users.map(userToString).join('\n');
  }
  const searchBtn = document.getElementById('searchBtn');
  if (searchBtn) {
    searchBtn.addEventListener('click', () => {
      const input = (document.getElementById('username') as HTMLInputElement).value.trim().toLowerCase();
      const resultDiv = document.getElementById('result');
      if (!input) {
        resultDiv!.textContent = 'Please enter a name.';
        return;
      }
      const results = users.filter(u => u.name.toLowerCase().includes(input));
      resultDiv!.textContent =
        results.length > 0 ? results.map(userToString).join('\n') : 'No users found';
    });
  }
  const usernameInput = document.getElementById('username') as HTMLInputElement;
  if (usernameInput) {
    usernameInput.addEventListener('input', (e) => {
      const inputVal = usernameInput.value.trim().toLowerCase();
      const autocompleteDiv = document.getElementById('autocomplete-result');
      if (inputVal.length < 3) {
        autocompleteDiv!.textContent = '';
        return;
      }
      const matches = users.filter(u => u.name.toLowerCase().includes(inputVal));
      autocompleteDiv!.textContent =
        matches.length > 0 ? matches.map(userToString).join('\n') : '';
    });
  }
});
