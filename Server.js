const express = require('express');
const mongoose = require('mongoose');
const Product = require('./Model/model.product.js');
const app = express();


app.use(express.json());



app.get('/',(req,res) =>{
    res.send("Hello update node api");
});
app.get('/api/products' ,async (req,res) =>{
  try {
    const product = await Product.find({ product});
    res.status(200).json({product});
  } catch (error) {
    res.status(500).json({message:error.message});
    
  }
});

app.get('/api/product/:id', async(req,res) =>{
  try {
    const { id } = req.params;
    const product = await Product.findByid(product);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({message:error.message})
  }
})
app.post('/api/products', async (req, res) => {
  try {
    const product = await Product.create(req.body); 
    res.status(200).json({ product });
    //console.log(req.body); 
  } catch (error) {
    res.status(500).json({ message: error.message });

    //console.log(req.body); 
  }
});

//update a product
app.put('/api/product/:id', async (req,res) =>{
  try {
    const { id } = req.params;

    await Product.findByid(id,req.body);

    if(!product) {
      return res.status(404).json({message: "Product not found"});
    }

    const updateProduct = await Product.findByid(id);

    res.status(200).json(updateProduct);
  } catch (error) {
    res.status(500).json({message:error.message});
  }
});

//dalete a product

app.delete('/api/pruct/:id', async(req,res) => {
  try {
    const {id} = req.params;

     const product = await Product.findByid(id);
     if(!product){
      return res.status(404).json({message: "Product not found"});
     }

     res.status(200).json({message: "Product deleted not found"});
  } catch (error) {
    res.status(500).json({message: error.message});
  }
})

mongoose.connect('mongodb+srv://siphosethunikelo:9pPpOtA0a2i1ikXF@expressbackend.ucjnc.mongodb.net/Node-API?retryWrites=true&w=majority&appName=ExpressBackend')

  .then(() => {
    console.log('Connected to database');
    app.listen(3000,()=>{
      console.log('Server started on port 3000');
  });
  })
  .catch(() => {
    console.log('Connection failed!');  
  });
  


