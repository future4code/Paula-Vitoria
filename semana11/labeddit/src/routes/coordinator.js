export const goToFeedPage = (history) => {
  history.push("/feed");
};

export const goToPostsPage = (history) => {
  history.push("/posts");
};

export const goToRegisterPage = (history) => {
  history.push("/register");
};

export const goToLastPage = (history) => {
  history.goBack();
};
