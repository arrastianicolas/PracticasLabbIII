const Table = ({ netIncomes }) => {
  const tableMapped = netIncomes.map((company, index) => (
    <tbody key={index}>
      <tr>
        <th>Nombre Compañia:</th>
        <th>Ingresos Brutos:</th>
      </tr>
      <tr>
        <td>{company.brand}</td>
        <td>{company.income}</td>
      </tr>
    </tbody>
  ));
  const totalIncome = netIncomes.reduce(
    (acc, income) => acc + income.income,
    0
  );
  const average = totalIncome / netIncomes.length;
  return (
    <>
      <table>{tableMapped}</table>
      <p>Promedio de Ingresos Brutos: {average.toFixed(2)}</p>
    </>
  );
};

export default Table;
