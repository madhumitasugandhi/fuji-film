const getHome = (req, res)=>{
    res.status(200).json({
        message: "Welcome to Fuji-Film API"
    });
}

const getHealth = (req, res)=>{
    res.status(200).json({
        message: "Server is running..."
    });
}

const getNotFound = (req, res) => {
    res.status(404).json({ message: 'API endpoint not found' });
}

export{
    getHome,
    getHealth,
    getNotFound
}