const ROUTES = {
  HOME: "/",
  SIGN_IN: "/sign-in",
  SIGN_UP: "/sign-up",
  PROFILE: (id: string) => `/question/${id}`,
  TAG: (id: string) => `/tag/${id}`,
};

export default ROUTES;
