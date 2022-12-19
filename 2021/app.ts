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

class Company implements IEmailable
{
  name: string;
  email: string;
  
  constructor(companyName: string, emailAddress: string)
  {
    this.name = companyName;
    this.email = emailAddress;
  }
}

let treehouse = new Company("TreeHouse", "tolu@tolu.com");
sendEmail(treehouse);


let CompanyTwo = (function () {
  function CompanyTwo(companyName: string, emailAddress: string) 
  {
    this.name = companyName;
    this.email =  emailAddress;
  }
  return CompanyTwo;
})();
