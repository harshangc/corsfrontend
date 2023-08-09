const basePath = 'http://localhost';
const base = {
    baseUrl: basePath + '',
    personUrl: basePath + ':8081',
};

export const environment = {
    name: 'environment',
    personUrl: base.personUrl + '/person'
};