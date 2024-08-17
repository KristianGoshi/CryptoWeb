import React from 'react';
import DataTable from 'react-data-table-component';
import { generateColumnsFromData } from '../utils/generateColumnsFromData';

interface TableProps {
  data: Array<{ [key: string]: any }>;
  handleRowClick?: (row: { [key: string]: any }) => void;
}

const Table: React.FC<TableProps> = ({ data, handleRowClick }) => {
  const tableColumns = generateColumnsFromData(data);

  const customStyles = {
    headCells: {
      style: {
        fontSize: 16,
        fontWeight: 'bold'
      },
    },
  };

  return (
    <DataTable
      columns={tableColumns}
      data={data}
      onRowClicked={handleRowClick}
      customStyles={customStyles}
      striped
      pagination
    />
  );
};

export default Table;
