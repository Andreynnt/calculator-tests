export const minusTests = [
    {
        first: '2',
        second: '5',
        answer: '-3'
    },
    {
        first: '100',
        second: '100',
        answer: '0'
    },
    {
        first: '0',
        second: '0',
        answer: '0'
    },
    {
        first: '134',
        second: '35',
        answer: '99'
    }
];

export const plusTests = [
    {
        first: '2',
        second: '5',
        answer: '7'
    },
    {
        first: '0',
        second: '0',
        answer: '0'
    },
    {
        first: '13',
        second: '1000',
        answer: '1013'
    },
    {
        first: '999',
        second: '0',
        answer: '999'
    },
    {
        first: '2099',
        second: '8001',
        answer: '10100'
    }
];

export const multiplyTests = [
    {
        first: '2',
        second: '5',
        answer: '10'
    },
    {
        first: '31',
        second: '10000',
        answer: '310000'
    },
    {
        first: '999',
        second: '0',
        answer: '0'
    },
    {
        first: '0',
        second: '0',
        answer: '0'
    },
    {
        first: '136',
        second: '72',
        answer: '9792'
    }
];

export const divisionTests = [
    {
        first: '100',
        second: '5',
        answer: '20'
    },
    {
        first: '33',
        second: '33',
        answer: '1'
    },
    {
        first: '134',
        second: '25',
        answer: '5.36'
    },
    {
        first: '150000',
        second: '30000',
        answer: '5'
    },
    {
        first: '6',
        second: '-1000',
        answer: '-0.006'
    }
];

export const divisionByZeroTests = [
    {
        first: '100',
        second: '0',
        answer: 'Error'
    },
    {
        first: '-30.35',
        second: '0',
        answer: 'Error'
    },
    {
        first: '0',
        second: '0',
        answer: 'Error'
    }
];

export const percentTests = [
    {
        first: '100',
        answer: '1'
    },
    {
        first: '0.3',
        answer: '0.003'
    },
    {
        first: '-99999',
        answer: '-999.99'
    },
    {
        first: '0',
        answer: '0'
    }
];

export const plusMinusTests = [
    {
        first: '8.123',
        answer: '-8.123'
    },
    {
        first: '500',
        answer: '-500'
    },
    {
        first: '-9000',
        answer: '9000'
    }
];

export const twoOperationsTests = [
    {
        first: '5',
        second: '100',
        third: '105',
        answer: '210'
    }
];