const situation = {
  IN_PROGRESS: "Em Andamento",
  FINISHED: "Finalizada",
};

export const consultancySituation = (key) => {
  return situation[key];
};
