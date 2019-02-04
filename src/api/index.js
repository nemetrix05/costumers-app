// Aqui hacemos la consulta al api rest
// () => () Esto quiere decir que devuelve una funcion que a su vez retorna la consulta al api.
export const apiGet = (url) => () => fetch(url).then(v => v.json());