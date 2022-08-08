
// const baseUrl = "https://dopelin.thehexaa.com/";
const baseUrl = "http://192.168.10.9:4000/";

export default {
    server_url : 'http://192.168.10.9:4000',
    server_api : baseUrl+"api/",
    createUrl : value => baseUrl+"api/"+value,
    resourceUrl: value => baseUrl+value,
}
