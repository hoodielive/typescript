interface IEmailable 
{
  name: string,
  email: string,
}

function sendEmail(value: IEmailable): void
{
  console.log(value);
}

sendEmail({name: "Toluwalase", email: "something@email.com"});

class Company
{
  constructor(self,)
}
