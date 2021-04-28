export const formatResult = (data: any) =>
  data.docs.map((doc: any) => ({
    id: doc.id,
    ...doc.data(),
  }));
