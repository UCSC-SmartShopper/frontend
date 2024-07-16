import { create } from "zustand";

interface Credentials {
  email: string;
  password: string;
}

interface User {
  username: string;
  role: string;
  password?: string;
}

interface AuthStore {
  user: User | null;
  login: (formData: Credentials) => User | null;
  logout: () => void;
}

const usersList: { [key: string]: User } = {
  "admin@gmail.com": { password: "123456", username: "admin", role: "admin" },
  "consumer@gmail.com": {
    password: "123456",
    username: "consumer",
    role: "consumer",
  },
};

const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  login: (formData: Credentials) => {
    if (!usersList[formData.email]) return null;
    if (usersList[formData.email].password !== formData.password)
      return {} as User;
    set(() => ({ user: usersList[formData.email] }));
    return usersList[formData.email];
  },
  logout: () => set(() => ({ user: null })),
}));

export default useAuthStore;
