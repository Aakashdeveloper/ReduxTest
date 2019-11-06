import React from 'react';
import LatestNews from '../component/home/LatestNews';
import {create} from 'react-test-renderer';

describe('LatestNews Component Snapshot', () => {
    test("LatestNews",() => {
        let tree = create(<LatestNews/>);
        expect(tree.toJSON()).toMatchSnapshot();
    })
})
