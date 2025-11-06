const log = console.log

function greedyBastard()
{
  return { x: "family", y: "friends" }
}

log(typeof greedyBastard)

type SomeType = ReturnType<typeof greedyBastard>; 

const _someVal = { x: "meekness", y: "peace" };

function david(_whoisthisguy: SomeType)
{
  return _whoisthisguy
}

log(david(_someVal))

const actions = { LOGOUT: "logout", LOGIN: "login", REGISTER: "register" }

log(typeof actions)
