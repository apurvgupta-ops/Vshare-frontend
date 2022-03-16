export const userQuery = (userId) => {
  const query = `*[ _type == 'user' && userId == '${userId}']`;
  return query;
};
