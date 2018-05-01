let jokes = [];
id=0;


module.exports ={
    create: ( req, res ) => {
        const { text } = req.body;
        jokes.push({ id, text });
        id++;
        res.status(200).send( jokes );
        console.log(jokes);
      },
    
      read: ( req, res ) => {
        res.status(200).send( jokes );
        console.log(jokes);
      },
    
      update: ( req, res ) => {
        const { text } = req.body;
        const updateID = req.params.id;
        const jokeIndex = jokes.findIndex( joke => joke.id == updateID );
    
        jokes[ jokeIndex ] = {
          id: joke.id,
          text: text || joke.text,
        };
    
        res.status(200).send( jokes );
        console.log(jokes);
      },
    
      delete: ( req, res ) => {
        jokes=[];
        res.status(200).send( jokes );
        console.log(jokes);///my app deletes all at once. do i need all of this? 
      }
    };