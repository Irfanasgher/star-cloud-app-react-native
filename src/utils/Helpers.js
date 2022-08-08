import AsyncStorage from '@react-native-community/async-storage';
import Toast from 'react-native-root-toast';

const storeData = async (key,value) => {
    try {
        await AsyncStorage.setItem(key, value)
    } catch (e) {
        console.log("store error is here", e);
        // saving error
    }
};
const getData = async (key) => {
    try {
        const value = await AsyncStorage.getItem(key);
        return value
    } catch(e) {
        console.log("data get error", e);
        // error reading value
    }
};

const login = async (token, user) => {
    await storeData("token", token);
    await storeData("user", JSON.stringify(user));
};


const logout = async()=>{
    await storeData("token", "");
    await storeData("user", "");
};

const getUser = async()=>{
    return JSON.parse(await getData("user"));
};

const setUser = async(user)=>{
    await storeData("user", JSON.stringify(user));
};


const showToast =  (toast) =>{
    // When Calling this function
    // call it this way: Helpers.showToast({message: "hello", hide: ()=>{alert("hello")}})
    // If you only want to show message call Helpers.showToastMessage("my message")

    const message  = toast.message;
    const position = toast.position || "TOP";
    const duration = toast.duration || 5000;
    const show     = toast.show     || undefined;
    const shown    = toast.shown    || undefined;
    const hide     = toast.hide     || undefined;
    const hidden   = toast.hidden || undefined;

    if(message!== undefined)
        Toast.show(message, {
            duration: duration,
            position: Toast.positions[position],
            shadow: true,
            animation: true,
            hideOnPress: true,
            delay: 0,
            onShow: () => {
                if(typeof show === "function") show();
            },
            onShown: () => {
                // calls on toast\`s appear animation end.
                if(typeof shown === "function") shown();
            },
            onHide: () => {
                // calls on toast\`s hide animation start.
                if(typeof hide === "function") hide();
            },
            onHidden: () => {
                // calls on toast\`s hide animation end.
                if(typeof hidden === "function") hidden();
            }
        });
};

const showToastMessage = message => {
    showToast({message})};

export default {
    storeData,
    getData,
    showToast,
    showToastMessage,
    login,
    logout,
    getUser,
    setUser,
}
