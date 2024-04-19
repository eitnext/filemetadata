exports.getFile = (req, res) => {
    const { originalname: name, mimetype: type, size } = req.file

    res.status(200).json({
       name,
       type,
       size
    })
    
}