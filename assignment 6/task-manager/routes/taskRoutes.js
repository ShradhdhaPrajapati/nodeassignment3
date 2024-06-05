const express = require('express');
const router = express.Router();
const Task = require('../model/task');

// create task

router.post('/', async(req,res) =>{
    const { title , description } = req.body;
    try {
        const newTask = new Task({ title , description });
        const task = await newTask.save();
        res.json(task);
    } catch (error) {
        res.status(500).json({ msg: err.msg})
    }
});

router.get('/' , async(req,res)=>{
    try {
        const tasks = await Task.find();
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ msg: err.message });
    }
});

router.get('/:id' , async(req,res)=>{
    try {
        const task = await Task.findById(req.params.id);
        if(!task){
            return res.status(404).json({ msg: 'Task not Found'});
             
        }
        res.json(task);
    } catch (error) {
        res.status(500),json({ msg: error.msg});
    }
});



router.put('/:id', async(req,res)=>{
    try {
        const { title, description, status } = req.body;
        const task = await Task.findByIdAndUpdate(
            req.params.id,
            {
                title, description , status
            },

            {
                new: true
            }
        );

        if(!task){
            return res.status(404).json({ msg: 'task not found'});

        }
        res.json(task);
    } catch (error) {
        res.status(500).json({ msg: error.msg });
    }
});


router.delete('/:id' , async(req, res)=>{
    try {
        const task = await Task.findByIdAndDelete(req.params.id);
        if(!task){
            return res.status(404).json({msg : 'Task Not Found'})
        }
        res.json({ msg: 'Task Deleted'});
    } catch (error) {
        res.status(500).json({ msg: error.msg })
    }
});

router.patch('/:id', async (req, res) => {
    try {
        const updatedFields = req.body;
        const task = await Task.findByIdAndUpdate(req.params.id, updatedFields, { new: true });
        if (!task) return res.status(404).json({ message: 'Task not found' });
        res.json(task);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;