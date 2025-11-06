type Person = { name: string }
type Option = { debugMode?: boolean }

function printName(_person: Person ) : string
{
  return _person.name
}

const _c = printName({name: "Holla"})


// Void
function _printName2(name: string) : void 
{
    return
}

// Option ? 
function _printNameAndAge(name: string, { debugMode = false}: Option = {})
{
  console.log(name, debugMode)
}

_printNameAndAge("Safari")

