import express from 'express'

const app = express()

app.get('/about', (req, res) => {
  res.status(200).send('Index Sayfası')
})
app.get('/contact', (req, res) => {
  res.status(200).send('Contact Sayfası')
})
app.get('/', (req, res) => {
  res.status(200).send(' Sayfası')
})

app.get('*all',(req,res)=>{
    res.status(404).send('Sayfa Bulunamadı 404')
})

const port=3000;
app.listen(port, () => {
  console.log('Server is running on http://localhost:3000')
})