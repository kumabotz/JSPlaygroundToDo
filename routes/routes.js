exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.about = function(req, res){
  res.render('index', { title: 'About' });
};

exports.todo = function(req, res){
  res.render('todo', { title: 'New Todo List' });
};