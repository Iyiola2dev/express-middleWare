import express from "express";

const app = express()
const PORT = 3004
app.use(express.json())

app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})

const personOBJ = {
    name: "Daniel",
    username: "Lexicon",
    age: "100",
    password: "GoUPMan",
    email: "lexicon@gmail.com"
}

//middleware tp validate user
const validateUser = (req, res, next) =>{
    const myPasscode = "lexicon"
    const {password} = req.headers
    if(password === myPasscode){
        next()
    }else{
        res.status(401).json({message: "Unauthorised"})
    }
}

app.get('/person' , validateUser, (req, res)=>{
    res.status(200).json(personOBJ);
    
})

