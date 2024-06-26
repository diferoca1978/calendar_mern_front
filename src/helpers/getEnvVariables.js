export const getEnvVariables = () => {
  import.meta.env; //* This is the way to obtain the ENV in vite

  return {
    ...import.meta.env,
  };
};
