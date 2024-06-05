const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://shraddhaprajapati1809:test@cluster0.nezm76e.mongodb.net/Taskdb?retryWrites=true&w=majority&appName=Cluster0',{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log('mongoDB Connected')
}).catch((err)=>{
    console.log(err);
});


