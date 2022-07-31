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

export const getLatestPosts = async () => {
  return await fetch(`${SERVER_URL}/api/posts/latest-posts`, {
    method: "GET",
    credentials: "include",
  });
};

export const getAllPosts = async (search, category, page) => {
  return await fetch(
    `${SERVER_URL}/api/posts/browse-posts?page=${page}&category=${category}&search=${search}`,
    {
      method: "GET",
      credentials: "include",
    }
  );
};

export const postNewPost = async (postData) => {
  return await fetch(`${SERVER_URL}/api/posts/create-new`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postData),
  });
};

export const postDetail = async (postId) => {
  return await fetch(`${SERVER_URL}/api/posts/detail/${postId}`, {
    method: "GET",
    credentials: "include",
  });
};

// comments

export const postNewComment = async (postId, newComment) => {
  return await fetch(`${SERVER_URL}/api/posts/detail/${postId}/new-comment`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text: newComment }),
  });
};

export const postEditComment = async (commentId, newComment) => {
  return await fetch(`${SERVER_URL}/api/posts/detail/edit-comment/${commentId}`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text: newComment }),
  });
};

export const deleteComment = async (postId, commentId) => {
  return await fetch(`${SERVER_URL}/api/posts/detail/${postId}/remove-comment/${commentId}`, {
    method: "DELETE",
    credentials: "include",
  });
};

export const getLikeComment = async (commentId) => {
  return await fetch(`${SERVER_URL}/api/posts/detail/like-comment/${commentId}`, {
    method: "GET",
    credentials: "include",
  });
};

export const getBookmarkPost = async (postId) => {
  return await fetch(`${SERVER_URL}/api/posts/bookmark/${postId}`, {
    method: "GET",
    credentials: "include",
  });
};

export const getAllBookmarks = async (currentPage) => {
  return await fetch(`${SERVER_URL}/api/posts/my-bookmarks?page=${currentPage}`, {
    method: "GET",
    credentials: "include",
  });
};

//user

export const getUserProfileDetails = async (userId) => {
  return await fetch(`${SERVER_URL}/api/user-detail/${userId}`, {
    method: "GET",
    credentials: "include",
  });
};

// { currentPassword, newPassword }
export const postResetPassword = async (userId, data) => {
  return await fetch(`${SERVER_URL}/api/user-detail/reset-password/${userId}`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};

// { socials: { facebook: "asdas", twitter: "adas", linkedin: "asdasas" } }
export const postSetSocial = async (userId, data) => {
  return await fetch(`${SERVER_URL}/api/user-detail/set-social/${userId}`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};
