
export const buildSLR = (x = 0, ages = [], scores = []) => {
   return  getBeta0(ages.length, scores, ages) + getBeta1(ages.length, scores, ages) * x;
};

const getBeta1 = (n = 0, x = [], y = []) => {
    const xy   = getXY(x, y);
    const xSum = getSum(x);
    const ySum = getSum(y);
    const xSqr = getXSqr(x);

    return (n * xy - xSum * ySum) / (n * xSqr - Math.pow(xSum, 2));
};

const getBeta0 = (n = 0, x = [], y = []) => {
    const xSum  = getSum(x);
    const ySum  = getSum(y);
    const beta1 = getBeta1(n, x, y);

    return (ySum - beta1 * xSum) / n;
}

const getSum = (data = []) => {
    let sum = 0;
    for (let i=0;i<data.length;i++) {
        sum = sum + data[i];
    }

    return sum;
}

const getXSqr = (x = []) => {
    let xSqr = 0;
    for(let i=0;i <x.length;i++){
        xSqr = xSqr + Math.pow(x[i], 2);
    }
    return xSqr;
}

const getXY = (x = [], y = []) => {
    let xy = 0;
    const array = [];

    for(let i=0;i<x.length;i++){
        array.push(x[i] * y[i]);
    }

    for(let i=0;i<x.length;i++){
        xy = xy + array[i];
    }
    return xy;
}
