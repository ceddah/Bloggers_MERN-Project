import { SERVER_URL } from "../constants/routes";

export const signUp = async (formData) => {
  return await fetch(`${SERVER_URL}/api/auth/sign-up`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });
};

export const signIn = async (formData) => {
  return await fetch(`${SERVER_URL}/api/auth/sign-in`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });
};

export const fetchCurrentUser = async () => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (!user) return null;

  return await fetch(`${SERVER_URL}/api/auth/me`, {
    method: "GET",
    credentials: "include",
  });
};

export const signOut = async () => {
  return await fetch(`${SERVER_URL}/api/auth/sign-out`, {
    method: "GET",
    credentials: "include",
  });
};
