exports.users = ( req , res ) => {
  res.json({
    users: [
      {
        name: "Ryan" ,
        age: 30
      },
      {
        name: "farid" ,
        age: 18
      }
    ]
  })
} ;
