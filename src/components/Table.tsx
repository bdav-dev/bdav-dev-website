import React from "react";
import { isFirst } from "@/utils/ArrayUtils";

type TableProps = {
    header?: (string | React.ReactNode)[] | (string | React.ReactNode),
    data: (string | React.ReactNode)[][],
    className?: string
}

export default function Table(props: TableProps) {
    const amountOfColumns = Math.max(...props.data.map(row => row.length));
    const headerClassName = 'px-0.5 font-normal text-lg';

    return (
        <table className={props.className}>
            {
                props.header &&
                <thead>
                <tr className={'text-left align-bottom'}>
                    {
                        Array.isArray(props.header)
                            ? props.header.map((columnHeader, i) => <th key={i} className={headerClassName}>{columnHeader}</th>)
                            : <th colSpan={amountOfColumns} className={headerClassName}>{props.header}</th>
                    }
                </tr>
                </thead>
            }
            <tbody>
            {
                props.data
                    .filter(row => row.length != 0)
                    .map(
                        (row, rowIndex) => (
                            <tr key={rowIndex}
                                className={
                                    !(isFirst(rowIndex) && props.header == undefined)
                                        ? isFirst(rowIndex)
                                            ? 'border-t border-zinc-500 dark:border-zinc-400'
                                            : 'border-t border-zinc-300 dark:border-zinc-800'
                                        : ''
                                }
                            >
                                {
                                    row.map(
                                        (column, columnIndex) => (
                                            <td key={columnIndex} className={`px-1 ${isFirst(rowIndex) ? 'pt-1' : ''}`}>
                                                {column}
                                            </td>
                                        )
                                    )
                                }
                            </tr>
                        )
                    )
            }
            </tbody>
        </table>
    );
}
