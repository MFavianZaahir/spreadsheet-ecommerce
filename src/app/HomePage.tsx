import { fetchSheetData } from "./api/sheet";

async function ProductTable() {
    try {
        const response = await fetchSheetData();
        const data = response.props.items;

        return (
            <div className="p-4">
                <h1 className="text-xl font-bold mb-4">Product Table</h1>
                <table className="w-full border-collapse border border-gray-300">
                    <thead>
                        <tr className="bg-gray-200">
                            {data[0]?.map((header: string, index: number) => (
                                <th key={index} className="border border-gray-300 p-2">
                                    {header}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {data.slice(1).map((row, rowIndex) => (
                            <tr key={rowIndex} className="hover:bg-gray-100">
                                {row.map((cell: string, cellIndex: number) => (
                                    <td key={cellIndex} className="border border-gray-300 p-2">
                                        {cell || "-"}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    } catch (error) {
        return <p>Error: {error.message}</p>;
    }
}

export default ProductTable;