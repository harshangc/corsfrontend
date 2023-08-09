const basePath = 'http://localhost';
const base = {
    baseUrl: basePath + '',
    personUrl: basePath + ':80',
};

export const environment = {
    name: 'environment',
    personUrl: base.personUrl + '/person'
};