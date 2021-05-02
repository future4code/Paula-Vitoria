export const goToFeedPage = (history) => {
  history.push("/feed");
};

export const goToDetailsPost = (history, id) => {
  history.push(`/post/${id}`);
};

export const goToRegisterPage = (history) => {
  history.push("/register");
};

export const goToLastPage = (history) => {
  history.goBack();
};

export const goToLoginPage = (history) => {
  history.push("/");
};
