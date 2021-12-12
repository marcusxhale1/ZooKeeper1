const app = express();

app.get('./api/animials', (req, res) => {
    res.send('Hello')
});
app.listen(3001, () => {
    console.log(`API server now on port 3001!`);
  });

  const { animals } = require('./data/animals.json')