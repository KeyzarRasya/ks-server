function configure(envirovment){
    let BASE_URI = '';
    let PORT = envirovment.PORT || 3001;
    let MONGO = ''
    if(envirovment.ENVIROVMENT === "development"){
        MONGO = envirovment.MONGO_URI_LOCAL;
        BASE_URI = `http://localhost:${PORT}/`;
    }else if(envirovment === "production"){
        MONGO = envirovment.MONGO_URI_ATLAS;
        BASE_URI = `http://localhost:${PORT}/`;
    }
    return {BASE_URI, PORT, MONGO};
}

module.exports = {configure};