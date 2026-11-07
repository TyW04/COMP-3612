/* add code below this */
const companies = JSON.parse(companyData);

function AcctCalculations(company) {
    this.company = company;
    console.log(this.company.website);
    this.marketCap50 = () => {
        let mktCap50 = this.company.stats.day50MovingAvg * this.company.stats.sharesOutstanding;
        return currency(mktCap50);
    };

    this.marketCap200 = () => {
        let mktCap200 = this.company.stats.day200MovingAvg * this.company.stats.sharesOutstanding;
        return currency(mktCap200);
    };

    this.netRevenue = () => {
        let netRev = this.company.stats.operatingRevenue - this.company.stats.costOfRevenue; 
        return currency(netRev);
    };

    this.shareholderEquity = () => {
        let shEquity = this.company.stats.totalAssets - this.company.stats.totalLiabilities; 
        return currency(shEquity); 
    };

    this.day50 = () => {
        let movingAvg = this.company.stats.day50MovingAvg;
        return currency(movingAvg); 
    };

    this.day200 = () => {
        let movingAvg = this.company.stats.day200MovingAvg; 
        return currency(movingAvg);
    };

    const currency = function(num) {
        return new Intl.NumberFormat(
            'en-us',
            {style: 'currency', currency: 'USD'}).format(num);
    };
}

function outputCard(company) {
    const companyCalc = new AcctCalculations(company);
    this.outputTag = () => {
        for (let tag of company.tags) {
            document.write(`
                <small>${tag}</small>
                `);
        }
    };

    document.write(`
        <article class="card">
            <h2>${company.symbol} - ${company.companyName}</h2>
            <div>
                <p>Share Price (50day avg): <span>${companyCalc.day50()}</span></p>
                <p>Share Price (200day avg): <span>${companyCalc.day200()}</span></p>
                <p>Market Cap (50day avg): <span>${companyCalc.marketCap50()}</span></p>
                <p>Market Cap (200day avg): <span>${companyCalc.marketCap200()}</span></p>
                <p>Net Revenue: <span>${companyCalc.netRevenue()}</span></p>
                <p>Shareholder Equity: <span>${companyCalc.shareholderEquity()}</span></p>
            </div>
            <footer>
                <script>this.outputTag()</script>
            </footer>
        </article>
        `);
}

function outputAllCompanies() {
    for (let company of companies) {
        outputCard(company);
    }
}