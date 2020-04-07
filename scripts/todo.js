"use strict";
//Description:
//  This bot could manage Todo Lists.
//Commands:
//  BotName todo            -- add todo
//  BotName done            -- make todo 'complete'
//  BotName del               -- delete todo
//  BotName list               -- refer todo lIst
//  BotName donelist       -- refer todo list of 'complete'

{
  const todo = require("todo");

  console.log(todo.list());
  module.exports = robot => {
    robot.respond(/todo (.+)/i, msg => {
      const task = msg.match[1].trim();
      todo.todo(task);
      msg.send("added :" + task);
    });
    robot.respond(/done (.+)/i, msg => {
      const task = msg.match[1].trim();
      todo.done(task);
      msg.send("made 'complete' :" + task);
    });
    robot.respond(/del (.+)/i, msg => {
      const task = msg.match[1].trim();
      todo.del(task);
      msg.send("deleted :" + task);
    });
    robot.respond(/list/i, msg => {
      const list = todo.list();
      if (list.length == 0) {
        msg.send("It has no tasks");
      } else {
        msg.send(list.join("\n"));
      }
    });
    robot.respond(/donelist/i, msg => {
      const donelist = todo.donelist();
      if (donelist.length == 0) {
        msg.send("It has no donetasks");
      } else {
        msg.send(donelist.join("\n"));
      }
    });
  };
}
