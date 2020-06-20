const sql = require("mssql/msnodesqlv8");


const pool = new sql.ConnectionPool({
    server: '.',
    database: 'APIDatabase',
    driver: "msnodesqlv8",
    options: {
        trustedConnection:true
    }
});
pool.connect().then(a => {
    console.log(a.connected); 
}).catch(a => {
    console.log(a);
});