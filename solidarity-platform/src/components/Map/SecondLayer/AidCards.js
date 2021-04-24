import React, { useMemo, useState } from 'react'
import { Button, Form, FormControl } from 'react-bootstrap'
import AidCard from '../ThirdLayer/AidCard';
import aidData from '../../aidData';
import { FixedSizeList as List } from 'react-window';

export const AidCards = () => {
    const memo = useMemo(
        () => (

            <List
                className="List"
                height={700}
                itemCount={aidData.length}
                itemSize={200}
                width={400}
            >
                {
                    ({ index, style }) => (
                        <div className={index % 2 ? 'ListItemOdd' : 'ListItemEven'} style={style}>
                            {<AidCard aid={aidData[index]} />}
                        </div>
                    )
                }
            </List>
        )
    )
    return memo
}