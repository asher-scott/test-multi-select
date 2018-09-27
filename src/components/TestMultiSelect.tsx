import * as React from 'react';
import MultiSelect from '@kenshooui/react-multi-select';

const data = [
    {
        id: 1,
        label: 'Item 1'
    },
    {
        id: 2,
        label: 'Item 2'
    },
    {
        id: 3, 
        label: 'Item 3'
    }
];

export default class TestMultiSelect extends React.Component {
    render() {
        return (
            <div>
                <MultiSelect 
                    items={data}
                    selectedItems={data.slice(1,2)}
                />
            </div>
        );
    }
}