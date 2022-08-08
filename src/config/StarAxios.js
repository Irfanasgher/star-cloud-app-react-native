import axios from 'axios';
import Helpers from '../utils/Helpers';


let config = async () => {
    let token = await Helpers.getData('token');
    return {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Accept': "application/json",
            'Content-Type': "application/json"
        }
    }
};
export const handleErrors=(e) =>{
    //Helpers.showToast({message:'show toast message', duration: 10000});
    //console.log('i am in Handle error');
    const message = "Something went wrong. Please try Again Later";
    if(e.response.data.errors){
        if(e.response.data.errors.email){
            Helpers.showToastMessage(e.response.data.errors.email[0])
        }else if(e.response.data.errors.password){
            Helpers.showToastMessage(e.response.data.errors.password[0])
        }else if(e.response.data.errors.phone){
            Helpers.showToastMessage("Phone Number Already Exist")
        } else if(e.response.data.errors.shipping_method) {
            Helpers.showToastMessage(e.response.data.errors.shipping_method[0])
        } else if(e.response.data.errors.warehouse) {
            console.log('I am in Warehouse error');
            Helpers.showToastMessage(e.response.data.errors.warehouse[0])
        }
        else {
            Helpers.showToastMessage(message)
        }
    }
    else if(e.response.data.message){
        Helpers.showToastMessage(e.response.data.message)
    }
    else if(e.response.status === 400){
        Helpers.showToastMessage(e.response.data.message[0])
    } else {
        Helpers.showToastMessage(message)
        // Notify.error(message, 2000)
    }
}

export default {
    get: async url => {
        try{
            return await axios.get(url, await config())
        }
        catch(e){
            const message = "There is something wrong. Please try Again Later";
            Helpers.showToastMessage(message);
            return {e}
        }
    },
    post: async (url,data) => {
        try{
            let res = await axios.post(url, data, await config());
            return res;
        }
        catch(e){
            //const message = "There is something wrong. Please try Again Later";
            //Helpers.showToastMessage(message);
            handleErrors(e);
            return {e}
        }
    }
}




