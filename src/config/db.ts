import mongoose from 'mongoose';
import _default from './default';
//mongodb+srv://<username>:<password>@9voltz.xsksiqp.mongodb.net/?retryWrites=true&w=majority

async function startDB(){
    const url = `mongodb+srv://${_default.dbUser}:${_default.dbPass}@9voltz.xsksiqp.mongodb.net/pedals?retryWrites=true&w=majority`

    try {
        await mongoose.connect(url);
        console.log("Connected at mongoDB");
    } catch (error) {
        console.log('Erro na conexão com o MongoDB');
    }
}

export default startDB;