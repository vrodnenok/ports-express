exports.render = function(req, res){
  console.log(req.body);
  if (req.session.lastVisit){
    console.log(req.session.lastVisit);
  }

  req.session.lastVisit = new Date();

  var thistime = Date(); 
  res.render('index', {title:"Ports application by Vic Rodnoy", user: req.user});
};