export const formatResult = (data) => data.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
