module.exports = app => {
    const save = (req, res) => {
        res.send('User save')
    }

    return { save }
}