import React, { ReactNode } from "react";
import { isFirst } from "@/utils/ArrayUtils";

type TableProps = {
    header?: (ReactNode)[] | (ReactNode),
    data: (ReactNode)[][],
    className?: string
}

export default function Table(props: TableProps) {
    const amountOfColumns = Math.max(...props.data.map(row => row.length));
    const headerClassName = 'px-1 font-normal';

    return (
        <table className={props.className}>
            {
                props.header &&
                <thead>
                <tr className={'text-left align-bottom'}>
                    {
                        Array.isArray(props.header)
                            ? props.header.filter(e => e != undefined).map((columnHeader, i) => <th key={i} className={headerClassName}>{columnHeader}</th>)
                            : <th colSpan={amountOfColumns} className={headerClassName}>{props.header}</th>
                    }
                </tr>
                </thead>
            }
            <tbody>
            {
                props.data
                    .filter(row => row != undefined)
                    .filter(row => row.length != 0)
                    .map(
                        (row, rowIndex) => (
                            <tr key={rowIndex}
                                className={
                                    !(isFirst(rowIndex) && props.header == undefined)
                                        ? isFirst(rowIndex) ? 'border-t border-zinc-400 dark:border-zinc-500' : 'border-t border-tile'
                                        : ''
                                }
                            >
                                {
                                    row
                                        .filter(column => column != undefined)
                                        .map(
                                            (column, columnIndex) => (
                                                <td key={columnIndex} className={`px-1 ${isFirst(rowIndex) ? 'pt-0.5' : ''}`}>
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
