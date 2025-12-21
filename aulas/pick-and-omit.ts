// Pick<Type, Keys>   and    Omit<Type, Keys>
// Pegar<Tipo, Chaves>  e    Omitir<tipo, Chaves>

interface User {
  id: string;
  firstName: string;
  lastName: string;
  profileImageUrl: string;
  email: string;
  isOnline: boolean;
  phoneNumber?: string;
}

//Pick:
type UserPreview = Pick<User, "firstName" | "lastName" | "profileImageUrl">;

const user: UserPreview = {
  firstName: "Jhon",
  lastName: "Doe",
  profileImageUrl: "www.example.com/jhondoe",
};

//Omit:

type UserForm = Omit<User, "id" | "isOnline">;

const userForm: UserForm = {
  firstName: "Wslei",
  lastName: "vst",
  profileImageUrl: "www.example.com/wesleivst",
  email: "weslei@weslei.com",
  phoneNumber: "3333333",
};
