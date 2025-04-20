import { Table } from "antd";

const TableComp = ({ data, searchBook, bookType }:any) => {
  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
      render: (text:any) => <div style={{ textAlign: 'center' }}>{text}</div>,
      filteredValue: [searchBook],
      onFilter: (value:any, record:any) => {
        return String(record.title).toLowerCase().includes(value.toLowerCase())
      }
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
      filteredValue: bookType ? [bookType] : null,
      onFilter: (value: string, record: any) => record.type === value,
      render: (text:any) => <div style={{ textAlign: 'center' }}>{text}</div>,
    },
    {
      title: 'File',
      dataIndex: 'file',
      key: 'file',
      render: (text:any) => <div style={{ textAlign: 'center' }}>{text}</div>,
    },
  ];

  return (
    <>
      <Table
        columns={columns}
        dataSource={data}
        pagination={{ pageSize: 5 }} 
        components={{
          header: {
            cell: (props:any) => (
              <th
                {...props}
                style={{ 
                  backgroundColor: '#003366', 
                  color: '#d2e8e3', 
                  fontWeight: 'bold', 
                  textAlign: 'center', 
                  ...props.style,
                }}
              />
            ),
          },
        }}
      />
    </>
  )
}

export default TableComp;