const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://dhirajisme123:mern123@cluster0.iqpynwd.mongodb.net/khanacom2?retryWrites=true&w=majority"

const mongoDB = async() =>{
    
    try{

        await mongoose.connect(mongoURI);
        console.log("connected")
        const fetched_data = await mongoose.connection.db.collection("food_items");
        const foodCategory = await mongoose.connection.db.collection("food_category");
        // console.log(fetched_data)

        let data = await fetched_data.find({}).toArray();
        let category_data = await foodCategory.find({}).toArray();
        // console.log(data);

        global.foodCategory = category_data;
        global.food_items = data;
        console.log(global.food_items)

        // fetched_data.find({}).toArray(function(err,data){
        //     if(err) {
        //         console.log("------->",err);
        //     }
        //      else {
        //         console.log(data);
        //     }
                
        // })
    }
    catch(error){
        console.log("error is " , error);
    }
}

// const Cat = mongoose.model('Cat', { name: String });

// const kitty = new Cat({ name: 'Zildjian' });
// kitty.save().then(() => console.log('meow'));

module.exports = mongoDB;