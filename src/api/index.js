// Aqui hacemos la consulta al api rest
// () => () Esto quiere decir que devuelve una funcion que a su vez retorna la consulta al api.
export const apiGet = (url) => () => fetch(url).then(v => v.json());
// Con esta accion actualizamos el usuario en el servidor recibe la url el id obligatorio y los datos en un objeto
export const apiPut = (url, id, obj) => () =>
        // Recibe el fetch el la url y la id de cliente como parametro
        fetch(`${url}/${id}`, {
            // Aqui definimos los headers para hacer el cambio de usuario
            method:     'PUT',
            body:       JSON.stringify(obj),
            headers:    new Headers({ 'Content-type': 'application/json' })
        }).then(v => v.json()).then(r => {
            if (r.error) {
                const e = new Error();
                      e.error = r.error;
                      e.payload = r.validation;
                return Promise.reject(e);
            }
            return r;
            // Con esta promise validamos del lado del servidor que los datos enviados esten correctos
        });


// Creamos la accion de POST

export const apiPost = (url, obj) => () =>
        fetch(`${url}`, {
            method:     'POST',
            body:       JSON.stringify(obj),
            headers:    new Headers({ 'Content-type': 'application/json' })
        }).then(v => v.json()).then(r => {
            if (r.error) {
                const e = new Error();
                      e.error = r.error;
                      e.payload = r.validation;
                return Promise.reject(e);
            }
            return r;
        });


// Creamos el fetch para la eliminacion de un usuario

export const apiDelete = (url, id) => () =>
        fetch(`${url}/${id}`, {
            method:     'DELETE',
            headers:    new Headers({ 'Content-type': 'application/json' })
        }).then(v => v.json()).then(r => {
            if (r.error) {
                const e = new Error();
                      e.error = r.error;
                      e.payload = r.validation;
                return Promise.reject(e);
            }
            // Solo necesitamos el id para manejarlo en el reducer
            return id;
        });