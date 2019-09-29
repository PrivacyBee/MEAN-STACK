// given a number return it in U.S change...

users = [
    {
      fname: "Kermit",
      lname: "the Frog",
      languages: ["Python", "JavaScript", "C#", "HTML", "CSS", "SQL"],
      interests: {
        music: ["guitar", "flute"],
        dance: ["tap", "salsa"],
        television: ["Black Mirror", "Stranger Things"]
      }
    },
    {
      fname: "Winnie",
      lname: "the Pooh",
      languages: ["Python", "Swift", "Java"],
      interests: {
        food: ["honey", "honeycomb"],
        flowers: ["honeysuckle"],
        mysteries: ["Heffalumps"]
      }
    },
    {
      fname: "Arthur",
      lname: "Dent",
      languages: ["JavaScript", "HTML", "Go"],
      interests: {
        space: ["stars", "planets", "improbability"],
        home: ["tea", "yellow bulldozers"]
      }
    }
  ]

  Object.prototype.flattenObj = function(){
     var obj = this 
     return  Object.keys(obj)
     .map(x => obj[x])
     .reduce( (acc, cur) => acc.concat(cur), [] )
     .reduce( (acc, cur) => acc + ', ' + cur, '')
  }

  var userLanguagesInterests = function(users){
      var s = ''
      users.forEach(x => {
            var languages = x.languages.reduce( (acc, cur) => acc + ', ' + cur, '')
            var interests = x.interests.flattenObj()
            s += x.fname + ' ' + x.lname + " "+'Knows ' + languages + '\n' +  x.fname + ' Is also interested in ' + interests + '\n'
      })

      return s 
  }


  var Result = userLanguagesInterests(users)
  console.log(Result)