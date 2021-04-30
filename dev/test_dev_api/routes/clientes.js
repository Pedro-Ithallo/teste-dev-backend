const  express = require('express')
const router = express.Router()
const user = require('../models/user')

router.get('/', async (req, res)=>{
    try {
        const clientes = await user.find()
        res.json(user)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

router.get('/:id', (req, res)=>{
    res.json(res.user)
})

router.post('/', async (req, res)=>{
    const user = new User ({
      clientName: req.body.clientName,
      birthDate: req.body.birthDate,
      gender: req.body.gender,
      helathProblem: req.body.helathProblem,
      healthProblemGrade: req.body.healthProblemGrade,
      creationDate: req.body.creationDate,
      lastUpdate: req.body.lastUpdate
    })

        try {
       const newUser = await user.save()
       res.status(201).json(newUser)
        }  catch (error) {
       res.status(400).json({message: error.message})
   }
})


router.patch('/:id', async (req, res)=>{
    if(req.body.userName != null){
        res.user.userName = req.body.userName
     }
    if(req.body.birthDate != null){
       res.user.birthDate = req.body.birthDate
    }
    if(req.body.gender != null){
       res.user.gender = req.body.gender
    }
    if(req.body.helathProblem != null){
       res.user.helathProblem = req.body.helathProblem
    }
    if(req.body.healthProblemGrade != null){
       res.user.healthProblemGrade = req.body.healthProblemGrade
    }
    if(req.body.creationDate != null){
       res.user.creationDate = req.body.creationDate
    }
    if(req.body.lastAttDate != null){
       res.user.lastAttDate = req.body.lastAttDate
    }
    try {
       const updateUser = await res.user.save()
       res.json(updateUsere)
    } catch (error) {
       res.status(400).json({message: error.message})
    }
 })

router.delete('/', async (req, res)=>{
    try {
        await res.user.remove()
        res.json({message: 'User was deleted!'})
     } catch (error) {
       return res.status(500).json({message: error.message})
     }
})

async function getUser (req, res, next){
    try {
      user = await User.findById(req.params.id)
       if(user == null){
          return res.status(404).json({message: "User not found!"})
       }
    } catch (error) {
       return res.status(500).json({message: error.message})
    }
 
    res.user = user
    next()
 }



 router.get('/clientes ', async (req, res)=>{
   try {
       const clientes = await healthProblemGrade.find()
      var score = res.json((score == 1 / (1 + Math.exp-(-2.8 + healthProblemGrade ))) * 100 )
      console.log(score)
   } catch (error) {
       res.status(500).json({message: error.message})
   }
})

 

 
module.exports = router