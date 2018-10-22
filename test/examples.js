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
    },
    {
        first: '1999',
        second: '2000',
        answer: '-1'
    },
    {
        first: '640',
        second: '700',
        answer: '-60'
    },
    {
        first: '100000',
        second: '90000',
        answer: '10000'
    },
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
        first: '6',
        second: '1',
        answer: '7'
    },
    {
        first: '24',
        second: '29',
        answer: '53'
    },
    {
        first: '2000',
        second: '8000',
        answer: '10000'
    },
];

export const multiplyTests = [
    {
        first: '2',
        second: '5',
        answer: '10'
    },
    {
        first: '5',
        second: '100',
        answer: '500'
    },
    {
        first: '31',
        second: '100',
        answer: '3100'
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
        first: '24',
        second: '1',
        answer: '24'
    },
    {
        first: '136',
        second: '72',
        answer: '9792'
    },
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
        first: '15000',
        second: '3000',
        answer: '5'
    },
    {
        first: '6',
        second: '1000',
        answer: '0.006'
    },
    {
        first: '24',
        second: '1',
        answer: '24'
    },
    {
        first: '2000',
        second: '8000',
        answer: '0.25'
    },
];

export const divisionByZeroTests = [
    {
        first: '100',
        second: '0',
        answer: 'Error'
    },
    {
        first: '30',
        second: '0',
        answer: 'Error'
    },
    {
        first: '99999',
        second: '0',
        answer: 'Error'
    },
    {
        first: '0',
        second: '0',
        answer: 'Error'
    },
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
        first: '99999',
        answer: '999.99'
    },
    {
        first: '0',
        answer: '0'
    },
];

export const plusMinusTests = [
    {
        first: '8.123',
        answer: '-8.123'
    },
    {
        first: '0.3',
        answer: '-0.3'
    },
    {
        first: '-9000',
        answer: '9000'
    },
];

export const twoOperationsTests = [
    {
        first: '5',
        second: '100',
        third: '105',
        answer: '210'
    }
];