
export const users = search => {
    const list = (search && search.edges ? search.edges : []).map(
      ({ node }, index) =>
        node
          ? {
              ...node,
              id: `${index}`,
              username: node.login,
              image: node.avatarUrl,
              reposNumber: node.repositories.totalCount
            }
          : {}
    );
    return list;
  };