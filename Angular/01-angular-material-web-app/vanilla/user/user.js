// Remove all 'export' keywords below
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class AddressClass {
    constructor(street, city, postalCode, country) {
        this.street = street;
        this.city = city;
        this.postalCode = postalCode;
        this.country = country;
    }
}
class UserClass {
    constructor(id, name, address, email, telephone) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.email = email;
        this.telephone = telephone;
    }
}
function loadJsonFile(url) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(url);
        if (!response.ok) {
            throw new Error(`Failed to load JSON file: ${response.statusText}`);
        }
        const data = yield response.json();
        return data.map((u) => new UserClass(u.id, u.name, u.address
            ? new AddressClass(u.address.street, u.address.city, u.address.postalCode, u.address.country)
            : { street: '', city: '', postalCode: '', country: '' }, u.email, u.telephone));
    });
}
function userToString(user) {
    const name = user.name || "Unknown name";
    const phone = user.telephone || "N/A";
    const email = user.email || "N/A";
    const address = user.address
        ? `${user.address.street || "?"}, ${user.address.city || "?"}, ${user.address.postalCode || "?"}, ${user.address.country || "?"}`
        : "No address";
    return `name: ${name} - phone: ${phone} - email: ${email} - address: ${address}`;
}
// Main DOM logic
document.addEventListener('DOMContentLoaded', () => __awaiter(void 0, void 0, void 0, function* () {
    let users = [];
    try {
        users = yield loadJsonFile('http://localhost:8081/users');
    }
    catch (err) {
        document.getElementById('users').textContent = 'Failed to load users.';
        return;
    }
    const usersDiv = document.getElementById('users');
    if (usersDiv) {
        usersDiv.textContent = users.map(userToString).join('\n');
    }
    const searchBtn = document.getElementById('searchBtn');
    if (searchBtn) {
        searchBtn.addEventListener('click', () => {
            const input = document.getElementById('username').value.trim().toLowerCase();
            const resultDiv = document.getElementById('result');
            if (!input) {
                resultDiv.textContent = 'Please enter a name.';
                return;
            }
            const results = users.filter(u => u.name.toLowerCase().includes(input));
            resultDiv.textContent =
                results.length > 0 ? results.map(userToString).join('\n') : 'No users found';
        });
    }
    const usernameInput = document.getElementById('username');
    if (usernameInput) {
        usernameInput.addEventListener('input', (e) => {
            const inputVal = usernameInput.value.trim().toLowerCase();
            const autocompleteDiv = document.getElementById('autocomplete-result');
            if (inputVal.length < 3) {
                autocompleteDiv.textContent = '';
                return;
            }
            const matches = users.filter(u => u.name.toLowerCase().includes(inputVal));
            autocompleteDiv.textContent =
                matches.length > 0 ? matches.map(userToString).join('\n') : '';
        });
    }
}));
export {};
