const mongoose = require ('mongoose');

const main = async () =>{ 
    await mongoose.connect("mongodb://localhost:27017/e-comme");
    const PS = new mongoose.Schema({
        name:String
    });
    const PsM = mongoose.model('products-m' , PS);
    let data = new PsM({name:"m8",price:'800'});
        let result = await data.save();
    console.log(result)
}
main()