import express from 'express'

const viewsRouter = express.Router();

viewsRouter.get('/',(req,res)=>{
    let testUser = {
        name: 'Felipe',
        last_name: 'Boz'
    }
    //metodo usado para responder el renderizado de la plantilla:
    //(nombre de la plantilla, objeto para reemplazar en ella)
    res.render('index',{
    user:testUser,
    }
    );
})

export default viewsRouter;