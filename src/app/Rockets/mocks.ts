const totalCount = 40;

export const mock = {
  data: {
    rocketsResult: {
      data: [...Array(5)].map((_, id) => ({
        id,
        name: `Rocket ${id}`
      })),
      result: { totalCount }
    }
  },
  error: false
};
