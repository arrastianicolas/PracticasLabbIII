const Table = ({ netIncomes }) => {
  const tableMapped = netIncomes.map((company, index) => (
    <tr key={index}>
      <td>{company.brand}</td>
      <td>{company.income}</td>
    </tr>
  ));
  const totalIncome = netIncomes.reduce(
    (acc, income) => acc + income.income,
    0
  );
  const average = totalIncome / netIncomes.length;
  return (
    <>
      <table>
        <tr>
          <th>Nombre Compañia:</th>
          <th>Ingresos Brutos:</th>
        </tr>
        {tableMapped}
      </table>
      <p>Promedio de Ingresos Brutos: {average.toFixed(2)}</p>
    </>
  );
};

export default Table;
