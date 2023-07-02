class Currency{
    constructor(){
        this.url = "https://api.freecurrencyapi.com/v1/latest?apikey=aOsBLkE0qm7qvNXatYwuxkK3To8gfy4wrkEm3AXN&base_currency=";
    }

   async exchange(amount ,firtsMoney , secondMoney){
    const response = await fetch(`${this.url}${firtsMoney}`)
    const result = await response.json()
    const excganceResult =  result.data[secondMoney] * amount;

    return excganceResult;
    }
}