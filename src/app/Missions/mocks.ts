const totalCount = 40;

export const mock = {
  data: {
    missionsResult: {
      data: [...Array(5)].map((_, id) => ({
        id,
        name: `Mission ${id}`
      })),
      result: { totalCount }
    }
  },
  error: false
};
